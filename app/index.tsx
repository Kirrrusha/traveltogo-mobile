import { Colors } from '@/shared/tokens';
import { SearchCard } from '@/widgets/SearchCard';
import { SafeAreaView, StyleSheet, View } from 'react-native';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.wrapper}>
				<SearchCard />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	wrapper: {
		flex: 1,
		backgroundColor: Colors.white,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
});
