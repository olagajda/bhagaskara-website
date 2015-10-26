var Application = function() {


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



    function highlightPictureOnHover() {

        var photo = $(".photo");
        var plus = $(".hover-plus");

        photo.hover( function(event){

            $(this).next().show(0);

        });

        plus.mouseleave(function(event){

           $(this).hide();

        });

    }


    function showMorePictures() {

        var morePicsButton = $(".watch-more");

        morePicsButton.on("click", function(event){


            $(this).parent().find(".hidden").slideDown(1000);
            $(this).hide();



        });
    }


    function filterPortfolio() {

        var filterButton = $(".filter-buttons button");

        filterButton.on("click", function(event){

            var example = $(this).parent().parent().find(".example");
            var hidden = $(this).parents().find(".hidden");

            example.show();
            hidden.show();



            for (var i = 0; i < example.length; i++) {


                if ($(this).data("filter") === "all") {

                    example.show()
                }






                if (example.eq(i).data("filter") !== $(this).data("filter")) {


                    example.eq(i).hide();


                }

            }

            $(".watch-more").hide()





        });
    }








    return {
        changeImageOnHover:changeImageOnHover,
        stickyMenu:stickyMenu,
        highlightPictureOnHover:highlightPictureOnHover,
        showMorePictures:showMorePictures,
        filterPortfolio:filterPortfolio
    };

};





$(function() {


    var app = new Application();
    app.changeImageOnHover();
    app.stickyMenu();
    app.highlightPictureOnHover();
    app.showMorePictures();
    app.filterPortfolio();


    lightbox.option({

        "resizeDuration": 400,
        "fadeDuration": 0,
        "positionFromTop": 100

    })



});

