/**
 * アクションタイプ: ガチャを回す
 * @type {String}
 */
export const ROLL = 'ROLL';

/**
 * ガチャ回しアクションの生成
 * @param {Object} gacha ガチャ
 * @return {Object} アクション
 */
export function roll(gacha) {
  return {
    type: ROLL,
    payload: { gacha: gacha },
    meta: {},
  };
}
