import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Menu({ link, icon, description }) {
  const navigation = useNavigation();

  return (
    <View style={{ justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate(link)}>
        <View style={styles.iconBackground}>
          <Ionicons name={icon} size={30} color="#00B04E" />
        </View>
        <Text style={styles.text3}>
          {description}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text3: {
    color: "#000000",
    fontSize: 12,
    fontFamily: 'Kanit-Regular',
    textAlign: "center",
  },
  iconBackground: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#CCF0DA",
    justifyContent: 'center',
    alignItems: 'center',
  },
});
