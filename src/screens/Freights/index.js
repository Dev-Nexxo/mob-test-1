import { View, Text, StyleSheet } from "react-native";

const FreightsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Tela de Fretes</Text>
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
