if (document.body.classList.contains("tools")) {
    let select = document.querySelector("#services-nav-select");
    select.addEventListener("change", function() {
      let section = select.options[select.selectedIndex].value;
      window.location.href = section;
    });
  }  