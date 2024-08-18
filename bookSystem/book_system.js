let books = [];
let editIndex = null; // To keep track of the book being edited

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };

        if (editIndex !== null) {
            // If we're editing a book, update it
            books[editIndex] = book;
            editIndex = null; // Reset edit index
        } else {
            // Normal flow, add a new book
            books.push(book);
        }
        
        showBooks();  // Call function to show the books
        clearInputs(); // Clear input fields
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function showBooks() {
    const booksToDisplay = books.slice();

    const booksDiv = booksToDisplay.map((book, index) => `
        <h3>Book Number: ${index + 1}</h3>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="alertBookDetails(${index})">Show Details</button> <!-- Show Details button -->
        <button onclick="editBook(${index})">Edit</button> <!-- Edit button -->
        <button onclick="deleteBook(${index})">Delete</button> <!-- Delete button -->
    `).join('');

    document.getElementById('books').innerHTML = booksDiv;
}

function alertBookDetails(index) {
    const book = books[index];
    alert(`Book Name: ${book.name}\nAuthor Name: ${book.authorName}\nDescription: ${book.bookDescription}\nPages: ${book.pagesNumber}`);
}

function editBook(index) {
    // Populate input fields with the current book's values for editing
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    editIndex = index; // Set the edit index to the current book's index
}

function deleteBook(index) {
    books.splice(index, 1); // Remove the book at the specified index
    showBooks(); // Refresh the display
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}
