import { View, Text, StyleSheet } from "react-native";
import Map from "../../components/Map";

const FreightsScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text>Tela de Fretes</Text> */}
      <Map />
    </View>
  );
};

export default FreightsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
