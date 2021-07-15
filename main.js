$(() => {
    $("#accordion").accordion({
        collapsible: true
    })
    $("#accordion").on("accordionactivate", function (event, ui) {
        $(ui.newPanel).css({ "background": "yellow" })
        $(ui.oldHeader).css("background-color", "blue");
    });
});