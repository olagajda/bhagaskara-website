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


            $(this).parent().find(".hidden").fadeIn(1000);
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


    function slidingToSection() {

        var menu = $(".sticky-menu li");
        var hexagon = $(".top .hexagon");

        hexagon.on("click", function(event){

            var sectionToScroll = $("section");

            for (var i = 0; i < sectionToScroll.length; i++) {

                if ("advantages" === $(this).data("scroll")) {


                    $('html, body').animate({
                        scrollTop: $(".top").offset().bottom
                    }, 1000);
                }

                if (sectionToScroll.eq(i).data("scroll") === $(this).data("scroll")) {


                    $('html, body').animate({
                        scrollTop: sectionToScroll.eq(i).offset().top -50
                    }, 1000);
                }
            }
        });


        menu.on("click", function(event){

            var sectionToScroll = $("section");

            for (var i = 0; i < sectionToScroll.length; i++) {

                if (sectionToScroll.eq(i).data("scroll") === $(this).data("scroll")) {


                        $('html, body').animate({
                            scrollTop: sectionToScroll.eq(i).offset().top +1
                        }, 1000);
                }
            }
        });
    }


    function lightboxInit() {

        lightbox.option({

            "resizeDuration": 400,
            "fadeDuration": 0,
            "positionFromTop": 100

        });

    }

    function teamSlider() {

        $('.team-people').slick({

            slidesToShow: 3,
            prevArrow: $("#arrow-left"),
            nextArrow: $("#arrow-right"),
            infnite: true


        });
    }

    function teamSkillsSlider() {

        $(".team-skills-slider").slick({

            prevArrow: $("#arrow-left"),
            nextArrow: $("#arrow-right"),
            infnite: true



        });

    }

    function quotesSlider() {

        $(".quotes-slider").slick({

            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,




        });

    }

    /**
     * TODO: validate on focus
     * @param inputText
     */
    function validateEmail(inputText) {

        $("#contact-us").submit(function(event) {

            var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var inputText = $("#input-email").val()


            if (inputText.match(mailFormat)) {
                console.log("Dobry mail");
                return true;
            }
            else {
                $(this).find("p").show();
                return false;
            }

        });
    };







    return {
        changeImageOnHover:changeImageOnHover,
        stickyMenu:stickyMenu,
        highlightPictureOnHover:highlightPictureOnHover,
        showMorePictures:showMorePictures,
        filterPortfolio:filterPortfolio,
        slidingToSection:slidingToSection,
        lightboxInit:lightboxInit,
        teamSlider:teamSlider,
        teamSkillsSlider:teamSkillsSlider,
        quotesSlider:quotesSlider,
        validateEmail:validateEmail

    };

};





$(function() {

    var app = new Application();
    app.changeImageOnHover();
    app.stickyMenu();
    app.highlightPictureOnHover();
    app.showMorePictures();
    app.filterPortfolio();
    app.slidingToSection();
    app.lightboxInit();
    app.teamSlider();
    app.teamSkillsSlider();
    app.quotesSlider();
    app.validateEmail();

});

