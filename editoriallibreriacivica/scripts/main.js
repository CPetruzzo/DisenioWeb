document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const bookList = document.getElementById('book-list');
    const books = bookList.getElementsByClassName('book');

    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        const filterWords = filter.split(' ');

        Array.from(books).forEach(function(book) {
            const title = book.getElementsByClassName('book-title')[0].textContent.toLowerCase();
            const matches = filterWords.every(word => title.includes(word));

            if (matches) {
                book.style.display = '';
            } else {
                book.style.display = 'none';
            }
        });
    });
});
