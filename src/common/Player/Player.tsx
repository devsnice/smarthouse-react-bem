import * as React from "react";
import { cn } from "@bem-react/classname";

import Icon from "../Icon";

import prevIcon from "./icons/prev.svg";

import "./Player.scss";

interface IPlayerProps {
  current: {
    albumCover: string;
    title: string;
    progress: string;
    volume: string;
  };
}

export const cnPlayer = cn("Player");

const Player: React.SFC<IPlayerProps> = ({ current }) => {
  return (
    <div className={cnPlayer()}>
      <div className={cnPlayer("Now")}>
        <img
          className={cnPlayer("NowCover")}
          src={current.albumCover}
          alt="Album cover"
        />
        <div className={cnPlayer("NowInfo")}>
          <div className={cnPlayer("NowTitle")}>{current.title}</div>
          <div className={cnPlayer("Progress")}>
            <input className={cnPlayer("ProgressTrack")} type="range" />
            <label className={cnPlayer("ProgressTime")}>
              {current.progress}
            </label>
          </div>
        </div>
      </div>

      <div className={cnPlayer("Controls")}>
        <div className={cnPlayer("ControlsNav")}>
          <button className={cnPlayer("Control", { prev: true })}>
            <Icon src={prevIcon} className={cnPlayer("ControlIcon")} />
          </button>
          <button className={cnPlayer("Control", { next: true })}>
            <Icon src={prevIcon} className={cnPlayer("ControlIcon")} />
          </button>
        </div>

        <div className={cnPlayer("Controls-Volume")}>
          <div className={cnPlayer("Volume")}>
            <input className={cnPlayer("VolumeTrack")} type="range" />
            <label className={cnPlayer("VolumePercentage")}>
              {current.volume}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
