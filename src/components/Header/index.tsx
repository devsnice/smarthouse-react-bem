import * as React from "react";

import IconList from "./icon_list_m@2x.png";
import Logotype from "./logo@2x.png";

import "./style.scss";

export default class Header extends React.Component {
  public render() {
    return (
      <header className="header">
        <div className="header-content">
          <div className="header-logotype">
            <a href="#">
              <img className="logotype" src={Logotype} alt="Логотип" />
            </a>
          </div>

          <nav className="header-menu">
            <ul className="header-menu-list" id="header-menu">
              <li className="header-menu-list__item">
                <a href="/">События</a>
              </li>
              <li className="header-menu-list__item">
                <a href="#">Сводка</a>
              </li>
              <li className="header-menu-list__item">
                <a href="#">Устройства</a>
              </li>
              <li className="header-menu-list__item header-menu-list__item_state-active">
                <a href="#">Видеонаблюдение</a>
              </li>
            </ul>

            <button className="header-menu__burger" id="header-burger">
              <img src={IconList} />
            </button>
          </nav>
        </div>
      </header>
    );
  }
}
