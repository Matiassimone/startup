
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
/**
 * @param {method: String, url: String, user: String, password: String, params: String} options 
 * @param {"id HTML, to insert after, the new element"} after 
 */
function handleResponseJoke(options, after) {

    let rtn = this.xhrRequestAsync(options);

    rtn.then((response) => {
        let jsonResponse = JSON.parse(response);
    
        let data = jsonResponse['value'];

        let newElement = document.createElement('p');
        newElement.textContent = data["joke"];

        this.insertAfter(newElement, after);
    })
    rtn.catch((error) => this.handleError(error, within, "#C00"))
}

//Handle response from https://api.github.com/search/repositories
/**
 * @param {method: String, url: String, user: String, password: String, params: String} options 
 * @param {"id HTML, to insert after, the new element"} after 
 */
function handleResponseRepositories(options, after){

    let rtn = this.xhrRequestAsync(options);

    rtn.then((response) => {
        let jsonResponse = JSON.parse(response);
        
        if (document.getElementById("repositoriesList")) {
        
            let father = document.getElementById("results");
            
            father.innerHTML='<div id="inside"></div>';
        } 
        
        let data = jsonResponse['items'];
    
        let ul = document.createElement('ul');
        ul.id = "repositoriesList";
    
        this.insertAfter(ul, after);
    
        Object.keys(data).forEach(function(element){
    
            let li = document.createElement('li');
            let text = document.createTextNode("Id: " +  data[element]['id'] + " | OwnerName: " +  data[element]['owner']['login'] + " | Url: " + data[element]['owner']['url']);
            li.appendChild(text);
    
            let id = document.getElementById("repositoriesList");
            id.appendChild(li);
        }) 
    })
    rtn.catch((error) => this.handleError(error, within, "#C00"))
}

function handleError(error, after, errorColor) {

    let newElement = document.createElement('p');
    newElement.textContent = "ERROR:" + error["status"] + " " + error["statusText"];
    newElement.style.color = errorColor;

    this.insertAfter(newElement, after);
}

function insertAfter(newElement, after) {

    let child = document.getElementById(after);
    let parent = child.parentNode;

    parent.insertBefore(newElement, child.nextSibling);
}

function xhrRequestAsync(options) {

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
    return rtn;
}

function seekRepositories() {
    let toSeek = document.getElementById("seekRepositories").elements["searchRepositories"].value;

    if (toSeek === "" || toSeek === " ") {
        alert("Please, write in the input before submit.");

    } else {
        this.handleResponseRepositories({method: 'GET', url: 'https://api.github.com/search/repositories', user: 'null', password: 'null', params: toSeek}, 'inside');
    }
}

function seek() {
    let toSeek = document.getElementById("seekForm").elements["search"].value;
    
    if (document.getElementById("repositoriesList") == undefined) {
        alert("Don't exists list of repositories to search.");

    } else if (toSeek === "" || toSeek === " ") {
        alert("Please, write in the input before submit.");

    } else {
        
        let repositoriesList = document.getElementById("repositoriesList");
        let items = repositoriesList.getElementsByTagName("li");   
        
        let id = document.getElementById('insideModal'); //Remove Old Elements before insert new's elements.
        id.innerHTML = '';
         
        Object.keys(items).forEach(function(element){

            if(items[element].innerText.includes(toSeek)) {

                this.handleSeek(items[element].innerText, "#008000");
            }
        })
    }
}

function handleSeek(data, textColor) {

    let newElement = document.createElement('p');
    newElement.textContent = data;
    newElement.style.color = textColor;

    let id = document.getElementById('insideModal');

    id.appendChild(newElement);

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

    this.insertAfter(table, within);
}
