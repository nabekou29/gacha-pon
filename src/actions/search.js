/**
 * アクションタイプ: 検索
 * @type {String}
 */
export const SEARCH = 'SEARCH';

/**
 * 検索アクションの生成
 * @param {String} 検索文字列
 * @return {Object} アクション
 */
export function search(keywords) {
  return {
    type: SEARCH,
    payload: {
      keywords: keywords.split(' '),
    },
    meta: {},
  };
}
