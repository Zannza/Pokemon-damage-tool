class Pokemon {
    constructor(name, ability, baseStats, level, ivs, evs, nature, rankModifiers, moves, item, types, weight = null, terastalType = null) {
        this.name = name; // 名前
        this.ability = ability; // 特性
        this.baseStats = baseStats; // 種族値
        this.level = level; // レベル
        this.ivs = ivs; // 個体値
        this.evs = evs; // 努力値
        this.nature = nature; // 性格
        this.rankModifiers = rankModifiers; // ランク補正
        this.moves = moves; // わざ
        this.item = item; // もちもの
        this.types = types; // タイプ
        this.weight = weight; // 体重 (optional)
        this.terastalType = terastalType; // テラスタル (optional)
    }

    // Example method to calculate a stat
    calculateStat(statName) {
        const base = this.baseStats[statName];
        const iv = this.ivs[statName];
        const ev = this.evs[statName];
        const natureModifier = this.getNatureModifier(statName);
        const level = this.level;

        return Math.floor(
            ((2 * base + iv + Math.floor(ev / 4)) * level) / 100 + 5
        ) * natureModifier;
    }

    // Example method to get nature modifier
    getNatureModifier(statName) {
        // Implement logic for nature modifiers
        return 1; // Placeholder
    }
}

export default Pokemon;