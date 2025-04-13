import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Pokemon Damage Calculator</h1>
      <p className={styles.description}>
        Enter the details below to calculate the damage dealt in a Pokemon battle.
      </p>

      <form className={styles.form}>
        {/* 攻撃側 */}
        <fieldset className={styles.section}>
          <legend>攻撃</legend>
          <div className={styles.row}>
            <label>ポケモン名</label>
            <input className={styles.input} type="text" placeholder="Name" />
            <label>レベル</label>
            <input className={styles.input} type="number" min="1" max="100" defaultValue="50" placeholder="Level" />
          </div>

          <div className={styles.row}>
            <label>実数値</label>
            <input className={styles.input} type="number" defaultValue="0" />
            <label>個体値</label>
            <input className={styles.input} type="number" min="0" max="31" defaultValue="31" />
            <label>努力値</label>
            <input className={styles.input} type="number" min="0" max="252" defaultValue="252" />
          </div>

          <div className={styles.row}>
            <label>性格補正</label>
            <select defaultValue="1.0" className={styles.select}>
              <option value="0.9">0.9</option>
              <option value="1.0">1.0</option>
              <option value="1.1">1.1</option>
            </select>
            <label>ランク補正</label>
            <select defaultValue="0" className={styles.select}>
              {[...Array(13).keys()].map(i => (
                <option key={i - 6} value={i - 6}>{i - 6}</option>
              ))}
            </select>
          </div>

          <label>特性</label>
          <input className={styles.input} type="text" placeholder="Ability" />
          <label>持ち物</label>
          <input className={styles.input} type="text" placeholder="Item" />
          <label>技</label>
          <input className={styles.input} type="text" placeholder="Move Name" />
        </fieldset>

        {/* 防御側 */}
        <fieldset className={styles.section}>
          <legend>防御</legend>
          <div className={styles.row}>
            <label>ポケモン名</label>
            <input className={styles.input} type="text" placeholder="Name" />
            <label>レベル</label>
            <input className={styles.input} type="number" min="1" max="100" defaultValue="50" placeholder="Level" />
          </div>

          <div className={styles.row}>
            <label>HP:</label>
            <label>実数値</label>
            <input className={styles.input} type="number" defaultValue="0" />
            <label>個体値</label>
            <input className={styles.input} type="number" min="0" max="31" defaultValue="31" />
            <label>努力値</label>
            <input className={styles.input} type="number" min="0" max="252" defaultValue="252" />
          </div>

          <div className={styles.row}>
            <label>Defense:</label>
            <label>実数値</label>
            <input className={styles.input} type="number" defaultValue="0" />
            <label>個体値</label>
            <input className={styles.input} type="number" min="0" max="31" defaultValue="31" />
            <label>努力値</label>
            <input className={styles.input} type="number" min="0" max="252" defaultValue="252" />
          </div>

          <div className={styles.row}>
            <label>性格補正</label>
            <select defaultValue="1.0" className={styles.select}>
              <option value="0.9">0.9</option>
              <option value="1.0">1.0</option>
              <option value="1.1">1.1</option>
            </select>
            <label>ランク補正</label>
            <select defaultValue="0" className={styles.select}>
              {[...Array(13).keys()].map(i => (
                <option key={i - 6} value={i - 6}>{i - 6}</option>
              ))}
            </select>
          </div>

          <label>特性</label>
          <input className={styles.input} type="text" placeholder="Ability" />
          <label>持ち物</label>
          <input className={styles.input} type="text" placeholder="Item" />
        </fieldset>

        {/* その他 */}
        <fieldset className={styles.section}>
          <legend>Other</legend>
          <div className={styles.row}>
            <label htmlFor="weather">Weather:</label>
            <select id="weather" defaultValue="none" className={styles.select}>
              <option value="none">なし</option>
              <option value="sunny">はれ</option>
              <option value="rain">あめ</option>
              <option value="sand">すな</option>
              <option value="hail">ゆき</option>
            </select>
          </div>

          <div className={styles.row}>
            <label htmlFor="critical">急所:</label>
            <input className={styles.input} type="checkbox" id="critical" />
          </div>
        </fieldset>

        <button type="submit" className={styles.button}>Calculate Damage</button>
      </form>
    </main>
  );
}
