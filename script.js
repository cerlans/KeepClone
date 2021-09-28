noteField = document.getElementById('noteField');
noteTitle = document.getElementById('noteTitle');
trueForm = document.getElementById('trueForm');
submitButton = document.getElementById('submitButton');
noteArea = document.getElementById('noteArea');
console.log(noteTitle);


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

  if(event.target.className === 'parentNote'){
    let dynamicTitle = event.target.children[0].innerText;
    let dynamicNoteDescription = event.target.children[1].innerText;
    createModal('div','modal',dynamicTitle,dynamicNoteDescription)
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
  secondDiv.classList.add('iconParent')
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

function createModal(type,firstClass,title,noteDescription){
  //div in this case
  //is there a faster way to specify i want 3 divs created?
  let hiddenModal= document.createElement(type);

  let childModal = document.createElement(type);
  childModal.classList.add('childModal');

  let firstChild = document.createElement('input');
  firstChild.classList.add('modalNoteTitle');
  firstChild.value = title

  let secondChild = document.createElement('textarea');
  secondChild.classList.add('modalNoteDescription')
  secondChild.innerText = noteDescription

  let footerSection = document.createElement(type);
  footerSection.classList.add('modalFooter');

  let footerChildOne = document.createElement(type);
  footerChildOne.classList.add('far','fa-trash-alt');
  let footerChildtwo = document.createElement(type);
  let footerButton = document.createElement('button')
  footerButton.classList.add('footerButton')
  footerButton.innerHTML = 'Done'
  footerChildtwo.append(footerButton);
  
  childModal.append(firstChild);
  childModal.append(secondChild);
  hiddenModal.append(childModal)

  footerSection.append(footerChildOne);
  footerSection.append(footerChildtwo);
  childModal.append(footerSection);

  hiddenModal.classList.add(firstClass)
  document.body.append(hiddenModal)
  }