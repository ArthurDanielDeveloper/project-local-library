function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((lastName1, lastName2) => lastName1.name.last.toLowerCase() > lastName2.name.last.toLowerCase() ? 1 : -1)
}
//see if reduce works with Zach
/*
returns a number
that number equals the amount of times the account id 
  has appeared in borrows book array
need to compare accounts.id to books.borrows id by looping over books.borrows
each time books.borrows id === accounts.id increase number
*/
function numberOfBorrows(account, books) {
  let borrowers = []
 for (let index=0; index<books.length; index++){
   for (let index2=0; index2<books[index].borrows.length; index2++){
     if (books[index].borrows[index2].id === account.id){
      borrowers.push(account.id)
     }
   }
 }
 console.log(borrowers)
 return borrowers.length
}

function getBooksPossessedByAccount(account, books, authors) {
  let possessedBooks = [];
  for (let index1=0; index1<books.length; index1++){
    let book = books[index1];
    const {id, title, genre, borrows}=book;
    for (let index2=0; index2<borrows.length; index2++){
      if (borrows[index2].id === account.id && borrows[index2].returned === false){
        for (let index3=0; index3<authors.length; index3++){
          let author = authors[index3];
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
