import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blog from "../pages/Home/Home_Blog";
import BlogPage from "../pages/Blog/BlogPage";
import Portfolio from "../pages/Portfolio/Portfolio";
import Activity from "../pages/Activity/Activity";
import LifeEvent from "../pages/LifeEvent/LifeEvent";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/blog",
          element: <BlogPage></BlogPage>,
        },
        {
          path: "/portfolio",
          element: <Portfolio></Portfolio>,
        },
        {
          path: "/activity",
          element: <Activity></Activity>,
        },
        {
          path: "/event",
          element: <LifeEvent></LifeEvent>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
      ]
    }
  ]);
  
  export default router;