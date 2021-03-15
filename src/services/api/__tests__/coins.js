import http from '../../';
import { getCoins } from '../coins';

const successfulCoinsResponse = {
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

const unsuccessfulCoinsResponse = {
  status: {
    error_message: 'Bad day',
  },
};

describe('api calls', () => {
  it('should succeed fetching coins', async () => {
    http.get = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(successfulCoinsResponse),
    });

    const coins = await getCoins();

    expect(coins).toBeInstanceOf(Array);
    expect(coins[0]).toBeInstanceOf(Object);
    expect(coins[0]).toHaveProperty('price');
  });

  it('should fail fetching coins', async () => {
    http.get = jest.fn().mockRejectedValue({
      ok: false,
      json: () => Promise.resolve(unsuccessfulCoinsResponse),
    });

    expect.assertions(2);

    try {
      await getCoins();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(
        unsuccessfulCoinsResponse.status.error_message
      );
    }
  });
});
