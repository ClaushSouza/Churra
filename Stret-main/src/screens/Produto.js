import React, { useState } from 'react';
import { Button, ScrollView, Text, StyleSheet } from 'react-native';
import { CheckBox, View } from 'react-native-web';
import { useRoute, useNavigation } from '@react-navigation/native';
import { gStyle } from '../constants';
import { ArrayCarnes } from './ArrayCarnes';

const Produtos = () => {
  const theme = 'light';
  // ABA PRODUTOS
  const route = useRoute();
  const navigation = useNavigation();

  console.log(ArrayCarnes);

  const { data } = route.params;
  console.log(data);

  const qtdConvidados = Number(data.qtdHomens) + Number(data.qtdMulheres) + Number(data.qtdCriancas);

  const [precoFinal, setPrecoFinal] = useState(0);
  const [rateio, setRateio] = useState(0);
  const [renderResultadoCalculo, setRenderResultadoCalculo] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const [titulo, setTitulo] = useState(ArrayCarnes);

  const handleCheck = (id) => {
    let temp = titulo.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    });
    setTitulo(temp);
    setSelectedItems(temp.filter((item) => item.checked));
  };

  const calcularResultado = () => {
    let tempPrecoFinal = 0;
    titulo.forEach((ti) => {
      if (ti.checked) {
        tempPrecoFinal += ti.preco;
      }
    });

    setPrecoFinal(tempPrecoFinal);
    setRateio(tempPrecoFinal / qtdConvidados);
    setRenderResultadoCalculo(true);
  };


  return (
    <ScrollView
      contentContainerStyle={gStyle.contentContainer}
      style={gStyle.container[theme]}
    >
      <Text style={styles.title}>{qtdConvidados} convidados</Text>
      <View style={styles.sumarioStyle}>
        <Text style={styles.sumarioTextStyle}>
          👨 Homens: {data.qtdHomens}
        </Text>
        <Text style={styles.sumarioTextStyle}>
          👩 Mulheres: {data.qtdMulheres}
        </Text>
        <Text style={styles.sumarioTextStyle}>
          👶 Crianças: {data.qtdCriancas}
        </Text>
      </View>
      <View>
        {titulo.map((item) => {
          return (
            <View key={item.id}>
              <Text style={styles.checkboxStyle}>
                <CheckBox
                  value={item.checked}
                  onValueChange={() => handleCheck(item.id)}
                />
                {item.carne} (R$ {item.preco})
              </Text>
            </View>
          );
        })}
      </View>
      <Button
        title="Calcular"
        onPress={() => {
          calcularResultado();
          navigation.navigate('Resultado', { precoFinal, rateio });
        }}        
        style={styles.buttonStyles}
      />
      <View>
        {renderResultadoCalculo && (
          <>
            <Text style={styles.labelPrecoFinalStyle}>Preço final</Text>
            <Text>R$ {Number(precoFinal).toFixed(2)}</Text>
          </>
        )}
        {renderResultadoCalculo && (
          <>
            <Text style={styles.labelPrecoFinalStyle}>
              Rateio por pessoa
            </Text>
            <Text>R$ {Number(rateio).toFixed(2)}</Text>
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sumarioStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 45
  },
  sumarioTextStyle: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 35
  },
  labelPrecoFinalStyle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 3
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  checkboxStyle: {
    flexDirection: "row",
    marginBottom: 7,
  },
  buttonStyles: {
    marginBottom: 5,
  },
});

export default Produtos;