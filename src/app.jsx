import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/themecontext";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import AppRoutes from "./routes/approutes";

export default function App() {
  return (
    <ThemeProvider>
      <ReactLenis
        root
        options={{
          lerp: 0.08,
          duration: 1.2,
          smoothWheel: true,
          wheelMultiplier: 1.0,
          touchMultiplier: 1.5
        }}
      >
        <BrowserRouter>
          <main className="min-h-screen bg-stone-50 text-stone-900 transition-colors duration-200 dark:bg-stone-950 dark:text-stone-100">
            <AppRoutes />
          </main>
        </BrowserRouter>
      </ReactLenis>
    </ThemeProvider>
  );
}
