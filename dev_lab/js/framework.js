// Slidebar

 function openSidebar() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
  function closeSidebar() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }

  // Smooth scroll + close sidebar
  function navigateTo(id) {
    closeSidebar();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
  }