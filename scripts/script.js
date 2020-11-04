var toggleBtn = document.querySelector('.s1');
var sidebar = document.querySelector('.t1');

toggleBtn.addEventListener('click', function() {
  toggleBtn.classList.toggle('is-closed');
  sidebar.classList.toggle('is-closed');
})

var toggleBtn2 = document.querySelector('.s2');
var sidebar2 = document.querySelector('.t2');

toggleBtn2.addEventListener('click', function() {
  toggleBtn2.classList.toggle('is-closed');
  sidebar2.classList.toggle('is-closed');
})


$(document).on('click', '#moveToHome', function(){
  fullpage_api.moveTo('Home');
});

$(document).on('click', '#moveToAbout', function(){
  fullpage_api.moveTo('About');
});

$(document).on('click', '#moveToWorks', function(){
  fullpage_api.moveTo('Works');
});

$(document).on('click', '#moveToContact', function(){
  fullpage_api.moveTo('Contact');
});

