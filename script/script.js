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
        this.scrollLeft += modifier * event.deltaY * 0.2;

        document.getElementById("si_1").classList.remove("reviews__scroll-item--active");
        document.getElementById("si_2").classList.remove("reviews__scroll-item--active");
        document.getElementById("si_3").classList.remove("reviews__scroll-item--active");
        document.getElementById("si_4").classList.remove("reviews__scroll-item--active");

        if (((this.scrollLeft + 1) >= (this.scrollWidth - this.parentElement.offsetWidth)) ||
            (this.scrollLeft > 1266)) {
            document.getElementById("si_4").classList.add("reviews__scroll-item--active"); 
        }
        else if (this.scrollLeft < 422) {
            document.getElementById("si_1").classList.add("reviews__scroll-item--active");
        }
        else if (this.scrollLeft >= 422 && this.scrollLeft <= 844) {
            document.getElementById("si_2").classList.add("reviews__scroll-item--active"); 
        }
        else if (this.scrollLeft >= 845 && this.scrollLeft <= 1266) {
            document.getElementById("si_3").classList.add("reviews__scroll-item--active"); 
        }

        event.preventDefault();
    }
});

document.getElementById("list-card")
    .addEventListener('scroll', function(event) {
    document.getElementById("si_1").classList.remove("reviews__scroll-item--active");
    document.getElementById("si_2").classList.remove("reviews__scroll-item--active");
    document.getElementById("si_3").classList.remove("reviews__scroll-item--active");
    document.getElementById("si_4").classList.remove("reviews__scroll-item--active");

    if (((this.scrollLeft + 1) >= (this.scrollWidth - this.parentElement.offsetWidth)) ||
        (this.scrollLeft > 1266)) {
        document.getElementById("si_4").classList.add("reviews__scroll-item--active"); 
    }
    else if (this.scrollLeft < 422) {
        document.getElementById("si_1").classList.add("reviews__scroll-item--active");
    }
    else if (this.scrollLeft >= 422 && this.scrollLeft <= 844) {
        document.getElementById("si_2").classList.add("reviews__scroll-item--active"); 
    }
    else if (this.scrollLeft >= 845 && this.scrollLeft <= 1266) {
        document.getElementById("si_3").classList.add("reviews__scroll-item--active"); 
    }

    event.preventDefault();
});


document.getElementById("reviews__scroll")
    .addEventListener('click', function(event) {
        document.getElementById("si_1").classList.remove("reviews__scroll-item--active");
        document.getElementById("si_2").classList.remove("reviews__scroll-item--active");
        document.getElementById("si_3").classList.remove("reviews__scroll-item--active");
        document.getElementById("si_4").classList.remove("reviews__scroll-item--active");

        const card = document.getElementById("card-" + event.target.id); 

        if (card === null) return;

        document.getElementById("list-card")
        .scrollTo(card.offsetLeft - card.parentElement.offsetLeft, 0);

        document.getElementById(event.target.id).classList.add("reviews__scroll-item--active");

        event.preventDefault();
});