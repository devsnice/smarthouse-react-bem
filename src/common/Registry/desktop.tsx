import { Registry } from "@bem-react/di";

import { Widget, cnWidget } from "../Widget/Widget@desktop";
import { Player, cnPlayer } from "../Player/Player@desktop";
import { Button, cnButton } from "../Button/Button@desktop";
import { Footer, cnFooter } from "../Footer/Footer@desktop";
import { Header, cnHeader } from "../Header/Header@desktop";

const desktopRegistry = (registry: Registry) => {
  registry.set(cnWidget(), Widget);
  registry.set(cnPlayer(), Player);
  registry.set(cnButton(), Button);
  registry.set(cnFooter(), Footer);
  registry.set(cnHeader(), Header);
};

export default desktopRegistry;
