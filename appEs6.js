//Book Constructor
class Book{
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
   


class UI{
    addBooktoList(book){
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete"><i class="fas fa-trash-alt"></i></a></td>`;
        list.appendChild(row);
    }

    showalert(message, className){
        const div = document.createElement('div');
        div.className = `p-3 mb-2 text-white ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.mx-auto');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
    
        setTimeout(function () {
            document.querySelector('.text-white').remove();
        }, 3000)
    }
    clearfields(){
        document.getElementById('book-title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
    deletebook(target){
        if(target.className === 'fas fa-trash-alt'){
            target.parentElement.parentElement.parentElement.remove();
        }
    }
}





//Event listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
    const title = document.getElementById('book-title').value;
    author = document.getElementById('author').value;
    isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);

    const ui = new UI();

    if (title === '' || author === '' || isbn === '') {
        ui.showalert('Please fill all the fields', 'bg-danger')
    } else {
        ui.addBooktoList(book);
        ui.clearfields();
        ui.showalert('Book Added to the list.', 'bg-success')

    }




    e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deletebook(e.target);
    ui.showalert('Book deleted from the list', 'bg-success');

    e.preventDefault();
})

