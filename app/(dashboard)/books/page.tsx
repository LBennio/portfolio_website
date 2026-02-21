'use client'

import React, {useState} from 'react';
import NormalPage from "@/components/book/page/normal-page/NormalPage";
import { testPageData } from "@/prisma/model";
import styles from './books.module.css';

const BooksDashboard = () => {
    const [isPageMarkVisible, setIsPageMarkVisible] = useState(true);

    function togglePageMarkVisible() {
        setIsPageMarkVisible(!isPageMarkVisible);
    }

    return (
        <div>
            <div className={styles.container}>
                <NormalPage
                    {...testPageData}
                    isPageMarkVisible={isPageMarkVisible}
                    onToggleBookmark={togglePageMarkVisible}
                />
            </div>
        </div>
    );
}

export default BooksDashboard;