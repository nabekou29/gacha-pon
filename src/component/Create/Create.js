import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Button,
  Grid,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  Paper,
  TextField,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

import { MyAppBar } from '../../component/App';

/**
 * ガチャ画面コンポーネント
 * @extends React.Component
 */
class Component extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '',
      note: '',
      contents: [],
    };
  }

  /**
   * ステートをセットする関数を生成
   * @return {function} ステートセット関数
   */
  onSetState(key) {
    return (e) => {
      const { value, name } = e.target;
      const state = { ...this.state };
      if (key) {
        state[name][key] = value;
      } else {
        state[name] = value;
      }
      this.setState(state);
    };
  }

  /**
   * ガチャを作成する関数を生成
   * @return {function} ガチャ作成関数
   */
  onCreate() {
    return () => {
      console.log(this.state.contents);
      console.log(this.state.contents.filter(e => e));
      console.log(this.state.contents.filter(e => e).slice(0, this.props.contentsNumber));
      this.props.create({
        name: this.state.name,
        note: this.state.note,
        contents: this.state.contents.slice(0, this.props.contentsNumber).filter(e => e),
      });
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
          <Grid item xs={1} />
          <Grid item xs={10} md={5}>
            <Paper>
              <div style={{ padding: '10px' }}>
                <h2>ガチャを作成</h2>
                <TextField
                  label="ガチャ名"
                  id="name"
                  name="name"
                  onChange={this.onSetState()}
                />
                <br /><br /><br />
                <TextField
                  label="ガチャ説明"
                  id="note"
                  name="note"
                  multiline
                  onChange={this.onSetState()}
                />
                <br /><br /><br />
                <TextField label="ガチャの中身" disabled />
                <IconButton size="small" onClick={() => this.props.addContents()}><AddCircleIcon /></IconButton>
                <IconButton size="small" onClick={() => this.props.removeContents()}><RemoveCircleIcon /></IconButton>
                {
                  Array.from(Array(this.props.contentsNumber), (e, i) => i).map(i => (
                    <FormControl fullWidth key={i}>
                      <Input
                        id="adornment-amount"
                        name="contents"
                        onChange={this.onSetState(`${i}`)}
                        startAdornment={
                          <InputAdornment position="start" style={{ color: '#a8a8a8' }}>{i + 1}</InputAdornment>
                        }
                      />
                    </FormControl>
                  ))
                }
              </div>
              <Button
                onClick={this.onCreate()}
                href="/search"
                disabled={!(this.state.name && this.state.note
                    && this.state.contents.filter(e => e).length)}
              >
                <div style={{ color: '#4fa5ff' }}>ガチャを作成</div>
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(Component);
