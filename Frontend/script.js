var typed = new Typed (".text" ,{
        strings:["Cafes ", "Restaurants","stores","Gyms"],
        typeSpeed:100,
        backspeed:100,
        backDelay:1000,
        loop:true
});

const cafesContainer = [...document.querySelectorAll('.cafes-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

cafesContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var summaryPopup = document.getElementById("summaryPopup");
    var aboutLink = document.querySelector("a[href='#']");
  
    aboutLink.addEventListener("click", function(event) {
      event.preventDefault(); // منع انتقال الرابط
  
      // عرض المربع النصي
      summaryPopup.style.display = "block";
  
      // إخفاء المربع النصي بعد 3 ثواني
      setTimeout(function() {
        summaryPopup.style.display = "none";
      }, 3000); // بعد 3 ثواني (يمكنك تغيير الفترة الزمنية حسب الحاجة)
    });
  });
  

