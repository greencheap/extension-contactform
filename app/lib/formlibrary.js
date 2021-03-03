var formId = window.$contactform.formId;
function onSubmit()
{
    event.preventDefault();
    var formData = new FormData();
    var forms = document.getElementById(formId);
    formData.append('id', window.$contactform.id)
    for(var i=0; i < forms.length; i++)
    {
        var element = forms[i];
        if(element.type == 'hidden' || element.type == 'submit' || element.type == 'reset'){
            formData.append(element.name, element.value);
        }else{
            formData.append(`form[${element.name}]`, element.value)
        }
    }

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () 
    {
        if(xmlHttp.readyState == 4){
            if(xmlHttp.status !== 200){
                onError(xmlHttp.response, xmlHttp.status)
            }else{
                onSuccess(xmlHttp.response, xmlHttp.status)
            }
        }
    }
    xmlHttp.open("post", "/contactform/messageservice"); 
    xmlHttp.send(formData); 
}

function onSuccess(response, status)
{
    var response = JSON.parse(response).message;
    var successDOM = document.getElementById(formId).children.contactformSuccess;
    successDOM.children.contactformSuccessMessage.innerText = response
    successDOM.removeAttribute('hidden')
}

function onError(response, status)
{
    var errorDOM = document.getElementById(formId).children.contactformError;
    errorDOM.children.contactformErrorMessage.innerText = response
    errorDOM.removeAttribute('hidden')
}