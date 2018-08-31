export const CREATE = 'CREATE';
export const ADD_CONTENTS = 'ADD_CONTENTS';
export const REMOVE_CONTENTS = 'REMOVE_CONTENTS';

/**
 * ガチャ作成アクションの生成
 * @param {Object} gacha ガチャ
 * @return {Object} アクション
 */
export function create(gacha) {
  return {
    type: CREATE,
    payload: { gacha: gacha },
    meta: {},
  };
}


/**
 * ガチャの中身追加アクションの生成
 * @return {Object} アクション
 */
export function addContents() {
  return {
    type: ADD_CONTENTS,
    payload: {},
    meta: {},
  };
}

/**
 * ガチャの中身削除アクションの生成
 * @return {Object} アクション
 */
export function removeContents() {
  return {
    type: REMOVE_CONTENTS,
    payload: {},
    meta: {},
  };
}
