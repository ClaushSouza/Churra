import { CurrentRenderContext } from '@react-navigation/native';
import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import { gStyle } from '../constants';

const Frango = () => {
  const theme = 'light';

  return (
    <ScrollView
      contentContainerStyle={gStyle.contentContainer}
    >
      <Text style={gStyle.title}>Coxa de frango</Text>
      <Text style={gStyle.container}>
        Para a receita você vai precisar de:

        - Coxas de frango
        - Cerveja
        - Temperos
        - Açúcar mascavo
        - Ervas
        - Bacon defumado

        Modo de preparo:

        Numa bacia ou tigela grande, misture bem o azeite, cerveja, temperos, açúcar e ervas, exceto o bacon.
        Transfira ⅔ de tudo para uma (ou mais) bolsa plástica grande (ziploc) e a outra metade para um recipiente fechado.
        Coloque as coxas de frango dentro da bolsa e agite para a marinada misturar com o frango.
        Retire o ar o máximo possível e feche a(s) bolsa(s).
        Ponha a(s) bolsa(s) plástica(s) dentro de uma tigela grande limpa e refrigere por pelo menos de 2 até 8 horas, virando cada bolsa plástica pelo menos uma vez para que as outras partes das coxas possam tomar gosto.
        Passado esse tempo, remova as coxas das sacolas plásticas e ponha numa forma, retirando o excesso de orégano de cima para que não queime durante o processo de grelhar.
        Enxugue-as com papel toalha.
        Ponha o carvão e acenda o fogo da grelha de acordo com as instruções do fabricante, deixando esquentar por 30 minutos antes de começar a grelhar o frango.
        Enrole uma tira de bacon em cada coxa de frango e enfie as coxas no espeto de churrasco uma a uma, deixando um espaço entre o cabo de madeira e a primeira coxa de frango.
        Ponha o espeto na lateral (ao invés de pôr no centro) da grelha à carvão para prevenir de queimar a carne.
        Abaixe a tampa da grelha e deixe cozinhar por 5 minutos.
        Vire o espeto e cozinhe por mais 10 ou 15 minutos.
        Não esqueça de pincelar a carne com a marinada reservada nesse meio-tempo.
        Não use esse líquido no 5 minutos anteriores ao término do cozimento.
        Cheque uma das coxas para ter certeza que esta totalmente cozida.
      </Text>
      <Text style={gStyle.title}>Coração</Text>
      <Text style={gStyle.container}>
        {`

          Para a receita você vai precisar de:

            - 1kg de coração de frango
            - 8 folhas de louro
            - 1 e 1/2 colheres de sopa de orégano
            - 1 e 1/2 colheres de sopa de shoyo
            - 1 colher de sopa de tempero pronto para carne
            - 1 colher de sopa de pimenta moída
            - 1 colher de sopa de manteiga
            - 1 copo de água morna
          
          Modo de preparo:

            Limpe os corações primeiro.
            Retire o grosso da gordura saturada e as veias mais grossas.
            Cuide para retirar qualquer resquício de sangue coagulado.
            Deixe um pouco da gordura.
            Dissolva a manteiga na água morna.
            Coloque os corações numa tigela e adicione o restante dos ingredientes.
            Misture bem (usando as mãos mesmo) e cubra, selando bem com plástico filme (PVC).
            Deixar na geladeira de um dia para o outro, para o tempero penetrar bem.
            Retirar e fazer espetinhos na hora de colocar no fogo.

       `}

        <Text style={gStyle.title}>Asinha de frango</Text>
        <Text style={gStyle.container}>
          {`

            Para a receita você vai precisar de:

            - 1kg de asinhas de frango com coxinhas ou Tulipas
            - Sal
            - Pimenta rosa
            - Meio maço de salsinha
            - Suco de 1 limão

            Modo de preparo:

            No liquidificado coloque todos os ingredientes, menos o suco do limão
            bata até ficar bem pastoso.
            Limpe as asinhas.
            Passe o suco de limão.
            Em uma vasilha coloque as asinhas e a mistura.
            Deixe descansar por 2 horas.
            Pode assar na churrasqueira.

       `}
        </Text>
      </Text>
    </ScrollView>
  );
};

const FrangoStyles = {
  fontSize: 15,
  marginBottom: 20,
}

const FrangoEstilos = {
  fontSize: 15,
}

const ModoPreparo = {
  fontSize: 15,
}

const ViewStyles = {
  fontSize: 20,
}


export default Frango;
