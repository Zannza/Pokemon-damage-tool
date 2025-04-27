// const Pokemon = require('./src/pokemon'); // Pokemonクラスをインポート
// const BattleField = require('./src/battleField'); // BattleFieldクラスをインポート
// const Characteristic = require('./src/characteristic'); // Characteristicクラスをインポート
// const Item = require('./src/item'); // Itemsクラスをインポート
// const Move = require('./src/move'); // Moveクラスをインポート

import Pokemon from './src/pokemon.js'; // Pokemonクラスをインポート
import BattleField from './src/battleField.js'
import Characteristic from './src/characteristic.js'; 
import Items from './src/item.js'; 
import Move from './src/move.js'

// Pikachuのインスタンスを作成
const attacker = new Pokemon({
    name: "Pikachu",
    anility: "",
    baseStats: 0,
    level: 50,
    ivs: 100,
    evs: "",
    nature: "",
    rankModifiers: "",
    item: "",
    type: "Electric",
});

// Bulbasaurのインスタンスを作成
const defender = new Pokemon({
    name: "Bulbasaur",
    ability: "", 
    baseStats: 0, 
    level: 50, 
    ivs: 100, 
    evs: "", 
    nature: "", 
    rankModifiers: "", 
    item: "",
    type: "Grass",
});

// ThunderboltのMoveインスタンスを作成
const move = new Move({
    name: 'Thunderbolt',
    type: 'Electric',
    power: 90,

});

attacker.move = move;

// ダメージ計算を実行
const battlefield = new BattleField({
    attacker: attacker, 
    defender: defender
});

const damage = battlefield.calculateDamage(1, 1, 1, 1, 1, 1, 1, 1, 1);

// 結果を出力
console.log(`${attacker.name} used ${defender.name}!`);
console.log(`It dealt ${damage} damage to ${defender.name}.`);

// const battlefield = new BattleField();
// get value from form

