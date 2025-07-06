import { Header } from "./components/Header";
import type { IHeaderNavItem } from "./types/header";

export const App = () => {
  const headerNavItems: IHeaderNavItem[] = [
    {
      title: "Home",
      href: "#home",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    <div className="app">
      <div className="profile">
        <div className="container">
          <div className="inner bg:#fff">
            <Header navItems={headerNavItems} />

            <section className="intro">
              <div className="inner-container">
                <div className="left">
                  <p>Hello,</p>
                  <h1>Kantaev Sherhan</h1>
                  <h3>a Full-stack developer</h3>
                </div>
                <div className="right"></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
