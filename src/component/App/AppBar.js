import React from 'react';
import {
  AppBar,
  Button,
  Toolbar,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

/**
 * ナビゲーションバーを生成
 * @param  {boolean} Home ホームアイコンを表示するか
 * @return {Object}       ナビゲーションバー
 */
export function MyAppBar({ Home }) {
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          {Home &&
            <Button color="inherit" href="/search">
              <HomeIcon color="inherit" style={{ fontSize: 25 }} />
              Home
            </Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
