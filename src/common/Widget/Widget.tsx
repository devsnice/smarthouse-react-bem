import * as React from "react";
import { cn } from "@bem-react/classname";

import * as Types from "../../typings";

import Icon from "../Icon";

import {
  StatsWidgetData,
  QuestionsWidgetData,
  ThemalWidgetData,
  PlayerWidgetData,
  CameraWidgetData,
  ITemplateProps
} from "./WidgetDataTemplates";

// Icons for widgets
import acIcon from "./icons/ac.svg";
import batteryIcon from "./icons/battery.svg";
import camIcon from "./icons/cam.svg";
import crossWhiteIcon from "./icons/cross-white.svg";
import crossIcon from "./icons/cross.svg";
import fridgeIcon from "./icons/fridge.svg";
import kettleIcon from "./icons/kettle.svg";
import keyIcon from "./icons/key.svg";
import nextIcon from "./icons/next.svg";
import robotCleanerIcon from "./icons/robot-cleaner.svg";
import routerIcon from "./icons/router.svg";
import statsIcon from "./icons/stats.svg";
import thermalIcon from "./icons/thermal.svg";
import musicIcon from "./icons/music.svg";

export interface IWidgetPropTypes {
  event: Types.Event;
}

const WIDGET_TYPES = {
  STATS: "STATS",
  CAMERA: "CAMERA",
  THERMAL: "THERMAL",
  PLAYER: "PLAYER",
  QUESTIONS: "QUESTIONS",
  DEFAULT: "DEFAULT"
};

const WIDGET_DATA_TEMPLATES: {
  [x: string]: React.SFC<ITemplateProps>;
} = {
  [WIDGET_TYPES.STATS]: StatsWidgetData,
  [WIDGET_TYPES.QUESTIONS]: QuestionsWidgetData,
  [WIDGET_TYPES.THERMAL]: ThemalWidgetData,
  [WIDGET_TYPES.PLAYER]: PlayerWidgetData,
  [WIDGET_TYPES.CAMERA]: CameraWidgetData
};

const WIDGET_ICON: {
  [key: string]: string;
} = {
  cam: camIcon,
  stats: statsIcon,
  key: keyIcon,
  robotCleaner: robotCleanerIcon,
  router: routerIcon,
  thermal: thermalIcon,
  ac: acIcon,
  music: musicIcon,
  fridge: fridgeIcon,
  battery: batteryIcon,
  kettle: kettleIcon
};

export const cnWidget = cn("Widget");

export class Widget extends React.Component<IWidgetPropTypes> {
  private getWidgetTemplateType(): string {
    const { data = { type: "empty" }, icon } = this.props.event;

    if (icon === "cam") {
      return WIDGET_TYPES.CAMERA;
    }

    if ((data as Types.IWidgetThemalData).temperature) {
      return WIDGET_TYPES.THERMAL;
    }

    if ((data as Types.IWidgetPlayerData).albumcover) {
      return WIDGET_TYPES.PLAYER;
    }

    if ((data as Types.IWidgetQuestionsData).buttons) {
      return WIDGET_TYPES.QUESTIONS;
    }

    if ((data as Types.IWidgetDefaultData).type === "graph") {
      return WIDGET_TYPES.STATS;
    }

    return WIDGET_TYPES.DEFAULT;
  }

  public render() {
    const { event } = this.props;
    const eventWidgetType = this.getWidgetTemplateType();
    const WidgetDataTemplate = WIDGET_DATA_TEMPLATES[eventWidgetType];

    return (
      <section
        className={cnWidget({
          size: event.size,
          type: event.type
        })}
      >
        <header className={cnWidget("Header")}>
          <div className={cnWidget("HeaderAbout")}>
            <Icon
              src={WIDGET_ICON[event.icon]}
              className={cnWidget("HeaderAboutIcon")}
            />

            <h4 className={cnWidget("HeaderAboutTitle")}>{event.title}</h4>
          </div>
          <div className={cnWidget("HeaderData")}>
            <div className={cnWidget("HeaderType")}>{event.source}</div>
            <div className={cnWidget("HeaderDate")}>{event.time}</div>
          </div>
        </header>

        <main className={cnWidget("Content")}>
          {event.description && (
            <p
              className={cnWidget("ContentText", {
                width: "l"
              })}
            >
              {event.description}
            </p>
          )}

          {WidgetDataTemplate && <WidgetDataTemplate event={event} />}
        </main>

        <div
          className={cnWidget("Control", {
            close: true
          })}
        >
          <Icon
            src={event.type === "critical" ? crossWhiteIcon : crossIcon}
            className={cnWidget("ControlIcon")}
          />
        </div>

        <div
          className={cnWidget("Control", {
            link: true
          })}
        >
          <Icon src={nextIcon} className={cnWidget("ControlIcon")} />
        </div>
      </section>
    );
  }
}
