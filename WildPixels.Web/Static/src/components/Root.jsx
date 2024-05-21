import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "@components/navigation/NavBar";
import Home from "@pages/Home";
import About from "@pages/About";
import Something from "@pages/Something";
import Same from "@pages/Same";
import Login from "@components/modals/Login";
import Registration from "@components/modals/Registration";

const routes = [
  {
    Page: Home,
    title: "Home",
    path: "/:slug?",
    url: "/",
  },
  {
    Page: About,
    title: "About",
    path: "/about/:slug?",
    url: "/about/",
  },
  {
    Page: Something,
    title: "Something",
    path: "/something/:slug?",
    url: "/something/",
  },
  {
    Page: Same,
    title: "Same",
    path: "/same/:slug?",
    url: "/same/",
  },
];

const Root = () => {
  const [isLoginModalActive, setLoginModalActive] = useState(false);
  const [isRegisterModalActive, setRegisterModalActive] = useState(false);

  return (
    <>
      <NavBar
        setLoginModalActive={setLoginModalActive}
        setRegisterModalActive={setRegisterModalActive}
      />
      <main>
        <div className="main-wrapper">
          <Routes>
            {routes.map(({ title, path, Page }) => {
              return (
                <Route key={title + path} path={path} element={<Page />} />
              );
            })}
          </Routes>
        </div>

        {isLoginModalActive && <Login setActive={setLoginModalActive} />}
        {isRegisterModalActive && (
          <Registration setActive={setRegisterModalActive} />
        )}
      </main>
    </>
  );
};

export default Root;
