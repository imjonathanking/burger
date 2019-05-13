//CSS Transition
$(".burgerInput").on("click", function(){

    $(".burgerInput").toggleClass("focus");
    $(".submitBurger").toggleClass("focus");
    $(".notDevoured").toggleClass("focus").toggleClass("columnDark");
    $(".devoured").toggleClass("focus").toggleClass("columnDark");
});

$(".submitBurger").on("click", function(event){
    event.preventDefault();

    newBurger = $(".burgerInput").val();

    console.log(newBurger);

    if(!newBurger){
        return
    }

    addBurger(newBurger);

    $(".burgerInput").val("");
})

function addBurger(burgerName){
    burgerObject = {};
    burgerObject.name = burgerName;

    console.log(burgerObject);

    $.post("/addBurger", burgerObject, function(response){
        if(response){
            console.log("response");
        }
        console.log("burger has been added");
    });

    //Reload page
    document.location.reload()
}

$(".devour").on("click", function(event){
    event.preventDefault();

    thisBurgerId = $(this).attr("id");

    console.log(thisBurgerId);

    eatBurger(thisBurgerId);
})

function eatBurger(id){
    burgerObject = {};
    burgerObject.id = id;

    console.log(burgerObject);

    $.post("/eatBurger", burgerObject, function(response){
        if(response){
            console.log(response);
        }
        else{
            console.log("Burger has been eaten");
        }
    })

    //Reload page
    document.location.reload()
}