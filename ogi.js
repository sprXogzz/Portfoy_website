// dark  light mode ayarlama
const toggle = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  
 
  if(document.body.classList.contains('dark')){
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

const scrollBtn = document.getElementById("scrollTopBtn");


window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// yavasca yukarı cıkıyor
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
