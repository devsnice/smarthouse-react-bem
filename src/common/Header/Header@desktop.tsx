import * as React from "react";

import IconList from "./images/icon_list_m@2x.png";
import Logotype from "./images/logo@2x.png";

import { headerLinks } from "./links";
import { cnHeader } from "./Header";

export * from "./Header";

import "./Header@desktop.scss";

export class Header extends React.Component {
  public render() {
    return (
      <header className={cnHeader()}>
        <div className={cnHeader("Content")}>
          <div className={cnHeader("Logotype")}>
            <a href="/">
              <img
                className={cnHeader("LogotypeImage")}
                src={Logotype}
                alt="Логотип"
              />
            </a>
          </div>

          <nav className={cnHeader("Menu")}>
            <ul className={cnHeader("MenuList")}>
              {headerLinks.map(link => (
                <li
                  className={cnHeader("MenuListItem", {
                    active: link.active
                  })}
                  key={`${link.to}-${link.title}`}
                >
                  <a href={link.to}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
