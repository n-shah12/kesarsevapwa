


var com = {};

com.load = function(id, text){
    console.log(id);
    $(id).waitMe({text:text});
}

com.hload = function(id){
    $(id).waitMe("hide");
}