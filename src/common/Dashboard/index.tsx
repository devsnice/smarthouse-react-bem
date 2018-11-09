import * as React from "react";
import { cn } from "@bem-react/classname";

import * as Types from "../../typings";
import Widget from "../../components/Widget";

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
      <div className={cnDashboard()}>
        <h1 className={cnDashboard("Title")}>Лента событий</h1>

        <div className={cnDashboard("List")}>
          {this.state.events.map(event => (
            <Widget event={event} />
          ))}
        </div>
      </div>
    );
  }
}

export default Dashboard;
