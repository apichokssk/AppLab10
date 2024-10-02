import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from '@react-navigation/native';  // Import useNavigation

export default (props) => {
  const navigation = useNavigation();  // Initialize navigation

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ImageBackground
          source={require('../img/map2.png')} 
          resizeMode = {"cover"}
          style={styles.view}
        >
          <Image
            source={require('../img/arrowback.png')} 
            resizeMode = {"contain"}
            style={styles.image}
          />
        </ImageBackground>

        <View style={styles.row}>
          <Image
            source={require('../img/lo.png')} 
            resizeMode = {"contain"}
            style={styles.image2}
          />
          <View style={styles.column}>
            <Text style={styles.text}>{"คิดถึง"}</Text>
            <Text style={styles.text2}>{"Loving you so much"}</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('map')} // Navigate to the Map screen
        >
          <Text style={styles.text3}>{"Confirm"}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0FBC00",
    borderRadius: 10,
    paddingVertical: 28,
    marginHorizontal: 22,
  },
  column: {
    flex: 1,
  },
  image: {
    width: 30,
    height: 29,
    marginTop: 19,
  },
  image2: {
    width: 53,
    height: 54,
    marginRight: 11,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 18,
    marginHorizontal: 22,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  text: {
    color: "#000000",
    fontSize: 16,
    marginBottom: 8,
    marginLeft: 1,
  },
  text2: {
    color: "#000000",
    fontSize: 16,
  },
  text3: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  view: {
    height: 520,
    paddingHorizontal: 22,
    marginBottom: 23,
  },
});
