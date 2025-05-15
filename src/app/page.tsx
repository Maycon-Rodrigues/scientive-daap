"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedHero from "@/components/AnimatedHero";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const fadeInUpVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section Animada */}
      <AnimatedHero />

      {/* Como Funciona */}
      <section id="saiba-mais" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Como Funciona
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainerVariants}
          >
            <motion.div
              className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300"
              variants={fadeInUpVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-indigo-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Privacidade Garantida
              </h3>
              <p className="text-gray-600">
                Pesquisadores comprovam seu vínculo com instituições através de
                provas de conhecimento-zero, mantendo sua identidade protegida.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300"
              variants={fadeInUpVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-indigo-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Governança Comunitária
              </h3>
              <p className="text-gray-600">
                A comunidade avalia e vota nas propostas científicas, decidindo
                democraticamente quais projetos receberão financiamento.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300"
              variants={fadeInUpVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-indigo-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Financiamento On-Chain
              </h3>
              <p className="text-gray-600">
                Os fundos são distribuídos de forma transparente e verificável
                através da blockchain, garantindo rastreabilidade e confiança.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Por Que Escolher a ScientiveDAO
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainerVariants}
          >
            <motion.div
              className="flex space-x-4"
              variants={fadeInUpVariants}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <div className="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Anonimato Preservado
                </h3>
                <p className="text-gray-600">
                  Pesquisadores podem submeter propostas sem revelar sua
                  identidade, evitando vieses ou discriminação.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex space-x-4"
              variants={fadeInUpVariants}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <div className="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.25 2.25m-15 0 2.25-2.25m0 0c2.333.858 4.79 1.359 7.5 1.359s5.167-.5 7.5-1.359m-15 0V8.25m0 0 15 .001V8.25"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Tomada de Decisão Inclusiva
                </h3>
                <p className="text-gray-600">
                  A comunidade decide quais projetos serão financiados através
                  de votação democrática e transparente.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex space-x-4"
              variants={fadeInUpVariants}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <div className="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Acesso Rápido a Recursos
                </h3>
                <p className="text-gray-600">
                  Financiamento imediato via blockchain após a aprovação,
                  eliminando burocracias e intermediários.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex space-x-4"
              variants={fadeInUpVariants}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <div className="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-indigo-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Credenciais Verificáveis
                </h3>
                <p className="text-gray-600">
                  Provas criptográficas de afiliação institucional garantem a
                  credibilidade dos pesquisadores sem expor suas identidades.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Pronto para revolucionar o financiamento científico?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
              Junte-se à ScientiveDAO e seja parte de uma nova era para a
              ciência - transparente, descentralizada e acessível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-indigo-900 hover:bg-gray-200 hover:text-indigo-900"
                >
                  <Link href="/register/researcher">Submeter Proposta</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-indigo-900 border-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="#saiba-mais">Entrar na Comunidade</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
