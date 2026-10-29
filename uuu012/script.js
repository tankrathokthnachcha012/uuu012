
function showPage(pageId) {
    // ซ่อนทุกหน้า
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    // แสดงหน้าที่เลือก
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}

function openOfficial() {
    window.open("https://nrtech.ac.th/", "_blank");
}

function openAdmission() {
    window.open(
        "https://nrtech.ac.th/สมัครเรียนออนไลน์/",
        "_blank"
    );
}

function openNews() {
    window.open(
        "https://nrtech.ac.th/category/ข่าวประชาสัมพันธ์/",
        "_blank"
    );
}

function openMap() {
    window.open(
        "https://www.google.com/maps/search/?api=1&query=วิทยาลัยเทคนิคนางรอง+บุรีรัมย์",
        "_blank"
    );
}
