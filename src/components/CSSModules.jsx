import React from 'react';
import styles from './CSSModules.module.css';

function CSSModules() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        CSS Modules Button
      </button>
      <p className={styles.text}>
        This uses CSS Modules for scoped styling
      </p>
    </div>
  );
}

export default CSSModules;