import { mapCoins, findCoin, filterCoins } from '../coins';

const coinsMock = [
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
];

describe('map coins', () => {
  it('should map and format coins from a list of coins', () => {
    const mappedCoins = mapCoins(coinsMock);

    expect(mappedCoins).toBeInstanceOf(Array);
    expect(mappedCoins).toHaveLength(3);
    expect(mappedCoins[0]).toHaveProperty('price');
  });
});

describe('find coin', () => {
  it('should find coin with same slug from a list of coins', () => {
    const slug = 'cardano';
    const foundCoin = findCoin(slug, coinsMock);

    expect(foundCoin).toBeDefined();
    expect(foundCoin).toBeInstanceOf(Object);
    expect(foundCoin.slug).toBe(slug);
  });
});

describe('filter coins', () => {
  it('should filter coins with same name from a list of coins', () => {
    const search = 'coin';
    const filteredCoins = filterCoins(search, coinsMock);

    expect(filteredCoins).toBeInstanceOf(Array);
    expect(filteredCoins).toHaveLength(2);
    expect(filteredCoins[0].name).toMatch(search);
  });
});
