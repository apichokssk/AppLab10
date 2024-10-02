import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

export default (props) => {
  const navigation = useNavigation();  // Initialize navigation

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.column}>
          <View style={styles.row}>
            <View style={styles.column2}>
              <Image
                source={require('../img/arrowback.png')} 
                resizeMode={"contain"}
                style={styles.image}
              />
              <Text style={styles.text}>{"เดินทาง"}</Text>
              <Text style={styles.text2}>{"ไม่ว่าจะไปไหน เราจะไปส่ง"}</Text>
            </View>
            <View style={styles.column3}>
              <Image
                source={require('../img/car2-1.png')} 
                resizeMode={"contain"}
                style={styles.image2}
              />
            </View>
          </View>
          <TextInput
            value={""}
            placeholder={"ค้นหาในแอป"}
            style={styles.absoluteInput}
          />
        </View>

        {/* Button that navigates to the Map screen */}
        <TouchableOpacity
          style={styles.buttonRow}
          onPress={() => navigation.navigate('Map')} // Navigation on press
        >
          <Image
            source={require('../img/14.png')} 
            resizeMode={"contain"}
            style={styles.image4}
          />
          <View style={styles.box} />
          <View style={styles.column4}>
            <Text style={styles.text4}>{"สถานที่ที่คุณต้องการไป?...."}</Text>
            <Text style={styles.text5}>{"Where you wanna go bro?...."}</Text>
          </View>
          <Image
            source={require('../img/arrowforward.png')} 
            resizeMode={"contain"}
            style={styles.image5}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRow}
          onPress={() => navigation.navigate('Map')} // Navigation on press
        >
          <Image
            source={require('../img/14.png')} 
            resizeMode={"contain"}
            style={styles.image4}
          />
          <View style={styles.box} />
          <View style={styles.column4}>
            <Text style={styles.text4}>{"สถานที่ที่คุณต้องการไป?...."}</Text>
            <Text style={styles.text5}>{"Where you wanna go bro?...."}</Text>
          </View>
          <Image
            source={require('../img/arrowforward.png')} 
            resizeMode={"contain"}
            style={styles.image5}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRow}
          onPress={() => navigation.navigate('Map')} // Navigation on press
        >
          <Image
            source={require('../img/14.png')} 
            resizeMode={"contain"}
            style={styles.image4}
          />
          <View style={styles.box} />
          <View style={styles.column4}>
            <Text style={styles.text4}>{"สถานที่ที่คุณต้องการไป?...."}</Text>
            <Text style={styles.text5}>{"Where you wanna go bro?...."}</Text>
          </View>
          <Image
            source={require('../img/arrowforward.png')} 
            resizeMode={"contain"}
            style={styles.image5}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRow}
          onPress={() => navigation.navigate('map')} // Navigation on press
        >
          <Image
            source={require('../img/14.png')} 
            resizeMode={"contain"}
            style={styles.image4}
          />
          <View style={styles.box} />
          <View style={styles.column4}>
            <Text style={styles.text4}>{"สถานที่ที่คุณต้องการไป?...."}</Text>
            <Text style={styles.text5}>{"Where you wanna go bro?...."}</Text>
          </View>
          <Image
            source={require('../img/arrowforward.png')} 
            resizeMode={"contain"}
            style={styles.image5}
          />
        </TouchableOpacity>
        
        {/* Repeat other buttons similarly */}

        <Text style={styles.text6}>{"บริการต่างๆ สำหรับการเดินทาง"}</Text>
        <View style={styles.row2}>
          <Image
            source={require('../img/carsport.png')} 
            resizeMode={"contain"}
            style={styles.image6}
          />
          <Text style={styles.text7}>{"เช่ารถเป็นรายชั่วโมง"}</Text>
        </View>

        <Text style={styles.text6}>{"เดินทางได้หลายวิธี"}</Text>
        <View style={styles.row3}>
          {[1, 2, 3, 4].map((_, index) => (
            <Image
              key={index}
              source={require('../img/17.png')} 
              resizeMode={"contain"}
              style={styles.image7}
            />
          ))}
        </View>

        <View style={styles.row4}>
          {[1, 2, 3, 4].map((_, index) => (
            <Text key={index} style={styles.text5}>
              {"สถานที่"}
            </Text>
          ))}
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
  absoluteInput: {
    color: "#000000",
    fontSize: 16,
    position: "absolute",
    bottom: -29,
    left: 64,
    width: 280,
    height: 58,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    paddingHorizontal: 23,
  },
  absoluteView: {
    position: "absolute",
    top: -29,
    right: -4,
    width: 79,
    height: 30,
    backgroundColor: "#00AC4C",
    borderRadius: 50,
    paddingHorizontal: 8,
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
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginBottom: 16,
    marginHorizontal: 6,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
  },
  // Add styles for other buttons similarly
  column: {
    marginBottom: 29,
  },
  column2: {
    width: 180,
    marginRight: 5,
  },
  column3: {
    width: 129,
  },
  column4: {
    width: 164,
    marginRight: 53,
  },
  image: {
    width: 30,
    height: 28,
    marginBottom: 47,
  },
  image2: {
    height: 150,
  },
  image3: {
    width: 18,
    height: 18,
    marginRight: 3,
  },
  image4: {
    width: 29,
    height: 29,
  },
  image5: {
    width: 26,
    height: 26,
  },
  image6: {
    width: 44,
    height: 45,
    marginRight: 30,
  },
  image7: {
    width: 54,
    height: 54,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#CCF0DA",
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E7FDCF",
    borderRadius: 25,
    paddingVertical: 11,
    paddingHorizontal: 42,
    marginBottom: 13,
    marginHorizontal: 17,
  },
  row3: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
    marginHorizontal: 30,
  },
  row4: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 39,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  text: {
    color: "#000000",
    fontSize: 20,
    marginBottom: 3,
    marginLeft: 16,
    fontWeight:'bold',
  },
  text2: {
    color: "#000000",
    fontSize: 16,
  },
  text3: {
    color: "#000000",
    fontSize: 16,
    flex: 1,
  },
  text4: {
    color: "#000000",
    fontSize: 14,
    marginBottom: 8,
  },
  text5: {
    color: "#000000",
    fontSize: 12,
  },
  text6: {
    color: "#000000",
    fontSize: 16,
    marginBottom: 17,
    marginLeft: 20,
  },
  text7: {
    color: "#000000",
    fontSize: 14,
    flex: 1,
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
});
