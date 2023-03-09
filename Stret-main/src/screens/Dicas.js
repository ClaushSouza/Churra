import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import { gStyle } from '../constants';

const Dicas = () => {
  const theme = 'light';
  // ABA Dicas
  return (
    <ScrollView
      contentContainerStyle={gStyle.contentContainer}
      style={gStyle.container[theme]}
    >
      <View>
        <Text style={DicasStyles}>Dicas</Text>
        <Text style={ListinhaStyle}>1- Acenda o carvão de 30 a 40 minutos antes.</Text>
        <Text style={ListinhaStyle}>2- Lembre-se dos acompanhamentos ao fazer um churrasco.</Text>
        <Text style={ListinhaStyle}>3- Prepare alguns molhos para as carnes.</Text>
        <Text style={ListinhaStyle}>4- Use a técnica certa para assar as peças.</Text>
        <Text style={ListinhaStyle}>5- Nunca jogue água na churrasqueira.</Text>
        <Text style={ListinhaStyle}>6– Faça uma lista das carnes que não podem faltar.</Text>
      </View>
    </ScrollView>
  );
};
const DicasStyles = {
  marginBottom: 50,
  fontSize: 30,
}

const ListinhaStyle = {
  marginBottom: 50,
  fontSize: 20,
}

Dicas.navigationOptions = {
  headerTitleStyle: gStyle.headerTitleStyle,
  title: 'Dicas'
};

export default Dicas;
