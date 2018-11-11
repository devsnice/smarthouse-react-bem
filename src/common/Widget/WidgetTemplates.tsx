import * as React from "react";
import * as Types from "../../typings";

// import lineChartIcon from "./icons/line-chart.svg";
// import temperatureIcon from "./icons/temperature.svg";

export interface ITemplateProps {
  event: Types.Event;
}

export const StatsWidgetData: React.SFC<ITemplateProps> = ({ event }) => (
  <img
    className="widget-content__image widget-content__image_type-stats"
    srcSet="./images/richdata.png 590w, ./images/richdata@2x.png 1180w, ./images/richdata@3x.png 1770w"
    sizes="(max-width: 590px), (max-width: 1180px)"
    src="./images/richdata.png"
    alt="statistic"
  />
);

export const QuestionsWidgetData: React.SFC<ITemplateProps> = ({ event }) => (
  <div className="widget-content__buttons">
    <button className="button button_type-yellow button_m-r-18" />
    <button className="button button_type-grey" />
  </div>
);

export const ThemalWidgetData: React.SFC<ITemplateProps> = ({ event }) => (
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

export const PlayerWidgetData: React.SFC<ITemplateProps> = ({ event }) => (
  <div className="player">
    <div className="player-now">
      <img
        className="player-now__cover"
        src="./images/album-cover.png"
        alt="Album cover"
      />
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

export const CameraWidgetData: React.SFC<ITemplateProps> = ({ event }) => (
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
