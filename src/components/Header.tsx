"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            ScientiveDAO
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/#saiba-mais"
              className="hover:text-indigo-200 transition-colors"
            >
              Como Funciona
            </Link>
            <Link
              href="/#beneficios"
              className="hover:text-indigo-200 transition-colors"
            >
              Benefícios
            </Link>
            <Link
              href="/register"
              className="hover:text-indigo-200 transition-colors"
            >
              Submeter Proposta
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-indigo-800">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/#saiba-mais"
                className="hover:text-indigo-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Como Funciona
              </Link>
              <Link
                href="/#beneficios"
                className="hover:text-indigo-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefícios
              </Link>
              <Link
                href="/register"
                className="hover:text-indigo-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Submeter Proposta
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
