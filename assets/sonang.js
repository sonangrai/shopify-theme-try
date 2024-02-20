(function () {
  const infoField = document.querySelector(".sonang__description");
  const moreBtn = document.querySelector("[data-btn-more]");

  moreBtn.addEventListener("click", function () {
    infoField.classList.toggle("active");

    if (infoField.classList.length > 1) {
      moreBtn.innerHTML = "Show Less";
    } else {
      moreBtn.innerHTML = "Show More";
    }
  });
})();
