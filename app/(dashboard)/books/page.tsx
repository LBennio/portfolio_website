'use client'

import React, {useState} from 'react';
import NormalPage from "@/components/book/page/normal-page/NormalPage";
import { testPageData } from "@/prisma/model";
import PageMark from "@/components/snippets/pagemark/PageMark";

const BooksDashboard = () => {
    const [isPageMarkVisible, setIsPageMarkVisible] = useState(true);

    function togglePageMarkVisible() {
        setIsPageMarkVisible(!isPageMarkVisible);
    }

    return (
        <div>
            <NormalPage
                {...testPageData}
            />

            {isPageMarkVisible && (
                <>
                    <PageMark />
                </>
            )}
        </div>
    );
}

export default BooksDashboard;