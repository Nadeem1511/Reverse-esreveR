var btnTranslate = document.querySelector("#btn");
var input = document.querySelector("#txt");
var output = document.querySelector("#output");

var serverUrl ="https://api.funtranslations.com/translate/numbers.json"

function translationUrl(txtInput){
    return serverUrl + "?" + "text=" + txtInput
}

//Error Handling

function errorHandling(error){
    console.log("Error Occured", error);
    alert("Something went wrong,Please try again later")
}

function clickHandler(){
    var inputTxt = input.value; 
    fetch(translationUrl(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translatedTxt = json.contents.translated;
        output.innerText = translatedTxt;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);