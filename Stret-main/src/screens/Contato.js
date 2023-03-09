import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { gStyle } from '../constants';

const Contato = () => {
  const theme = 'light';
  // ABA CONTATO

  return (
    <ScrollView
      contentContainerStyle={gStyle.contentContainer}
      style={gStyle.container[theme]}>
      <Text style={EmbaixadorStyle}>Fale com o Embaixador</Text>
      <Text style={GmailStyle}>✉️ Streetchurras@gmail.com</Text>
      <Text style={CelularStyle}>📱 +55 11 99194-5505 WhatsApp</Text>
      <Text style={GmailStyle}>🕠13h30 às 20h, Horário do Churrasco </Text>
    </ScrollView>
  );
};

const EmbaixadorStyle = {
  fontSize: 20,
  marginBottom: 80,
}

const CelularStyle = {
  fontSize: 20,
  marginBottom: 70,
}

const GmailStyle = {
  fontSize: 20,
  marginBottom: 90,
}

Contato.navigationOptions = {
  headerTitleStyle: gStyle.headerTitleStyle,
  title: 'Contato'
};

export default Contato;
