import * as React from "react";

import DeviceDetector from "device-detector-js";
import { Registry } from "@bem-react/di";

import touchRegistry from "./touch";
import desktopRegistry from "./desktop";

export const APP_REGISTRY_NAME = "platform";

export const initRegistry = (): Registry => {
  const ua = new DeviceDetector().parse(navigator.userAgent);
  const device = ua.device || { type: "desktop" };

  const appRegistry = new Registry({ id: APP_REGISTRY_NAME });

  appRegistry.set("commonComponent", () => null);

  // TODO: add env-var for building seperate bundles for mobile/desktop
  if (device.type === "desktop") {
    desktopRegistry(appRegistry);
  } else {
    touchRegistry(appRegistry);
  }

  return appRegistry;
};
