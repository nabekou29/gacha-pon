import $ from 'jquery';

const ENDPOINT = 'https://lhpg9i56g5.execute-api.ap-northeast-1.amazonaws.com/gacha';

class API {
  /**
   * 全てのガチャを取得
   * @return {Object} ガチャ一覧
   */
  getAllGacha() {
    const res = $.ajax({
      type: 'GET',
      url: `${ENDPOINT}/v1/gacha`,
      dataType: 'json',
      async: false,
    }).responseText;
    return JSON.parse(res).Items;
  }

  /**
   * IDからガチャを取得します
   * @param  {[type]} id ID
   * @return {[type]}    ガチャ
   */
  getGachaById(id) {
    const res = $.ajax({
      type: 'GET',
      url: `${ENDPOINT}/v1/gacha/${id}`,
      dataType: 'json',
      async: false,
    }).responseText;
    return JSON.parse(res).Items && JSON.parse(res).Items[0];
  }

  /**
   * ガチャを作成します
   * @param  {String} name     ガチャ名
   * @param  {String} note     ガチャの説明など
   * @param  {Object} contents ガチャの中身
   */
  createGacha({ name, note, contents }) {
    $.ajax({
      type: 'POST',
      url: `${ENDPOINT}/v1/gacha`,
      dataType: 'json',
      async: false,
      data: JSON.stringify({ name: name, note: note, contents: contents }),
    });
  }
}

export default new API();
