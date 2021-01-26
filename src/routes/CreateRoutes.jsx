import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { CREATE } from "constants/routes";

import Loading from "components/Loading";

const BasicInfo = lazy(() => {
  return import("pages/Create/BasicInfo");
});

const ProfessionalSummary = lazy(() => {
  return import("pages/Create/ProfessionalSummary");
});

const ContactInfo = lazy(() => {
  return import("pages/Create/ContactInfo");
});

const Work = lazy(() => {
  return import("pages/Create/Work");
});

const Skills = lazy(() => {
  return import("pages/Create/Skills");
});

const Preview = lazy(() => {
  return import("pages/Create/Preview");
});

const CreateRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route
          exact
          path={CREATE.INDEX}
          render={() => <Redirect to={CREATE.BASIC_INFO} />}
        />
        <Route
          path={CREATE.BASIC_INFO}
          component={(props) => <BasicInfo {...props} />}
        />
        <Route
          path={CREATE.PROFESSIONAL_SUMMARY}
          component={(props) => <ProfessionalSummary {...props} />}
        />
        <Route
          path={CREATE.CONTACT_INFO}
          component={(props) => <ContactInfo {...props} />}
        />
        <Route
          path={CREATE.WORK_EXPERIENCE}
          component={(props) => <Work {...props} />}
        />
        <Route
          path={CREATE.SKILLS}
          component={(props) => <Skills {...props} />}
        />
        <Route
          path={CREATE.PREVIEW}
          component={(props) => <Preview {...props} />}
        />
      </Switch>
    </Suspense>
  );
};

export default CreateRoutes;
