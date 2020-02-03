import { delay } from './helper/config';
import index from '../src';

/**
 *
 */
describe('Functional Testing', () => {
  /**
   *
   */
  test('it should be ...', async () => {
    await delay(250);

    expect(true).toBeTruthy();

    expect(index).toBe('');
  });
});
