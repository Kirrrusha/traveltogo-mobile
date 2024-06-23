import Calendar from '@/assets/icons/calendar.svg';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { CommonField } from '../CommonField/CommonField';

export const CalendarField = () => {
	const router = useRouter();

	const navigateToRoute = () => {
		router.push('/calendar');
	};

	return (
		<CommonField
			Icon={<Calendar style={styles.icon} />}
			label="Check-in/out"
			text="Select dates"
			onRoute={navigateToRoute}
		/>
	);
};

const styles = StyleSheet.create({
	icon: {
		width: 24,
		height: 24,
		marginRight: 8,
	},
});
