// Small JS helpers for the dummy site
document.addEventListener('DOMContentLoaded', function(){
  // Set current year in footer
  var y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // Theme toggle
  var btn = document.getElementById('themeToggle');
  btn && btn.addEventListener('click', function(){
    document.body.classList.toggle('dark');
  });
});
