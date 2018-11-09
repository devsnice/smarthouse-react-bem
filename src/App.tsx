import * as React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Dashboard from "./common/Dashboard";

import * as Types from "./typings";

import "./styles/normalize.scss";
import "./App.scss";

class App extends React.Component {
  public render() {
    return (
      <main className="application">
        <Header />

        <div className="application-content">
          <Dashboard />
        </div>

        <Footer />
      </main>
    );
  }
}

export default App;
