import * as React from 'react';
import { createStackNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

import HomeScreen from './src/components/HomeScreen';
import DetailScreen from './src/components/DetailScreen';
import COLORS from './src/api/colors';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>

			<StatusBar barStyle="light-content" backgroundColor={COLORS.navy}  />

			<Stack.Navigator screenOptions={{ header: () => null }}>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Details" component={DetailScreen} />
			</Stack.Navigator>

			
		</NavigationContainer>
	);
}
