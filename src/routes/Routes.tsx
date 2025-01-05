import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout/Layout";
import Slider from "../components/ui/Slider";
import Contribute from "../contributes/Contribute";
const Hero = lazy(() => import("../components/Hero/Hero"));
const IntroPage = lazy(() => import("../components/pages/IntroPage"));
const Button = lazy(() => import("../components/ui/Button"));
const AspectRatio = lazy(() => import("../components/ui/AspectRatio"));
const AlertDialog = lazy(() => import("../components/ui/AlertDialog"));
const App = lazy(() => import("../App"));
const InstallationSteps = lazy(
  () => import("../components/pages/InstallationSteps")
);

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
        path: "contribute",
        element: <Contribute />,
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
          {
            path: "slider",
            element: <Slider />,
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

export default router;
