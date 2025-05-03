import { Buffer } from 'buffer';
import Pokemon from './src/pokemon.js';
import BattleField from './src/battleField.js'
import Characteristic from './src/characteristic.js'; 
import Items from './src/item.js'; 
import Move from './src/move.js'

export const handler = async (event) => {
    try {
        // イベントボディがBase64エンコードされているかどうかを判定
        const requestBody = event.isBase64Encoded
            ? Buffer.from(event.body, 'base64').toString('utf-8')
            : event.body;

        // console.log(requestBody);  // 受け取ったリクエストの内容をログに出力
        const attacker = new Pokemon(requestBody["attacker"]);
        const move = new Move(requestBody["move"]);
        const defender = new Pokemon(requestBody["defender"]);
        // weather = requestBody["weather"];
        // field = requestBody["field"];
        // isMultipleOpponents = requestBody["isMultipleOpponents"];
        other = requestBody["other"];
        const battleField = new BattleField({attacker: attacker,
                                            move: move,
                                            defender: defender,
                                            // weather: weather,
                                            // field: field,
                                            // isMultipleOpponents, isMultipleOpponents
                                            weather: 1,
                                            field: 1,
                                            isMultipleOpponents: 1
                                            });
        battleField.attacker.move = move;
        damage = battleField.calculateDamage;

        // 正常に処理できた場合のレスポンス
        return {
            statusCode: 200,
            // body: JSON.stringify({ message: 'Request processed successfully' }),
            body: JSON.stringify({damagerange: damage})
        };
    } catch (error) {
        // エラーハンドリング
        console.error('Error occurred:', error);

        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Internal Server Error',
                error: error.message,
            }),
        };
    }
};