import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Toaster } from "@/components/ui/sonner";
import { WhatsappButton } from "@/components/site/whatsapp-button";


function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar para a Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado. Tente novamente ou volte para a home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Ir para a home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hub Data — ganhe dinheiro gravando vídeos em casa: R$ 30/h no PIX" },
      {
        name: "description",
        content:
          "Renda extra em casa gravando tarefas do dia a dia com o celular: até R$ 30 por hora aprovada, saque via PIX e cadastro grátis na Hub Data.",
      },
      { name: "author", content: "Hub Data" },
      { property: "og:site_name", content: "Hub Data" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#22c55e" },
      { property: "og:title", content: "Hub Data — ganhe dinheiro gravando vídeos em casa: R$ 30/h no PIX" },
      { name: "twitter:title", content: "Hub Data — ganhe dinheiro gravando vídeos em casa: R$ 30/h no PIX" },
      { property: "og:description", content: "Renda extra em casa gravando tarefas do dia a dia com o celular: até R$ 30 por hora aprovada, saque via PIX e cadastro grátis na Hub Data." },
      { name: "twitter:description", content: "Renda extra em casa gravando tarefas do dia a dia com o celular: até R$ 30 por hora aprovada, saque via PIX e cadastro grátis na Hub Data." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6238667e-35af-42ae-99cb-38d532aa1c38/id-preview-50765500--195aa66d-9691-4731-b081-fe3d8d1601ac.lovable.app-1785236367138.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6238667e-35af-42ae-99cb-38d532aa1c38/id-preview-50765500--195aa66d-9691-4731-b081-fe3d8d1601ac.lovable.app-1785236367138.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Hub Data",
          alternateName: ["Hub", "Hub Video"],
          url: "https://hubdata.org/",
          description:
            "Plataforma que paga por vídeos: colaboradores gravam tarefas do dia a dia com o celular e recebem até R$ 30 por hora aprovada via PIX, treinando inteligência artificial.",
          address: [
            { "@type": "PostalAddress", addressLocality: "São Francisco", addressCountry: "US" },
            { "@type": "PostalAddress", addressLocality: "São Paulo", addressCountry: "BR" },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="grid-backdrop flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
        <WhatsappButton />
        <Toaster />

      </div>
    </QueryClientProvider>
  );
}
