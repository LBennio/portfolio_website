export interface User {
    id: string,
    email: string,
    name?: string,
    surname?: string,
    password: string,
}

export interface Book {
    id: number,
    cover: Page,
    pages?: Page[],
    marks: PagemarkData[],
}

export interface Page {
    id: number,
    title?: string,
    twin?: Page,
    content?: Term[],
    special: boolean,
    footer: FooterData,
}

export interface FooterData {
    footerElement: string,
    pageNumber: number,
}

export interface Term {
    term: string,
    note?: string,
    resource?: string,
    type?: TermType | TermType.NOTE,
}

export interface PagemarkData {
    id: number,
    bookId: number,
    pageNumber: number,
    text: string,
}

export enum TermType {
    IMAGE = 'IMAGE',
    DEFINITION = 'DEFINITION',
    NOTE = 'NOTE',
}