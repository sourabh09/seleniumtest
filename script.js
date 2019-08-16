$( document ).ready(function() {

    document.cookie = "username=John Doe";
    
    setTimeout(function () {
        $("#testbutton").show();
    }, 5000);
    return false;
});