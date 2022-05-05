let burger = document.querySelector("#burger");
let nav = document.querySelector(".nav")
burger.addEventListener("click", () => {
    if (!nav.classList.contains("active")) {
        nav.classList.add("active");
        document.body.style.overflow = "hidden"
        burger.classList.add("change")
    }
    else {
        nav.classList.remove("active");
        burger.classList.remove("change")
        document.body.style.overflow = "visible"
    }
})

let light = document.querySelector(".light");
let count = 0;
light.onclick = () => {
    count++;
    if (count % 2 == 0) {
        applyTheme("style/Kurs");
    } else {


        applyTheme("style/Night");
    }
};
function applyTheme(themeName) {
    document
        .querySelector('[title="theme"]')
        .setAttribute("href", `${themeName}.css`); // Помещаем путь к файлу темы в пустой link в head
}

let skills = document.querySelector(".skills")
let Skil = document.querySelector(".Skil")

skills.addEventListener("click", () => {
    nav.classList.remove("active");
    burger.classList.remove("change")
    document.body.style.overflow = "visible"
    Skil.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})
let about_us = document.querySelector(".about_us")
let title_about = document.querySelector(".title_about")
about_us.addEventListener("click", () => {
    nav.classList.remove("active");
    burger.classList.remove("change")
    document.body.style.overflow = "visible"
    title_about.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})
let priising = document.querySelector(".priising");
let Text_price = document.querySelector(".Text_price")
priising.addEventListener("click", () => {
    nav.classList.remove("active");
    burger.classList.remove("change")
    document.body.style.overflow = "visible"
    Text_price.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})
let contacts_btn = document.querySelector(".contacts_btn")
let Text_contact = document.querySelector(".Text_contact")
contacts_btn.addEventListener("click", () => {
    nav.classList.remove("active");
    burger.classList.remove("change")
    document.body.style.overflow = "visible"
    Text_contact.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})

let button_1 = document.querySelector(".button_1")
let get_started = document.querySelector(".get_started")
let close = document.querySelector(".close")
close.addEventListener("click", () => {
   
    get_started.classList.remove("active")

})
button_1.addEventListener("click", () => {
    if (!get_started.classList.contains("active")) {
        get_started.classList.add("active")

    }
    else {

        get_started.classList.remove("active")
    }
})
// МОДАЛЬНЫЕ ОКНА

let form_register = document.querySelector(".forms")
let close_register = document.querySelector(".close_register")

let buy_course = document.querySelectorAll(".buy_course")
close_register.addEventListener("click", () => {
    form_register.classList.remove("active")
})
buy_course.forEach(item => {
    item.addEventListener("click", () => {

        get_started.classList.remove("active")
        form_register.classList.add("active")

    })
})
let close_login = document.querySelector(".close_login")
let Subscribe_btn = document.querySelector(".Subscribe_btn");
let formsLogin = document.querySelector(".formsLogin")
Subscribe_btn.addEventListener("click", () => {
    formsLogin.classList.add("active")
})
close_login.addEventListener("click", () => {
    formsLogin.classList.remove("active")
})