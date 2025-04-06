import Pokemon from './pokemon'; // Pokemonクラスをインポート

class BattleField {
    constructor(attacker, defender, weather, field, isMultipleOpponents) {
        if (!(attacker instanceof Pokemon)) {
            throw new Error('attacker must be an instance of Pokemon');
        }
        if (!(defender instanceof Pokemon)) {
            throw new Error('defender must be an instance of Pokemon');
        }

        this.attacker = attacker; // 攻撃側
        this.defender = defender; // 防御側
        this.weather = weather; // 天候
        this.field = field; // フィールド
        this.isMultipleOpponents = isMultipleOpponents; // 相手複数用フラグ
    }
}

export default BattleField;