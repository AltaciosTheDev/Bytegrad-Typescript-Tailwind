import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.tsx";
import TodosContextProvider from "./contexts/TodosContextProvider.tsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KindeProvider
      clientId="8ff2dd278a384289a457a0db840c1839"
      domain="https://altacios.kinde.com"
      redirectUri={process.env.NODE_ENV === "production" ? "https://bytegrad-typescript-tailwind.vercel.app/" : "http://localhost:5173"}
      logoutUri={process.env.NODE_ENV === "production" ? "https://bytegrad-typescript-tailwind.vercel.app/" : "http://localhost:5173"}
    >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </StrictMode>
);
