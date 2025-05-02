const divHeader = document.getElementById('header')

divHeader.addEventListener('click', function(e)  {
  console.log(e.target)
  // if(e.target.contains.getElementById('hamburger-button-id')) {
  //   console.log('Button was clicked')
  // }
  if(e.target.classList.contains('hamburger-button') || e.target.classList.contains('hamburger-line')) {
    document.querySelector('.mobile-menu').classList.toggle('active');
  }
});