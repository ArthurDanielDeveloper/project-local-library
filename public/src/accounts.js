function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort(( lastName1, lastName2) => lastName1.name.last.toLowerCase() > lastName2.name.last.toLowerCase() ? 1 : -1)
}
//see if reduce works with Zach
function numberOfBorrows(account, books) {
  let borrowers = []
 for (let i=0; i<books.length; i++){
   for (let j=0; j<books[i].borrows.length; j++){
     if (books[i].borrows[j].id === account.id){
      borrowers.push(account.id)
     }
   }
 }
 console.log(borrowers)
 return borrowers.length
}

function getBooksPossessedByAccount(account, books, authors) {
  let possessedBooks = [];
  for (let i=0; i<books.length; i++){
    let book = books[i];
    const {id, title, genre, borrows}=book;
    for (let j=0; j<borrows.length; j++){
      if (borrows[j].id === account.id && borrows[j].returned === false){
        for (let k=0; k<authors.length; k++){
          let author = authors[k];
          if (author.id === book.authorId){
            let tempBook = {id, title, genre, author, borrows}
            possessedBooks.push(tempBook);
          }
        }
      }
    }
  }
  return possessedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
