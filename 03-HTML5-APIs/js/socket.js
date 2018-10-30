function testWebSocket(web, idToInsert, idToExtract) {

    let message = document.getElementById(idToExtract).value;
    websocket = new WebSocket(web);

    websocket.onopen = event => {
        onOpen(event, message)
    }
    websocket.onmessage = event => {
        onMessage(event, idToInsert)
    }
    websocket.onerror = event => { 
        onError(event, idToInsert)
    }
}

function onOpen(event, message) {
    websocket.send(message);
}

function onMessage(event, idToInsert) {
    document.getElementById(idToInsert).value = event.data;
    websocket.close();
}

function onError(event, idToInsert) {
    document.getElementById(idToInsert).value = ("ERROR: " + event.data);
    websocket.close();
}