"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Proposal, getProposalById, voteOnProposal } from "../data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default function ProposalDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [proposal, setProposal] = useState<Proposal | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isVoting, setIsVoting] = useState(false);

  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  useEffect(() => {
    const fetchProposal = async () => {
      try {
        setIsLoading(true);
        const data = await getProposalById(id);
        if (!data) {
          setError("Proposta não encontrada");
          return;
        }
        setProposal(data);
        setError(null);
      } catch (err) {
        setError("Erro ao carregar proposta. Por favor, tente novamente.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchProposal();
    }
  }, [id]);

  const handleVote = async (voteType: "upvote" | "downvote") => {
    if (!proposal) return;

    setIsVoting(true);
    try {
      const updatedProposal = await voteOnProposal(proposal.id, voteType);
      if (updatedProposal) {
        setProposal(updatedProposal);
      }
    } catch (error) {
      console.error("Erro ao votar:", error);
    } finally {
      setIsVoting(false);
    }
  };

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    approved: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
  };

  const statusLabels = {
    pending: "Pendente",
    approved: "Aprovada",
    rejected: "Rejeitada",
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-700"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !proposal) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {error || "Proposta não encontrada"}
            </h2>
            <p className="text-gray-600 mb-6">
              Não foi possível encontrar a proposta solicitada.
            </p>
            <Button asChild>
              <Link href="/proposal/list">Voltar para Listagem</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-8">
            <div className="mb-6">
              <Button
                variant="ghost"
                size="sm"
                className="mb-4"
                onClick={() => router.push("/proposal/list")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M19 12H5" />
                  <path d="M12 19l-7-7 7-7" />
                </svg>
                Voltar para Listagem
              </Button>

              <div className="flex justify-between items-center mb-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    statusColors[proposal.status]
                  }`}
                >
                  {statusLabels[proposal.status]}
                </span>
                <span className="text-sm text-gray-500">
                  Submetida em {formatDate(proposal.createdAt)}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {proposal.title}
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm text-gray-500 mb-1">Instituição</h3>
                  <p className="font-medium">{proposal.institution}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm text-gray-500 mb-1">Financiamento</h3>
                  <p className="font-medium">{proposal.funding} ETH</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm text-gray-500 mb-1">Duração</h3>
                  <p className="font-medium">{proposal.duration} meses</p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Resumo
                </h2>
                <p className="text-gray-700 whitespace-pre-line">
                  {proposal.abstract}
                </p>
              </div>

              <div className="border-t border-gray-100 pt-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-600"
                      >
                        <path d="m19 14-7-7-7 7" />
                      </svg>
                      <span className="font-medium">
                        {proposal.votes.upvotes} votos
                      </span>
                    </div>
                    {/* <div className="flex space-x-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-red-600"
                      >
                        <path d="m5 10 7 7 7-7" />
                      </svg>
                      <span className="font-medium">
                        {proposal.votes.downvotes}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      (Saldo:{" "}
                      {proposal.votes.upvotes - proposal.votes.downvotes})
                    </span>
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-green-600 border-green-200 hover:bg-green-50"
                      disabled={isVoting}
                      onClick={() => handleVote("upvote")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <path d="m19 14-7-7-7 7" />
                      </svg>
                      Aprovar
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-600 border-red-200 hover:bg-red-50"
                      disabled={isVoting}
                      onClick={() => handleVote("downvote")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <path d="m5 10 7 7 7-7" />
                      </svg>
                      Rejeitar
                    </Button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
