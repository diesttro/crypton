import React from 'react';

const App = () => (
  <div className="container max-w-3xl mx-auto p-2">
    <div className="py-4">
      <h1 className="text-gray-200 text-center my-4">Crypton</h1>
    </div>
    <div className="py-6 w-full sm:w-4/6 mx-auto">
      <input
        className="w-full rounded-md bg-gray-200 px-5 py-3"
        type="text"
        placeholder="Look for a cryptocurrency"
      />
    </div>
    <div className="whitespace-no-wrap overflow-x-auto py-6">
      <table className="w-full rounded-md divide-y divide-gray-400 bg-gray-200">
        <thead>
          <tr>
            <th className="w-64">Name</th>
            <th className="w-40 text-right">Price</th>
            <th className="w-40 text-right">24h Change</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-400">
          <tr>
            <td>
              <div className="flex items-center">
                <img
                  className="w-8 h-8"
                  src="https://static.coincap.io/assets/icons/btc@2x.png"
                />
                <span className="ml-2">Bitcoin</span>
              </div>
            </td>
            <td className="text-right">$ 50819.53</td>
            <td className="text-right">0.69 %</td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center">
                <img
                  className="w-8 h-8"
                  src="https://static.coincap.io/assets/icons/btc@2x.png"
                />
                <span className="ml-2">Bitcoin</span>
              </div>
            </td>
            <td className="text-right">$ 50819.53</td>
            <td className="text-right">0.69 %</td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center">
                <img
                  className="w-8 h-8"
                  src="https://static.coincap.io/assets/icons/btc@2x.png"
                />
                <span className="ml-2">Bitcoin</span>
              </div>
            </td>
            <td className="text-right">$ 50819.53</td>
            <td className="text-right">0.69 %</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default App;
