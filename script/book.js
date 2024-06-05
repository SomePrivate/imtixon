const elBooksList = document.querySelector('.books-list')
const elSearchBook = document.querySelector('#search-book')
const elBookmarkBtn = document.querySelector('.bookmark-btn')

const logout = document.querySelector('.logout')
const elResult = document.querySelector('.result')

const token = window.localStorage.getItem("access");


if (!token) {
    window.location.replace("index.html");

}


logout.addEventListener('click', () => {

    window.localStorage.removeItem("token");

    window.location.replace('./index.html')
})


const reguestBook = () => fetch("https://www.googleapis.com/books/v1/volumes?q=search+terms").then(res =>  res.json()).then(data => filterBook(data.items))

elResult.textContent = `Search results: `
const filterBook = (arr) => {
    arr.forEach(item => {
       const book = item.volumeInfo
        const html = `
       <li class="p-4 rounded-md shadow-lg">
       <div class="p-5 bg-[#F8FAFD] mb-5">
           <img src="${book.imageLinks.thumbnail}" class="w-[200px] h-[200px]" alt="">
       </div>
       <div>
           <h2 class="text-lg font-semibold mb-0.5">
                ${book.title}
           </h2>
           <p class="text-sm text-[#757881]">
           ${book.authors}
           </p>
           <p class="text-sm text-[#757881]">
                ${book.publishedDate}
           </p>
           <div class="flex items-center gap-1.5 mt-2.5">
               <button class="bookmark-btn bg-[#FFD80D] w-full py-2 text-sm font-semibold rounded-md">
                   Bookmark
               </button>
               <button class="bg-[#0D75FF] rounded-md w-full py-2 bg-opacity-[5%] text-[#0D75FF] text-sm font-semibold">
                   More Info
               </button>
           </div>
           <button class="w-full bg-[#75828A] rounded-md py-2 mt-1 text-white text-sm font-semibold">
               Read
           </button>
       </div>
   </li>


        `
        elBooksList.insertAdjacentHTML('beforeend', html)



        
    });


}

reguestBook()