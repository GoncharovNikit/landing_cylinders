document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".nav-item").forEach((e) => {
        e.addEventListener("click", (e) => {
            switch (e.target.innerHTML) {
                case "Ассортимент":
                    document.querySelector(".range-section").scrollIntoView();
                    break;
                case "Заказать":
                    document.querySelector(".order-section").scrollIntoView();
                    break;
                case "Доставка":
                    document.querySelector(".location-section").scrollIntoView();
                    break;
                case "О компании":
                    document.querySelector(".about-section").scrollIntoView();
                    break;
                default:
                    break;
            }
        });
    });

    var splide = new Splide(".splide", {
        type: "loop",
    });
    splide.on("pagination:mounted", function (data) {
        data.items.forEach(function (item) {
            item.button.style.display = "none";
        });
    });
    splide.mount();
});
