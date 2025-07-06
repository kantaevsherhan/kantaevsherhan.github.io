import type { FC } from "react";
import type { IHeaderNavItem } from "../types/header";

interface IHeaderProps {
  navItems: IHeaderNavItem[];
}

export const Header: FC<IHeaderProps> = ({ navItems }) => {
  return (
    <header className="app-header py:45px">
      <div className="inner-container">
        <div className="inner flex flex:row">
          <div className="logo flex jc:center ai:center f:21px f:bold w:45px h:45px bg:#333 f:#fff round mr:60px">
            KS
          </div>

          <nav className="header-navigation flex flex:row ai:center gap:45px">
            {navItems.map((item) => (
              <a
                href={item.href}
                className="text:none text:underline:hover f:18px f:semibold f:#333 opacity:0.8 opacity:1:hover transition:opacity:0.3s"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
