/* eslint-disable jest/valid-expect-in-promise */
import '@testing-library/jest-dom/extend-expect';
import { getListCoins } from '@utils/function/api/coin';

describe('getListCoins', () => {
  test('get getListCoins', done => {
    getListCoins(0, 10).then(res => {
      expect(JSON.stringify(res).length).toBeGreaterThan(0);
      done();
    });
  });
});
