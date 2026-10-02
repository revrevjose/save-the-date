const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {

    document.body.classList.add("open");

    setTimeout(() => {

        document.body.classList.add("show-content");

    }, 1000);

});