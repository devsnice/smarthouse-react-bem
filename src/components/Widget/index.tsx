import * as React from "react";

import * as Types from "../../types";

// Icons for widgets
import acIcon from "./icons/ac.svg";
import batteryIcon from "./icons/battery.svg";
import camIcon from "./icons/cam.svg";
import crossWhiteIcon from "./icons/cross-white.svg";
import crossIcon from "./icons/cross.svg";
import fridgeIcon from "./icons/fridge.svg";
import kettleIcon from "./icons/kettle.svg";
import keyIcon from "./icons/key.svg";
import lineChartIcon from "./icons/line-chart.svg";
import nextIcon from "./icons/next.svg";
import prevIcon from "./icons/prev.svg";
import robotCleanerIcon from "./icons/robot-cleaner.svg";
import routerIcon from "./icons/router.svg";
import statsIcon from "./icons/stats.svg";
import temperatureIcon from "./icons/temperature.svg";
import thermalIcon from "./icons/thermal.svg";
import musicIcon from "./icons/music.svg";

const WIDGET_TYPES = {
  STATS: "STATS",
  CAMERA: "CAMERA",
  THERMAL: "THERMAL",
  PLAYER: "PLAYER",
  QUESTIONS: "QUESTIONS",
  DEFAULT: "DEFAULT"
};

// убрать завимость от типа
const WIDGET_ICON: {
  [key: string]: string;
} = {
  cam: camIcon,
  stats: statsIcon,
  key: keyIcon,
  "robot-cleaner": robotCleanerIcon,
  router: routerIcon,
  thermal: thermalIcon,
  ac: acIcon,
  music: musicIcon,
  fridge: fridgeIcon,
  battery: batteryIcon,
  kettle: kettleIcon
};

import "./style.scss";

const StatsWidgetData = () => (
  <img
    className="widget-content__image widget-content__image_type-stats"
    srcSet="./images/richdata.png 590w, ./images/richdata@2x.png 1180w, ./images/richdata@3x.png 1770w"
    sizes="(max-width: 590px), (max-width: 1180px)"
    src="./images/richdata.png"
    alt="statistic"
  />
);

const QuestionsWidgetData = () => (
  <div className="widget-content__buttons">
    <button className="button button_type-yellow button_m-r-18" />
    <button className="button button_type-grey" />
  </div>
);

const ThemalWidgetData = () => (
  <ul className="widget-content__sensors">
    <li className="widget-sensor widget-sensor_type-temp">
      <span className="widget-sensor__name">Температура:</span>
      <span className="widget-sensor__value" />
    </li>
    <li className="widget-sensor widget-sensor_type-humidity">
      <span className="widget-sensor__name">Влажность:</span>
      <span className="widget-sensor__value" />
    </li>
  </ul>
);

const PlayerWidgetData = () => (
  <div className="player">
    <div className="player-now">
      <img className="player-now__cover" src="./images/album-cover.png" alt="Album cover" />
      <div className="player-now__info">
        <div className="player-now__title" />
        <div className="player-progress">
          <input className="player-progress__track" type="range" />
          <label className="player-progress__time" />
        </div>
      </div>
    </div>
    <div className="player-controls">
      <div className="player-controls__nav">
        <button className="player-control player-control_prev">
          <svg
            className="icon icon_prev player-control__icon"
            role="img"
            width="12px"
            height="12px"
          />

          {
            // prev
          }
        </button>
        <button className="player-control player-control_next">
          <svg
            className="icon icon_prev player-control__icon"
            role="img"
            width="12px"
            height="12px"
          />
          {
            // prev
          }
        </button>
      </div>
      <div className="player-controls__volume">
        <div className="player-volume">
          <input className="player-volume__track" type="range" />
          <label className="player-volume__percentage" />
        </div>
      </div>
    </div>
  </div>
);

const CameraWidgetData = () => (
  <div className="camera-info">
    <div className="camera-info-data">
      <div className="camera-info-data__label">Приближение: </div>
      <span className="camera-info-data__value">78%</span>
    </div>
    <div className="camera-info-data">
      <div className="camera-info-data__label">Яркость: </div>
      <span className="camera-info-data__value">50%</span>
    </div>
  </div>
);

interface IPropTypes {
  event: Types.Event;
}

export class Widget extends React.Component<IPropTypes> {
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

  render() {
    const { event } = this.props;
    const eventType = this.getWidgetTemplateType();

    return (
      <section className={`widget widget_size-${event.size} widget_type-${event.type}`}>
        <header className="widget-header">
          <div className="widget-header-about">
            <img
              src={WIDGET_ICON[event.icon]}
              className="widget-header-about__icon icon"
              role="img"
            />
            <h4 className="widget-header-about__title">{event.title}</h4>
          </div>
          <div className="widget-header-data">
            <div className="widget-header__type">{event.source}</div>
            <div className="widget-header__date">{event.time}</div>
          </div>
        </header>

        <main className="widget-content">
          <p className="widget-content__text widget-content__text_width-l">{event.description}</p>
        </main>

        <div className="widget__control widget__control_close">
          <svg
            className="icon icon_cross widget__control-icon"
            role="img"
            width="12px"
            height="12px"
          />
          {
            //cross
          }
        </div>

        <div className="widget__control widget__control_link">
          <svg
            className="icon icon_next widget__control-icon"
            role="img"
            width="12px"
            height="12px"
          />
          {
            //cross
          }
        </div>
      </section>
    );
  }
}

export default Widget;
