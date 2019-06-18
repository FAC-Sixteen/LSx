import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {
  Landing,
  Stories,
  Form,
  Deepdive,
  Error404,
  Story,
  Experiments,
  ExperimentSingle
} from "./Components";
import { dataRequest } from "./utils/fetchData.js";
import GlobalStyle from "./GlobalStyle";

const urls = {
  home: "/",
  stories: "/success-stories",
  story: "/story/:story",
  deepdive: "/dive-deeper",
  experiments: "/experiments",
  experiment: "/experiment/:experiment",
  action: "/action-plan",
  share: "/share"
};

function App() {
  const [background, setBackground] = React.useState("city");
  const [successStories, setSuccessStories] = React.useState(null);
  const [experimentsData, setExperimentsData] = React.useState(null);

  React.useEffect(() => {
    dataRequest("http://localhost:3000/success-data").then(res =>
      setSuccessStories(Object.values(res))
    );
  }, []);

  React.useEffect(() => {
    dataRequest("http://localhost:3000/experiments-data").then(res =>
      setExperimentsData(Object.values(res))
    );
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle data={background} />
      <div className="App">
        <Switch>
          <Route exact path={urls.home} render={props => <Landing />} />
          <Route exact path={urls.action} render={props => <Form />} />
          <Route
            exact
            path={urls.experiments}
            render={props => {
              setBackground("school");
              return <Experiments data={experimentsData} />;
            }}
          />
          <Route
            exact
            path={urls.experiment}
            render={props =>
              experimentsData ? (
                <ExperimentSingle data={experimentsData} {...props} />
              ) : (
                <p>Loading...</p>
              )
            }
          />
          <Route
            exact
            path={urls.story}
            render={props =>
              successStories ? (
                <Story data={successStories} {...props} />
              ) : (
                <p>Loading...</p>
              )
            }
          />
          <Route
            exact
            path={urls.stories}
            render={props => {
              setBackground("comic");
              return <Stories data={successStories} />;
            }}
          />
          <Route
            exact
            path={urls.deepdive}
            render={props => {
              setBackground("park");
              return <Deepdive />;
            }}
          />
          <Route component={Error404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
