import { Text, View, SafeAreaView, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import React, { Component, useState } from 'react';
import COLORS from '../api/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import photos from '../api/photos';
import logo from '../assets/logo.png';


const width = Dimensions.get('window').width / 2 - 20;


const HomeScreen = ({navigation}) => {








	const [ catergoryIndex, setCategoryIndex ] = React.useState(0);

	// const [ catergoryName, setCategoryName ] = React.useState();

	const categories = [ 'FASHION', 'ELECTRONIC', 'BEAUTY', 'SPORTS' ];



	const CategoryList = () => {
		return (
			<View style={style.categoryContainer}>
				{categories.map((item, index) => (
					<TouchableOpacity key={index} activeOpacity={0.2} onPress={() => setCategoryIndex(index)}>
						<Text style={[ style.categoryText, catergoryIndex == index && style.categoryTextSelected ]}>
							{item}
						</Text>
					</TouchableOpacity>
				))}
			</View>
		);
	};










	const Card = ({ pins }) => {
		return (
			<TouchableOpacity onPress={() => navigation.navigate('Details', pins)}>
				<View style={style.pinsStyle}>
					<View style={{ alignItems: 'flex-end', zIndex: 2, position: 'absolute' }}>
						<View
							style={{
								width: 30,
								height: 30,
								borderRadius: 15,
								alignItems: 'center',
								justifyContent: 'center',
								borderColor: COLORS.white,
								backgroundColor: pins.like ? 'rgba(255, 255, 255,0.2)' : 'rgba(255, 255, 255,0.2)'
							}}
						>
							<Icon name="favorite" size={20} color={pins.like ? COLORS.red : COLORS.white} />
						</View>
					</View>

					<View style={{ height: 100, alignItems: 'center' }}>
						<Image source={pins.img} style={{ width, height: 180, borderRadius: 10 }} />
					</View>
					<Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 80, color: 'white' }}>{pins.name}</Text>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginTop: -4,
						}}
					>
						<Text style={{ color: 'white', fontSize: 19, fontWeight: 'bold' }}>RS {pins.price}/-</Text>
						<View
							style={{
								
								marginTop: -12,
								borderRadius: 30,
								height: 30,
								width: 30,
								backgroundColor: '#669999',
								justifyContent: 'center'						
							}}
						>
							<Text
								style={{
									marginTop:-5,
									textAlign: 'center',
									fontSize: 30,
									color: COLORS.white,
									fontWeight: 'bold'
								}}
							>
								+
							</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		);
	};









	return (
		<SafeAreaView
			style={{
				flex: 1,
				paddingHorizontal: 10,
				backgroundColor: COLORS.navy
			}}
		>
			<View style={style.header}>
				<View>
					<Text
						style={{
							marginLeft: 5,
							fontSize: 28,
							fontWeight: 'bold',
							color: COLORS.white,
							fontWeight: 'bold'
						}}
					>
						NERO-SHOPERS
					</Text>
				</View>
				<Icon name="map" size={28} color={COLORS.white} style={{ marginTop: 5, marginLeft: -100 }} />

				<Icon name="shopping-cart" size={25} color={COLORS.white} style={{ marginTop: 3 }} />
			</View>
			<View style={{ marginTop: 10, flexDirection: 'row' }}>
				<View style={style.searchContainer}>
					<Icon name="search" size={25} color={COLORS.white} style={{ marginLeft: 20, marginRight: 10 }} />
					<TextInput placeholder="Search" color={COLORS.white} selectionColor="white" style={style.input} />
				</View>
				<View style={style.sortBtn}>
					<Icon name="mic" size={30} color={COLORS.white} />
				</View>
			</View>

			<CategoryList />

			<FlatList
				columnWrapperStyle={{ justifyContent: 'space-between' }}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					marginTop: 10,
					paddingBottom: 50
				}}
				numColumns={2}
				data={photos}
				renderItem={({ item }) => <Card pins={item} />}
			/>
		</SafeAreaView>
	);
};

















const style = StyleSheet.create({
	header: {
		marginTop: 40,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	searchContainer: {
		height: 50,
		backgroundColor: COLORS.lightblue,
		borderRadius: 30,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	input: {
		fontSize: 20,
		fontWeight: 'bold',
		color: COLORS.white
	},
	sortBtn: {
		marginLeft: 10,
		height: 50,
		width: 50,
		borderRadius: 10,
		backgroundColor: COLORS.lightblue,
		justifyContent: 'center',
		alignItems: 'center'
	},
	categoryContainer: {
		flexDirection: 'row',
		marginTop: 20,
		marginBottom: 10,
		justifyContent: 'space-between',
		backgroundColor: COLORS.lightblue,
		borderRadius: 15
	},
	cateogoneTEext: {
		color: COLORS.white,
		fontSize: 15,
		margin: 10
	},
	categoryText: { color: COLORS.white, fontSize: 15, margin: 10 },
	categoryTextSelected: {
		paddingBottom: 5,
		borderBottomWidth: 2,
		borderColor: COLORS.white
	},
	pinsStyle: {
		height: 230,
		// backgroundColor: COLORS.lightblue,
		width,
		marginHorizontal: 2,
		borderRadius: 10,
		marginBottom: 20,
		padding: 10
	}
});




export default HomeScreen;
