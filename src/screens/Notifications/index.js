import { View, Text, StyleSheet } from "react-native";

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Notificações</Text>
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00a",
  },
  text: {
    fontSize: 32,
    color: "white"
  }
});
