$(function(){
    window.addEventListener("message", function(event){

        if (event.data.pauseMenu == false) {
            var selector = document.querySelector("#todo")
            selector.style = "opacity:1.0;"

            var health = event.data.health;
            $("#health-percent").html(Math.round(health) + "");
            $("#health-level").css("width", health + "");

            var armour = event.data.armour;
            $("#armour-percent").html(Math.round(armour) + "");
            $("#armour-level").css("width", armour + "");


            var food = event.data.food;
            $("#food-percent").html(Math.round(food) + "");
            $("#food-level").css("width", food + "");

            var thirst = event.data.thirst;
            $("#thirst-percent").html(Math.round(thirst) + "");
            $("#thirst-level").css("width", thirst + "");


            var id = event.data.id;
            $("#id-percent").html(""+id);
            
        } else {
            var selector = document.querySelector("#todo")
            selector.style = "opacity:0.0;"
        }

        if (event.data.estoyencoche == true) {

            var selector2 = document.querySelector("#ui")
            selector2.style = "opacity:1.0; margin-top:50px; bottom:10%; display:block; overflow: hidden;"



            var selectorid2 = document.querySelector("#ox")
            selectorid2.style = "opacity:0.0;"

            var armour = event.data.armour;
            $("#armour-percent2").html(Math.round(armour) + "");
            $("#armour-level2").css("width", armour + "");

            var health = event.data.health;
            $("#health-percent2").html(Math.round(health) + "");
            $("#health-level2").css("width", health + "");

            var food = event.data.food;
            $("#food-percent2").html(Math.round(food) + "");
            $("#food-level2").css("width", food + "");

            var thirst = event.data.thirst;
            $("#thirst-percent2").html(Math.round(thirst) + "");
            $("#thirst-level2").css("width", thirst + "");



        } else {

            var selectorid2 = document.querySelector("#ox")
            selectorid2.style = "opacity:1.0;"

            var selector2 = document.querySelector("#ui")
            selector2.style = "opacity:1.0;"


        }

        if (event.data.EstaEnElAgua == true ||event.data.EstaEnElAgua == 1 ) {

            var selectorid = document.querySelector(".oxigeno")
            selectorid.style = "opacity:0.0;"

            var selector1 = document.querySelector(".oxigenoagua")
            selector1.style = "opacity:1.0;"

            var health = event.data.health;
            $("#health-percent2").html(Math.round(health) + "");
            $("#health-level2").css("width", health + "");
    
	        var armour = event.data.armour;
            $("#armour-percent2").html(Math.round(armour) + "");
            $("#armour-level2").css("width", armour + "");
    
	
            var food = event.data.food;
            $("#food-percent2").html(Math.round(food) + "");
            $("#food-level2").css("width", food + "");
    
            var thirst = event.data.thirst;
            $("#thirst-percent2").html(Math.round(thirst) + "");
            $("#thirst-level2").css("width", thirst + "");

            var oxigenoagua = event.data.oxigenoagua;
            $("#oxigenoagua-percent").html(Math.round(oxigenoagua) + "");
            $("#oxigenoagua-level").css("width", oxigenoagua + "");

            
        }else{

            var oxigeno = event.data.oxigeno;
            $("#oxigeno-percent").html(Math.round(oxigeno) + "");
            $("#oxigeno-level").css("width", oxigeno + "");

            var selectorid = document.querySelector(".oxigeno")
            selectorid.style = "opacity:1.0;"

            var selector1 = document.querySelector(".oxigenoagua")
            selector1.style = "opacity:0.0;"
        }

        if (event.data.isVIP == true ||event.data.EstaEnElAgua == 1 ) {

            var selectorid = document.querySelector(".oxigeno")
            selectorid.style = "opacity:0.0;"

            var selector1 = document.querySelector(".oxigenoagua")
            selector1.style = "opacity:1.0;"

            var armour = event.data.armour;
            $("#armour-percent2").html(Math.round(armour) + "");
            $("#armour-level2").css("width", armour + "");
    
            var health = event.data.health;
            $("#health-percent2").html(Math.round(health) + "");
            $("#health-level2").css("width", health + "");
    
            var food = event.data.food;
            $("#food-percent2").html(Math.round(food) + "");
            $("#food-level2").css("width", food + "");
    
            var thirst = event.data.thirst;
            $("#thirst-percent2").html(Math.round(thirst) + "");
            $("#thirst-level2").css("width", thirst + "");

            var oxigenoagua = event.data.oxigenoagua;
            $("#oxigenoagua-percent").html(Math.round(oxigenoagua) + "");
            $("#oxigenoagua-level").css("width", oxigenoagua + "");

            
        }else{

            var oxigeno = event.data.oxigeno;
            $("#oxigeno-percent").html(Math.round(oxigeno) + "");
            $("#oxigeno-level").css("width", oxigeno + "");

            var selectorid = document.querySelector(".oxigeno")
            selectorid.style = "opacity:1.0;"

            var selector1 = document.querySelector(".oxigenoagua")
            selector1.style = "opacity:0.0;"
        }

        if ( event.data.quitarhud == true ) {
            var selector  = document.querySelector("#All")
            selector.style = "display:none;"
            
        }

        if ( event.data.ponerhud == true ) {
            var selector  = document.querySelector("#All")
            selector.style = "display:block;"
        }

        if ( event.data.ponerbarras == true ) {
      
            var selector2  = document.querySelector("#All")
            selector2.style = "display:none;"
        }

        if ( event.data.quitarbarras == true ) {

            var selector2  = document.querySelector("#All")
            selector2.style = "display:block;"
        }

    })

})