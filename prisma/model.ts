import styles from "@/app/page.module.css";
import Book from "@/components/book/Book";
import {Page} from "@/types";

export const testPage: Page = {
    id: 2,
    pageNumber: 1,
    title: "Test Page",
    content: undefined,
    special: false,
};

export const testBook = {
    id: 12,
    cover: testPage,
    pages: undefined,
};
