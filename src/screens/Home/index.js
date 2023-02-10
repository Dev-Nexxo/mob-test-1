import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme";

import * as Location from "expo-location";
import { useEffect, useState } from "react";

const HomeScreen = () => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    const getPosition = async () => {
      let currentLocation = await Location.getCurrentPositionAsync({ timeInterval: 60000 });
      setLocation([
        "Latitude: " + currentLocation.coords.latitude,
        "Longitude: " + currentLocation.coords.longitude,
      ]);

      console.log("Location:");
      console.log(location);
    };
    getPosition();
  });
  return (
    <View style={styles.container}>
      <Text>{location.split}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.gray[50],
  },
});
