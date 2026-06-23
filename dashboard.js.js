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