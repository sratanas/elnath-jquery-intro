console.log('script.js has been loaded');

//wait for the jQuery to load, wait for the css to load, then run the function.
//.ready is a method, an object gets returned from the function (where document is the parameter)
//document is a global variable. Document = D in DOM
$(document).ready(function(){
    $('body').append('Hello world!');    
});