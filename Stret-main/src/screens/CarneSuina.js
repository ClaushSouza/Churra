import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import { View } from 'react-native-web';
import { gStyle } from '../constants';

const CarneSuina = () => {
  const theme = 'light';

  return (
    <ScrollView
      contentContainerStyle={gStyle.contentContainer}
      style={gStyle.container[theme]}
    >
      <Text style={gStyle.title}>Picanha Suína</Text>
      <Text style={gStyle.container}>
        <View>
          Para a receita você vai precisar de:

          - 1 picanha súina;
          - 150g de manteiga;
          - 1 colher (chá) de páprica picante defumada;
          - 1 colher (chá) de alho picado;
          - 1 colher (chá) de orégano fresco picado;
          - Sal Grosso;

          Modo de preparo:

          Com a manteiga em temperatura ambiente, misturar o alho picado, a páprica e o orégano;
          Reservar Cortar a picanha em fatias de 1,5 cm e temperar com sal grosso.Com o carvão em brasa,
          Grelhar a uma distância de 20 cm, colocar a picanha com a gordura voltada para baixo, apenas para formar uma crosta.
          Assar de 5 a 10 minutos, de acordo com o ponto desejado.Bater o excesso de sal e passar uma camada de manteiga de cada lado, com ajuda de um pincel.
        </View>
      </Text>
      <Text style={gStyle.title}>Paleta Suína</Text>
      <Text style={gStyle.container}>
        <View>
          Para a receita você vai precisar de:

          - 2 colheres de azeite ou óleo
          - 6 linguiças
          - 3 colheres de maionese
          - 3 colheres de requeijão – Dica: Como fazer requeijão caseiro (sem amido)
          - 6 dentes de alho
          - cheiro verde a gosto
          - Orégano a gosto
          - 150g de muçarela (pedaço)
          - 100g de parmesão ralado

          Modo de preparo:

          Em um refratário, junte a cebola bem picada, o alho moído, o suco dos limões e o sal.
          Após, junte a peça de paleta e distribua o tempero em ambos os lados.
          Tampe o refratário com papel filme e leve a geladeira por, cerca de, 2 horas.
          Após, asse por cerca de 1 hora e 30 minutos.
          O ideal é deixar na geladeira com tempero de um dia para outro.
        </View>
      </Text>
      <Text style={gStyle.title}>Linguiça</Text>
      <Text style={gStyle.container}>
        <View>
          Para a receita você vai precisar de:

          - 8 Linguiças toscana
          - 4 Queijos coalhos
          - Chimichurri Fresco (Para servir)

          Modo de preparo:

          Para iniciar a receita os queijos precisam estar congelados;
          Separe as linguiças a cada 2 gomos. Desenrole os gomos da linguiça para formar um gomo grande;
          Retire ¼ da massa da linguiça, para que sobre espaço para o queijo coalho;
          Com cuidado, coloque o queijo coalho dentro da linguiça, espalhando a massa da linguiça para que o queijo fique no centro da linguiça;
          Repita este processo nos demais;
          Com os espetos prontos, leve-os à churrasqueira, fogo médio, altura de 40 centímetros por aproximadamente 10 minutos.
          Quando as linguiças estiverem douradas, retire da churrasqueira e sirva com o chimichurri;
          O tempo de preparo depende do braseiro utilizado;
        </View>
      </Text>
    </ScrollView>
  );
};

export default CarneSuina;



