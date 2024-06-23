import React, { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Colors, Fonts } from '@/shared/tokens';

type Props = {
	label: string;
	Icon: ReactNode;
	text: string;
	onRoute: () => void;
};

export const CommonField = ({ label, Icon, text, onRoute }: Props) => {
	return (
		<TouchableOpacity onPress={onRoute} style={styles.root}>
			{Icon}
			<View>
				<Text style={styles.label}>{label}</Text>
				<Text style={styles.text}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	root: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 18,
		paddingHorizontal: 20,
		borderBottomWidth: 1,
		borderBottomColor: Colors.delimiter,
	},
	label: {
		color: Colors.labelGray,
		fontSize: Fonts.f12,
		paddingBottom: 4,
	},
	text: {
		fontSize: Fonts.f14,
		fontFamily: Fonts.bold,
		color: Colors.black,
	},
});
