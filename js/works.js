document.addEventListener('DOMContentLoaded', () => {
    if(window.matchMedia('(max-width:670px)').matches) {return;}
    const imgContainer = document.querySelector(".image-grid");

    // imgContainer.forEach(image => {


    // });
    imgContainer.addEventListener('click', (e) => {
        let imgClicked = e.target.closest('.image-grid img');
        console.log(e.target);
        if (!imgClicked) return;

        // X Button don't know if I need it.. 

        // const x = imgContainer.querySelector("p");

        // x.classList.toggle("open");

        imgClicked.classList.toggle("active");

        const otherImg = imgContainer.querySelectorAll('.image-grid img')
        // console.log(otherImg.firstElementChild);
        document.addEventListener('keydown', (changeImg) => {
            if (changeImg.key == 'ArrowRight') {
                if (imgClicked.nextElementSibling != null) {
                    // imgClicked.classList.toggle("active");
                    otherImg.forEach(image => {
                        if(image.classList.contains('active')) {
                            image.classList.toggle('active')
                        }
                    });

                    imgClicked = imgClicked.nextElementSibling;
                    imgClicked.classList.toggle("active");
                }
                else {
                    // imgClicked.classList.toggle("active");
                    otherImg.forEach(image => {
                        if(image.classList.contains('active')) {
                            image.classList.toggle('active')
                        }
                    });
                    imgClicked = document.querySelector(".image-grid ").firstElementChild;
                    
                    imgClicked.classList.toggle("active");
                }
            }
        });
        
        document.addEventListener('keydown', (changeImg) => {
            if (changeImg.key == 'ArrowLeft') {
                if (imgClicked.previousElementSibling != null) {
                    // imgClicked.classList.toggle("active");
                    otherImg.forEach(image => {
                        if(image.classList.contains('active')) {
                            image.classList.toggle('active')
                        }
                    });

                    imgClicked = imgClicked.previousElementSibling;
                    imgClicked.classList.toggle("active");
                }
                else {
                    // imgClicked.classList.toggle("active");
                    otherImg.forEach(image => {
                        if(image.classList.contains('active')) {
                            image.classList.toggle('active')
                        }
                    });

                    imgClicked = document.querySelector(".image-grid ").lastElementChild;
                    
                    imgClicked.classList.toggle("active");
                }
            }
        });
        document.addEventListener('keydown', (exitImgShowcase) => {
            if(exitImgShowcase.key == 'Escape' && imgClicked.classList.contains('active')) {

                imgClicked.classList.toggle('active');
            }
        });
    });
});

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