function handlerDrop(event, idToPut) {
    
    let htmlPut = document.getElementById(idToPut);
    event.preventDefault();

    let file = event.dataTransfer.files[0];
    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = event => {
        if(/text/.test(file.type)){ 
            htmlPut.innerText = event.target.result;
        }else{
            console.log("Only suport files based in text"); 
        }
    }
    removeData(event);
}

function removeData (event) {
    if (event.dataTransfer.items) {
        event.dataTransfer.items.clear();
      } else {
        event.dataTransfer.clearData();
      }
}