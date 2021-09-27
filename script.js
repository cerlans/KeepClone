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
  noteTitle.style.display ='none'
})

//bchiang creates a 'backdrop' sort off like the modal from w3 schools that acts as the anchor to close the text field when its clicked out 
// this backdrop overlays the entire page, bar the input area

function createNote(noteText,noteTitle){
  const parentDiv = document.createElement('div');
  parentDiv.classList.add('parentNote')
  const titleDiv = document.createElement('div');
  const innerDiv = document.createElement('div')
  const secondDiv = document.createElement('div')
  innerDiv.innerText = noteTitle
  titleDiv.append(innerDiv)
  secondDiv.innerHTML = `<i class="far fa-edit"></i>`
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