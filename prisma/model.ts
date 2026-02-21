import { Page, Term, FooterData } from "@/types";

// Being born in one of the richest families may sound lucky but to Azusa. She
const mockTerms: Term[] = [
    { term: "Being" },
    { term: "born" },
    { term: "in" },
    { term: "one", resource: "https://nextjs.org", note: "The React Framework for the Web" },
    { term: "of" },
    { term: "the" },
    { term: "richest" },
    { term: "families" },
    { term: "may", note: "Server-Side Rendering generates HTML on the server for each request." },
    { term: "sound" },
    { term: "lucky" },
    { term: "but" },
    { term: "to" },
    { term: "Azusa." },
];

// 2. Create the footer data
const mockFooter: FooterData = {
    footerElement: "UK, 09/10/20??",
    pageNumber: 1,
};

// 3. Export the full mock page ready to be imported
export const testPageData: Page = {
    id: 101,
    title: "Azusa Tatsuhara",
    special: false,
    content: mockTerms,
    footer: mockFooter,
    // twin: undefined // Omitted since it's optional, but you could add another Page object here if testing twin logic
};