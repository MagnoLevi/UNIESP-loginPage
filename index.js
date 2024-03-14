function change_type_pass() {
    let pass = document.querySelector("#password");
    let icon = document.querySelector("#icon_lock");

    if (pass.type == "password") {
        pass.type = "text"
        icon.classList.remove("bxs-lock-alt");
        icon.classList.add("bxs-lock-open-alt");

    } else {
        pass.type = "password"
        icon.classList.remove("bxs-lock-open-alt");
        icon.classList.add("bxs-lock-alt");
    }
}