// import * as Action from '../actions/serch';

import API from '../api/api';

/**
 * ステータスの初期値を返します
 * @return {Object}     初期値
 */
const initialState = () => ({
  showGachas: API.getAllGacha(),
});

/**
 * ログイン画面のリデューサ
 * @param  {Object} [state=initialState] ログイン画面の状態
 * @param  {Object} action               アクション
 * @return {Object}                      ログイン画面の状態
 */
export default function reducer(state = initialState(), action) {
  const { type /* payload */ } = action;
  switch (type) {
    default:
      return { ...state };
  }
}
