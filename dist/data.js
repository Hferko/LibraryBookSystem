import { ClassicalLit, Scientific, Tale, Fiction } from "./models/category.js";
const classicalLitRus = new ClassicalLit("Klasszikus irodalom", "Orosz");
const classicalLitFr = new ClassicalLit("Klasszikus irodalom", "Francia");
const classicalLitAm = new ClassicalLit("Klasszikus irodalom", "Amerikai");
const fiction = new Fiction("Science-fiction");
const scientificMat = new Scientific("Tudományos", "Matematika");
const scientificHist = new Scientific("Tudományos", "Történelem");
const taleMese = new Tale("Mese", "fable");
const taleEposz = new Tale("Mese", "epic");
const konyvtar = [
    {
        bookId: 1,
        title: 'Háború és béke',
        author: 'Lev Tolsztoj',
        available: true,
        category: classicalLitRus
    },
    {
        bookId: 2,
        title: 'Védett férfiak',
        author: 'Robert Merle',
        available: true,
        category: classicalLitFr
    },
    {
        bookId: 3,
        title: 'Búcsú a fegyverektől',
        author: 'Ernest Hemingway',
        available: true,
        category: classicalLitAm
    },
    {
        bookId: 4,
        title: 'Az Úr hangja',
        author: 'Stanislaw Lem',
        available: true,
        category: fiction
    },
    {
        bookId: 5,
        title: 'Analízis',
        author: 'Leindler László',
        available: true,
        category: scientificMat
    },
    {
        bookId: 6,
        title: 'Az ezeregy éjszakai meséi',
        author: 'Unknown',
        available: true,
        category: taleMese
    },
    {
        bookId: 7,
        title: 'Piszkos Fred a kapitány',
        author: 'Rejtő Jenő',
        available: true,
        category: taleEposz
    },
    {
        bookId: 8,
        title: 'Őstörténet és honfoglalás',
        author: 'Fodor István',
        available: true,
        category: scientificHist
    },
];
export default konyvtar;
