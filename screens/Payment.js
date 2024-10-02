import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
// Install LinearGradient: https://github.com/react-native-linear-gradient/react-native-linear-gradient

export default (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.column}>
          <View style={styles.row}>
            <View style={styles.column2}>
              <Text style={styles.text}>{"การชำระเงิน"}</Text>
              <Text style={styles.text2}>{"Simple Flexible"}</Text>
              <Text style={styles.text3}>{"everyday payments"}</Text>
            </View>
            <Image
              source={require('../img/card.png')} 
              resizeMode = {"contain"}
              style={styles.image}
            />
          </View>
          <Image
            source={require('../img/credit.jpg')} 
            resizeMode = {"contain"}
            style={styles.absoluteImage}
          />
        </View>

        <ScrollView horizontal style={styles.scrollView2}>
          <TouchableOpacity style={styles.buttonRow}>
            <Image
              source={require('../img/doc.png')} 
              resizeMode = {"contain"}
              style={styles.image2}
            />
            <View style={styles.column3}>
              <Text style={styles.text4}>{"Cashless payment is disabled"}</Text>
              <Text style={styles.text5}>{"Cashless payment is disabled"}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRow2}>
            <Image
              source={require('../img/doc.png')} 
              resizeMode = {"contain"}
              style={styles.image2}
            />
            <View style={styles.column3}>
              <Text style={styles.text4}>{"Cashless payment is disabled"}</Text>
              <Text style={styles.text5}>{"Cashless payment is disabled"}</Text>
            </View>
          </TouchableOpacity>

        </ScrollView>

        <View style={styles.row2}>
          <View style={styles.row3}>
            <Image
              source={require('../img/card.png')} 
              resizeMode = {"contain"}
              style={styles.image3}
            />
            <Text style={styles.text6}>{"top up"}</Text>
          </View>
          <View style={styles.row4}>
            <Image
              source={require('../img/codeworking.png')} 
              resizeMode = {"contain"}
              style={styles.image3}
            />
            <Text style={styles.text7}>{"tranfer"}</Text>
          </View>
          <View style={styles.row4}>
            <Image
              source={require('../img/cart1.png')} 
              resizeMode = {"contain"}
              style={styles.image3}
            />
            <Text style={styles.text7}>{"Add cart"}</Text>
          </View>
        </View>

        <View style={styles.box}></View>
        <Text style={styles.text8}>{"Recommented for you "}</Text>
        <View style={styles.row9}>
            <Image
              source={require('../img/res.png')} 
              resizeMode = {"contain"}
              style={styles.image9}
            />
          </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  image9: {
    justifyContent: 'center',
    alignItems: 'center', 
  },
  row9: {
    justifyContent: 'center',
    alignItems: 'center', 
  },
  
  absoluteColumn: {
    position: "absolute",
    bottom: -31,
    left: -15,
    width: 339,
    height: 70,
    backgroundColor: "#FFFFFF",
    borderColor: "#5E27FD",
    borderWidth: 1,
    paddingHorizontal: 40,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    elevation: 10,
  },
  absoluteImage: {
    position: "absolute",
    bottom: -131,
    left: 60,
    width: 289,
    height: 172,
  },
  absoluteImage2: {
    position: "absolute",
    bottom: -24,
    left: 115,
    width: 76,
    height: 76,
  },
  box: {
    height: 1,
    backgroundColor: "#00000066",
    marginBottom: 14,
    marginHorizontal: 18,
  },
  box2: {
    flex: 1,
    alignSelf: "stretch",
  },
  buttonRow: {
    width: 251,
    alignSelf: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#003A65",
    borderRadius: 5,
    paddingVertical: 13,
    paddingHorizontal: 11,
    marginRight: 14,
  },
  buttonRow2: {
    width: 251,
    alignSelf: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0FBC00",
    borderRadius: 5,
    paddingVertical: 13,
    paddingLeft: 11,
    paddingRight: 176,
  },
  column: {
    marginBottom: 165,
  },
  column2: {
    flex: 1,
    marginRight: 4,
  },
  column3: {
    width: 191,
  },
  column4: {
    width: 26,
  },
  column5: {
    marginHorizontal: 25,
  },
  column6: {
    flex: 1,
    alignSelf: "flex-start",
  },
  image: {
    width: 87,
    height: 87,
  },
  image2: {
    width: 30,
    height: 30,
  },
  image3: {
    width: 22,
    height: 22,
    marginRight: 4,
  },
  image4: {
    width: 175,
    height: 116,
    marginTop: -4,
  },
  image5: {
    width: 27,
    height: 27,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#22646433",
    paddingVertical: 56,
    paddingHorizontal: 42,
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 21,
    marginHorizontal: 11,
  },
  row3: {
    width: 108,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
  },
  row4: {
    width: 108,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 8,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
  },
  row5: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 19,
    marginBottom: 1,
  },
  row6: {
    flexDirection: "row",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView2: {
    flexDirection: "row",
    marginBottom: 21,
    marginHorizontal: 20,
  },
  text: {
    color: "#000000",
    fontSize: 20,
    marginBottom: 4,
    marginLeft: 1,
  },
  text2: {
    color: "#000000",
    fontSize: 14,
    marginBottom: 3,
  },
  text3: {
    color: "#000000",
    fontSize: 14,
  },
  text4: {
    color: "#FFFFFF",
    fontSize: 13,
    marginBottom: 3,
  },
  text5: {
    color: "#FFFFFF",
    fontSize: 11,
  },
  text6: {
    color: "#000000",
    fontSize: 13,
    flex: 1,
  },
  text7: {
    color: "#000000",
    fontSize: 13,
  },
  text8: {
    color: "#000000",
    fontSize: 15,
    marginBottom: 12,
    marginLeft: 18,
  },
  text9: {
    color: "#FFFFFF",
    fontSize: 14,
    width: 285,
  },
  text10: {
    color: "#909090",
    fontSize: 14,
    marginRight: 4,
    flex: 1,
  },
  text11: {
    color: "#909090",
    fontSize: 14,
  },
  view: {
    flexDirection: "row",
    borderRadius: 15,
    paddingTop: 33,
    paddingBottom: 20,
    paddingLeft: 25,
  },
});

