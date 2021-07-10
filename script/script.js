document.getElementById("list-card")
    .addEventListener('wheel', function(event) {
    if (event.deltaMode == event.DOM_DELTA_PIXEL) {
        var modifier = 1;
    } else if (event.deltaMode == event.DOM_DELTA_LINE) {
        var modifier = parseInt(getComputedStyle(this).lineHeight);
    } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
        var modifier = this.clientHeight;
    }
    if (event.deltaY != 0) {
        this.scrollLeft += modifier * event.deltaY;
        event.preventDefault();
    }
});

document.getElementById("reviews__scroll")
    .addEventListener('click', function(event) {
        const card = document.getElementById("card-" + event.target.id); 

        if (card === null) return;

        document.getElementById("list-card")
        .scrollTo(card.offsetLeft - card.parentElement.offsetLeft, 0);
});