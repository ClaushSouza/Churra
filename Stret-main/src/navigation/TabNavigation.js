import * as React from 'react';
import { Appearance } from 'react-native-appearance';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../constants';

// grabs stacks
import StackHome from './StackHome';
import StackReceitas from './StackReceitas';
import StackLocalizacao from './StackLocalizacao';
import StackProdutos from './StackProdutos';
import StackContato from './StackContato';

// icons
import SvgLocalizacao from '../icons/Svg.Localizacao';
import SvgHome from '../icons/Svg.Home';
import SvgReceitas from '../icons/Svg.Receitas';
import SvgContato from '../icons/Svg.Contato';
import SvgProdutos from '../icons/Svg.Produtos';

const Tab = createBottomTabNavigator();

// activeTintColor: {
//   light: colors.darkColor,
//   dark: colors.grey
// },
// inactiveTintColor: {
//   light: colors.grey,
//   dark: colors.white20
// }

export default () => {
  // get system preference
  const colorScheme = Appearance.getColorScheme();
  console.log('react-native-appearance::Appearance', colorScheme);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: '#e5b502',
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.inactiveWhite,
        tabBarStyle: {
          backgroundColor: '#7e0800',
          borderTopColor: '#5e260f'
        },
        tabBarItemStyle: {
          // backgroundColor: 'blue'
        }
      }}
    >
      <Tab.Screen
        name="StackHome"
        component={StackHome}
        options={{
          tabBarIcon: ({ focused }) => <SvgHome active={focused} />,
          tabBarLabel: 'Home'
        }}
      />
      <Tab.Screen
        name="StackMulti"
        component={StackReceitas}
        options={{
          tabBarIcon: ({ focused }) => <SvgReceitas active={focused} />,
          tabBarLabel: 'Receitas'
        }}
      />
      {/* <Tab.Screen
        name="StackStats"
        component={StackProdutos}
        options={{
          tabBarIcon: ({ focused }) => <SvgProdutos active={focused} />,
          tabBarLabel: 'Produtos'
        }}
      /> */}
       <Tab.Screen
        name="StackContato"
        component={StackContato}
        options={{
          tabBarIcon: ({ focused }) => <SvgContato active={focused} />,
          tabBarLabel: 'Contato'
        }}
      />
      <Tab.Screen
        name="StackSettings"
        component={StackLocalizacao}
        options={{
          tabBarIcon: ({ focused }) => <SvgLocalizacao active={focused} />,
          tabBarLabel: 'Localização'
        }}
      />
    </Tab.Navigator>
  );
};
