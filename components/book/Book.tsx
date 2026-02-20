import React from 'react';
import {Book as Bookdata} from "@/types";
import styles from './book.module.css';
import Footer from "@/components/snippets/footer/Footer";

const Book = ({ id, cover, pages }: Bookdata) => {
    const [currentPageIndex, setCurrentPageIndex] = React.useState(0);

    if(!pages)
        return null;

    const totalPages = pages.length;

    function previousPage() {
        if(currentPageIndex > 0) {
            setCurrentPageIndex((prev) => prev + 1);
        }
    }

    function nextPage() {
        if(currentPageIndex < totalPages) {
            setCurrentPageIndex((prev) => prev + 1);
        }
    }

    function goToPage(page: number) {
        if(currentPageIndex < totalPages && currentPageIndex >= 1) {
            setCurrentPageIndex(page);
        }
    }

    const activePage = currentPageIndex === 0 ? cover : pages[currentPageIndex -1];

    return (
        <div className={activePage.special ? styles.specialPage : styles.page}>
            {
                activePage.pageNumber >= 1 &&
                <div className={styles.interactionButtonContainer}>
                    <button className={styles.interactionButton} onClick={previousPage}></button>
                </div>
            }

            {activePage.title &&
                <div className={styles.title}>
                    {activePage.title}
                </div>
            }

            <main className={styles.content}>

            </main>

            <Footer />

            {
                activePage.pageNumber < totalPages &&
                <div className={styles.interactionButtonContainer}>
                    <button className={styles.interactionButton} onClick={previousPage}></button>
                </div>
            }
        </div>
    );
}

export default Book;