import http from '../../';
import { getCoinList } from '../coins';

const coinsResponseMock = {
  data: [
    {
      slug: 'bitcoin',
      name: 'Bitcoin',
      metrcis: { market_data: { price_usd: 57443.07784610338 } },
    },
    {
      slug: 'cardano',
      name: 'Cardano',
      metrcis: { market_data: { price_usd: 1.064611017844477 } },
    },
    {
      slug: 'litecoin',
      name: 'Litecoin',
      metrcis: { market_data: { price_usd: 211.6879291986763 } },
    },
  ],
};

describe('api calls', () => {
  test('get coins', async () => {
    http.get = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(coinsResponseMock),
    });

    const coins = await getCoinList();

    expect(coins).toBeInstanceOf(Array);
    expect(coins[0]).toBeInstanceOf(Object);
    expect(coins[0]).toHaveProperty('price');
  });
});
