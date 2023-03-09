import * as React from 'react';
import { Image, ScrollView, Text, View, StyleSheet } from 'react-native';
import { gStyle, images } from '../constants';
// import MapView from 'react-native-maps';

const headerImage = __DEV__ ? 'rabbitDev' : 'rabbitProd';

const Localizacao = () => {
  const theme = 'light';

  return (
    <View>
      {/* <MapView /> */}
    </View>
  );
};

Localizacao.navigationOptions = ({ theme }) => {
  return {
    headerLeft: () => (
      <View style={[gStyle.headerBaseEnds, { paddingLeft: 16 }]}>
        <Text style={gStyle.text[theme]}>left</Text>
      </View>
    ),
    headerRight: () => (
      <View style={[gStyle.headerBaseEnds, { paddingRight: 16 }]}>
        <Text style={gStyle.text[theme]}>right</Text>
      </View>
    ),
    headerTitle: () => (
      <View style={{ flex: 1 }}>
        <Image
          style={{ alignSelf: 'center', height: 40, width: 40 }}
          source={images[headerImage]}
        />
      </View>
    )
  };
};



/*
// shoutout @notbrent: https://snack.expo.io/H105kxsG7
const shouldShowBackButton = stackRouteNavigation => {
  const parent = stackRouteNavigation.dangerouslyGetParent();
  return parent.state.routes.indexOf(stackRouteNavigation.state) > 0;
};

LocalizacaoScreen.navigationOptions = ({ navigation }) => ({

headerLeft: !shouldShowBackButton(navigation) ? (
  <View style={{ flex: 1 }}>
    <Text>left</Text>
  </View>
) : null,
*/

export default Localizacao;
