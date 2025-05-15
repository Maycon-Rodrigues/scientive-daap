"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Register() {
  const [step, setStep] = useState(1);

  const formVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:h-full">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12 max-w-3xl lg:h-screen">
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 m:min-h-[800px]"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
        >
          <h1 className="text-3xl font-bold text-center mb-8">
            Submeter Proposta Científica
          </h1>

          {/* Progress Steps */}
          <div className="flex justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>

            <motion.div
              className="flex flex-col items-center relative z-10"
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  step >= 1
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                1
              </div>
              <span className="text-sm">Verificação</span>
            </motion.div>

            <motion.div
              className="flex flex-col items-center relative z-10"
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  step >= 2
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                2
              </div>
              <span className="text-sm">Detalhes</span>
            </motion.div>

            <motion.div
              className="flex flex-col items-center relative z-10"
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  step >= 3
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                3
              </div>
              <span className="text-sm">Submissão</span>
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            {/* Step 1: Verificação via ZK */}
            {step === 1 && (
              <motion.div
                className="space-y-6"
                key="step1"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={formVariants}
              >
                <motion.div
                  className="rounded-lg bg-indigo-50 p-4 border border-indigo-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-lg font-semibold text-indigo-800 mb-2">
                    Verificação Anônima
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Para preservar seu anonimato, utilizamos provas de
                    conhecimento-zero (ZK) para verificar seu vínculo
                    institucional sem revelar sua identidade.
                  </p>
                  <p className="text-sm text-indigo-700">
                    Suas credenciais são processadas localmente e apenas a prova
                    criptográfica é enviada.
                  </p>
                </motion.div>

                <div className="space-y-4">
                  <motion.div variants={fadeInUpVariants} custom={1}>
                    <Label htmlFor="institution">Instituição</Label>
                    <Input
                      id="institution"
                      placeholder="Nome da instituição acadêmica"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUpVariants} custom={2}>
                    <Label htmlFor="email">Email Institucional</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu.email@instituicao.edu"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUpVariants} custom={3}>
                    <Label htmlFor="credential">Credencial Institucional</Label>
                    <Input id="credential" type="file" />
                    <p className="text-xs text-gray-500 mt-1">
                      Documento que comprove seu vínculo (carta, declaração,
                      contrato, etc.)
                    </p>
                  </motion.div>
                </div>

                <div className="flex justify-end mt-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button onClick={() => setStep(2)}>Próximo</Button>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Detalhes da Proposta */}
            {step === 2 && (
              <motion.div
                className="space-y-6"
                key="step2"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={formVariants}
              >
                <div className="space-y-4">
                  <motion.div variants={fadeInUpVariants} custom={1}>
                    <Label htmlFor="title">Título da Pesquisa</Label>
                    <Input
                      id="title"
                      placeholder="Título da sua proposta científica"
                    />
                  </motion.div>

                  <motion.div variants={fadeInUpVariants} custom={2}>
                    <Label htmlFor="abstract">Resumo</Label>
                    <textarea
                      id="abstract"
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      rows={5}
                      placeholder="Descreva brevemente sua pesquisa e objetivos"
                    ></textarea>
                  </motion.div>

                  <motion.div variants={fadeInUpVariants} custom={3}>
                    <Label htmlFor="funding">
                      Financiamento Solicitado (ETH)
                    </Label>
                    <Input id="funding" type="number" placeholder="0.00" />
                  </motion.div>

                  <motion.div variants={fadeInUpVariants} custom={4}>
                    <Label htmlFor="duration">Duração do Projeto (meses)</Label>
                    <Input id="duration" type="number" placeholder="12" />
                  </motion.div>

                  <motion.div variants={fadeInUpVariants} custom={5}>
                    <Label htmlFor="proposal">Proposta Detalhada</Label>
                    <Input id="proposal" type="file" />
                    <p className="text-xs text-gray-500 mt-1">
                      PDF com metodologia, cronograma, resultados esperados e
                      orçamento detalhado
                    </p>
                  </motion.div>
                </div>

                <div className="flex justify-between mt-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" onClick={() => setStep(1)}>
                      Voltar
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button onClick={() => setStep(3)}>Próximo</Button>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Confirmação e Submissão */}
            {step === 3 && (
              <motion.div
                className="space-y-6"
                key="step3"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={formVariants}
              >
                <motion.div
                  className="rounded-lg bg-gray-50 p-6 space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-lg font-semibold">Resumo da Submissão</h3>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Instituição:</span>
                      <p>Universidade de Exemplo</p>
                    </div>

                    <div>
                      <span className="text-gray-500">Verificação:</span>
                      <p className="text-green-600">Completa (ZK)</p>
                    </div>

                    <div>
                      <span className="text-gray-500">Título:</span>
                      <p>Título da Pesquisa</p>
                    </div>

                    <div>
                      <span className="text-gray-500">Financiamento:</span>
                      <p>2.5 ETH</p>
                    </div>

                    <div>
                      <span className="text-gray-500">Duração:</span>
                      <p>12 meses</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="rounded-lg bg-indigo-50 p-4 border border-indigo-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="font-semibold mb-2">
                    Informações Importantes
                  </h3>
                  <ul className="text-sm space-y-2">
                    <motion.li
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-indigo-700 mr-2 flex-shrink-0 mt-0.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      Sua identidade permanecerá anônima durante todo o processo
                      de avaliação.
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-indigo-700 mr-2 flex-shrink-0 mt-0.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      A submissão ficará disponível para votação da comunidade
                      por 14 dias.
                    </motion.li>
                    <motion.li
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-indigo-700 mr-2 flex-shrink-0 mt-0.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      Propostas aprovadas receberão financiamento diretamente na
                      carteira especificada.
                    </motion.li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Label className="flex items-center space-x-2">
                    <Input type="checkbox" className="w-4 h-4" />
                    <span>
                      Confirmo que todas as informações são verdadeiras e estou
                      ciente das regras da ScientiveDAO.
                    </span>
                  </Label>
                </motion.div>

                <div className="flex justify-between mt-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" onClick={() => setStep(2)}>
                      Voltar
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button>Submeter Proposta</Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
