import * as React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';
import { gStyle } from '../constants';

// components
import Touch from '../components/Touch';

const MultiBase = ({ navigation }) => {
  const theme = 'light';

  return (
    <ScrollView
      contentContainerStyle={gStyle.contentContainer}
      style={gStyle.container[theme]}
    >
      <Text style={gStyle.text[theme]}>Segue algumas receitas deliciosas para o seu churrasco!</Text>

      <View style={gStyle.spacer64} />

      <Touch
        onPress={() => navigation.navigate('CarneBovina')}
        text="Carne Bovina 🐮"
      />
      <Touch
        onPress={() => navigation.navigate('CarneSuina')}
        text="Carne Suína 🐷"
      />
      <Touch
        onPress={() => navigation.navigate('Frango')}
        text="Frango 🐔"
      />

<Text style={gStyle.text[theme]}>{`\n\n\nDicas para deixar o churrasco ainda mais gostoso:`}</Text>     

<View style={gStyle.spacer32} />

<Touch
        onPress={() => navigation.navigate('Dicas')}
        text="Dicas"
      />

    </ScrollView>
  );
};

MultiBase.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default MultiBase;
