function clearContent(id) {
    document.getElementById(id).innerText = '';
}

function indexedDB_Suported() {
    let isSuported = false;

    if (self.indexedDB) {
        isSuported = true;
    }
    return isSuported;
}

function indexedDB_CreateDB(dbName, nameObjectStore) {

    if (indexedDB_Suported) {

        let requestDB = self.indexedDB.open(dbName);

        requestDB.onupgradeneeded = event => {
            let db = event.target.result;
            db.createObjectStore(nameObjectStore, {
                autoIncrement: true
            });
        }
        requestDB.onerror = event => {
            this.handleError(event.target.errorCode);
        }

    } else {
        this.handleError('IndexedDB not is supported')
    }
}


function indexedDB_Save(dbName, nameObjectStore, toSave) {

    if (indexedDB_Suported) {

        this.indexedDB_CreateDB(dbName, nameObjectStore);

        let requestDB = self.indexedDB.open(dbName);

        requestDB.onsuccess = event => {
            let db = event.target.result;
            let transaction = db.transaction(nameObjectStore, 'readwrite');

            let store = transaction.objectStore(nameObjectStore);
            store.put(toSave);

            transaction.oncomplete = event => {
                console.log('The element "' + toSave + '" has saved correctly in IndexedDB.');
            }
            transaction.onerror = event => {
                this.handleError(event.target.errorCode);
            }
        }
        requestDB.onerror = event => {
            this.handleError(event.target.errorCode);
        }

    } else {
        this.handleError('IndexedDB not is supported')
    }
}

function indexedDB_Clear(dbName, nameObjectStore) {

    if (indexedDB_Suported) {

        let requestDB = self.indexedDB.open(dbName);

        requestDB.onsuccess = event => {
            let db = event.target.result;
            let transaction = db.transaction(nameObjectStore, 'readwrite');

            let store = transaction.objectStore(nameObjectStore);
            store.clear();

            transaction.oncomplete = event => {
                console.log('The IndexedDB has erased correctly.');
            }
            transaction.onerror = event => {
                this.handleError(event.target.errorCode);
            }
        }
        requestDB.onerror = event => {
            this.handleError(event.target.errorCode);
        }

    } else {
        this.handleError('IndexedDB not is supported')
    }
}

function handleError(err) {
    console.log("Database error: " + err);
}

function localStorage_Save(keyName, toSave) {
    localStorage.setItem(keyName, JSON.stringify(toSave));
    console.log('The element "' + toSave + '" has saved correctly in LocalStorage.');
}

function localStorage_Clear(keyName) {
    localStorage.removeItem(keyName);
    console.log('The LocalStorage has erased correctly.');
}


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

