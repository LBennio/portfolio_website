import React from 'react';
import styles from './pagemark.module.css';

export interface Props {
    text?: string;
}

const PageMark = ({ text }: Props) => {
    return (
        <div className={styles.container}>
            {text && <h6 className={styles.bookmarkText}>{ text }</h6>}
        </div>
    );
}

export default PageMark;