import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

import { MyAppBar } from '../../component/App';

import API from '../../api/api';

/**
 * ガチャ画面コンポーネント
 * @extends React.Component
 */
class Component extends React.Component {
  constructor(props, context) {
    super(props, context);
    const { params } = this.props.match;
    const id = parseInt(params.id, 10);
    const gacha = API.getGachaById(id);
    if (!gacha) {
      this.props.history.push('/search');
    }
    this.state = {
      gacha: gacha || { name: '' },
    };
    if (!this.state.gacha) {
      this.props.history.push('/search');
    }
  }

  /**
   * ガチャを回す関数を生成
   * @return {function} ガチャ回し関数
   */
  onRoll() {
    return () => {
      this.props.roll(this.state.gacha);
    };
  }

  /**
   * レンダリング
   * @return {Object} メイン画面
   */
  render() {
    return (
      <div>
        <MyAppBar Home />
        <br />
        <Grid container>
          <Grid item md={5} xs={12}>
            <Paper>
              <Button style={{ margin: '5px' }} size="large" variant="contained" color="primary" onClick={this.onRoll()}>
                {this.state.gacha.name}
              </Button>
            </Paper>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={5} xs={12}>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>回数</TableCell>
                    <TableCell >結果</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.results.map((r, i) => (
                    <TableRow key={i}>
                      <TableCell>{`${i + 1}回目`}</TableCell>
                      <TableCell>{r}</TableCell>
                    </TableRow>
                  )).reverse().slice(0, 20)}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(Component);
