// Home Page Sidebar
var toggleBtn = document.querySelector('.s1');
var sidebar = document.querySelector('.t1');

toggleBtn.addEventListener('click', function() {
  toggleBtn.classList.toggle('is-closed');
  sidebar.classList.toggle('is-closed');
})

// About Page Sidebar
var toggleBtn2 = document.querySelector('.s2');
var sidebar2 = document.querySelector('.t2');

toggleBtn2.addEventListener('click', function() {
  toggleBtn2.classList.toggle('is-closed');
  sidebar2.classList.toggle('is-closed');
})

// Work Page Sidebar
var toggleBtn3 = document.querySelector('.s3');
var sidebar3 = document.querySelector('.t3');

toggleBtn3.addEventListener('click', function() {
  toggleBtn3.classList.toggle('is-closed');
  sidebar3.classList.toggle('is-closed');
})

// Work 2 Page Sidebar
var toggleBtn4 = document.querySelector('.s4');
var sidebar4 = document.querySelector('.t4');

toggleBtn4.addEventListener('click', function() {
  toggleBtn4.classList.toggle('is-closed');
  sidebar4.classList.toggle('is-closed');
})

// Contact Page Sidebar
var toggleBtn5 = document.querySelector('.s5');
var sidebar5 = document.querySelector('.t5');

toggleBtn5.addEventListener('click', function() {
  toggleBtn5.classList.toggle('is-closed');
  sidebar5.classList.toggle('is-closed');
})

// Home Page Link
$(document).on('click', '#moveToHome', function(){
  fullpage_api.moveTo('Home');
});

// About Page Link
$(document).on('click', '#moveToAbout', function(){
  fullpage_api.moveTo('About');
});

// Works Page Link
$(document).on('click', '#moveToWorks', function(){
  fullpage_api.moveTo('Works');
});

// Contact Page Link
$(document).on('click', '#moveToContact', function(){
  fullpage_api.moveTo('Contact');
});

