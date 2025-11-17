import React, { useState } from "react";
import { Image, View, StyleSheet, TouchableOpacity, Alert, Platform } from "react-native";
import Constants from "expo-constants";
// Instale com: expo install expo-image-picker @expo/vector-icons
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from '@expo/vector-icons';

export default function Galeria() {
	const [image, setImage] = useState<string | null>(null);

	const openGallery = async () => {
		// Pede permissão para a galeria (media library)
		const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (status !== 'granted') {
			Alert.alert('Permissão necessária', 'Permissão para acessar a galeria é necessária.');
			return;
		}

		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	const openCamera = async () => {
		// Pede permissão para a câmera
		const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
		if (cameraStatus !== 'granted') {
			Alert.alert('Permissão necessária', 'Permissão para usar a câmera é necessária.');
			return;
		}

		const result = await ImagePicker.launchCameraAsync({
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	return (
		<View style={styles.container}>
			{/* Botões no canto superior direito */}
			<View style={styles.topRightButtons} pointerEvents="box-none">
				<TouchableOpacity onPress={openGallery} style={styles.iconButton} accessibilityLabel="Abrir galeria">
					<MaterialIcons name="photo" size={28} color="deepskyblue" />
				</TouchableOpacity>
				<TouchableOpacity onPress={openCamera} style={styles.iconButton} accessibilityLabel="Abrir câmera">
					<MaterialIcons name="photo-camera" size={28} color="deepskyblue" />
				</TouchableOpacity>
			</View>

			<View style={styles.content}>
				{image ? <Image source={{ uri: image }} style={styles.image} /> : null}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
		backgroundColor: "#222",
	},
	topRightButtons: {
		position: 'absolute',
		top: (Constants.statusBarHeight || 0) + 8,
		right: 12,
		flexDirection: 'row',
		zIndex: 10,
	},
	iconButton: {
		padding: 8,
		marginLeft: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 16,
	},
	image: {
		width: 300,
		height: 300,
		marginTop: 20,
	},
});
