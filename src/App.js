import { BrowserRouter, Switch, Route } from "react-router-dom";
import "@sass/main.scss";

import style from "./App.scss";
import Header from "@layouts/Header";
import HomePage from "@pages/HomePage";
import GaguezProjectPage from "@pages/projects/GaguezProjectPage";
import ReszonProjectPage from "@pages/projects/ReszonProjectPage";

const App = () => (
  <div className={style.app}>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/projetos/reszon">
          <ReszonProjectPage />
        </Route>
        <Route path="/projetos/gaguez">
          <GaguezProjectPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <p>Página não encontrada :(</p>
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
