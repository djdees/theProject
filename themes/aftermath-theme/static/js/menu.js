// Optional enhancement: close the menu on an outside click or Escape.
// The menu itself is a <details> element and works without this script.
(function () {
  var menu = document.querySelector(".menu");
  if (!menu) return;
  document.addEventListener("click", function (e) {
    if (menu.open && !menu.contains(e.target)) menu.open = false;
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.open) {
      menu.open = false;
      menu.querySelector("summary").focus();
    }
  });
})();
