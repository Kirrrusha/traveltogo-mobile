import { CustomLink } from '@/shared/ui/CustomLink';
import { StyleSheet, View } from 'react-native';

export default function Destination() {
	return (
		<View style={styles.container}>
			<CustomLink href="../" text="Dismiss" />
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
