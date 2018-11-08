import * as React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Widget from "./components/Widget";

import * as Types from "./types";

import "./styles/normalize.scss";
import "./App.scss";

interface IState {
  events: Types.Event[];
}

class App extends React.Component {
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
      <main className="application">
        <Header />

        <div className="application-content">
          <div className="dashboard">
            <h1 className="dashboard-title">Лента событий</h1>
            <div className="dashboard-list">
              {this.state.events.map(event => (
                <Widget event={event} />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </main>
    );
  }
}

export default App;
