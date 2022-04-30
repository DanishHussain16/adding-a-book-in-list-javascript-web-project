// book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// ui constructor

function UI() {};

UI.prototype.addBook=function(book){

    const body=document.getElementById('book-list');

    const row=document.createElement('tr');
    
    row.innerHTML='<td>'+book.title+'</td> <td>'+book.author+'</td> <td>'+book.isbn+'</td> <td><a href="#" class=""delete>x</a></td>';
   
    // appenf in table

    body.appendChild(row);

}

// clear fields
UI.prototype.clearFields=function(){
    document.getElementById('book-id').value='';
   document.getElementById('author').value='';
   document.getElementById('isbn').value='';

}

// event function

document.getElementById('submit-form').addEventListener('submit',function(e){

   const title=document.getElementById('book-id').value;
   const author=document.getElementById('author').value;
   const isbn=document.getElementById('isbn').value;

//    initiating in book constructor
const book=new Book(title,author,isbn);

//  initiating in UI constructor
const ui=new UI();
ui.addBook(book);
ui.clearFields(ui);
    
e.preventDefault();
});