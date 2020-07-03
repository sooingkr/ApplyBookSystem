import React from "react";
import { Route, Switch } from "react-router-dom";
import RouteHome from "./RouteHome";
import RouteBook from "./RouteBook";
import { JoinContainer } from "../../join/components";
import { UpdateUserContainer } from "../../member/updateUserInfo/components";
import NotFound from "../../common/components/NotFound";

export default (
  <>
    <Switch>
      <Route exact path="/" component={RouteHome} />
      <Route path="/join" component={JoinContainer} />
      <Route path={["/bookRequest", "/book/:ordNum"]} component={RouteBook} />
      <Route path="/updateUserInfo" component={UpdateUserContainer} />
      <Route component={NotFound} />
    </Switch>
  </>
);
