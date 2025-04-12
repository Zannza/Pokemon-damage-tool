import Pokemon from './pokemon'; // Pokemonクラスをインポート

const MIN_RATE = 0.85; // 乱数の最小レート

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
    calculateDamage(characteristicRate, itemRate, weatherRate, criticalRate, sameBonusRate, typeRate, burnRate, targetRate, wallRate, otherRate) {
        let damage = this.attacker.level * 2 / 5 + 2; 
        damage = Math.floor(damage);
        damage = damage * this.attacker.moves.power * this.attacker.status / this.defender.status;
        damage = Math.floor(damage);
        damage = damage / 50 + 2; 
        damage = Math.floor(damage);
        damage = damage * characteristicRate * itemRate * weatherRate * criticalRate * sameBonusRate * typeRate * burnRate * targetRate * wallRate * otherRate;
        damage = Math.floor(damage);
        return damage;
    }
}

export default BattleField;