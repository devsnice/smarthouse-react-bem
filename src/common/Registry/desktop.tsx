import { Registry } from "@bem-react/di";

import { Widget, cnWidget } from "../Widget/Widget@desktop";
import { Player, cnPlayer } from "../Player/Player@desktop";

const desktopRegistry = (registry: Registry) => {
  registry.set(cnWidget(), Widget);
  registry.set(cnPlayer(), Player);
};

export default desktopRegistry;
