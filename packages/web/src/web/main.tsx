import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles.css";
import App from "./app.tsx";

const queryClient = new QueryClient();
const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router base={base}>
        <App />
      </Router>
    </QueryClientProvider>
  </StrictMode>,
);
