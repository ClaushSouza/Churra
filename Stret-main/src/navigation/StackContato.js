import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import Contato from '../screens/Contato';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Contato" component={Contato} />
  </Stack.Navigator>
);
