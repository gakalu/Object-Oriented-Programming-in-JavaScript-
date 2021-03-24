"use strict";
function bookPageLoad(){
    let addBtn=document.getElementById("titlesBtn")
    let showTitleBtn=document.getElementById("showTitlesBtn")
    let showAuthorBtn=document.getElementById("showAuthorBtn")
    let showIdBtn=document.getElementById("showIdBtn")

    addBtn.onclick=addBookToLibrary;
    showTitleBtn.onclick=showTitle;
    showAuthorBtn.onclick=showAuthor;
    showIdBtn.onclick=showId;
   }
function showTitle(){
    let title=""
    let sortResult=booksList.sort((a,b)=>{
        let title1 = a.title.toLowerCase(),
            title2 = b.title.toLowerCase();
        if (title1 > title2) {
        return 1;
        }
        if (title1 < title2) {
        return -1;
        }
        return 0; 
        })
    for(let i=0;i<sortResult.length;i++){
    title+=i+1 +") "+(sortResult[i].title+"\n" )
    }
    document.getElementById("displayArea").value=title;
   }

function showAuthor() {
    let author=""
    let sortResult1=booksList.sort((c,d)=>{
        let author1 = c.author.toLowerCase(),
        author2 = d.author.toLowerCase();
        if (author1 > author2) {
        return 1;
        }
        if (author1 < author2) {
        return -1;
        }
        return 0; 
        })
    for(let i=0;i<sortResult1.length;i++){
    author+=i+1 +") "+(sortResult1[i].author+"\n" )
    }
    document.getElementById("displayArea").value=author;
   } 
function showId() {
    let libraryID=""
    let  sortResult2=booksList.sort((e,f)=>e.libraryID-f.libraryID)
    for(let i=0;i<sortResult2.length;i++){
    libraryID+=i+1 +") "+(sortResult2[i].libraryID+"\n" )
    }
    document.getElementById("displayArea").value=libraryID;
   }
    
function addBookToLibrary(){
 
    let newBook={};
    let bookTitle=document.getElementById("title").value;
    let bookAuthor=document.getElementById("author").value;
    let libId=document.getElementById("libraryID").value;
    if(bookTitle===""||bookAuthor==="" ||libId===""){
    alert("please put values before you add a book")
    }
    else{
    newBook.title=bookTitle;
    newBook.author=bookAuthor
    newBook.libraryID=Number(libId);
    booksList.push(newBook);
    document.getElementById("title").value="";
    document.getElementById("author").value="";
    document.getElementById("libraryID").value="";
    alert("This book is added successfully")
    }
   }

   let booksList=[
    { title: "The Road Ahead", author: "Bill Gates",libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins",libraryID: 3245 }
   ];
    window.onload = bookPageLoad; 
  