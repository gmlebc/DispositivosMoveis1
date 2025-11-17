import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform, Alert } from 'react-native';

// Substitua pelo número desejado (inclua código do país se quiser)
const PHONE_NUMBER = '+5512988862800';

export default function Dois() {
	const openDialer = async () => {
		const url = `tel:${PHONE_NUMBER}`;

		// No web, tente abrir em nova aba (alguns navegadores não permitem)
		if (Platform.OS === 'web') {
			try {
				if (typeof window !== 'undefined' && window.open) {
					window.open(url, '_self');
					return;
				}
			} catch (e) {
				// segue para o fallback do Linking
			}
		}

		try {
			const canOpen = await Linking.canOpenURL(url);
			if (canOpen) {
				await Linking.openURL(url);
			} else {
				Alert.alert('Erro', 'Não foi possível abrir a interface de discagem.');
			}
		} catch (error) {
			console.error('openDialer error:', error);
			Alert.alert('Erro', 'Ocorreu um erro ao tentar abrir a discagem.');
		}
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={openDialer} accessibilityLabel="Abrir discador">
				<Text style={styles.buttonText}>Ligar para {PHONE_NUMBER}</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
	},
	button: {
		backgroundColor: '#007AFF',
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 8,
	},
	buttonText: {
		color: '#fff',
		fontWeight: '600',
	},
});

