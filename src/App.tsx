import * as React from "react";
import { RegistryConsumer, withRegistry } from "@bem-react/di";

import Header from "./components/Header";
import Footer from "./components/Footer";

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
          const CommonComponent = appRegister.get("commonComponent");

          return (
            <main className="application">
              <Header />

              <CommonComponent />

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
