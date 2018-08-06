let weaponList = [{"sword":4},{"axe":3},{"pistol":8},{"magic": 7}];
var skillLabel =  $("#showSkills")
var skills = $("#skillChart")
var insBtn = $("instructions")
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
    // var enemy1 = {
    //     name: named,
    //     stats:{
    //         health: 0,
    //         strength: 0,
    //         money: 0
    //     },
    //     difficulty: level,
    //     weapons: [weaponList[0]],
        
    //     takeDamage(damage){
    //         health -= damage;
    //         strength -= 1;
    //     }
    // };
    this.name = named;
    this.strength = Math.pow(level,2); 
    this.warcry = function(){
        return "RAHHH I AM " + this.name;
    }

}

let level1 = [new badGuy("Maglah",1),new badGuy("Taglah",1),new badGuy("Raglah",1),new badGuy("Naglah",1),new badGuy("Waglah",1)]
let level2 = [new badGuy("Koba",2),new badGuy("Roba",2),new badGuy("Doba",2),new badGuy("Koba",2),new badGuy("Loba",2),]

// update stats on scren
function updateDisplayedStats(){
    $("#health").text(playerObj.stats.health)
    $("#strength").text(playerObj.stats.strength)
    $("#logic").text(playerObj.stats.logic)
    $("#agility").text(playerObj.stats.agility)
}

$(document).ready(function(){
    updateDisplayedStats()
    skillLabel.on("click",function(){
        updateDisplayedStats()
        skills.fadeIn("fast",function(){
            skills.css("visibility","visible")
            skillLabel.addClass("invisible")
        });
    })
    $("#hideme").on("click",function(){
        skills.fadeOut("fast",function(){
              skills.css("visibility","hidden");
              skillLabel.removeClass("invisible");
        });
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
            // updateDisplayedStats()
    
            textName.removeClass("text-white")
            icon.removeClass("activate");
            $("#skillInstruct").attr("class","d-none")
    
        }
        else{
            var textVal = $(this).find(".itemVal");
            $(this).removeClass("align-self-end"); // reposition item     
            textVal.remove(); // remove text so element can shift appropriately
            icon.addClass("activate");
        }
        updateDisplayedStats()
    });

});


     
          
