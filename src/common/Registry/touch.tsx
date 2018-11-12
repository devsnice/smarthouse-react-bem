import { Registry } from "@bem-react/di";

import { Widget, cnWidget } from "../Widget/Widget@touch";
import { Player, cnPlayer } from "../Player/Player@touch";
import { Button, cnButton } from "../Button/Button@touch";

const desktopRegistry = (registry: Registry) => {
  registry.set(cnWidget(), Widget);
  registry.set(cnPlayer(), Player);
  registry.set(cnButton(), Button);
};

export default desktopRegistry;
