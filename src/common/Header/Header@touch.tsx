import * as React from "react";

import IconList from "./images/icon_list_m@2x.png";
import Logotype from "./images/logo@2x.png";

import { headerLinks } from "./links";
import { cnHeader } from "./Header";

export * from "./Header";

import "./Header@touch.scss";

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
            <button className={cnHeader("MenuBurger")}>
              <img src={IconList} />
            </button>
          </nav>
        </div>
      </header>
    );
  }
}
