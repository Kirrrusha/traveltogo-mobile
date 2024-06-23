import { Colors, Radius } from '@/shared/tokens';
import { Button } from '@/shared/ui/Button';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CalendarField } from './ui/CalendarField/CalendarField';
import { GuestRoomField } from './ui/GuestRoomFiled/GuestRoomField';
import { HotelField } from './ui/HotelField/HotelField';

export const SearchCard = () => {
	return (
		<View style={styles.container}>
			<HotelField />
			<CalendarField />
			<GuestRoomField />
			<Button text="Найти" style={styles.button} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '90%',
		backgroundColor: Colors.white,
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		shadowColor: Colors.black,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
		borderRadius: Radius.r12,
	},
	button: {
		width: '100%',
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		borderBottomLeftRadius: Radius.r12,
		borderBottomRightRadius: Radius.r12,
	},
});
