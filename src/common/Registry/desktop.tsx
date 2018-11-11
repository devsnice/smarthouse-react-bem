import { Registry } from "@bem-react/di";

import { Widget, cnWidget } from "../Widget/Widget@desktop";

const desktopRegistry = (registry: Registry) => {
  registry.set(cnWidget(), Widget);
};

export default desktopRegistry;