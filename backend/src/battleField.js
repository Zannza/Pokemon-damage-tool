// import Pokemon from './pokemon.js'; // Pokemonクラスをインポート

const MIN_RATE = 0.85; // 乱数の最小レート

class BattleField {
    #attacker;
    #defender;
    #weather;
    #field;
    #isMultipleOpponents;
    constructor({attacker, defender, weather, field, isMultipleOpponents}) {
        // if (!(attacker instanceof Pokemon)) {
        //     throw new Error('attacker must be an instance of Pokemon');
        // }
        // if (!(defender instanceof Pokemon)) {
        //     throw new Error('defender must be an instance of Pokemon');
        // }

        this.#attacker = attacker; // 攻撃側
        this.#defender = defender; // 防御側
        this.#weather = weather; // 天候
        this.#field = field; // フィールド
        this.#isMultipleOpponents = isMultipleOpponents; // 相手複数用フラグ
    }

    //set property
    set attacker(attacker) { this.#attacker = attacker; }
    set defender(defender) {this.#defender = defender; }
    set weather(weather) { this.#weather = weather; }
    set field(field) { this.#field = field; }
    set isMultipleOpponents(isMultipleOpponents) { this.#isMultipleOpponents = isMultipleOpponents; }

    //get property
    get attacker() { return this.#attacker; }
    get defender() { return this.#defender; }
    get weather() { return this.#weather; }
    get field() { this.#field; }
    get isMultipleOpponents() { this.#isMultipleOpponents; }

    calculateDamage(characteristicRate, itemRate, weatherRate, sameBonusRate, typeRate, burnRate, targetRate, wallRate, otherRate) {
        let damage = this.attacker.level * 2 / 5 + 2;
        damage = Math.floor(damage);
        damage = damage * this.attacker.move.power * this.attacker.ivs / this.defender.ivs; // TODO
        damage = Math.floor(damage);
        damage = damage / 50 + 2;
        damage = Math.floor(damage);
        damage = damage * characteristicRate * itemRate * weatherRate * sameBonusRate * typeRate * burnRate * targetRate * wallRate * otherRate;
        damage = Math.round(damage);
        return damage;
    }


}

export default BattleField;