import type { FC } from "react";
import type { IHeaderNavItem } from "../types/header";

interface IHeaderProps {
  navItems: IHeaderNavItem[];
}

export const Header: FC<IHeaderProps> = ({ navItems }) => {
  return (
    <header className="app-header">
      <div className="inner-container">
        <nav className="header-navigation">
          {navItems.map((item) => (
            <a href={item.href} className="text:none">
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
