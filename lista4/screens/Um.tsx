import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ScreenOrientation from "expo-screen-orientation";
import Constants from "expo-constants";


const Orientation: React.FC = () => {
    const [mode, setMode] = useState("");
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
    


    // Ler a orientação atual
    const readOrientation = async () => {
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
    };
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: mode === 'portrait' ? '#FFA500' : '#1E90FF' }]}> 
            <Text style={styles.text}>Tela em modo {mode}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', // Centraliza o conteúdo horizontalmente
        paddingTop: Constants.statusBarHeight,
    }
    ,
    text: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600'
    }
});

export default Orientation;
