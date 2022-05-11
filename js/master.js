$("#livesearch").on("keyup", function() {
    const value = $(this)
        .val().toLowerCase();
    $(".imgs a").filter(function() {
        $(this).toggle($(this).attr("data-title").toLowerCase().indexOf(value) > -1
        );
    });
});