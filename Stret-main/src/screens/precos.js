const gramasConsumoHomem = 600
const gramasConsumoMulher = 400
const gramasConsumoCrianca = 250

export const precos = [
    {
      type: 'carnes',
      nome: 'ContraFile',
      preco: 30.00
    },
    {
      type: 'carnes',
      nome: 'Maminha',
      preco: 49.00
    },
    {
      type: 'carnes',
      nome: 'Cupim',
      preco: 34.00
    },
    {
        type: 'carnes',
        nome: 'Linguica',
        preco: 16.00
    },
    {
        type: 'carnes',
        nome: 'CoxaDeFrango',
        preco: 11.00
    },
    {
        type: 'carnes',
        nome: 'ContraFile',
        preco: 45.96
    },
    {
        type: 'carnes',
        nome: 'Linguica',
        preco: 11.00
    },
    {
        type: 'carnes',
        nome: 'AsaDeFrango',
        preco: 14.00
    },
    {
        type: 'carnes',
        nome: 'CoracaoDeFrango',
        preco: 25.00
    },
  ]


export const formatarPreco = (preco=0) => {
    return Intl.NumberFormat('pt-BR',{
        style:'currency',
        currency:'BRL'
    }).format(preco)
} 

export const calcularQuiloCarnePorPessoa = (consumoPessoa, precoQuiloCarne, qtdPessoasGenero) => {
    return ((consumoPessoa * precoQuiloCarne) / 1000) * qtdPessoasGenero
}

export const calcularUnidadePorPessoa = (consumoPessoa, precoUnidade, qtdPessoasGenero) => {
    return ((consumoPessoa * precoUnidade) / 2000) * qtdPessoasGenero
}

const calcularPrecoTotal = (items) => {
    const selectedItems = items.filter(item=>item.checked === true)
    selectedItems.map(item=>{
        let total = 0
        if (item.hasOwnProperties('carnes')){}
    })
}

// function calcularResultadoFinal() {
//     var precoFinal = Number(valorFinalContraFile) + Number(valorFinalMaminha) + Number(valorFinalCupim) + Number(valorFinalCoxa) + Number(valorFinalCoracao) + Number(valorFinalAsa) + Number(valorFinalPicanha) + Number(valorFinalLinguica) + Number(valorFinalPaleta) + Number(valorFinalAgua) + Number(valorFinalRefrigerante) + Number(valorFinalCerveja) + Number(valorFinalSuco) + Number(valorFinalArroz) + Number(valorFinalFarofa) + Number(valorFinalPaodeAlho) + Number(valorFinalQueijoCoalho) + Number(valorFinalPaoFrances) + Number(valorFinalCarvao) + Number(valorFinalPrato) + Number(valorFinalTalheres) + Number(valorFinalGuardanapos) + Number(valorFinalCopos)
//     var rateio = Number(precoFinal) / Number(qtdConvidados);
//     return rateio.toFixed(2);
//     // setResultadoFinal();
// }