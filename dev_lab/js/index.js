function openTab(tabId, elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].setAttribute("aria-hidden", "true");
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = ""; // reset
  }
  // show chosen tab
  var chosen = document.getElementById(tabId);
  chosen.style.display = "block";
  chosen.setAttribute("aria-hidden", "false");

  // style active button to match tab background color
  var bg = window.getComputedStyle(chosen).backgroundColor;
  elmnt.style.backgroundColor = bg;
}

// Open default tab on load
document.getElementById("defaultOpen").click();