function localStorage_Save(keyName, idToSave) {
    let toSave = document.getElementById(idToSave).value;
    localStorage.setItem(keyName, JSON.stringify(toSave));
    console.log('The element "' + toSave + '" has saved correctly in LocalStorage.');
}

function localStorage_Clear(keyName) {
    localStorage.removeItem(keyName);
    console.log('The LocalStorage has erased correctly.');
}