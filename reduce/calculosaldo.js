const lista = [
        {

            preco: 4,
            nome: 'Farinha',
        },
        {
            preco: 38,
            nome: 'Cerveja',
        },
        {
            preco: 7,
            nome: 'Refrigerante',
        },
];

const saldoDisponivel = 230;

function calculoSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log('rodada', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculoSaldo(saldoDisponivel, lista));