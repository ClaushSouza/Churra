import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import Produtos from '../screens/Produto';
import Resultado from '../screens/Resultado';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Produtos" component={Produtos} />
    <Stack.Screen name="Resultado" component={Resultado} />
  </Stack.Navigator>
);
