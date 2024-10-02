import React from "react";
import { 
  SafeAreaView, 
  View, 
  ScrollView, 
  Image, 
  Text, 
  TouchableOpacity, 
  StyleSheet 
} from "react-native";

export default (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
          <Image
           source={require('../img/ps.png')} 
           resizeMode = {"contain"}
            style={styles.image}
          />
          <Text style={styles.text}>{"APICHOK SIMSRIKAEO"}</Text>
        </View>

        <Text style={styles.text2}>{"for more values "}</Text>

        <TouchableOpacity style={styles.buttonRow}>
          <Text style={styles.text3}>{"Reward "}</Text>
          <Image
            source={require('../img/l.png')} 
           resizeMode = {"contain"}
            style={styles.image2}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRow}>
          <Text style={styles.text3}>{"Package"}</Text>
          <View style={styles.view}>
            <Text style={styles.text4}>{"nem"}</Text>
          </View>
          <Image
            source={require('../img/l.png')} 
           resizeMode = {"contain"}
            style={styles.image2}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRow2}>
          <Text style={styles.text3}>{"Challenges "}</Text>
          <Image
            source={require('../img/l.png')} 
           resizeMode = {"contain"}
            style={styles.image2}
          />
        </TouchableOpacity>

        <Text style={styles.text2}>{"my account"}</Text>

        <TouchableOpacity style={styles.buttonRow}>
          <Text style={styles.text3}>{"Reward Member"}</Text>
          <Image
            source={require('../img/l.png')} 
           resizeMode = {"contain"}
            style={styles.image2}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRow}>
          <Text style={styles.text3}>{"Favorites "}</Text>
          <View style={styles.view}>
            <Text style={styles.text4}>{"nem"}</Text>
          </View>
          <Image
            source={require('../img/l.png')} 
           resizeMode = {"contain"}
            style={styles.image2}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRow}>
          <Text style={styles.text3}>{"Payment Method"}</Text>
          <Image
            source={require('../img/l.png')} 
           resizeMode = {"contain"}
            style={styles.image2}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRow3}>
          <Text style={styles.text3}>{"Review"}</Text>
          <Image
            source={require('../img/l.png')} 
           resizeMode = {"contain"}
            style={styles.image2}
          />
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
  box: {
    flex: 1,
    alignSelf: "stretch",
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 13,
    marginBottom: 7,
    marginHorizontal: 24,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 4,
  },
  buttonRow2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 13,
    marginBottom: 19,
    marginHorizontal: 24,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 4,
  },
  buttonRow3: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 13,
    marginBottom: 94,
    marginHorizontal: 24,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 4,
  },
  column: {
    marginHorizontal: 10,
  },
  column2: {
    backgroundColor: "#FFFFFF",
    borderColor: "#5E27FD",
    borderWidth: 1,
    paddingTop: 19,
    paddingBottom: 9,
    paddingHorizontal: 40,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    elevation: 10,
  },
  image: {
    width: 93,
    height: 91,
  },
  image2: {
    width: 27,
    height: 27,
  },
  image3: {
    height: 76,
    marginHorizontal: 130,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 31,
    marginHorizontal: 33,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 1,
  },
  row3: {
    flexDirection: "row",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 56,
  },
  text: {
    color: "#000000",
    fontSize: 20,
  },
  text2: {
    color: "#000000",
    fontSize: 18,
    marginBottom: 9,
    marginLeft: 24,
    fontWeight:'bold',
  },
  text3: {
    color: "#000000",
    fontSize: 15,
    marginRight: 4,
    flex: 1,
  },
  text4: {
    color: "#FFFFFF",
    fontSize: 11,
  },
  text5: {
    color: "#909090",
    fontSize: 14,
    marginRight: 4,
    flex: 1,
  },
  text6: {
    color: "#00B04E",
    fontSize: 14,
  },
  view: {
    width: 46,
    alignItems: "center",
    backgroundColor: "#FF3838",
    borderRadius: 5,
    paddingVertical: 4,
    marginRight: 4,
  },
});
