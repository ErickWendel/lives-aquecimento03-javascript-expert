(() => {
    const currencyFormat = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })

    class CurrencyManager {
        static format(valor) {
            return currencyFormat.format(valor)
        }
    }

    window.CurrencyManager = CurrencyManager
})();