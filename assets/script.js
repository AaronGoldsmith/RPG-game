let playerObj = {
    stats: {
          health: 10,
          strength: 1,
          logic: 1,
          agility: 1,
        },
    items: [],
};

function updateDisplayedStats(){
    $("#health").text(playerObj.stats.health)
    $("#strength").text(playerObj.stats.strength)
    $("#logic").text(playerObj.stats.logic)
    $("#agility").text(playerObj.stats.agility)
}
$(document).ready(function(){
    updateDisplayedStats()
});


$(".itemFrame").on("click",function(event){
    updateDisplayedStats()

    var icon = $(this).find("i");
    var textName = $(this).find(".itemLabel");
    var idName = $(this).attr("data-type"); // heartbeat bolt .. etc

    console.log("You chose " + idName.toUpperCase());
    playerObj.stats[idName]
    $(this).prepend("<span class='itemVal' id="+idName+"></span>");

    if(icon.hasClass("activate")){
        // moves the item to bottom of its container
        // probably a better way to add the score
        $(this).addClass("align-self-end");
        updateDisplayedStats()

        textName.removeClass("text-white")
        icon.removeClass("activate");
    }
    else{
        // moves item to the center
        var textVal = $(this).find(".itemVal");
        $(this).removeClass("align-self-end")
        textName.addClass("text-white")
        textVal.addClass("invisible")
        textVal.remove();
        icon.addClass("activate");
    }
    updateDisplayedStats()

});
     
          
