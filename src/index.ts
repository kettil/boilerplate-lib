import { optionsType } from './lib/types';

export * from './lib/types';

/**
 *
 * @param param0
 */
export default function main({}: optionsType = {}): string {
  return 'hello world';
}
