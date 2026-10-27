$("#btnf").click(function(){

       $(this).css("background-color", "white")
       $(this).css("color", "black")
       $("#intro").text("WELCOME PO")
       $("#message").text("YOU CLICK THE BUTTON ONCE")

   })

   $("#btnf").dblclick(function(){
       $("#message").text("YOU DOUBLE CLICK THE BUTTON ONCE")
         $(this).css("background", "beige")
    })

    $("#btnf").mouseenter(function(){
        $("#message").text("WAG MO PINDUTINN")
   })

   $("#btnf").mouseleave(function(){
        $("#message").text("OKAY NA WALA KANA HERE")

   })

    $("#hide").click(function(){
        $("#card2").hide("slow")
        $("#h").css("background", "beige")

   })

   $("#show").click(function(){
        $("#card2").show("3000")

   })

   $("#course2").change(function(){
        $("#Course").text($(this).val())
           $("#message2").text($(this).val())
   })
   
       $("#h").click(function(){
        $("#table").hide("slow")
        $(this).css("background", "bisque")
        $(this).css("color", "white")

   })
        $("#s").click(function(){
        $("#table").show("slow")
        $(this).css("background", "bisque")
        $(this).css("color", "white")

   })

   $("#hs").click(function(){
    $("tr:odd").css("background", "brown")
    $("tr:odd").css("color", "white")
    $("tr:even").css("background", "")
   })

    $("#ss").click(function(){
    $("tr:even").css("background", "brown")
       $("tr:odd").css("color", "black")
     $("tr:odd").css("background", "")
   })
