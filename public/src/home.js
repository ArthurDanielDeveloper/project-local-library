<<<<<<< HEAD
function totalBooksCount(books) {
  return books.length;
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
 let booksSignedOut = books.filter((book)=> book.borrows[0].returned === false);
 return booksSignedOut.length;
}
/*
 returns array with 5 objects
 those objects with keys of name and the count
 those objects need to be arranged most common to least
 */
function getMostCommonGenres(books) {
  let popularGenres = [];
  let count = books.reduce((acc, book) => {
    let bookGenre = book.genre;
    if (!acc[bookGenre]) {
      acc[bookGenre] = 1;
    } else {
      acc[bookGenre]++;
    }

    return acc;
  }, {});
  for (key in count){
    popularGenres.push({name:key,count:count[key]})
  }
  popularGenres.sort((genreA, genreB) => genreB.count - genreA.count)
  return popularGenres.slice(0,5)
}

function getMostPopularBooks(books) {
  books.sort((bookA, bookB) => bookB.borrows.length - bookA.borrows.length)
  let popularBooks = []
  for (let i=0; i<5; i++){
    const book = books[i]
    popularBooks.push({name:book.title, count:book.borrows.length})
  }
  return popularBooks
  // iterate over every book
  // for each book get the count
  // compare that count to count of current book in books array
  
  // count = book.borrows.length
  // books.sort((count1, count2)=> count1 > count2 ? 1 : -1)

  /*
  array needs to contain 5 objects or less
  those objects are the most popular books in the library
  popularity is defined as how many times the book has been borrowed
  each object in the array will have two keys, name and count
  */

}

function getMostPopularAuthors(books, authors) {
  let popularAuthors = []
  let bookCount = {}
  for (book of books){
    if (bookCount[book.authorId]){
      bookCount[book.authorId] += book.borrows.length
    }
    else{bookCount[book.authorId] = book.borrows.length 
    }
  }
  //bookCount = {1 : 200, 2 :3, 3:20}
  for (author of authors){
    popularAuthors.push({count:bookCount[author.id], name:`${author.name.first} ${author.name.last}`})
  }
  popularAuthors.sort((authorA, authorB) => authorB.count - authorA.count)
  return popularAuthors.slice(0,5)
  // iterate over every book
  // add to object if it's not there, if there increment book count
  /*
  array needs to have 5 objects or less
  those objects list the author of the book and how many times the
    book has been borrowed
  needs to sort objects from greatest to least
  */
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
=======
function totalBooksCount(books) {
  return books.length;
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
 let booksSignedOut = books.filter((book)=> book.borrows[0].returned === false);
 return booksSignedOut.length;
}
/*
 returns array with 5 objects
 those objects with keys of name and the count
 those objects need to be arranged most common to least
 */
function getMostCommonGenres(books) {
  let popularGenres = [];
  let count = {}
  for (book of books){
    if (book.genre in count){
      count[book.genre] += 1
    }
    else count[book.genre] = 1
  }
  for (key in count){
    popularGenres.push({name:key,count:count[key]})
  }
  popularGenres.sort((genreA, genreB) => genreB.count - genreA.count)
  return popularGenres.slice(0,5)
}

function getMostPopularBooks(books) {
  books.sort((bookA, bookB) => bookB.borrows.length - bookA.borrows.length)
  let popularBooks = []
  for (let i=0; i<5; i++){
    const book = books[i]
    popularBooks.push({name:book.title, count:book.borrows.length})
  }
  return popularBooks
  // iterate over every book
  // for each book get the count
  // compare that count to count of current book in books array
  
  // count = book.borrows.length
  // books.sort((count1, count2)=> count1 > count2 ? 1 : -1)

  /*
  array needs to contain 5 objects or less
  those objects are the most popular books in the library
  popularity is defined as how many times the book has been borrowed
  each object in the array will have two keys, name and count
  */

}

function getMostPopularAuthors(books, authors) {
  let popularAuthors = []
  let bookCount = {}
  for (book of books){
    if (bookCount[book.authorId]){
      bookCount[book.authorId] += book.borrows.length
    }
    else{bookCount[book.authorId] = book.borrows.length 
    }
  }
  //bookCount = {1 : 200, 2 :3, 3:20}
  for (author of authors){
    popularAuthors.push({count:bookCount[author.id], name:`${author.name.first} ${author.name.last}`})
  }
  popularAuthors.sort((authorA, authorB) => authorB.count - authorA.count)
  return popularAuthors.slice(0,5)
  // iterate over every book
  // add to object if it's not there, if there increment book count
  /*
  array needs to have 5 objects or less
  those objects list the author of the book and how many times the
    book has been borrowed
  needs to sort objects from greatest to least
  */
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
>>>>>>> 897ffb232f1abe2449e06c26faf7590424fe91ed
