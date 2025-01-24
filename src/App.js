import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navigation/navbar";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./components/home/home")); //lazy loading use for optimisation and load components dynamically
const AboutMe = lazy(() => import("./components/about-me/about-me"));

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div>loading....</div>}>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<AboutMe />} path="/about" />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
