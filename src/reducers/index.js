import { combineReducers } from 'redux';

import Create from './create';
import Gacha from './gacha';
import Search from './search';

/**
 * 全てのリデューサを集約したリデューサ
 * @type {Object}
 */
const reducer = combineReducers({
  Create: Create,
  Gacha: Gacha,
  Search: Search,
});

export default reducer;
