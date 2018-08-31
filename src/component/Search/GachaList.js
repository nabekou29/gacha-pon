import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  GridList,
  GridListTile,
  Typography,
} from '@material-ui/core';

/**
 * ガチャの一覧を生成
 * @param  {Object} gachas 表示するガチャ
 * @return {Object} ガチャ一覧
 */
function GachaList({ Gachas = [] }) {
  return (
    <div>
      <GridList cellHeight={180} cols={Math.floor(window.innerWidth / 300)} spacing={20}>
        {
          Gachas.sort((g1, g2) => g1.id - g2.id).map(gacha => (
            <GridListTile key={gacha.id}>
              <Gacha gacha={gacha} />
            </GridListTile>
          ))
        }
      </GridList>
    </div>
  );
}

/**
 * ガチャ情報を生成
 * @param {Object} gacha ガチャ
 * @return {Object} ガチャ情報
 */
function Gacha({ gacha }) {
  return (
    <div style={{ margin: '5px' }}>
      <Card>
        <CardContent>
          <Typography noWrap variant="headline" component="h2">
            {gacha.name}
          </Typography>
          <Typography
            component="textarea"
            style={{
              border: 'none',
              resize: 'none',
              width: '100%',
              height: '40px',
            }}
            disabled
            value={gacha.note.slice(0, 120)}
          />
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href={`./gacha/${gacha.id}`}>
            ガチャる
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default withRouter(GachaList);
