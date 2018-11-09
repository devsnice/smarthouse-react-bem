import * as React from "react";
import { Registry } from "@bem-react/di";

const desktopRegistry = (registry: Registry) => {
  registry.set("desktop", () => null);
};

export default desktopRegistry;
