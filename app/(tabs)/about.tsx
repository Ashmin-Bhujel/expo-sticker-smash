import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
      <Text style={styles.descripton}>
        The app from React Native/Expo docs tutorial, Where we can add emoji
        stickers to our images and save them on our device.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 24,
    fontFamily: "SpaceGrotesk_400Regular",
  },
  descripton: {
    color: "#ffffff",
    fontSize: 12,
    fontFamily: "SpaceGrotesk_400Regular",
    marginTop: 12,
    paddingInline: 16,
    textAlign: "center",
  },
});
