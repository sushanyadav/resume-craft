//lib imports
import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

//pages
import Home from "pages/Home";
import NotFound from "pages/NotFound";

//routes
import CreateRoutes from "routes/CreateRoutes";

//components
import Layout from "components/Layout";

//contants
import ROUTES, { HOME } from "constants/routes";

//utils
import getNestedObjectValues from "utils/getNestedObjectValues";

function App() {
  const { pathname } = useLocation();
  const allRoutes = getNestedObjectValues(ROUTES);
  const isCurrentPathValid = allRoutes.includes(pathname);

  return (
    <>
      <Switch>
        <Layout>
          <Route exact path={HOME} component={(props) => <Home {...props} />} />
          <CreateRoutes />
          {!isCurrentPathValid && (
            <Route
              component={(props) => (
                <NotFound heading="Page not found" {...props} />
              )}
            />
          )}
        </Layout>
      </Switch>
    </>
  );
}

export default App;
