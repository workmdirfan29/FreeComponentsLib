import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./components/Hero/Hero.tsx";
import Layout from "./Layout/Layout.tsx";
import IntroPage from "./components/pages/IntroPage.tsx";
import Button from "./components/ui/Button.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
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
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
