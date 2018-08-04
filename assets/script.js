
$(".itemFrame").on("click","i",function(){
    console.log($(this)["0"])
    if($(this).hasClass("activate")){
        $(this).removeClass("activate");
    }
    else{
        
        $(this).addClass("activate");
    }
});
     
          
