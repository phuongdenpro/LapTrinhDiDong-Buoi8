import React, { useRef } from "react";
import {
  Animated,
  Text,
  Image,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
} from "react-native";

const App = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 500,
      duration: 5000,
      // useNativeDriver:true
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            marginTop: fadeAnim,
          },
        ]}
      >
        <Image
          source={require("./img/maybay.png")}
          style={{ width: 150, height: 100 }}
        ></Image>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Bottom" onPress={fadeIn}/>
        <Button title="Top" onPress={fadeOut}  />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    // justifyContent: "center"
  },
  fadingContainer: {
    marginTop: 10,
    flex: 1,
    padding: 0,
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    // flex:1,
    flexBasis: 100,
    justifyContent: "space-around",
    marginVertical: 16,
    marginBottom: 0,
  },
});

export default App;
