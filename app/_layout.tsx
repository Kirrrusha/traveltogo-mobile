import { Colors } from '@/shared/tokens';
import { Notification } from '@/shared/ui/Notification';
import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		Inter_400Regular,
		Inter_700Bold,
	});

	useEffect(() => {
		if (error) {
			throw error;
		}
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<SafeAreaProvider>
			<Notification />
			<StatusBar style="auto" />
			<Stack
				screenOptions={{
					statusBarColor: Colors.white,
					contentStyle: {
						backgroundColor: Colors.white,
					},
					headerShown: false,
				}}
			>
				<Stack.Screen name="index" />
				<Stack.Screen
					name="destination"
					options={{
						presentation: 'modal',
					}}
				/>
				<Stack.Screen
					name="calendar"
					options={{
						presentation: 'modal',
					}}
				/>
				<Stack.Screen
					name="guest_room"
					options={{
						presentation: 'modal',
					}}
				/>
			</Stack>
		</SafeAreaProvider>
	);
}
