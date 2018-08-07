let weaponList = [
    {"sword":4,"lifespan":100},
    {"axe":3,"lifespan":200},
    {"pistol":8,"lifespan":10},
    {"magic": 7,"lifespan":20},
    {"humor": 1,"lifespan":99}

];
var skillLabel =  $("#showSkills")
var skills = $("#skillChart")
var insBtn = $("#instructional");
var GAMESTARTED = false;
var playerObj = {
    stats: {
          health: 0,
          strength: 0,
          logic: 0,
          agility: 0,
        },
    items: [],
};
let enemy = {
    stats: {
          health: 1,
          strength: 1,
          logic: 0,
          agility: 0,
        },
    items: ["map"] 
};
let enemy1 = {
    stats: {
          health: 10,
          strength: 1,
          logic: 0,
          agility: 0,
        },
    items: ["rope"] 
};
let enemy2 = {
    stats: {
          health: 10,
          strength: 2,
          logic: 1,
          agility: 1,
        },
    items: ["GPS"]
    
};
function random(arr){
    var len = arr.length;
    var rindex = Math.floor(Math.random()*len);
    return arr[rindex];
}
function badGuy(named, level){
    this.name = named;
    this.strength = Math.pow(level,2); 
    this.warcry = function(){
        return "RAHHH I AM " + this.name;
    }

}

var level1 = [new badGuy("Maglah",1),new badGuy("Taglah",1),new badGuy("Raglah",1),new badGuy("Naglah",1),new badGuy("Waglah",1)]
var level2 = [new badGuy("Poba",2),new badGuy("Roba",2),new badGuy("Doba",2),new badGuy("Koba",2),new badGuy("Loba",2),]
var level3 = [new badGuy("Mr. Meeseeks",3),new badGuy("Squanchy",3)]
// update stats on scren
function updateDisplayedStats(){
    $("#health").text(playerObj.stats.health)
    $("#strength").text(playerObj.stats.strength)
    $("#logic").text(playerObj.stats.logic)
    $("#agility").text(playerObj.stats.agility)
}

$(document).ready(function(){
    updateDisplayedStats()
    $("#namer").focus()
    skillLabel.on("click",function(){
        updateDisplayedStats()
            skills.fadeIn("fast",function(){
            skills.removeClass("invisible");
            skillLabel.addClass("invisible")
        });
    })

    $(".card-img-top").on("click",function(){
        $(".card-img-top").parent().addClass("invisible");
        $(this).parent().removeClass("invisible"); // only show the current card
        $(this).parent().find("#playerActions").removeClass("invisible");
        $("#playerActions").addClass("visible")
        $("#comedianTxt").remove()
        $("#enemySelect").removeClass("invisible")

        $(".card-text").toggle();
        skillLabel.removeClass("invisible");

    });

    $("#hideme").on("click",function(){
        skills.fadeOut("fast",function(){
              skillLabel.removeClass("invisible");
              skills.addClass("invisible")
        });
    });

    $("#playerSelect .card").on("mouseenter",function(){
        $(this).addClass("border-primary")
    }).on("mouseleave",function(){
        $(this).removeClass("border-primary")
    });

    $("#start").on("click",function(event){
        // start game if they have something in the input
            GAMESTARTED = true;
            $(".layer-1").remove();
            $(".layer-2").removeClass("invisible");
            $(this).remove();

            skillLabel.removeClass("invisible");
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
            $(this).addClass("align-self-end");    
            textName.removeClass("text-white")
            icon.removeClass("activate");
            $("#skillInstruct").addClass("invisible")

    
        }
        else{
            var textVal = $(this).find(".itemVal");
            // reposition item 
            // remove text so element can shift appropriately
            $(this).removeClass("align-self-end");     
            textVal.remove(); 
            icon.addClass("activate");
        }
        updateDisplayedStats()
    });


    });


     
          
