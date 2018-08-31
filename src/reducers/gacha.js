import * as Action from '../actions/gacha';

/**
 * ステータスの初期値を返します
 * @return {Object}     初期値
 */
const initialState = () => ({
  results: [],
});

function roll(contents) {
  const index = Math.floor(Math.random() * contents.length);
  return contents[index];
}

/**
 * 画面のリデューサ
 * @param  {Object} [state=initialState] ログイン画面の状態
 * @param  {Object} action               アクション
 * @return {Object}                      ログイン画面の状態
 */
export default function reducer(state = initialState(), action) {
  const { type, payload } = action;
  switch (type) {
    case Action.ROLL:
      return {
        ...state,
        results: state.results.concat(roll(payload.gacha.contents)),
      };
    default:
      return state;
  }
}
