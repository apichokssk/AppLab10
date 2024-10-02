import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Menu from "../component/Menu";
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView}>
				<View style={styles.dealContainer}>
					<View style={styles.header}>
						<Text style={styles.headerText}>
							{"ดีลกระหน่ำท้าฝนลด 50% \n ใส่รหัส ‘SUT’ ลดเพิ่ม 20%"}
						</Text>
						<Image
							source={require('../img/head.png')}  
							resizeMode = {"contain"}
							style={styles.headerImage}
						/>
					</View>

					<View style={styles.searchIconContainer}>
						<Image
							source={require('../img/scan.png')} 
							resizeMode = {"contain"}
							style={styles.searchIconImage}
						/>
					</View>

					<TextInput
						value={""}
						placeholder={"ค้นหาในแอป"}
						style={styles.textInput}
					/>
				</View>

				<View style={styles.categoryRow}>
						<Menu
							link="Car"
							icon="fast-food"
							description="อาหาร"
						/>
						<Menu
							link="Car"
							icon="car"
							description="เดินทาง"
						/>
						<Menu
							link="Shop"
							icon="cart"
							description="ร้านค้า"
						/>
						<Menu
							link="More"
							icon="apps"
							description="เพิ่มเติม"
						/>

				</View>

				<ScrollView horizontal style={styles.horizontalScroll}>
					<View style={styles.scrollItem}>
						<Text style={styles.scrollText}>{"ค้างชำระ"}</Text>
						<Text style={styles.scrollAmount}>{"฿ 281.00"}</Text>
					</View>
					<View style={styles.scrollItem}>
						<Text style={styles.scrollText}>{"ค้นหา"}</Text>
						<Text style={styles.scrollAmount}>{"โจ๊กใจดี"}</Text>
					</View>
					<View style={styles.scrollItem}>
						<Text style={styles.scrollText}>{"ให้คะแนน"}</Text>
						<Text style={styles.scrollAmount}>{"บะหมี่โหน่ง"}</Text>
					</View>
				</ScrollView>

				<ScrollView horizontal style={styles.horizontalScroll}>
					<View style={styles.largeScrollItem}>
						<Text style={styles.largeScrollText}>{"ส่งช่ารับเงินคืน"}</Text>
						<Image
							source={require('../img/ads1.jpg')} 
							resizeMode = {"contain"}
							style={styles.largeScrollImage}
						/>
						<Text style={styles.footerText}>{"ใช้โค้ด SUTDD ลด 25 บาท"}</Text>
					</View>
					<View style={styles.largeScrollItem}>
						<Text style={styles.largeScrollText}>{"ลองเลย"}</Text>
						<Image
							source={require('../img/ads2.jpg')} 
							resizeMode = {"contain"}
							style={styles.largeScrollImage}
						/>
						<Text style={styles.footerText}>{"ใหม่ล่าสุดดดด"}</Text>
					</View>
				</ScrollView>

			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	dealContainer: {
		marginBottom: 60,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "#00B04E",
		paddingTop: 68,
		paddingBottom: 53,
		paddingLeft: 33,
		paddingRight: 8,
	},
	headerText: {
		color: "#FFFFFF",
		fontSize: 20,
		marginTop: 10,
		width: 220,
	},
	headerImage: {
		width: 101,
		height: 71,
	},
	searchIconContainer: {
		position: "absolute",
		bottom: -39,
		left: 40,
		width: 58,
		height: 58,
		backgroundColor: "#FFFFFF",
		borderRadius: 5,
		paddingHorizontal: 11,
		shadowColor: "#00000040",
		shadowOpacity: 0.3,
		shadowOffset: { width: 0, height: 4 },
		shadowRadius: 4,
		elevation: 4,
	},
	searchIconImage: {
		height: 35,
		marginTop: 11,
		marginLeft:-27,
	},
	textInput: {
		color: "#000000",
		fontSize: 16,
		position: "absolute",
		bottom: -39,
		right: 25,
		width: 270,
		height: 58,
		backgroundColor: "#FFFFFF",
		borderRadius: 5,
		paddingHorizontal: 23,
	},
	categoryRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 28,
		marginHorizontal: 24,
	},
	categoryItem: {
		width: 56,
		alignSelf: "flex-start",
	},
	categoryImage: {
		height: 50,
		marginBottom: 6,
	},
	categoryText: {
		color: "#000000",
		fontSize: 16,
		marginLeft: 8,
	},
	horizontalScroll: {
		flexDirection: "row",
		marginBottom: 39,
		marginHorizontal: 16,
	},
	scrollItem: {
		width: 143,
		alignSelf: "flex-start",
		backgroundColor: "#D9D9D9",
		borderRadius: 10,
		padding: 11,
		marginRight: 7,
	},
	scrollText: {
		color: "#000000",
		fontSize: 16,
		marginBottom: 6,
	},
	scrollAmount: {
		color: "#000000",
		fontSize: 20,
	},
	largeScrollItem: {
		width: 219,
		alignSelf: "flex-start",
		marginRight: 21,
	},
	largeScrollText: {
		color: "#000000",
		fontSize: 20,
		marginBottom: 3,
	},
	largeScrollImage: {
		borderRadius: 10,
		height: 120,
		width:220
	},
	footer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 54,
		marginHorizontal: 1,
	},
	footerText: {
		color: "#000000",
		fontSize: 18,
	},
});
