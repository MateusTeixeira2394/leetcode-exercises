function maxProfit(prices: number[]): number {

    let profit: number = 0;

    let i: number = 0;

    while (i < prices.length) {

        let j: number = i + 1;

        while (prices[j] && prices[j] > prices[i]) {

            let newProfit: number = prices[j] - prices[i];

            if (newProfit > profit) {
                profit = newProfit;
            }

            j++;

        }

        i++;

    };

    return profit;

};