import { CustomLink } from '@/shared/ui/CustomLink';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Fonts, Gaps } from '../shared/tokens';

export default function UnmatchedCustom() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.text}>
					Ооо... что-то пошло не так. Попробуйте вернуться на главный экран приложения
				</Text>
				<CustomLink href={'/main'} text="На главный экран" />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex: 1,
		padding: 55,
	},
	content: {
		alignItems: 'center',
		gap: Gaps.g50,
	},
	text: {
		color: Colors.black,
		fontSize: Fonts.f18,
		textAlign: 'center',
		fontFamily: Fonts.regular,
	},
});
