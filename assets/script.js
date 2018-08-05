let weaponList = [{"sword":4},{"axe":3},{"pistol":8},{"magic": 7}];
var skillLabel =  $("#showSkills")
var skills = $("#skillChart")

let playerObj = {
    stats: {
          health: 0,
          strength: 0,
          logic: 0,
          agility: 0,
        },
    items: [],
    attack(opponent){

    }
};
function badGuy(named, level){
    var enemy1 = {
        name: named,
        stats:{
            health: 0,
            strength: 0,
            money: 0
        },
        difficulty: level,
        weapons: [weaponList[0]],
        
        takeDamage(damage){
            health -= damage;
            strength -= 1;
        }
    };
    this.name = named;

    this.strength = Math.pow(level,2);

}

// update stats on scren
function updateDisplayedStats(){
    $("#health").text(playerObj.stats.health)
    $("#strength").text(playerObj.stats.strength)
    $("#logic").text(playerObj.stats.logic)
    $("#agility").text(playerObj.stats.agility)
}

$(document).ready(function(){
    updateDisplayedStats()

});

skillLabel.on("click",function(){
    skills.addClass("visible");
    skills.removeClass("invisible");
    skillLabel.removeClass("visible");
    skillLabel.addClass("invisible")
})
$("#hideme").on("click",function(){
    skills.addClass("invisible");
    skillLabel.removeClass("invisible");
    skillLabel.addClass("visible");
});
// clicking on a skill
$(".itemFrame").on("click",function(event){
    updateDisplayedStats()

    var icon = $(this).find("i");
    var textName = $(this).find(".itemLabel");
    var idName = $(this).attr("data-type");

    console.log("You chose " + idName.toUpperCase());
    playerObj.stats[idName]
    $(this).prepend("<span class='itemVal rounded-bottom' id="+idName+"></span>");

    if(icon.hasClass("activate")){
        // moves the item to bottom of its container
        // probably a better way to add the score
        $(this).addClass("align-self-end");
        updateDisplayedStats()

        textName.removeClass("text-white")
        icon.removeClass("activate");
        $("#skillInstruct").attr("class","d-none")

    }
    else{
        var textVal = $(this).find(".itemVal");
        $(this).removeClass("align-self-end")        
        textVal.remove();
        icon.addClass("activate");
    }
    updateDisplayedStats()

});
     
          
