import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Button,
  Grid,
  Paper,
} from '@material-ui/core';

import GachaList from './GachaList';
import { MyAppBar } from '../../component/App';

/**
 * 検索画面コンポーネント
 * @extends React.Component
 */
class Component extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  // /**
  //  * ステートをセットする関数を生成
  //  * @return {function} ステートセット関数
  //  */
  // onSetState() {
  //   return (e) => {
  //     const { value, name } = e.target;
  //     const state = { ...this.state };
  //     state[name] = value;
  //     this.setState(state);
  //   };
  // }

  /**
   * レンダリング
   * @return {Object} メイン画面
   */
  render() {
    return (
      <div>
        <MyAppBar Home />
        <br />
        <Button href="/create">
          <div style={{ color: '#4fa5ff' }}>ガチャを作成</div>
        </Button>
        <Paper style={{ backgroundColor: '#f0f0f0' }}>
          <Grid container>
            <Grid item xs={1} />
            <Grid item xs={10}>
              <GachaList Gachas={this.props.showGachas} />
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withRouter(Component);
