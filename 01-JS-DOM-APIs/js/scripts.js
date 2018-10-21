
function fadeIn() {
    document.getElementById("sectionOnLoad").hidden = false;
}

function fetchAsync(url, within) {

    fetch(url, {
            method: 'POST'
        })
        .then(response => response.json())
        .then(response => this.handleResponse(response, within))
        .catch(error => this.handleError(error))
}

function handleResponse(response, after) {
    
    let data = response['value'];

    let newElement = document.createElement('p');
    let separatingElement = document.createElement('hr');
    newElement.textContent = data["joke"];

    this.insertAfter(newElement, after);
    this.insertAfter(separatingElement, after);
}

function handleError(error, after) {

    let newElement = document.createElement('p');
    let separatingElement = document.createElement('hr');
    newElement.textContent = "ERROR:" + error["status"];
    newElement.style.color = "#C00";

    this.insertAfter(newElement, after);
    this.insertAfter(separatingElement, after);
}

function insertAfter(newElement, after) {

    let child = document.getElementById(after);
    let parent = child.parentNode;

    parent.insertBefore(newElement, child.nextSibling);
}

/**
 * @param {method: String, url: String, user: String, password: String} options 
 * @param {"id HTML, to insert after, the new element"} within 
 */
function xhrRequestAsync(options, within) {

    let rtn = new Promise(function (resolve, reject) {

        let xhr = new XMLHttpRequest();
        xhr.open(options.method, options.url, true, options.user, options.password);

        xhr.onload = function() {
            if (this.status >= 200 && this.status < 300) { //Promise Succes
                resolve(xhr.response);
            } else {
                reject({ //Promise Fail (bad status)
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };

        xhr.onerror = function() { //Promise Fail (error in XMLHttpRequest)
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };

        xhr.send();
    });
    rtn.then((response) => {
        let jsonResponse = JSON.parse(response);
        this.handleResponse(jsonResponse, within);
    })
    rtn.catch((error) => this.handleError(error, within))
}