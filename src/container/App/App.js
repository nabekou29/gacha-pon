import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Create from '../Create/CreateContainer';
import Gacha from '../Gacha/GachaContainer';
import Search from '../Search/SearchContainer';

/**
 * ルーティングコンポーネント
 */
function Component() {
  return (
    <BrowserRouter>
      <Switch>
        {/* ガチャ作成画面 */}
        <Route exact path="/create" component={Create} />
        {/* ガチャ画面 */}
        <Route exact path="/gacha/:id" component={Gacha} />
        {/* サーチ画面 */}
        <Route exact path="/search" component={Search} />
        <Route path="/" component={() => <h1 style={{ color: '#8e8e8e' }}>404 Not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Component;
