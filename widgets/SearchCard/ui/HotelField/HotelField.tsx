import React from 'react';
import { StyleSheet } from 'react-native';

import Search from '@/assets/icons/search.svg';
import { useRouter } from 'expo-router';
import { CommonField } from '../CommonField/CommonField';

export const HotelField = () => {
	const router = useRouter();

	const navigateToRoute = () => {
		router.push('/destination');
	};

	return (
		<CommonField
			Icon={<Search style={styles.icon} />}
			label="Hotel"
			text="Where to?"
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
