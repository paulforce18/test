var slideCounter = 2;
var lastSlide = 1;
    function slide() {
        $(`.slide:nth-child(${lastSlide})`).animate({left:"200%"},1000,function(){$(this).css("left","-100%")})
        $(`.slide:nth-child(${slideCounter})`).animate({left:"0"},1000)
        $(`.radio-container:nth-child(${lastSlide})`).css("backgroundColor","rgba(0, 0, 0, 0.2)");
        $(`.radio-container:nth-child(${slideCounter})`).css("backgroundColor","rgba(0, 0, 0, 1)");

            lastSlide = slideCounter;
            slideCounter == 4? slideCounter=1:slideCounter++;
    }

    const slideShow =()=> {
            slideInterval = setInterval(() => {
                                slide();
                            },5000);}
slideShow();
$(".radio-container").click(function(){
    if($(this).css("backgroundColor") == "rgba(0, 0, 0, 0.2)"){
    clearInterval(slideInterval)
    slideCounter = $(this).attr("value")
    slide();
    slideShow();
    }
})


$('#searchText').focus(function(){
    $('.circle').css({"height":"1000px","width":"1000px","opacity":"1"})
})
$("#searchText").blur(function(){
        $('.circle').css({"height":"500px","width":"500px","opacity":"0.1"})
});