import * as React from "react";
import { cn } from "@bem-react/classname";

export const cnFooter = cn("Footer");

const footerLinks = [
  {
    label: "Помощь",
    to: "#"
  },
  {
    label: "Обратная связь",
    to: "#"
  },
  {
    label: "Разработчикам",
    to: "#"
  },
  {
    label: "Условия использования",
    to: "#"
  },
  {
    label: "Авторские права",
    to:
      "https://wiki.yandex.ru/shri-2018-II/homework/Adaptivnaja-vjorstka/.files/license.pdf"
  }
];

export const Footer: React.SFC = () => {
  return (
    <footer className={cnFooter()}>
      <ul className={cnFooter("Links")}>
        {footerLinks.map(link => (
          <li
            key={`${link.to}-${link.label}`}
            className={cnFooter("LinksItem")}
          >
            <a href={link.to}>{link.label}</a>
          </li>
        ))}
      </ul>

      <div className={cnFooter("Copyright")}>© 2001–2018 ООО «Яндекс»</div>
    </footer>
  );
};
