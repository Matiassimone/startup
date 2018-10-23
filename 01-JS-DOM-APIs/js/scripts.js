
function fadeIn() {
    document.getElementById("sectionOnLoad").hidden = false;
}

//Another type of data fetching
function fetchAsync(url, within) {

    fetch(url, {
            method: 'POST'
        })
        .then(response => response.json())
        .then(response => this.handleResponse(response, within))
        .catch(error => this.handleError(error))
}

//Handle response from http://api.icndb.com/jokes/random
function handleResponseJoke(response, after) {
    
    let data = response['value'];

    let newElement = document.createElement('p');
    let separatingElement = document.createElement('hr');
    newElement.textContent = data["joke"];

    this.insertAfter(newElement, after);
    this.insertAfter(separatingElement, after);
}

//Handle response from https://api.github.com/search/repositories
function handleResponseRepositories(response, after){

    if (document.getElementById("repositoriesList")) {
        
        let father = document.getElementById("results");
        
        father.innerHTML='<div id="inside"></div>';
    } 
    
    let data = response['items'];

    let ul = document.createElement('ul');
    ul.id = "repositoriesList";

    this.insertAfter(ul, after);

    Object.keys(data).forEach(function(element){

        let li = document.createElement('li');
        let text = document.createTextNode("Id: " +  data[element]['id'] + " | OwnerName: " +  data[element]['owner']['login'] + " | Url: " + data[element]['owner']['url']);
        li.appendChild(text);

        let id = document.getElementById("repositoriesList");
        id.appendChild(li);

        let separatingElement = document.createElement('hr');
        id.appendChild(separatingElement);
    }) 
    
}

function handleError(error, after, errorColor) {

    let newElement = document.createElement('p');
    let separatingElement = document.createElement('hr');
    newElement.textContent = "ERROR:" + error["status"] + " " + error["statusText"];
    newElement.style.color = errorColor;

    this.insertAfter(newElement, after);
    this.insertAfter(separatingElement, after);
}

function insertAfter(newElement, after) {

    let child = document.getElementById(after);
    let parent = child.parentNode;

    parent.insertBefore(newElement, child.nextSibling);
}

/**
 * @param {method: String, url: String, user: String, password: String, params: String} options 
 * @param {"id HTML, to insert after, the new element"} within 
 */
function xhrRequestAsync(options, within) {

    let rtn = new Promise(function (resolve, reject) {

        let xhr = new XMLHttpRequest();
        xhr.open(options.method, options.url+"?q="+options.params, true, options.user, options.password);

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
        this.handleResponseRepositories(jsonResponse, within); //Change this line to differents Handles.
    })
    rtn.catch((error) => this.handleError(error, within, "#C00"))
}

function seekRepositories() {
    let toSeek = document.getElementById("seekRepositories").elements["searchRepositories"].value;

    if (toSeek == "" || toSeek === " ") {
        alert("Please, write in the input before submit.");

    } else {
        this.xhrRequestAsync({method: 'GET', url: 'https://api.github.com/search/repositories', user: 'null', password: 'null', params: toSeek}, 'inside');
    }
}

function seek() {
    let toSeek = document.getElementById("seekForm").elements["search"].value;
    
    if (document.getElementById("repositoriesList") == undefined) {
        alert("Don't exists list of repositories to search.");

    } else if (toSeek == "" || toSeek === " ") {
        alert("Please, write in the input before submit.");

    } else {
        
        let repositoriesList = document.getElementById("repositoriesList");
        let items = repositoriesList.getElementsByTagName("li");   
        
        let id = document.getElementById('insideModal'); //Remove Old Elements before insert new's elements.
        id.innerHTML = '';
         
        Object.keys(items).forEach(function(element){

            if(items[element].innerText.includes(toSeek)) {

                this.handleSeek(items[element].innerText);
            }
        })
    }
}

function handleSeek(data) {

    let newElement = document.createElement('p');
    let separatingElement = document.createElement('hr');
    newElement.textContent = data;
    newElement.style.color = "#008000";

    let id = document.getElementById('insideModal');

    id.appendChild(newElement);
    id.appendChild(separatingElement);

    this.showModal();
}

function showModal() {
    document.getElementById('openModal').style.display = 'block';
}
  
function CloseModal() {
    document.getElementById('openModal').style.display = 'none';
}

function matrixDraw(matrix, within) {

    //Example to test the function.
    let a = [];
    let b = ['1', '2', '3'];
    let c = ['1', '2', '3'];
    let d = ['1', '2', '3'];

    a[0]=b;
    a[1]=c;
    a[2]=d;
    matrix = a;
    within = "matrixStructure";

    let table = document.createElement('table');
    
    for(let row of matrix) {

        let tr = document.createElement('tr');
        table.appendChild(tr);

        for(let col of row) {

            let td = document.createElement('td');
            let textTd = document.createTextNode(col);
            td.appendChild(textTd);

            tr.appendChild(td);
        }
    }
    table.style.border = "1px solid black";
    this.insertAfter(table, within);
}
