import { Registry } from "@bem-react/di";

import { Widget, cnWidget } from "../Widget/Widget@touch";
import { Player, cnPlayer } from "../Player/Player@touch";

const desktopRegistry = (registry: Registry) => {
  registry.set(cnWidget(), Widget);
  registry.set(cnPlayer(), Player);
};

export default desktopRegistry;
