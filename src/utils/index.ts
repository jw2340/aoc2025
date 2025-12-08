/**
 * Root for your util libraries.
 *
 * You can import them in the src/template/index.ts,
 * or in the specific file.
 *
 * Note that this repo uses ES Modules, so you have to explicitly specify
 * .js extension (yes, .js not .ts - even for TypeScript files)
 * for imports that are not imported from node_modules.
 *
 * For example:
 *
 *   correct:
 *
 *     import _ from 'lodash'
 *     import myLib from '../utils/myLib.js'
 *     import { myUtil } from '../utils/index.js'
 *
 *   incorrect:
 *
 *     import _ from 'lodash'
 *     import myLib from '../utils/myLib.ts'
 *     import { myUtil } from '../utils/index.ts'
 *
 *   also incorrect:
 *
 *     import _ from 'lodash'
 *     import myLib from '../utils/myLib'
 *     import { myUtil } from '../utils'
 *
 */

export const ADJ_COORDINATES = [
  { x: -1, y: 0 },
  { x: 1, y: 0 },
  { x: 0, y: -1 },
  { x: 0, y: 1 },
  { x: 1, y: -1 },
  { x: -1, y: 1 },
  { x: 1, y: 1 },
  { x: -1, y: -1 },
];

export const isValidCoordinate = (grid: string[][], i: number, j: number) => {
  if (i < 0 || i >= grid.length) return false;
  if (j < 0 || j >= grid[i].length) return false;
  return true;
};
