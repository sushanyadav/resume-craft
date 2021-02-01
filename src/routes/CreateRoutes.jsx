import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { CREATE } from "constants/routes";

import BasicInfo from "pages/Create/BasicInfo";
import ProfessionalSummary from "pages/Create/ProfessionalSummary";
import ContactInfo from "pages/Create/ContactInfo";
import Work from "pages/Create/Work";
import Skills from "pages/Create/Skills";
import Preview from "pages/Create/Preview";

const CreateRoutes = () => {
  return (
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
  );
};

export default CreateRoutes;
