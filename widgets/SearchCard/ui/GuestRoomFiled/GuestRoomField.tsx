import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

import Bed from '@/assets/icons/bed.svg';

import { CommonField } from '../CommonField/CommonField';

export const GuestRoomField = () => {
	const router = useRouter();

	const navigateToRoute = () => {
		router.push('/guest_room');
	};

	return (
		<CommonField
			Icon={<Bed style={styles.icon} />}
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
