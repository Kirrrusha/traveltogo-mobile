import { Colors } from '@/shared/tokens';
import { CustomLink } from '@/shared/ui/CustomLink';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Open up App.tsx to start working on your app!</Text>
			<CustomLink href="./destination" text="destination" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.white,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
