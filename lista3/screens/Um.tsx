import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform, Alert } from 'react-native';

const VIDEO_ID = 'jfKfPfyJRdk';

export default function Um() {
    const openYouTube = async () => {
        const webUrl = `https://www.youtube.com/watch?v=${VIDEO_ID}`;

        // Se estiver em web, abre em nova aba/janela
        if (Platform.OS === 'web') {
            if (typeof window !== 'undefined' && window.open) {
                window.open(webUrl, '_blank');
            } else {
                // fallback para ambientes que implementam Linking mesmo no web
                Linking.openURL(webUrl).catch(() => {
                    Alert.alert('Erro', 'Não foi possível abrir o vídeo.');
                });
            }
            return;
        }

        // Para mobile, tenta abrir no app do YouTube; se não for possível, abre no navegador
        const appUrl = Platform.OS === 'ios'
            ? `youtube://watch?v=${VIDEO_ID}`
            : `vnd.youtube://watch?v=${VIDEO_ID}`;

        try {
            const canOpen = await Linking.canOpenURL(appUrl);
            if (canOpen) {
                await Linking.openURL(appUrl);
            } else {
                await Linking.openURL(webUrl);
            }
        } catch (error) {
            console.error('openYouTube error:', error);
            Alert.alert('Erro', 'Não foi possível abrir o vídeo.');
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={openYouTube} accessibilityLabel="Abrir vídeo no YouTube">
                <Text style={styles.buttonText}>Abrir</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#FF0000',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 6
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600'
    }
});