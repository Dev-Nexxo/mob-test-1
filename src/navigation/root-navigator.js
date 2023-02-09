import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./tab-navigator";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
