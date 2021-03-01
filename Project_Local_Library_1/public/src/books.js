function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book)=> book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let bookStatus = []
  let booksLoaned = []
  let booksReturned = []
  booksLoaned = books.filter((book) => book.borrows[0].returned === false)
  booksReturned = books.filter((book) => book.borrows[0].returned === true)
  bookStatus.push(booksLoaned, booksReturned)
  return bookStatus
}

function getBorrowersForBook(book, accounts) {
  let borrowers = [];
  accounts.forEach(account =>{
    book.borrows.forEach(transaction =>{
      if (transaction.id === account.id){
        let accountObj = {...account}
        accountObj.returned = transaction.returned;
        borrowers.push(accountObj)
      }
    })
  })
return borrowers.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
