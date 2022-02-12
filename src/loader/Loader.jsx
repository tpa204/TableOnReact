import React from 'react';
import styles from './loader.module.css';

const Loader = () => {
    return (
        <div className={styles.ldsCircle}><div></div></div>
    );
};

export default Loader