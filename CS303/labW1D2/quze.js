"use strict";
function bookPageLoad(){
    let showTitleBtn=document.getElementById("showTitlesBtn")
    showTitleBtn.onclick=showTitle;
   }
function showTitle(){
    let title=""
    let sortResult=booksList.sort((a,b)=>{
        let title1 = a.title.length,
            title2 = b.title.length;
        if (title1 < title2) {
        return 1;
        }
        if (title1 >title2) {
        return -1;
        }
        return 0; 
        })
    for(let i=0;i<sortResult.length;i++){
    title+=i+1 +") "+(sortResult[i].title+"\n" )
    }
    document.getElementById("displayArea").value=title;
   }
   let booksList=[
    { title: "The Road Ahead", author: "Bill Gates",libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins",libraryID: 3245 },
    { title: "The head", author: "Miller",libraryID: 5049 },
    { title: "One up on a time in Parise", author: "Devid De", libraryID: 1601},
    { title: "Hero", author: "LeBlack",libraryID: 8024}
   ];
    window.onload = bookPageLoad; 