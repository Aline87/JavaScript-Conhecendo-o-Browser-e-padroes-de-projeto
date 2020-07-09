class DateHelper {

    dataparatexto(data) {

        return data.getDate()
        "-" + (negociacao.data.getMonth() + 1) +
        "-" + negociacao.data.getFullYear();

    }


    textoParaData(texto) {
        return new Date(...texto.split('-')
            .map(function(item, indice) {
                return item - indice % 2;
            }));
    }
}