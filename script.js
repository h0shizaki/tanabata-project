console.log("script loaded.")

function waitBeforeNavigate(ev) {
    ev.preventDefault();          
    const goTo = this.getAttribute("href");
    setTimeout(function(){window.location = goTo;}, 1000);
};

window.onload = () => (document.querySelectorAll(".waitBeforeNavigate")
.forEach(EL => interceptor(EL)));

function interceptor(EL) {
    console.log(EL);
    EL.addEventListener("click", waitBeforeNavigate)
}