import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';

import { CepProvider } from './src/contexts/CepContext';

import Um from './src/screens/Um';
import Dois from './src/screens/Dois';
import Tres from './src/screens/Tres';
import Quatro from './src/screens/Quatro';
import Cinco from './src/screens/Cinco';
import Seis from './src/screens/Seis';
import Sete from './src/screens/Sete';
import Oito from './src/screens/Oito';
import Nove from './src/screens/Nove';
import Dez from './src/screens/Dez';
import { RootStackParamList } from './src/types';
import ViaCEP from './src/screens/ViaCEP';
import Consultas from './src/screens/Consultas';

const Drawer = createDrawerNavigator<RootStackParamList>();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CepProvider>
        <NavigationContainer>
          <Drawer.Navigator
          initialRouteName="Um"
          screenOptions={({ route }) => ({
            headerLeft: () => <DrawerToggleButton />,
            drawerIcon: ({ color, size }) => {
              let iconName;
              
              switch (route.name) {
                case 'Um':
                  iconName = 'logo-windows' as const;
                  break;
                case 'Dois':
                  iconName = 'book' as const;
                  break;
                case 'Tres':
                  iconName = 'apps' as const;
                  break;
                case 'Quatro':
                  iconName = 'trending-up' as const;
                  break;
                case 'Cinco':
                  iconName = 'business' as const;
                  break;
                case 'Seis':
                  iconName = 'clipboard' as const;
                  break;
                case 'Sete':
                  iconName = 'calculator' as const;
                  break;
                case 'Oito':
                  iconName = 'finger-print' as const;
                  break;
                case 'Nove':
                  iconName = 'key' as const;
                  break;
                case 'Dez':
                  iconName = 'mail-open' as const;
                  break;
                case 'ViaCEP':
                  iconName = 'location' as const;
                  break;
                case 'Consultas':
                  iconName = 'search' as const;
                  break;
                default:
                  iconName = 'apps-outline' as const;
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Drawer.Screen name="Um" component={Um} options={{ title: 'Exercício 1' }} />
          <Drawer.Screen name="Dois" component={Dois} options={{ title: 'Exercício 2' }} />
          <Drawer.Screen name="Tres" component={Tres} options={{ title: 'Exercício 3' }} />
          <Drawer.Screen name="Quatro" component={Quatro} options={{ title: 'Exercício 4' }} />
          <Drawer.Screen name="Cinco" component={Cinco} options={{ title: 'Exercício 5' }} />
          <Drawer.Screen name="Seis" component={Seis} options={{ title: 'Exercício 6' }} />
          <Drawer.Screen name="Sete" component={Sete} options={{ title: 'Exercício 7' }} />
          <Drawer.Screen name="Oito" component={Oito} options={{ title: 'Exercício 8' }} />
          <Drawer.Screen name="Nove" component={Nove} options={{ title: 'Exercício 9' }} />
          <Drawer.Screen name="Dez" component={Dez} options={{ title: 'Exercício 10' }} />
          <Drawer.Screen name="ViaCEP" component={ViaCEP} options={{ title: 'Consulta ViaCEP' }} />
          <Drawer.Screen name="Consultas" component={Consultas} options={{ title: 'Consulta de CEP' }} />
        </Drawer.Navigator>
      </NavigationContainer>
      </CepProvider>
    </GestureHandlerRootView>
  );
}
