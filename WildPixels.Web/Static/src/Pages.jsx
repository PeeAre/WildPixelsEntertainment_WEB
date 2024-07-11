import { useEffect } from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";

const BasePage = ({ title, url }) => {
  useEffect(() => (document.title = { title }), []);

  return (
    <>
      <NavBar />
      <main>
        <div className="main-wrapper">
          <Route key={title} path={url} />;
        </div>
      </main>
    </>
  );
};

export const Home = () => {
  const title = "Home";
  const url = "/";

  return <BasePage title={title} url={url} />;
};

export const SomePage = () => {
  const title = "Some page";
  const url = "/some_page/";

  return <BasePage title={title} url={url} />;
};

export const Team = () => {
  const title = "Our team";
  const url = "/team/";

  return <BasePage title={title} url={url} />;
};

export default BasePage;
