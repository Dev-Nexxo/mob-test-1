import { FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen, FreightsScreen, NotificationsScreen } from "../screens";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Fretes"
        component={FreightsScreen}
        options={{
          tabBarLabel: "Fretes",
          tabBarIcon: ({ focused, iconName, color }) => {
            iconName = focused ? "box-open" : "box";
            return <FontAwesome5 name={iconName} size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Garagem",
          tabBarIcon: ({ focused, iconName, color }) => {
            iconName = focused ? "garage-open-variant" : "garage-variant";
            return <MaterialCommunityIcons name={iconName} size={35} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Notificações"
        component={NotificationsScreen}
        options={{
          tabBarLabel: "Notificações",
          tabBarIcon: ({ focused, iconName, color }) => {
            iconName = focused ? "ios-notifications" : "ios-notifications-outline";
            return <Ionicons name={iconName} size={30} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
