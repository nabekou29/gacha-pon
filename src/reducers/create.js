import * as Action from '../actions/create';

import API from '../api/api';

/**
 * ステータスの初期値を返します
 * @return {Object}     初期値
 */
const initialState = () => ({
  contentsNumber: 3,
});

/**
 * 画面のリデューサ
 * @param  {Object} [state=initialState] 画面の状態
 * @param  {Object} action               アクション
 * @return {Object}                      画面の状態
 */
export default function reducer(state = initialState(), action) {
  const { type, payload } = action;
  switch (type) {
    case Action.CREATE:
      console.log(payload.gacha);
      API.createGacha(payload.gacha);
      return {
        ...state,
      };
    case Action.ADD_CONTENTS:
      return {
        ...state,
        contentsNumber: state.contentsNumber + 1,
      };
    case Action.REMOVE_CONTENTS:
      return {
        ...state,
        contentsNumber: state.contentsNumber - 1 || 1,
      };
    default:
      return state;
  }
}
