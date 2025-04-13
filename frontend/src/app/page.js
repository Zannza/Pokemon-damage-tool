import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Pokemon Damage Calculator</h1>
      <p className={styles.description}>
        Enter the details below to calculate the damage dealt in a Pokemon battle.
      </p>

      <form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="attacker">Attacker</label>
          <input type="text" id="attacker" name="attacker" placeholder="Enter attacker's name" />
        </div>

        <div className={styles.field}>
          <label htmlFor="defender">Defender</label>
          <input type="text" id="defender" name="defender" placeholder="Enter defender's name" />
        </div>

        <div className={styles.field}>
          <label htmlFor="move">Move</label>
          <input type="text" id="move" name="move" placeholder="Enter move name" />
        </div>

        <div className={styles.field}>
          <label htmlFor="damage">Damage Multiplier</label>
          <input type="number" id="damage" name="damage" placeholder="Enter damage multiplier" />
        </div>

        <button type="submit" className={styles.button}>Calculate Damage</button>
      </form>
    </main>
  );
}
