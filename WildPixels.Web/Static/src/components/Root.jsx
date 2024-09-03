import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "@components/navigation/NavBar";
import Hub from "@pages/Hub";
import Games from "@pages/Games";
import Gallery from "@pages/Gallery";
import Store from "@pages/Store";
import Login from "@components/modals/Login";
import Registration from "@components/modals/Registration";

const routes = [
  {
    Page: Hub,
    title: "Hub",
    path: "/:slug?",
  },
  {
    Page: Games,
    title: "Games",
    path: "/games/:slug?",
  },
  {
    Page: Gallery,
    title: "Gallery",
    path: "/gallery/:slug?",
  },
  {
    Page: Store,
    title: "Store",
    path: "/store/:slug?",
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
