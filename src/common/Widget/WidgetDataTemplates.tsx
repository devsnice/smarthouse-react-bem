import * as React from "react";
import { RegistryConsumer } from "@bem-react/di";
import { cn } from "@bem-react/classname";

import * as Types from "../../typings";

import { APP_REGISTRY_NAME } from "../Registry/index";
import Camera from "../Camera/Camera";

import { cnWidget } from "../Widget/Widget";
import { cnPlayer, IPlayerProps } from "../Player/Player";
import { cnButton, IButtonProps } from "../Button/Button";

import albumCover from "./images/album-cover.png";
import richDataImage from "./images/richdata.png";

export interface ITemplateProps {
  event: Types.Event;
}

export const StatsWidgetData: React.SFC<ITemplateProps> = ({ event }) => (
  <img
    className={cnWidget("ContentImage", {
      type: "stats"
    })}
    src={richDataImage}
    alt="statistic"
  />
);

export const QuestionsWidgetData: React.SFC<ITemplateProps> = ({ event }) => (
  <RegistryConsumer>
    {registries => {
      const appRegister = registries[APP_REGISTRY_NAME];
      const Button = appRegister.get<IButtonProps>(cnButton());

      return (
        <div className={cnWidget("ContentButtons")}>
          <Button theme="yellow" className={cnWidget("ContentButtonYes")}>
            Да
          </Button>
          <Button theme="grey">Нет</Button>
        </div>
      );
    }}
  </RegistryConsumer>
);

export const ThemalWidgetData: React.SFC<ITemplateProps> = ({ event }) => {
  const data = event.data as Types.IWidgetThemalData;

  const cnWidgetSensor = cn("WidgetSensor");

  return (
    <ul className={cnWidget("ContentSensors")}>
      <li className={cnWidgetSensor({ type: "temp" })}>
        <span className={cnWidgetSensor("Name")}>Температура:</span>
        <span className={cnWidgetSensor("Value")}>{data.temperature}C</span>
      </li>

      <li className={cnWidgetSensor({ type: "humidity" })}>
        <span className={cnWidgetSensor("Name")}>Влажность:</span>
        <span className={cnWidgetSensor("Value")}>{data.humidity}%</span>
      </li>
    </ul>
  );
};

export const PlayerWidgetData: React.SFC<ITemplateProps> = ({ event }) => {
  const data = event.data as Types.IWidgetPlayerData;

  return (
    <RegistryConsumer>
      {registries => {
        const appRegister = registries[APP_REGISTRY_NAME];
        const Player = appRegister.get<IPlayerProps>(cnPlayer());

        return (
          <Player
            current={{
              albumCover,
              title: `${data.artist} ${data.track.name}`,
              progress: data.track.length,
              volume: `${data.volume}%`
            }}
          />
        );
      }}
    </RegistryConsumer>
  );
};

export const CameraWidgetData: React.SFC<ITemplateProps> = ({ event }) => (
  <Camera />
);
