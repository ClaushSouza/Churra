import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { gStyle } from '../constants';

const Resultado = () => {
  const theme = 'light';
  const route = useRoute();

  const { precoFinal, rateio } = route.params;

  return (
    <View style={gStyle.container[theme]}>
      <Text style={styles.title}>Resultado</Text>
      <View style={styles.resultadoContainer}>
        <Text style={styles.resultadoLabel}>Preço final:</Text>
        <Text style={styles.resultadoValue}>R$ {Number(precoFinal).toFixed(2)}</Text>
      </View>
      <View style={styles.resultadoContainer}>
        <Text style={styles.resultadoLabel}>Rateio por pessoa:</Text>
        <Text style={styles.resultadoValue}>R$ {Number(rateio).toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10
  },
  resultadoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  resultadoLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultadoValue: {
    fontSize: 18,
  },
});

export default Resultado;