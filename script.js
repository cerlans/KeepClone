noteField = document.getElementById('noteField');
noteTitle = document.getElementById('noteTitle');
trueForm = document.getElementById('trueForm');
submitButton = document.getElementById('submitButton');
noteArea = document.getElementById('noteArea')
console.log(noteTitle)

noteField.addEventListener('focus',()=>{
  noteTitle.style.display='block';
})

noteField.addEventListener('keyup',(event)=>{
  if(event.key === 'Escape'){
    reset()
  }
})

submitButton.addEventListener('click',()=>{

  createNote(noteField.value,noteTitle.value)
  reset()
})
//Parent of all the notes that will be added
noteArea.addEventListener('click',(event)=>{

  if(event.target.className === 'far fa-edit'){
    console.log(event.target)
    //createModal('div','modal')
  }
})
//bchiang creates a 'backdrop' sort off like the modal from w3 schools that acts as the anchor to close the text field when its clicked out 
// this backdrop overlays the entire page, bar the input area

function createNote(noteText,noteTitle){
  const parentDiv = document.createElement('div');
  parentDiv.classList.add('parentNote')
  const titleDiv = document.createElement('div');
  const innerDiv = document.createElement('div')
  const secondDiv = document.createElement('div')
  const littleIcon = document.createElement('i')
  littleIcon.classList.add('far','fa-edit')
  secondDiv.append(littleIcon)
  innerDiv.innerText = noteTitle
  titleDiv.append(innerDiv)
  titleDiv.append(secondDiv)
  titleDiv.classList.add('first')
  const noteDiv = document.createElement('div')
  noteDiv.innerText = noteText;
  noteDiv.classList.add('second')
  parentDiv.append(titleDiv);
  parentDiv.append(noteDiv);
  noteArea.append(parentDiv)
}

function reset (){
  noteField.value='';
  noteTitle.value=''
}

function createModal(type,firstClass,){
  //div in this case
  //is there a faster way to specify i want 3 divs created?
  let hiddenModal= document.createElement(type);
  let childModal = document.createElement(type);
  let firstChild = document.createElement(type);
  let secondChild = document.createElement(type);
  childModal.classList.add('childModal')
  childModal.append(firstChild);
  childModal.append(secondChild);
  hiddenModal.append(childModal)
  hiddenModal.classList.add(firstClass)
  document.body.append(hiddenModal)
  }