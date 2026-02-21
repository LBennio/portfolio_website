import React from 'react';
import styles from './pagemark.module.css';

export interface Props {
    text?: string;
    isEven: boolean;
    onClick: () => void;
}

const PageMark = ({ text, isEven, onClick }: Props) => {
    return (
        <div
            className={`${styles.container} ${isEven ? styles.right : styles.left}`}
            onClick={onClick}
            title={text}
        >
            {text && <h6 className={`${styles.bookmarkText} ${isEven ? styles.textRight : styles.textLeft}`}>{ text }</h6>}
        </div>
    );
}

export const ClosedPageMark = ({ text, isEven, onClick }: Props) => {
    return (
        <div
            className={`${styles.closedContainer} ${isEven ? styles.right : styles.left}`}
            onClick={onClick}
            title={text}
        ></div>
    );
}

export default PageMark;