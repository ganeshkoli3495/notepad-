const shredderGIF = document.querySelector('.shredderGIF');
function saveText(){

    if(typeof(Storage) != 'undefined'){

    //get value of textarea
        const textarea = document.querySelector('#notepad').value;

    //save value n localstorage
        localStorage.setItem('text', textarea); 
        document.querySelector('#notepad').value = 
        localStorage.getItem('text'); 
   

      
    

} else {
    //throw error browser not supported
    document.getElementById('test').innerHTML('sorry browser not supported')
}
   
}



//now get value from local storage
    document.querySelector('#notepad').value = 
    localStorage.getItem('text');

//delete the notes 
document.querySelector('.shredder').addEventListener('click' , function(e){ 
    e.preventDefault();
    localStorage.removeItem('text');    
    document.querySelector('#notepad').value = "";

        shredderGIF.style.display = "block";    
        setTimeout(() => {
            shredderGIF.style.display="none";
        }, 10*200);

})



//download the notes
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
  
  // Start file download.
//   download("hello.pdf","This is the content of my file :)");


document.querySelector('.download').addEventListener('click', function(){
    const content = document.querySelector('#notepad').value;
    const filename = "notepad.txt"


    download(filename,content);
}, false)  


