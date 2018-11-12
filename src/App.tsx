import * as React from "react";
import { RegistryConsumer, withRegistry } from "@bem-react/di";

import Header from "./components/Header";
import { cnFooter } from "./common/Footer/Footer";

import Dashboard from "./common/Dashboard";

import { APP_REGISTRY_NAME, initRegistry } from "./common/Registry/index";

import "./styles/normalize.scss";
import "./App.scss";

// TODO: in application with server side
// we need to provide type of application inside function
const appRegistry = initRegistry();

class App extends React.Component {
  public render() {
    return (
      <RegistryConsumer>
        {registries => {
          const appRegister = registries[APP_REGISTRY_NAME];
          const Footer = appRegister.get(cnFooter());

          return (
            <main className="application">
              <Header />

              <div className="application-content">
                <Dashboard />
              </div>

              <Footer />
            </main>
          );
        }}
      </RegistryConsumer>
    );
  }
}

export default withRegistry(appRegistry)(App);
