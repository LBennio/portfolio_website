import React from 'react';
import {Page} from "@/types";
import Footer from "@/components/snippets/footer/Footer";

import styles from './normalpage.module.css';
import TermElement from "@/components/snippets/term/TermElement";
import PageMark, {ClosedPageMark} from "@/components/snippets/pagemark/PageMark";

interface NormalPageProps extends Page {
    isPageMarkVisible?: boolean;
    onToggleBookmark: () => void;
}

const NormalPage = ({ title, content, footer, isPageMarkVisible, onToggleBookmark }: NormalPageProps) => {

    if(footer.pageNumber <= 0)
        return;

    const isEven = footer.pageNumber % 2 === 0;

    return (
        <div className={styles.container}>
            {isPageMarkVisible ? (
                <>
                    <PageMark
                        isEven={isEven}
                        onClick={onToggleBookmark}
                        text="Tatsuhara"
                    />
                </>
            ) :
                <>
                    <ClosedPageMark isEven={isEven} onClick={onToggleBookmark} />
                </>
            }

            {title &&
                <div className={styles.titleContainer}>
                    <h4 className={styles.title}>{title}</h4>
                </div>
            }

            {content &&
                <main className={styles.contentContainer}>
                    {content.map((item, i) => (
                        <TermElement key={i} element={item} />
                    ))}
                </main>
            }

            <Footer footerElement={footer.footerElement} pageNumber={footer.pageNumber} />
        </div>
    );
}

export default NormalPage;