import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function PoliticaDeCookiesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1 container mx-auto py-24 px-4">
        <h1 className="text-4xl font-bold text-primary mb-8">Política de Cookies</h1>
        <div className="prose prose-invert max-w-none space-y-4 text-neutral-300">
          <p>
            Conteúdo da política de cookies...
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
