import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./components/Hero/Hero.tsx";
import Layout from "./Layout/Layout.tsx";
import IntroPage from "./components/pages/IntroPage.tsx";
import Button from "./components/ui/Button.tsx";
import AspectRatio from "./components/ui/AspectRatio.tsx";
import AlertDialog from "./components/ui/AlertDialog.tsx";
import App from "./App.tsx";
import InstallationSteps from "./components/pages/InstallationSteps.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "components",
        element: <Hero />,
        children: [
          {
            path: "",
            element: <IntroPage />,
          },
          {
            path: "button",
            element: <Button />,
          },
          {
            path: "alert-dialog",
            element: <AlertDialog />,
          },
          {
            path: "aspect-ratio",
            element: <AspectRatio />,
          },
        ],
      },
      {
        path: "/installation-steps",
        element: <InstallationSteps />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
