"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ProposalFiltersProps {
  onFilterChange: (filters: {
    status: string;
    searchTerm: string;
    sortBy: string;
  }) => void;
}

export default function ProposalFilters({
  onFilterChange,
}: ProposalFiltersProps) {
  const [status, setStatus] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("recent");

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
    onFilterChange({ status: newStatus, searchTerm, sortBy });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onFilterChange({ status, searchTerm: e.target.value, sortBy });
  };

  const handleSortChange = (newSortBy: string) => {
    setSortBy(newSortBy);
    onFilterChange({ status, searchTerm, sortBy: newSortBy });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={status === "all" ? "default" : "outline"}
            onClick={() => handleStatusChange("all")}
            size="sm"
          >
            Todas
          </Button>
          <Button
            variant={status === "pending" ? "default" : "outline"}
            onClick={() => handleStatusChange("pending")}
            size="sm"
          >
            Pendentes
          </Button>
          <Button
            variant={status === "approved" ? "default" : "outline"}
            onClick={() => handleStatusChange("approved")}
            size="sm"
          >
            Aprovadas
          </Button>
          <Button
            variant={status === "rejected" ? "default" : "outline"}
            onClick={() => handleStatusChange("rejected")}
            size="sm"
          >
            Rejeitadas
          </Button>
        </div>

        <div className="w-full md:w-72">
          <Input
            type="text"
            placeholder="Buscar proposta..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full"
          />
        </div>
      </div>

      <div className="mt-4">
        <div className="flex flex-col sm:flex-row sm:justify-end sm:items-center">
          <span className="text-gray-500 text-sm mb-2 sm:mb-0 sm:mr-2">
            Ordenar por:
          </span>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="ghost"
              size="sm"
              className={
                sortBy === "recent" ? "font-medium text-indigo-700" : ""
              }
              onClick={() => handleSortChange("recent")}
            >
              Mais Recentes
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={
                sortBy === "votes" ? "font-medium text-indigo-700" : ""
              }
              onClick={() => handleSortChange("votes")}
            >
              Mais Votadas
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={
                sortBy === "funding" ? "font-medium text-indigo-700" : ""
              }
              onClick={() => handleSortChange("funding")}
            >
              Maior Financiamento
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
