import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ScreenOrientation from "expo-screen-orientation";
import portraitStyles from '../style/Portrait';
import landscapeStyles from '../style/Landscape';


const Cinco: React.FC = () => {
	const [mode, setMode] = useState("");
	const [topHeight, setTopHeight] = useState<number | undefined>(undefined);
	const [name, setName] = useState("");
	const [names, setNames] = useState<string[]>([]);

	// Ler a orientação atual
	async function readOrientation() {
		const orientation = await ScreenOrientation.getOrientationAsync();
		if (orientation === ScreenOrientation.Orientation.PORTRAIT_UP ||
			orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN
		) {
			setMode("portrait");
		} else if (
			orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
			orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT
		) {
			setMode("landscape");
		}
	}

	useEffect(() => {
		// Inicializa: desbloqueia rotação automática, lê orientação e adiciona listener
		let subscription: any = null;
		let mounted = true;
		async function init() {
			try {
				await ScreenOrientation.unlockAsync();
			} catch (e) {
				// não-fatal: se o dispositivo não suportar, continuamos
			}
			await readOrientation();
			subscription = ScreenOrientation.addOrientationChangeListener(
				({ orientationInfo }) => {
					if (
						orientationInfo.orientation === ScreenOrientation.Orientation.PORTRAIT_UP ||
						orientationInfo.orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN
					) {
						if (mounted) setMode("portrait");
					} else if (
						orientationInfo.orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
						orientationInfo.orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT
					) {
						if (mounted) setMode("landscape");
					}
				}
			);
		}
		init();
		// Limpa o listener quando o componente for desmontado
		return () => {
			mounted = false;
			if (subscription) {
				ScreenOrientation.removeOrientationChangeListener(subscription);
			}
		};
	}, []);
	const activeStyles = mode === 'portrait' ? portraitStyles : landscapeStyles;

	return (



		<SafeAreaView
			style={[
				activeStyles.container,
				{ flexDirection: 'column' },
			]}
		>
			<View style={activeStyles.top}>
				<Text style={activeStyles.title}>Exercício 5</Text>
			</View>

			<View style={activeStyles.contentbottom}>
				{/* left column: input (middle) */}
				<View style={activeStyles.middle}>
					<TextInput
						style={{
							borderWidth: 1,
							borderColor: '#999',
							padding: 8,
							marginTop: 8,
							width: '100%',
							backgroundColor: '#fff',
						}}
						placeholder="Nome completo"
						value={name}
						onChangeText={setName}
						returnKeyType="done"
						blurOnSubmit={true}
						onSubmitEditing={() => {
							const trimmed = name.trim();
							if (trimmed.length > 0) {
								setNames(prev => [trimmed, ...prev]);
								setName("");
							}
						}}
					/>
				</View>
				{/* right column: list (bottom) */}
				<View style={activeStyles.bottom}>
					<ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 8 }} keyboardShouldPersistTaps="handled">
						{names.map((n, i) => (
							<View key={i} style={{ padding: 8, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
								<Text>{n}</Text>
							</View>
						))}
					</ScrollView>
				</View>
			</View>


		</SafeAreaView>


	);

};

export default Cinco;