import React from 'react';
import {FooterData} from "@/types";
import styles from './footer.module.css';

const Footer = ({ footerElement, pageNumber }: FooterData) => {
    const isEven = pageNumber % 2 === 0;

    return (
        <div className={styles.container}>
            { isEven ? (
                <>
                    <span className={styles.pageNumber}>{pageNumber}</span>
                    <span className={styles.footerText}>{footerElement}</span>
                </>
            ) : (
                <>
                    <span className={styles.footerText}>{footerElement}</span>
                    <span className={styles.pageNumber}>{pageNumber}</span>
                </>
            )}
        </div>
    );
}

export default Footer;