// const base64 = require('base-64');  // base64 エンコード用のライブラリをインポート
import base64 from "base-64"

export const handler = async (event) => {
    // イベントにisBase64Encodedが含まれていない場合
    if (!event.isBase64Encoded) {
        console.log(event.body);
    } else {
        // イベントにisBase64Encodedが含まれている場合
        console.log(base64.decode(event.body));
    }

    // レスポンスを返す
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Request processed successfully' }),
    };
};