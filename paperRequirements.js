// task - 3
function PaperRequirements(book1, book2, book3) {
    const firstBook = 100;
    const secondBook = 200;
    const thirdBook = 300;

    // all book * book page 
    let firstBookPaper = firstBook * book1;
    let secondBookPaper = secondBook * book2;
    let thirdBookPaper = thirdBook * book3;


    const totalPaper = firstBookPaper + secondBookPaper + thirdBookPaper;
    return totalPaper;

}

const book1 = 2;
const book2 = 4;
const book3 = 5;

const allBookPaper =PaperRequirements(book1,book2,book3);
console.log('Totalpaper',allBookPaper);