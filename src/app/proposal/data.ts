export interface Proposal {
  id: string;
  title: string;
  abstract: string;
  institution: string;
  funding: number;
  duration: number;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
  votes: {
    upvotes: number;
    downvotes: number;
  };
}

// Dados mockados para propostas científicas
export const mockProposals: Proposal[] = [
  {
    id: "1",
    title:
      "Desenvolvimento de vacinas de mRNA para doenças tropicais negligenciadas",
    abstract:
      "Este projeto visa aplicar a tecnologia de mRNA, que revolucionou o combate à COVID-19, no desenvolvimento de vacinas para doenças tropicais negligenciadas como dengue, zika e chikungunya.",
    institution: "Universidade Federal do Rio de Janeiro",
    funding: 25.5,
    duration: 24,
    status: "pending",
    createdAt: "2024-06-10T14:30:00Z",
    votes: {
      upvotes: 45,
      downvotes: 5,
    },
  },
  {
    id: "2",
    title:
      "Algoritmos quânticos para otimização de rotas logísticas sustentáveis",
    abstract:
      "Esta pesquisa investiga como algoritmos de computação quântica podem otimizar rotas logísticas para reduzir emissões de carbono e consumo de combustível em cadeias de suprimentos globais.",
    institution: "Universidade de São Paulo",
    funding: 18.2,
    duration: 18,
    status: "approved",
    createdAt: "2024-05-15T09:45:00Z",
    votes: {
      upvotes: 72,
      downvotes: 8,
    },
  },
  {
    id: "3",
    title: "Bioimpressão 3D de tecidos cardíacos para testes farmacológicos",
    abstract:
      "Desenvolvimento de técnicas de bioimpressão 3D para criar tecidos cardíacos funcionais que podem ser utilizados no teste de medicamentos, reduzindo a necessidade de testes em animais.",
    institution: "Universidade Estadual de Campinas",
    funding: 32.7,
    duration: 36,
    status: "pending",
    createdAt: "2024-06-01T11:20:00Z",
    votes: {
      upvotes: 38,
      downvotes: 12,
    },
  },
  {
    id: "4",
    title:
      "Materiais sustentáveis derivados de resíduos agrícolas para construção civil",
    abstract:
      "Pesquisa sobre o desenvolvimento de materiais de construção ecológicos e de baixo custo a partir de resíduos agrícolas como palha de arroz, bagaço de cana e cascas de coco.",
    institution: "Universidade Federal de Minas Gerais",
    funding: 15.9,
    duration: 24,
    status: "rejected",
    createdAt: "2024-04-20T16:15:00Z",
    votes: {
      upvotes: 25,
      downvotes: 32,
    },
  },
  {
    id: "5",
    title: "Inteligência artificial para previsão precoce de pandemias",
    abstract:
      "Desenvolvimento de sistemas de IA que analisam dados epidemiológicos, mobilidade humana e fatores ambientais para prever e alertar sobre surtos de doenças infecciosas antes que se tornem pandemias.",
    institution: "Fundação Oswaldo Cruz",
    funding: 28.4,
    duration: 30,
    status: "approved",
    createdAt: "2024-05-05T13:10:00Z",
    votes: {
      upvotes: 89,
      downvotes: 7,
    },
  },
  {
    id: "6",
    title:
      "Células solares de perovskita para geração de energia em ambientes de baixa luminosidade",
    abstract:
      "Pesquisa focada no desenvolvimento de células solares baseadas em perovskita otimizadas para captar energia em condições de pouca luz, para uso em ambientes internos e dispositivos IoT.",
    institution: "Universidade Federal do ABC",
    funding: 22.1,
    duration: 24,
    status: "pending",
    createdAt: "2024-06-08T10:30:00Z",
    votes: {
      upvotes: 41,
      downvotes: 9,
    },
  },
];

// Função para obter todas as propostas
export const getAllProposals = (): Promise<Proposal[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProposals);
    }, 500); // Simula um delay de rede
  });
};

// Função para obter uma proposta por ID
export const getProposalById = (id: string): Promise<Proposal | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const proposal = mockProposals.find((p) => p.id === id);
      resolve(proposal);
    }, 300);
  });
};

// Função para votar em uma proposta
export const voteOnProposal = (
  id: string,
  voteType: "upvote" | "downvote"
): Promise<Proposal | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const proposalIndex = mockProposals.findIndex((p) => p.id === id);
      if (proposalIndex === -1) {
        resolve(undefined);
        return;
      }

      const proposal = { ...mockProposals[proposalIndex] };
      if (voteType === "upvote") {
        proposal.votes.upvotes += 1;
      } else {
        proposal.votes.downvotes += 1;
      }

      mockProposals[proposalIndex] = proposal;
      resolve(proposal);
    }, 300);
  });
};
