import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import styles from "./styles";

const Map = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Acesso à localização negado.");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
      });
    })();
  }, []);

  let text = "Aguardando...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        scrollEnabled={false}
        zoomEnabled={false}
        zoomControlEnabled={false}
        rotateEnabled={false}
        cacheEnabled={true}
        initialRegion={location}
      />
    </View>
  );
};

export default Map;
