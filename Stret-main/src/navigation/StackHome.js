import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import globalStyles from '../constants/globalStyles';

// screens
import HomeScreen from '../screens/Home';
import Produtos from '../screens/Produto';
import Resultado from '../screens/Resultado';


const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#5e260f' },
        title: 'StreeT Churras'
      }}
    />
    <Stack.Screen
      name="Produtos"
      component={Produtos}
    />
    <Stack.Screen
      name="Resultado"
      component={Resultado}
    />
  </Stack.Navigator>

  
);


