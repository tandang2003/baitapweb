let i=0
setInterval(function(){
    i++
    $("img")[0].style.transform="rotate("+(15*i%360) +"deg)";
    $(".image")[0].style.transform="rotate("+(15*i%360) +"deg)";
    console.log((15*i%360))
}, 2000);