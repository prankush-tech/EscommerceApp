import { Text, View, SafeAreaView, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import React, { Component } from 'react';
import COLORS from '../api/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import photos from '../api/photos';
import logo from '../assets/logo.png';

const DetailScreen = ({ navigation, route }) => {
	const pins = route.params;

	return (
		<SafeAreaView
			style={{
				flex: 1,
				paddingHorizontal: 10,
				backgroundColor: COLORS.navy
			}}
		>
			<View style={style.header}>
				<Icon name="arrow-back" color="white" size={28} onPress={() => navigation.goBack()} />
				<Icon name="shopping-cart" color="white" size={28} />
			</View>
			<View style={style.imageContainer}>
				<Image source={pins.img} style={{ resizeMode: 'contain', flex: 1 }} />
			</View>
			<View style={style.detailsContainer}>
				<View
					style={{
						marginLeft: 30,
						flexDirection: 'row',
						alignItems: 'flex-end'
					}}
				>
					<View
						style={{
							marginLeft: -10,
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center'
						}}
					>
						<Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{pins.name}</Text>

						<Text
							style={{
								marginLeft: 20,
								color: COLORS.white,
								fontWeight: 'bold',
								fontSize: 20
							}}
						>
							RS {pins.price}/-
						</Text>

						<View style={style.buyBtn}>
							<Text style={{ color: COLORS.white, fontSize: 15, fontWeight: 'bold' }}>Buy NOW</Text>
						</View>
					</View>
				</View>
				<View style={{ paddingHorizontal: 20, marginTop: -1 }}>
					<View
						style={{
							// marginLeft: -20,
							flexDirection: 'row',
							
							// justifyContent: 'space-between'
						}}
					>
						<Text style={{ marginRight:70,fontSize: 20, color: 'white', fontWeight: 'bold' }}>About</Text>
						<View style={style.borderBtn}>
							<Text style={style.borderBtnText}>-</Text>
						</View>
						<Text
							style={{
								fontSize: 20,
								marginHorizontal: 10,
								fontWeight: 'bold',
								color:'white',
							}}
						>
							1
						</Text>
						<View style={style.borderBtn}>
							<Text style={style.borderBtnText}>+</Text>
						</View>
					</View>

					<Text
						style={{
							color: 'white',
							fontSize: 15,
							marginTop:10,
							lineHeight: 20
						}}
					>
						{pins.about}
					</Text>
				</View>
			</View>
			<View />
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	header: {
		marginTop: 40,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	imageContainer: {
		flex: 0.6,
		marginTop: 5,
		justifyContent: 'center',
		alignItems: 'center'
	},
	detailsContainer: {
		flex: 0.35,
		marginLeft: 15,
		marginRight: 15,
		backgroundColor: COLORS.lightblue,
		marginBottom: 1,
		borderRadius: 20,
		marginTop: 5,
		paddingTop: 10
	},

	buyBtn: {
		borderRadius: 30,
		marginTop: 1,
		marginLeft: 10,
		width: 100,
		height: 40,
		backgroundColor: COLORS.navy,
		justifyContent: 'center',
		alignItems: 'center'
	},
	borderBtn: {
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		width: 40,
		height: 30
	},
	borderBtnText: { fontWeight: 'bold',color:'white', fontSize: 21 }
});

export default DetailScreen;
