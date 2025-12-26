const greetingElement = document.getElementById("greeting");

if (greetingElement) {
    const hour = new Date().getHours();
    let greetingText = "";

    if (hour >= 5 && hour < 11) {
        greetingText = "Selamat Pagi👋, selamat datang di materi Sistem Operasi";
    } else if (hour >= 11 && hour < 15) {
        greetingText = "Selamat Siang👋, semoga belajarnya lancar";
    } else if (hour >= 15 && hour < 18) {
        greetingText = "Selamat Sore👋, yuk lanjut belajar Sistem Operasi";
    } else {
        greetingText = "Selamat Malam👋, tetap semangat belajar";
    }

    // Typing animation
    let index = 0;
    greetingElement.textContent = "";

    function typeEffect() {
        if (index < greetingText.length) {
            greetingElement.textContent += greetingText.charAt(index);
            index++;
            setTimeout(typeEffect, 45); // kecepatan ketik
        }
    }

    typeEffect();
}

document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");
    const currentPage = window.location.pathname.split("/").pop();

    menuItems.forEach(item => {
        const href = item.getAttribute("href").split("/").pop();
        if (href === currentPage) {
            item.classList.add("active");
        }
    });
});

function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const main = document.querySelector(".main-content");

    sidebar.classList.toggle("show");
    main.classList.toggle("shift");
}

document.addEventListener("DOMContentLoaded", function () {

    let bolehKeluar = false;

    function tampilkanModal() {
        const judul = document.querySelector(".materi-header h1");
        const nama = judul ? judul.textContent : "pertemuan ini";

        document.getElementById("modalText").textContent =
            `Apakah Anda yakin ingin keluar dari ${nama}?`;

        document.getElementById("exitModal").style.display = "flex";
    }

    function batalKeluar() {
        document.getElementById("exitModal").style.display = "none";
        history.pushState(null, "", location.href);
    }

    function keluarMateri() {
        bolehKeluar = true;
        window.location.href = "../index.html";
    }

    window.konfirmasiKeluar = function () {
        tampilkanModal();
    };

    window.batalKeluar = batalKeluar;
    window.keluarMateri = keluarMateri;

    if (document.body.classList.contains("materi-page")) {
        history.pushState(null, "", location.href);

        window.addEventListener("popstate", function () {
            if (!bolehKeluar) {
                tampilkanModal();
                history.pushState(null, "", location.href);
            }
        });
    }

});

const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
