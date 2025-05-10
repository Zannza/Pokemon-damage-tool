"use client";
import styles from './page.module.css';

export default function Home() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      attacker: {
        name: formData.get('attackerName'),
        level: formData.get('attackerLevel'),
        attack: {
          base: formData.get('attackerAttackBase'),
          iv: formData.get('attackerAttackIV'),
          ev: formData.get('attackerAttackEV'),
          characteristic: formData.get('attackerAttackCharacteristic'),
          rankModify: formData.get('attackerAttackRankModify'),
        },
        ability: formData.get('attackerAbility'),
        item: formData.get('attackerItem'),
        move: formData.get('attackerMove'),
      },
      defender: {
        name: formData.get('defenderName'),
        level: formData.get('defenderLevel'),
        hp: {
          base: formData.get('defenderHpBase'),
          iv: formData.get('defenderHpIV'),
          ev: formData.get('defenderHpEV'),
        },
        defense: {
          base: formData.get('defenderDefenseBase'),
          iv: formData.get('defenderDefenseIV'),
          ev: formData.get('defenderDefenseEV'),
          characteristic: formData.get('defenderDefenseCharacteristic'),
          rankModify: formData.get('defenderDefenseRankModify'),
        },
        ability: formData.get('defenderAbility'),
        item: formData.get('defenderItem'),
      },
      other:{
        weather: formData.get('weather'),
        critical: formData.get('critical'),
      }
    }

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        if (response.status === 400) {
          throw new Error('入力に誤りがあります（400 Bad Request）');
        } else if (response.status === 500) {
          throw new Error('サーバーエラーが発生しました（500 Internal Server Error）');
        } else {
          throw new Error(`不明なエラーが発生しました（${response.status}）`);
        }
      } else {
        const result = await response.json();
        console.log(result);
      }
    }
    catch (error) {
      console.error('Error:', error);
      alert(`エラー: ${error.message}`);
    }
  };
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Pokemon Damage Calculator</h1>
      <p className={styles.description}>
        Enter the details below to calculate the damage dealt in a Pokemon battle.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* 攻撃側 */}
        <fieldset className={`${styles.section} ${styles.attackSection}`}>
          <legend>攻撃</legend>
          <div className={styles.row}>
            <label>ポケモン名</label>
            <input className={styles.input} type="text" name="attackerName" placeholder="Name" />
            <label>レベル</label>
            <input className={styles.input} type="number" name="attackerLevel" min="1" max="100" defaultValue="50" placeholder="Level" />
          </div>

          <div className={styles.row}>
            <label>Attack:</label>
            <label>実数値</label>
            <input className={styles.input} type="number" name="attackerAttackBase" defaultValue="0" />
            <label>個体値</label>
            <input className={styles.input} type="number" name="attackerAttackIV" min="0" max="31" defaultValue="31" />
            <label>努力値</label>
            <input className={styles.input} type="number" name="attackerAttackEV" min="0" max="252" defaultValue="252" />
          </div>

          <div className={styles.row}>
            <label>性格補正</label>
            <select name="attackerAttackCharacteristic" defaultValue="1.0" className={styles.select}>
              <option value="0.9">0.9</option>
              <option value="1.0">1.0</option>
              <option value="1.1">1.1</option>
            </select>
            <label>ランク補正</label>
            <select name="attackerAttackRankModify" defaultValue="0" className={styles.select}>
              {[...Array(13).keys()].map(i => (
                <option key={i - 6} value={i - 6}>{i - 6}</option>
              ))}
            </select>
          </div>

          <label>特性</label>
          <input className={styles.input} type="text" name="attackerAbility" placeholder="Ability" />
          <label>持ち物</label>
          <input className={styles.input} type="text" name="attackerItem" placeholder="Item" />
          <label>技</label>
          <input className={styles.input} type="text" name="attackerMove" placeholder="Move Name" />
        </fieldset>

        {/* 防御側 */}
        <fieldset className={`${styles.section} ${styles.defenseSection}`}>
          <legend>防御</legend>
          <div className={styles.row}>
            <label>ポケモン名</label>
            <input className={styles.input} type="text" name="defenderName" placeholder="Name" />
            <label>レベル</label>
            <input className={styles.input} type="number" name="defenderLevel" min="1" max="100" defaultValue="50" placeholder="Level" />
          </div>

          <div className={styles.row}>
            <label>HP:</label>
            <label>実数値</label>
            <input className={styles.input} type="number" name="defenderHpBase" defaultValue="0" />
            <label>個体値</label>
            <input className={styles.input} type="number" name="defenderHpIV" min="0" max="31" defaultValue="31" />
            <label>努力値</label>
            <input className={styles.input} type="number" name="defenderHpEV" min="0" max="252" defaultValue="252" />
          </div>

          <div className={styles.row}>
            <label>Defense:</label>
            <label>実数値</label>
            <input className={styles.input} type="number" name="defenderDefenseBase" defaultValue="0" />
            <label>個体値</label>
            <input className={styles.input} type="number" name="defenderDefenseIV" min="0" max="31" defaultValue="31" />
            <label>努力値</label>
            <input className={styles.input} type="number" name="defenderDefenseEV" min="0" max="252" defaultValue="252" />
          </div>

          <div className={styles.row}>
            <label>性格補正</label>
            <select name="defenderDefenseCharacteristic" defaultValue="1.0" className={styles.select}>
              <option value="0.9">0.9</option>
              <option value="1.0">1.0</option>
              <option value="1.1">1.1</option>
            </select>
            <label>ランク補正</label>
            <select name="defenderDefenseRankModify" defaultValue="0" className={styles.select}>
              {[...Array(13).keys()].map(i => (
                <option key={i - 6} value={i - 6}>{i - 6}</option>
              ))}
            </select>
          </div>

          <label>特性</label>
          <input className={styles.input} type="text" name="defenderAbility" placeholder="Ability" />
          <label>持ち物</label>
          <input className={styles.input} type="text" name="defenderItem" placeholder="Item" />
        </fieldset>

        {/* その他 */}
        <fieldset className={`${styles.section} ${styles.otherSection}`}>
          <legend>Other</legend>
          <div className={styles.row}>
            <label htmlFor="weather">Weather:</label>
            <select id="weather" name="weather" defaultValue="none" className={styles.select}>
              <option value="none">なし</option>
              <option value="sunny">はれ</option>
              <option value="rain">あめ</option>
              <option value="sand">すな</option>
              <option value="hail">ゆき</option>
            </select>
          </div>

          <div className={styles.row}>
            <label htmlFor="critical">急所:</label>
            <input className={styles.input} type="checkbox" id="critical" name="critical" />
          </div>
        </fieldset>

        <button type="submit" className={styles.button}>ダメージ計算</button>
      </form>
    </main>
  );
}
