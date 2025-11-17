import React, { useState } from "react";
import { Image, View, StyleSheet, TouchableOpacity, Alert, Platform, ScrollView } from "react-native";
import Constants from "expo-constants";
// Instale com: expo install expo-image-picker @expo/vector-icons
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from '@expo/vector-icons';

export default function Galeria() {
	const [images, setImages] = useState<string[]>([]);

	const removeImage = (index: number) => {
		setImages(prev => prev.filter((_, i) => i !== index));
	};

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
			const uris = result.assets.map(a => a.uri).filter(Boolean) as string[];
			setImages(prev => [...prev, ...uris]);
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
			const uris = result.assets.map(a => a.uri).filter(Boolean) as string[];
			setImages(prev => [...prev, ...uris]);
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
				<ScrollView contentContainerStyle={styles.scrollContent}>
					{images.length === 0 ? null : (
						images.map((uri, idx) => (
							<View key={idx} style={styles.thumbWrapper}>
								<TouchableOpacity
									style={styles.closeButton}
									onPress={() => removeImage(idx)}
									accessibilityLabel="Remover imagem"
								>
									<MaterialIcons name="close" size={18} color="#fff" />
								</TouchableOpacity>
								<Image source={{ uri }} style={styles.imageThumb} />
							</View>
						))
					)}
				</ScrollView>
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
	scrollContent: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		paddingVertical: 12,
	},
	image: {
		width: 600,
		height: 600,
		marginTop: 20,
	},
	imageThumb: {
		width: 240,
		height: 240,
		margin: 6,
		borderRadius: 8,
	},
	thumbWrapper: {
		position: 'relative',
		width: 240,
		height: 240,
		margin: 6,
		borderRadius: 8,
		overflow: 'hidden',
	},
	closeButton: {
		position: 'absolute',
		top: 6,
		left: 6,
		zIndex: 5,
		backgroundColor: 'rgba(0,0,0,0.5)',
		borderRadius: 14,
		padding: 3,
	},
});
