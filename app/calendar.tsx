import { CustomLink } from '@/shared/ui/CustomLink';
import { StyleSheet, View } from 'react-native';

export default function Calendar() {
	return (
		<View style={styles.container}>
			<CustomLink href="../" text="Calendar" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
