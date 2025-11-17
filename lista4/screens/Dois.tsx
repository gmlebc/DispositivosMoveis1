import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ScreenOrientation from "expo-screen-orientation";
import Constants from "expo-constants";
import portraitStyles from '../style/Portrait';
import landscapeStyles from '../style/Landscape';


const Orientation: React.FC = () => {
	const [mode, setMode] = useState("");

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
				{ flexDirection: mode === 'portrait' ? 'column' : 'row' },
			]}
		>
			<View style={activeStyles.top}>
				<Text>Top</Text>
			</View>
			<View style={activeStyles.middle}>
				<Text>Middle</Text>
			</View>
			<View style={activeStyles.bottom}>
				<Text>Bottom</Text>
			</View>
		</SafeAreaView>


	);

};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
	},
	top: {
		flex: 1,
		justifyContent: "center",
		alignItems: 'center',
		backgroundColor: '#FFA07A',
	},
	middle: {
		flex: 1,
		justifyContent: "center",
		alignItems: 'center',
		backgroundColor: '#F08080',
	},
	bottom: {
		flex: 1,
		justifyContent: "center",
		alignItems: 'center',
		backgroundColor: '#FF6347',
	}
});

export default Orientation;
