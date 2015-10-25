var Application = function() {

    function init() {
        console.log("init");
    }


    function changeImageOnHover() {

        var shapeGray1 = $(".hexagon-gray-1");
        var shapeGray2 = $(".hexagon-gray-2");
        var shapeGray3 = $(".hexagon-gray-3");
        var shapeGray4 = $(".hexagon-gray-4");

        shapeGray1.on("mouseenter", function(){
            $(this).find("img").attr("src", "images/icons/heart-purple.svg");
        });
        shapeGray1.on("mouseleave", function(){
            $(this).find("img").attr("src", "images/icons/heart.svg");
        });

        shapeGray2.on("mouseenter", function(){
            $(this).find("img").attr("src", "images/icons/diamond-purple.svg");
        });
        shapeGray2.on("mouseleave", function(){
            $(this).find("img").attr("src", "images/icons/diamond.svg");
        });

        shapeGray3.on("mouseenter", function(){
            $(this).find("img").attr("src", "images/icons/cup-purple.svg");
        });
        shapeGray3.on("mouseleave", function(){
            $(this).find("img").attr("src", "images/icons/cup.svg");
        });

        shapeGray4.on("mouseenter", function(){
            $(this).find("img").attr("src", "images/icons/phone-purple.svg");
        });
        shapeGray4.on("mouseleave", function(){
            $(this).find("img").attr("src", "images/icons/phone.svg");
        });

    }


    function stickyMenu() {

        var menu = $(".sticky-menu");
        var paragraphs = $(".chapter");
        var links = $(".sticky-menu li");
        var lastPositionTop = 0;
        var menuHeight = menu.height();

        console.log(paragraphs);
        console.log(links);

        $(window).scroll(function (event) {

            if (menu.hasClass("sticky") === false && (menu.offset().top) < ($(this).scrollTop())) {


                lastPositionTop = menu.offset().top;
                menu.addClass("sticky");
            }

            if (menu.hasClass("sticky") && (lastPositionTop > ($(this).scrollTop()))) {

                menu.removeClass("sticky");
            }

            paragraphs.each(function (index) {

                if (index + 1 >= paragraphs.length) {

                    if (paragraphs.eq(index).offset().top < $(window).scrollTop()) {

                        links.eq(index).addClass("active");
                    }

                    else {
                        links.eq(index).removeClass("active");
                    }


                }
                else {

                    if (paragraphs.eq(index).offset().top < $(window).scrollTop() &&
                        paragraphs.eq(index + 1).offset().top > $(window).scrollTop()) {

                        links.eq(index).addClass("active");
                    }

                    else {
                        links.eq(index).removeClass("active");
                    }
                }
            });
        });
    }






























    function scrollPage() {
        console.log("scrolling");
    }

    return {
        init:init,
        changeImageOnHover:changeImageOnHover,
        stickyMenu:stickyMenu
    };

};





$(function() {


    var app = new Application();
    app.init();
    app.changeImageOnHover();
    app.stickyMenu();



});

