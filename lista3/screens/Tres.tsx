import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert } from "react-native";

const INSTAGRAM_URL = "https://www.instagram.com/fatec_jacarei";

const openInstagram = async () => {
	try {
		const supported = await Linking.canOpenURL(INSTAGRAM_URL);
		if (supported) {
			await Linking.openURL(INSTAGRAM_URL);
		} else {
			Alert.alert("Erro", "Não foi possível abrir o link.");
		}
	} catch (error) {
		Alert.alert("Erro", "Ocorreu um problema ao tentar abrir o Instagram.");
	}
};

const Tres: React.FC = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={openInstagram}>
				<Text style={styles.buttonText}>Instagram da Fatec Jacareí</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Tres;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		backgroundColor: "#fff",
	},
	button: {
		backgroundColor: "#E1306C",
		paddingVertical: 14,
		paddingHorizontal: 18,
		borderRadius: 8,
	},
	buttonText: {
		color: "#fff",
		fontWeight: "600",
	},
});