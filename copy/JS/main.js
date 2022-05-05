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
let light = document.querySelector('.light')
light.addEventListener("click", () => {
    document.body.style.background = "#1c1c1c"
})
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