import React from 'react';

export interface Props {
    image?: string;
    title: string,
    description?: string,
    pagesNum: number,
}

const BookElement = ({ image, title, description, pagesNum }: Props) => {
    return (
        <div>

        </div>
    );
}

export default BookElement;