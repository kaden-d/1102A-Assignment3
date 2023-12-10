$(document).ready(function () {

    $.getJSON("data.json", function (data) {
        //counter for alternating ui-blocks
        var blockCounter = 1;

        //populating grooming services grid
        $.each(data.groomingServices, function (petType, groomingService) {
            //create new grid item for each grooming service
            var gridItem = $("<div class='grooming-service'></div>");

            //storing service
            var descriptionHeader3 = $("<h3 class='service-description'>" + groomingService.service + "</h3>");
            
            //storing description 
            var descriptionParagraph = $("<p class='service-description'>" + groomingService.description + "</p>");

            //stroing image
            var imageDiv = $("<div><img src='" + groomingService.image + "' alt='" + petType + "' class='service-image' style='width: 60%; height: auto;'></div>");

            //append service, image, description to grid in one column
            gridItem.append(descriptionHeader3);
            
            gridItem.append(imageDiv);

            gridItem.append(descriptionParagraph);

            //alternate ui-blocks (ui-block-a, ui-block-b)
            var uiBlockClass = "ui-block-" + (blockCounter % 2 == 0 ? "b" : "a");
            gridItem.addClass(uiBlockClass);

            //counter for the next item
            blockCounter++;

            //append the grid item
            $("#groomingServices").append(gridItem);
        });

        //initialize grid
        $("#groomingServices").trigger("create");
    });
});

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "extensive.xml",
        dataType: "xml",
        success: function(xml) {
            //populate pet hotel collapsibles
            $("#xmlGetCatHotelInfo").text($(xml).find("catHotelInfo").text());
            $("#xmlGetDogHotelInfo").text($(xml).find("dogHotelInfo").text());

            //populate pet day camp collapsibles
            $("#xmlGetCatCampInfo").text($(xml).find("catCampInfo").text());
            $("#xmlGetDogCampInfo").text($(xml).find("dogCampInfo").text());

            //initialize collapsible
            $('[data-role="collapsible"]').collapsible();
        },
    });
});
