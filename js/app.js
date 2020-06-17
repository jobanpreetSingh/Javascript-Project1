console.log("welcome to app.js app")
shownotes();
//if user add any note add it to the local storage.
let addbtn = document.getElementById("addbtn");//get the value from addbutton which id is addbtn
addbtn.addEventListener("click", function (e) {
    let addtitle = document.getElementById("addtitle");// pick the value of notetitle from the txt area which id is defined addtitle.
    let addtxt = document.getElementById("addtxt");//get the value from txt area which id is addtxt
    let notes = localStorage.getItem("notes")//get the content from the local storage which is definded under the local-Storage.
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let myobj = {
        title: addtitle.value,
        text: addtxt.value
    }
    notesobj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    addtitle.value = "";
    //console.log(notesobj)
    shownotes();
})
function shownotes() {//function to read all the elements from loca; storage an d show it to screen.
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `<div class="notecard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h class="card-title">${index + 1}: ${element.title}</h>
            <p class="card-text">${element.text}</p>
            <button id = "${index}" onclick="deletenote(this.id)" class="btn btn-primary" >Delete Note</button>
        </div>
    </div>`
    });
    let noteEle = document.getElementById("notes");
    if (notesobj.length != 0) {
        noteEle.innerHTML = html;
    }
    else {
        noteEle.innerHTML = `Please write the note Thanks :-)`
    }
}
// function to delete note
function deletenote(index) {
    let notes = localStorage.getItem("notes")//get the content from the local storage which is definded under the local-Storage.
    if (notes == null) {
        notesobj = [];

    }
    else {
        notesobj = JSON.parse(notes);

    }
    notesobj.splice(index, 1);//Splice to delete the perticulasr item from the local storage.
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes()
 }
// //searchbar by content
// let search  = document.getElementById("searchtxt");
// search.addEventListener("input",function() {
//     let inputval = search.value.toLowerCase();
//     console.log("input is fired",inputval);
    
//     let notecards = document.getElementsByClassName("notecard");
//     Array.from(notecards).forEach(function(element){
//         let cardtxt = element.getElementsByTagName("p")[0].innerText;
//         console.log(cardtxt)
//         //let cardtitle = element.getElementsByTagName("h")[0].innerText;
// if(cardtxt.includes(inputval)){
// element.style.display = "block";

// }
// else{
//     element.style.display = "none";
// }
//     })
// })

//seaerch element by 

let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

