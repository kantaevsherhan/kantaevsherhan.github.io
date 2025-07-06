import { Header } from "./components/Header";
import type { IHeaderNavItem } from "./types/header";

export const App = () => {
  const headerNavItems: IHeaderNavItem[] = [
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Skills",
      href: "#skills",
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
    <div className="app py:50px">
      <div className="profile box-shadow:#00000001|0px|4px|12px">
        <div className="container">
          <div className="inner bg:#fff">
            <Header navItems={headerNavItems} />

            <section className="intro">
              <div className="inner-container">
                <div className="flex flex:row ai:center jc:space-between">
                  <div className="left">
                    <p className="f:24px">Hello,</p>
                    <h1 className="f:56px f:heavy">Kantaev Sherhan</h1>
                    <h3 className="f:32px">a Full-stack developer</h3>
                  </div>

                  <div className="right">
                    <img
                      src="/profile-intro.jpg"
                      alt="Kantaev Sherhan"
                      className="profile-image h:430px w:430px round object:cover"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
