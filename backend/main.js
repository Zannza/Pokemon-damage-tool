const Pokemon = require('./src/pokemon'); // Pokemonクラスをインポート
const BattleField = require('./src/battleField'); // BattleFieldクラスをインポート
const Characteristic = require('./src/characteristic'); // Characteristicクラスをインポート
const Items = require('./src/items'); // Itemsクラスをインポート
const Move = require('./src/move'); // Moveクラスをインポート

// Pikachuのインスタンスを作成
const attacker = new Pokemon({
    name: 'Pikachu',
    type: 'Electric',
    attack: 55,
    defense: 40,
    hp: 35
});

// Bulbasaurのインスタンスを作成
const defender = new Pokemon({
    name: 'Bulbasaur',
    type: 'Grass',
    attack: 49,
    defense: 49,
    hp: 45
});

// ThunderboltのMoveインスタンスを作成
const moves = new Move({
    name: 'Thunderbolt',
    type: 'Electric',
    power: 90
});

// ダメージ計算を実行
const battlefield = new BattleField(pikachu, bulbasaur);
const damage = battlefield.calculateDamage(1, 1, 1, 1, 1, 1, 1, 1, 1);

// 結果を出力
console.log(`${pikachu.name} used ${thunderbolt.name}!`);
console.log(`It dealt ${damage} damage to ${bulbasaur.name}.`);