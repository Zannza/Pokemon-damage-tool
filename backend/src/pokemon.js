class Pokemon {
    #name;
    #ability_list;
    #ability;
    #level;
    #baseStats;
    #ivs;
    #evs;
    #status;
    #nature;
    #rankModifiers;
    #move;
    #item;
    #types;
    #weight;
    #terastalType;
    constructor({name, ability, baseStats, level, ivs, evs, nature, rankModifiers, item, types, weight = null, terastalType = null}) {
        this.#name = name; // 名前
        this.#ability_list = ability; // 特性
        this.#level = level; // レベル
        this.#baseStats = baseStats; // 種族値
        this.#ivs = ivs; // 個体値
        this.#evs = evs; // 努力値
        this.#status = null; // 実数値
        this.#nature = nature; // 性格
        this.#rankModifiers = rankModifiers; // ランク補正
        this.#move = undefined; // わざ
        this.#item = item; // もちもの
        this.#types = types; // タイプ
        this.#weight = weight; // 体重 (optional)
        this.#terastalType = terastalType; // テラスタル (optional)
    }

    // get property
    get name() { return this.#name; }
    get ability() { return this.#ability_list; }
    get level() { return this.#level; }
    get ivs() { return this.#ivs; }
    get evs() { return this.#evs; }
    get nature() { return this.#nature; }
    get rankModifiers() { return this.#rankModifiers; }
    get move() { return this.#move; }
    get item() { return this.#item; }
    get types() { return this.#types; }
    get weight() { return this.#weight; }
    get terastalType() { return this.#terastalType; }

    // set property
    set ability(ability) { this.#ability = ability; }
    set move(move) { this.#move = move; }


    // Example method to calculate a stat
    calculateStat(statName) {
        const base = this.baseStats[statName];
        const iv = this.ivs[statName];
        const ev = this.evs[statName];
        const natureModifier = this.getNatureModifier(statName);
        const level = this.level;

        const status = Math.floor(
            ((2 * base + iv + Math.floor(ev / 4)) * level) / 100 + 5
        ) * natureModifier;
        this.status = status;
        return status;
    }

    // Example method to get nature modifier
    getNatureModifier(statName) {
        // Implement logic for naturenpm  modifiers
        return 1; // Placeholder
    }
}

export default Pokemon;