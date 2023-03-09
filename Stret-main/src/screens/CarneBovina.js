import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import { gStyle } from '../constants';

const CarneBovina = () => {
  const theme = 'light';

  return (
    <ScrollView
      contentContainerStyle={gStyle.contentContainer}
      style={gStyle.container[theme]}
    >
      <Text style={gStyle.title}>Maminha</Text>
      <Text style={gStyle.container}>
        <View>
          Para a receita você vai precisar de:

          - 1 kg de Maminha
          - Sal (a gosto)
          - Pimenta do Reino (a gosto)
          - 100 g de manteiga
          - 3 dentes de Alho

          Modo de preparo:

          Tempere a peça de maminha com o sal e a pimenta do reino;
          Leve a peça de maminha à churrasqueira, primeiro com o lado da gordura voltado para o braseiro, fogo brando, altura de 45 centímetros, apenas para selar todos os lados da peça.
          Descasque os dentes de alho e pique. Coloque-os em um recipiente, adicione o sal e macere;
          Acrescente a manteiga e a pimenta do reino, misture até formar uma pasta;
          Assim que a peça estiver selada, retire da churrasqueira e deixe-a descansar por 5 minutos. Após os 5 minutos, corte a peça em bifes de 3 centímetros de espessura.
          Leve os bifes à churrasqueira, tempere com sal (apenas o lado de cima dos bifes);
          Quando grelhar um lado, vire os bifes e acrescente a pasta de manteiga e alho;
          Quando os bifes estiverem grelhados, retire da churrasqueira e antes de cortar deixe descansar 5 minutos;
          Para servir corte em iscas e sirva com mais manteiga;
          Prato pronto é só servir e bom apetite! O tempo de preparo depende do braseiro utilizado;
          Vale lembrar que o fogo muito alto, vai dourar por fora e não vai assar por dentro;
        </View>
      </Text>
      <Text style={gStyle.title}>Cupim</Text>
      <Text style={gStyle.container}>
        <View>
          Para a receita você vai precisar de:

          - 1 peça de Cupim
          - Papel celofane
          - 2 limões
          - Sal a gosto

          Modo de preparo:

          Use algo afiado para fazer furos por toda superfície do cupim. Coloque em um espeto grande;
          Disponha em cima do papel celofane para temperar com suco de limão e sal. Embrulhe bem o cupim com o papel, dando várias voltas;
          Use tiras de papel celofane para amarrar as pontas, de forma a não perder nenhum líquido;
          Deixe na churrasqueira, mas tome cuidado para o fogo não chegar perto do papel celofane. Deixe assar por 3 horas, virando de lado algumas vezes;
          Retire da churrasqueira, aguarde esfriar um pouco e rasgue o papel. Desfie o cupim com auxílio de um garfo e está pronto.
        </View>
      </Text>
      <Text style={gStyle.title}>Contra filé</Text>
      <Text style={gStyle.container}>
        <View>
          Para a receita você vai precisar de:

          - 1 peça de contrafilé de 800g
          - 1 limão
          - Sal grosso a gosto
          - Espeto duplo para churrasco

          Modo de preparo:

          Tempere com o limão e o sal grosso.
          Deixe marinar por alguns minutos, espete a carne com um espeto duplo para churrasco e leve à churrasqueira em fogo brando.
          Quando a carne estiver dourada, retire da churrasqueira, fatie a parte dourada (com a carne ainda no espeto).
          A carne que ainda está no espeto (que está malpassada) deve ser salgada novamente e levada à churrasqueira para grelhar.
        </View>
      </Text>
    </ScrollView>
  );
};

export default CarneBovina;
