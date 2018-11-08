import * as React from "react";

import "./style.scss";

export class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <ul className="footer-links">
          <li className="footer-links__item">
            <a href="#">Помощь</a>
          </li>
          <li className="footer-links__item">
            <a href="#">Обратная связь</a>
          </li>
          <li className="footer-links__item">
            <a href="#">Разработчикам</a>
          </li>
          <li className="footer-links__item">
            <a href="#">Условия использования</a>
          </li>
          <li className="footer-links__item">
            <a href="https://wiki.yandex.ru/shri-2018-II/homework/Adaptivnaja-vjorstka/.files/license.pdf">
              Авторские права
            </a>
          </li>
        </ul>
        <div className="footer-copyright">© 2001–2018 ООО «Яндекс»</div>
      </footer>
    );
  }
}

export default Footer;
