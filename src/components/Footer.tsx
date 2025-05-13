export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">ScientiveDAO</h2>
            <p className="text-sm mt-2 text-gray-400">
              Financiamento científico descentralizado
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/scientiveDAO"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} ScientiveDAO. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
