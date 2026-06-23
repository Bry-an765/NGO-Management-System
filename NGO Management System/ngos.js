function toggleSidebar() {

    const sidebar =
        document.querySelector(".sidebar");

    sidebar.classList.toggle("active");

    if (sidebar.classList.contains("active")) {

        document.body.style.overflow = "hidden";

    } else {

        document.body.style.overflow = "auto";

    }
}

function openLoginModal() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

function openSignupModal() {
    document.getElementById("signupModal").style.display = "flex";
}

function closeSignupModal() {
    document.getElementById("signupModal").style.display = "none";
}

window.onclick = function(event) {
    let loginModal = document.getElementById("loginModal");
    let signupModal = document.getElementById("signupModal");

    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }

    if (event.target === signupModal) {
        signupModal.style.display = "none";
    }
};

window.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".sidebar a")
        .forEach(link => {

            link.addEventListener("click", () => {

                if (window.innerWidth <= 768) {

                    document.querySelector(".sidebar")
                        .classList.remove("active");

                }

            });

        });

});
