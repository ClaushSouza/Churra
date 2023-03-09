import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


// screens
import Localizacao from '../screens/Localizacao';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Localização" component={Localizacao} />
  </Stack.Navigator>
);
