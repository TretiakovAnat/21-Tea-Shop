const mobilemenu = document.querySelector(".mobile-menu");
const menuBtnopen = document.querySelector(".menu-btn-open");
const menuBtnclose = document.querySelector(".menu-btn-close");

const togglemenu = () => mobilemenu.classList.toggle("is-open");

menuBtnopen.addEventListener("click", togglemenu);
menuBtnclose.addEventListener("click", togglemenu);
//=============== Кнопка для мобильного окна ========================================
// {<nav class="menu__body" === id="nav" ===></nav>

/* <button id="nav-btn" class="menu-button">
                <img id="nav-btn-img" src="/img/NAV-open.svg" alt="nav btn" />
              </button> */
// }

// ============ Скрипт для мобильного окна ========================================
// const nav = document.querySelector("#nav");
// const navBtn = document.querySelector("#nav-btn");
// const navBtnImg = document.querySelector("#nav-btn-img");

// navBtn.onclick = () => {
//   if (nav.classList.toggle("open")) {
//     navBtnImg.src = "./img/NAV-CLOSE.svg";
//   } else {
//     navBtnImg.src = "./img/NAV-open.svg";
//   }
// };
