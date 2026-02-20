import { Page, Term, FooterData } from "@/types";

const mockTerms: Term[] = [
    { term: "Welcome" },
    { term: "to" },
    { term: "the" },
    { term: "Next.js", resource: "https://nextjs.org", note: "The React Framework for the Web" },
    { term: "documentation." },
    { term: "This" },
    { term: "framework" },
    { term: "supports" },
    { term: "SSR", note: "Server-Side Rendering generates HTML on the server for each request." },
    { term: "out" },
    { term: "of" },
    { term: "the" },
    { term: "box." }
];

// 2. Create the footer data
const mockFooter: FooterData = {
    footerElement: "UK, 09/10/20??",
    pageNumber: 4,
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