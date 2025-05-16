"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Proposal, getAllProposals } from "../data";
import ProposalCard from "@/components/ProposalCard";
import ProposalFilters from "@/components/ProposalFilters";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProposalListPage() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [filteredProposals, setFilteredProposals] = useState<Proposal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    status: "all",
    searchTerm: "",
    sortBy: "recent",
  });

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        setIsLoading(true);
        const data = await getAllProposals();
        setProposals(data);
        setFilteredProposals(data);
        setError(null);
      } catch (err) {
        setError("Erro ao carregar propostas. Por favor, tente novamente.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProposals();
  }, []);

  useEffect(() => {
    // Aplica filtros às propostas
    let result = [...proposals];

    // Filtro por status
    if (filters.status !== "all") {
      result = result.filter((proposal) => proposal.status === filters.status);
    }

    // Filtro por termo de busca
    if (filters.searchTerm) {
      const searchTermLower = filters.searchTerm.toLowerCase();
      result = result.filter(
        (proposal) =>
          proposal.title.toLowerCase().includes(searchTermLower) ||
          proposal.abstract.toLowerCase().includes(searchTermLower) ||
          proposal.institution.toLowerCase().includes(searchTermLower)
      );
    }

    // Ordenação
    if (filters.sortBy === "recent") {
      result.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    } else if (filters.sortBy === "votes") {
      result.sort(
        (a, b) =>
          b.votes.upvotes -
          b.votes.downvotes -
          (a.votes.upvotes - a.votes.downvotes)
      );
    } else if (filters.sortBy === "funding") {
      result.sort((a, b) => b.funding - a.funding);
    }

    setFilteredProposals(result);
  }, [filters, proposals]);

  const handleFilterChange = (newFilters: {
    status: string;
    searchTerm: string;
    sortBy: string;
  }) => {
    setFilters(newFilters);
  };

  const handleProposalUpdate = (updatedProposal: Proposal) => {
    // Atualiza a proposta na lista original
    const updatedProposals = proposals.map((p) =>
      p.id === updatedProposal.id ? updatedProposal : p
    );
    setProposals(updatedProposals);
  };

  // Variantes de animação para o stagger
  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Propostas Científicas
          </h1>
          <Button asChild>
            <Link href="/register/researcher">Submeter Proposta</Link>
          </Button>
        </div>

        <ProposalFilters onFilterChange={handleFilterChange} />

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-700"></div>
          </div>
        ) : error ? (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center">
            {error}
          </div>
        ) : filteredProposals.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Nenhuma proposta encontrada
            </h3>
            <p className="text-gray-600 mb-6">
              Não encontramos propostas com os filtros selecionados.
            </p>
            <Button
              variant="outline"
              onClick={() =>
                setFilters({ status: "all", searchTerm: "", sortBy: "recent" })
              }
            >
              Limpar Filtros
            </Button>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProposals.map((proposal) => (
              <motion.div key={proposal.id} variants={itemVariants}>
                <ProposalCard
                  proposal={proposal}
                  onVote={handleProposalUpdate}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
}
