import { useState, useEffect } from "react";
import { Text, View } from "react-native";

const Map = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    async () => {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setLocation({ location: { latitude, longitude } });
          console.log("Location: ");
          console.log(location);
        }, //success
        () => {}, //error
        {
          timeout: 2000,
          enableHighAccuracy: true,
          maximumAge: 60000,
        }
      );
    };
  });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{location}</Text>
    </View>
  );
};

export default Map;
