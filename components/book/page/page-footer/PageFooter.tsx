import React from 'react';
import styles from './pagefooter.module.css';

interface Props {
    texts: string[],
}

const PageFooter = ({ texts }: Props) => {
    if(texts.length === 0)
        return null;

    return (
        <div className={styles.container}>
            {texts.map((text, i) => (
                <div key={i} className={styles.footerElement}>
                    <p className={styles.footerText}>{ text }</p>
                </div>
            ))}
        </div>
    );
}