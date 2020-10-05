import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ExploreNavParamList } from "../../types";
import { Explore, CategoryDetail } from "../screens";

const ExploreStack = createStackNavigator<ExploreNavParamList>();

const ExploreNav = () => {
  return (
    <ExploreStack.Navigator headerMode="none">
      <ExploreStack.Screen name="Explore" component={Explore} />
      <ExploreStack.Screen name="CategoryDetail" component={CategoryDetail} />
    </ExploreStack.Navigator>
  );
};

export default ExploreNav;
