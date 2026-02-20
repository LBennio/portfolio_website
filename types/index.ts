export interface Book {
    id: number,
    cover: Page,
    pages?: Page[],
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
}

export enum TermType {
    IMAGE = 'IMAGE',
    DEFINITION = 'DEFINITION',
    NOTE = 'NOTE',
}