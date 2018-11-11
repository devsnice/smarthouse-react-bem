import * as React from "react";
import { cn } from "@bem-react/classname";
import { RegistryConsumer } from "@bem-react/di";

import { cnWidget, IWidgetPropTypes } from "./../Widget/Widget";
import { APP_REGISTRY_NAME } from "./../Registry";

import * as Types from "../../typings";

import "./style.scss";

interface IState {
  events: Types.Event[];
}

const cnDashboard = cn("Dashboard");

class Dashboard extends React.Component {
  state: IState = {
    events: []
  };

  componentDidMount() {
    this.loadEvents().then(events => {
      this.setState({
        events
      });
    });
  }

  private loadEvents(): Promise<Types.Event[]> {
    return fetch("data/events.json")
      .then(response => response.json())
      .then(response => response.events)
      .catch(err => console.error(err));
  }

  public render() {
    return (
      <RegistryConsumer>
        {registries => {
          const appRegister = registries[APP_REGISTRY_NAME];
          const Widget = appRegister.get<IWidgetPropTypes>(cnWidget());

          return (
            <div className={cnDashboard()}>
              <h1 className={cnDashboard("Title")}>Лента событий</h1>

              <div className={cnDashboard("List")}>
                {this.state.events.map(event => (
                  <Widget key={event.id} event={event} />
                ))}
              </div>
            </div>
          );
        }}
      </RegistryConsumer>
    );
  }
}

export default Dashboard;
