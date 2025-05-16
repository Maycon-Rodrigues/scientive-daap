"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Proposal, voteOnProposal } from "@/app/proposal/data";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

interface ProposalCardProps {
  proposal: Proposal;
  onVote?: (proposal: Proposal) => void;
}

export default function ProposalCard({ proposal, onVote }: ProposalCardProps) {
  const [currentProposal, setCurrentProposal] = useState<Proposal>(proposal);
  const [isVoting, setIsVoting] = useState(false);

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

  const handleVote = async (voteType: "upvote" | "downvote") => {
    setIsVoting(true);
    try {
      const updatedProposal = await voteOnProposal(
        currentProposal.id,
        voteType
      );
      if (updatedProposal) {
        setCurrentProposal(updatedProposal);
        if (onVote) onVote(updatedProposal);
      }
    } catch (error) {
      console.error("Erro ao votar:", error);
    } finally {
      setIsVoting(false);
    }
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              statusColors[currentProposal.status]
            }`}
          >
            {statusLabels[currentProposal.status]}
          </span>
          <span className="text-sm text-gray-500">
            {formatDate(currentProposal.createdAt)}
          </span>
        </div>

        <Link href={`/proposal/${currentProposal.id}`} className="group">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors">
            {currentProposal.title}
          </h3>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
          {currentProposal.abstract}
        </p>

        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
          <div>
            <span className="text-gray-500">Instituição:</span>
            <p
              className="font-medium truncate"
              title={currentProposal.institution}
            >
              {currentProposal.institution}
            </p>
          </div>
          <div>
            <span className="text-gray-500">Financiamento:</span>
            <p className="font-medium">{currentProposal.funding} ETH</p>
          </div>
          <div>
            <span className="text-gray-500">Duração:</span>
            <p className="font-medium">{currentProposal.duration} meses</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="space-x-1 text-green-600 border-green-200 hover:bg-green-50"
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
              >
                <path d="m19 14-7-7-7 7" />
              </svg>
              <span>{currentProposal.votes.upvotes}</span>
            </Button>
          </div>

          <Link href={`/proposal/${currentProposal.id}`}>
            <Button variant="ghost" size="sm">
              Ver Detalhes
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
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
