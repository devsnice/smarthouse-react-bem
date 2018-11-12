import * as React from "react";
import { cn } from "@bem-react/classname";

import "./Camera.scss";

const cnCamera = cn("CameraInfo");

const Camera: React.SFC = () => (
  <div className={cnCamera()}>
    <div className={cnCamera("Data")}>
      <div className={cnCamera("DataLabel")}>Приближение: </div>
      <span className={cnCamera("DataValue")}>78%</span>
    </div>
    <div className={cnCamera("Data")}>
      <div className={cnCamera("DataLabel")}>Яркость: </div>
      <span className={cnCamera("DataValue")}>50%</span>
    </div>
  </div>
);

export default Camera;
