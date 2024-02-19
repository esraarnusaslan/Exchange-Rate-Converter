class Currency {
    constructor() {
        this.url =
            'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_vZs9hmPhzY6VCh8mDBoWIpX9ZE38z5zBWY4mCghn&base_currency=';
    }

    async exchange(amount, firstCurrency, secondCurrency) {
        const response = await fetch(`${this.url}${firstCurrency}`);
        const result = await response.json();
        const exchangeResult = amount * result.data[secondCurrency];

        return exchangeResult;
    }
}
