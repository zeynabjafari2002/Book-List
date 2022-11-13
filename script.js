const $=document
let title=$.getElementById('title')
let author=$.getElementById('author')
let year=$.getElementById('year')
const addBtn=$.querySelector('#addBtn')
let bookList=$.getElementById('bookList')
let newBook=[]
let trTable
let tdTableTitle
let tdTableAuthor
let tdTableYear
let newBookObj


addBtn.addEventListener('click' , (event)=>{
    event.preventDefault()

    let titleValue=title.value
    let authorValue=author.value
    let yearValue=year.value

    if(titleValue==='' , authorValue==='' , yearValue===''){
        alert('some thing is wrong')
    }
    else{
        newBookObj={
            id : newBook.length+1 ,
            Title : titleValue ,
            Author : authorValue ,
            Year :yearValue
        }
        newBook.push(newBookObj)
        setInLocalStorage(newBook)
    } 
})

function setInLocalStorage(booksArray){
    localStorage.setItem('books' , JSON.stringify(booksArray))
    makeEmpty()
    booksGenerator(booksArray)
}

function makeEmpty(){
    title.value=''
    author.value=''
    year.value=''
}

function getFromLocalStorage(){
    let getData=localStorage.getItem('books')

    if(getData){
        newBook=JSON.parse(getData)
        booksGenerator(newBook)
    }
}

function booksGenerator(booksArray){
    bookList.innerHTML=''
    booksArray.forEach(
        function (book){
            trTable=$.createElement('tr')
            tdTableTitle=$.createElement('td')
            tdTableAuthor=$.createElement('td')
            tdTableYear=$.createElement('td')

            tdTableTitle.innerHTML=book.Title
            tdTableAuthor.innerHTML=book.Author
            tdTableYear.innerHTML=book.Year

            bookList.append(trTable)
            trTable.append(tdTableTitle , tdTableAuthor , tdTableYear)
        }
    )
}

window.addEventListener('load' , getFromLocalStorage)