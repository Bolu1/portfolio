import { AnimatePresence } from "framer-motion";
import { lazy } from "react";
import { Route, Routes, useLocation, useRoutes } from "react-router-dom";
import SideLinks from "./global/SideLinks";
import Spinner from "./global/Spinner";
import About from "./Pages/About";

const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Pages/Home")), 3000);
  });
});
// const routes = [{ path: "", element: <Home /> }];
function App() {
  // const element = useRoutes(routes);
  const location = useLocation();
  return (
    <div className="App bg-black">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </AnimatePresence>
      {/* <SideLinks /> */}
    </div>
  );
}

export default App;
