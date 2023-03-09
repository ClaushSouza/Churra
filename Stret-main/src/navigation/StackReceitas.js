import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import MultiBaseScreen from '../screens/MultiBase';
import CarneBovina from '../screens/CarneBovina';
import CarneSuina from '../screens/CarneSuina';
import Frango from '../screens/Frango';
import Dicas from '../screens/Dicas';
import globalStyles from '../constants/globalStyles';

// components
import NavigationBack from '../components/NavigationBack';


const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MultiBase"
      component={MultiBaseScreen}
      options={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#5e260f' },
        title: 'Receitas'
      }}
    />
    <Stack.Screen
      name="CarneBovina"
      component={CarneBovina}
      options={{
        headerLeft: () => <NavigationBack />,
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#5e260f' },
        title: 'Receitas de Carne Bovina 🐮'
      }}
    />
    <Stack.Screen
      name="CarneSuina"
      component={CarneSuina}
      options={{
        headerLeft: () => <NavigationBack />,
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#5e260f' },
        title: 'Receitas de Carne Suína 🐷'
      }}
    />
    <Stack.Screen
      name="Frango"
      component={Frango}
      options={{
        headerLeft: () => <NavigationBack />,
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#5e260f' },
        title: 'Receitas de Frango 🐔'
      }}
    />
     <Stack.Screen
      name="Dicas"
      component={Dicas}
      options={{
        headerLeft: () => <NavigationBack />,
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#5e260f' },
        title: 'Dicas '
      }}
    />
  </Stack.Navigator>
);
