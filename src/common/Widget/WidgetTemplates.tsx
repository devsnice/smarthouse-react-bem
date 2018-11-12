import * as React from "react";
import { RegistryConsumer } from "@bem-react/di";
import { cn } from "@bem-react/classname";

import * as Types from "../../typings";

import { APP_REGISTRY_NAME } from "../Registry/index";
import Camera from "../Camera/Camera";

import { cnWidget } from "./Widget";
import { cnPlayer, IPlayerProps } from "../Player/Player";

import albumCover from "./images/album-cover.png";

export interface ITemplateProps {
  event: Types.Event;
}

// TODO: WidgetContentImage - to block WidgetContentImage
// use cn
export const StatsWidgetData: React.SFC<ITemplateProps> = ({ event }) => (
  <img
    className="widget-content__image widget-content__image_type-stats"
    src="./images/richdata.png"
    alt="statistic"
  />
);

// TODO: use button block here
// use cn
export const QuestionsWidgetData: React.SFC<ITemplateProps> = ({ event }) => (
  <div className="widget-content__buttons">
    <button className="button button_type-yellow button_m-r-18" />
    <button className="button button_type-grey" />
  </div>
);

export const ThemalWidgetData: React.SFC<ITemplateProps> = ({ event }) => {
  const data = event.data as Types.IWidgetThemalData;

  const cnWidgetSensor = cn("WidgetSensor");
  const cnWidgetContent = cn("Widget-Content");

  return (
    <ul className={cnWidgetContent("Sensors")}>
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
