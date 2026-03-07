import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Blog } from "./components/Blog";
import { BlogPost } from "./components/BlogPost";
import { Projects } from "./components/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "blog", Component: Blog },
      { path: "blog/:id", Component: BlogPost },
      { path: "projects", Component: Projects },
    ],
  },
]);
