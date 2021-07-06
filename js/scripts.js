window.addEventListener("DOMContentLoaded", (event) => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector("#mainNav");
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove("navbar-shrink");
        } else {
            navbarCollapsible.classList.add("navbar-shrink");
        }
    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener("scroll", navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector("#mainNav");
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#mainNav",
            offset: 74,
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
            if (window.getComputedStyle(navbarToggler).display !== "none") {
                navbarToggler.click();
            }
        });
    });
});

//La API
fetch("https://sheetdb.io/api/v1/6mk7l08x2hj05")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        var portfolio = data;

        portfolio.forEach(function (trabajo) {
            if (trabajo.tipo.includes("1994")) {
                especialidad = '1994';} 
                else if (trabajo.tipo.includes("1997")) {
                    especialidad = '1997';} 
                else if (trabajo.tipo.includes("2009")) {
                    especialidad = '2009';} 
                else if (trabajo.tipo.includes("2012")) {
                    especialidad = '2012';} 
                else if (trabajo.tipo.includes("2015")) {
                    especialidad = '2015';} 
                else {
                    especialidad = 'none year';
            }
        // Tarjetones
            document.getElementById("portfolio").innerHTML +=
                '<div class="col-sm-6 col-lg-4 col-xxl-3"' + especialidad + '><div class="card shadow-sm"><img src="' +
                trabajo.image +
                '" class="card-img-top" alt="' +
                trabajo.title +
                '"><div class="card-body"><h5 class="card-title">' +
                trabajo.title +
                '</h5><p class="card-text">' +
                trabajo.text +
                '</p> <a href="' +
                trabajo.video +
                '" class="btn btn-primary">"Ver más"</a></div></div></div>"';
        });

        // Buscador

        // if (document.body.classList.contains("anios")) {
        //     data.features.forEach(function (anios, i) {}

        $("#opciones").change(function (){
            valor = $("input[name='opciones']:checked").val();
            if (valor == "1994") {
                $(".1994").fadeTo("slow", 1);
                $(".1997").fadeTo("slow", 0.1);
                $(".2009").fadeTo("slow", 0.1);
                $(".2012").fadeTo("slow", 0.1);
                $(".2015").fadeTo("slow", 0.1);
            } else if (valor == "1997") {
                $(".1994").fadeTo("slow", 0.1);
                $(".1997").fadeTo("slow", 1);
                $(".2009").fadeTo("slow", 0.1);
                $(".2012").fadeTo("slow", 0.1);
                $(".2015").fadeTo("slow", 0.1);
            } else if (valor == "2009") {
                $(".1994").fadeTo("slow", 0.1);
                $(".1997").fadeTo("slow", 0.1);
                $(".2009").fadeTo("slow", 1);
                $(".2012").fadeTo("slow", 0.1);
                $(".2015").fadeTo("slow", 0.1);
            } else if (valor == "2012") {
                $(".1994").fadeTo("slow", 0.1);
                $(".1997").fadeTo("slow", 0.1);
                $(".2009").fadeTo("slow", 0.1);
                $(".2012").fadeTo("slow", 1);
                $(".2015").fadeTo("slow", 0.1);
            } else if (valor == "2015") {
                $(".1994").fadeTo("slow", 0.1);
                $(".1997").fadeTo("slow", 0.1);
                $(".2009").fadeTo("slow", 0.1);
                $(".2012").fadeTo("slow", 0.1);
                $(".2015").fadeTo("slow", 1);
            } else {
                $(".1994").fadeTo("slow", 1);
                $(".1997").fadeTo("slow", 1);
                $(".2009").fadeTo("slow", 1);
                $(".2012").fadeTo("slow", 1);
                $(".2015").fadeTo("slow", 1);
            }
        });
    })
    .catch((err) => {
        console.log("Lo sentimos algo falló, intentalo nuevamente", err);
    });

// .catch((err) => {
//     console.log("Lo sentimos algo falló", err);
//     document.getElementById("portfolio").innerHTML +=
//     '<div class="error text-center fs-1"><p>Ups! Ocurrió un error :-(</p></div>';
// });
