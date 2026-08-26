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
import { SmoothScroll } from "../components/site/SmoothScroll";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-offwhite px-6">
      <div className="max-w-xl text-center">
        <Link to="/" className="inline-block mb-10">
          <img src="/logos/Logo Charcoal.svg" alt="Formline Joinery" className="h-6 md:h-7 mx-auto" />
        </Link>
        <div className="text-eyebrow text-terracotta mb-6">Error 404</div>
        <h1 className="text-display text-6xl md:text-8xl text-charcoal">Off the plan.</h1>
        <p className="mt-6 text-charcoal/70 max-w-md mx-auto">
          The page you're looking for isn't in this build. Let's get you back to the workshop.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="magnetic-btn px-8 py-4 rounded-none"
          >
            <span>Return Home</span>
            <span className="btn-arrow">→</span>
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
    <div className="flex min-h-screen items-center justify-center bg-offwhite px-6">
      <div className="max-w-md text-center">
        <div className="text-eyebrow text-terracotta mb-6">Something went wrong</div>
        <h1 className="text-display text-4xl text-charcoal">This page didn't load.</h1>
        <p className="mt-4 text-charcoal/70">
          Try again, or head back to the workshop.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="magnetic-btn px-6 py-3 rounded-none"
          >
            <span>Try Again</span>
          </button>
          <a
            href="/"
            className="text-eyebrow px-6 py-3 text-charcoal/70 hover:text-terracotta transition"
          >
            Go home
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
      { title: "Formline Joinery — Melbourne Custom Kitchens & Cabinetry" },
      {
        name: "description",
        content:
          "Formline Joinery designs and builds bespoke kitchens, cabinetry and joinery for Melbourne's most considered homes. 25 years of craftsmanship, made in-house.",
      },
      { name: "author", content: "Formline Joinery" },
      { name: "theme-color", content: "#2B2B28" },
      { property: "og:site_name", content: "Formline Joinery" },
      { property: "og:title", content: "Formline Joinery — Melbourne Custom Kitchens & Cabinetry" },
      {
        property: "og:description",
        content:
          "Bespoke kitchens, cabinetry and shop fitouts crafted in Melbourne. 25 years, in-house.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Formline Joinery — Melbourne Custom Kitchens & Cabinetry" },
      { name: "description", content: "Bespoke custom kitchens, cabinetry, commercial joinery and shop fitouts. 25 years of craftsmanship, made in Melbourne." },
      { property: "og:description", content: "Bespoke custom kitchens, cabinetry, commercial joinery and shop fitouts. 25 years of craftsmanship, made in Melbourne." },
      { name: "twitter:description", content: "Bespoke custom kitchens, cabinetry, commercial joinery and shop fitouts. 25 years of craftsmanship, made in Melbourne." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/49be7a2e-5500-4631-9d5f-af12beb84a57/id-preview-d677947b--55f4aad4-597e-41f5-9335-9e5313db25ad.lovable.app-1783238219684.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/49be7a2e-5500-4631-9d5f-af12beb84a57/id-preview-d677947b--55f4aad4-597e-41f5-9335-9e5313db25ad.lovable.app-1783238219684.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Outfit:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@1,400;1,500&display=swap",
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
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <HeadContent />
      </head>
      <body className="overflow-x-hidden w-full" suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactLenis
        root
        options={{
          lerp: 0.08,
          duration: 1.2,
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 1.5,
        }}
      >
        <SmoothScroll />
        <Outlet />
      </ReactLenis>
    </QueryClientProvider>
  );
}
