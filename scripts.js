document.addEventListener('DOMContentLoaded', function () {
  // Toggle button
  document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function () {
      const textContainer = this.previousElementSibling;
      textContainer.classList.toggle('expanded');
      this.textContent = textContainer.classList.contains('expanded') ? 'Read Less' : 'Read More';
    });
  });

  // Dropdown menu
  const projects = document.querySelector(".projects");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  projects?.addEventListener("click", event => {
    event.stopPropagation();
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
  });
  document.addEventListener("click", event => {
    if (!projects?.contains(event.target)) {
      dropdownMenu.style.display = "none";
    }
  });

    // mute 
  const muteButton = document.getElementById('mute-btn');
  const video = document.getElementById('video');
  if (muteButton && video) {
    const muteButtonImg = muteButton.querySelector('img');
    video.muted = true;
  
    muteButton.addEventListener('click', function () {
      video.muted = !video.muted;
      muteButtonImg.src = video.muted ? '/imgs/volume-mute.png' : '/imgs/volume-up.png';
    });
  }
  



 // 갤러리 슬라이드쇼와 프로그레스 바 통합
const mediaContainer = document.querySelector(".media-container");
const mediaItems = document.querySelectorAll(".media-item");
const totalPages = mediaItems.length;
let currentIndex = 0;

// 프로그레스 바 설정
const progressBar = document.querySelector('.progress-bar');
if (progressBar) {
  progressBar.innerHTML = Array.from({ length: totalPages }, (_, i) =>
    `<div class="segment ${i === 0 ? 'active' : ''}"></div>`
  ).join('');
}

// 슬라이드와 프로그레스 바 업데이트 함수
const showImage = index => {
  mediaContainer.style.transform = `translateX(${-index * 100}%)`;
  updateProgressBar(index);
};

// 프로그레스 바 업데이트 함수
const updateProgressBar = index => {
  progressBar.querySelectorAll('.segment').forEach((segment, i) => {
    segment.classList.toggle('active', i === index);
  });
};

// 슬라이드 버튼 이벤트
document.querySelector('.next-btn')?.addEventListener('click', () => {
  currentIndex = (currentIndex === totalPages - 1) ? 0 : currentIndex + 1;
  showImage(currentIndex);
});

document.querySelector('.prev-btn')?.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? totalPages - 1 : currentIndex - 1;
  showImage(currentIndex);
});

// 초기 슬라이드 상태 설정
showImage(currentIndex);


  // Additional gallery slideshow functionality for cursor change
  if (window.innerWidth > 650 && window.location.pathname !== '/projects/screenbased/freakshow2045.html') {
    // Gallery slideshow mousemove event for cursor change
    
    
    const gallerySlideshow = document.querySelector(".gallery-slideshow");
    gallerySlideshow.addEventListener("mousemove", function (event) {
      const rect = gallerySlideshow.getBoundingClientRect();
      const mouseX = event.clientX;

      if (mouseX < rect.left + rect.width / 2) {
        // Mouse is on the left side
        document.body.style.cursor = "url('/imgs/left.cur'), auto"; // Set cursor to Klee.cur
      } else {
        // Mouse is on the right side
        document.body.style.cursor = "url('/imgs/right.cur'), auto"; // Set cursor to Busy.cur
      }
    });
    // Reset the cursor to default when mouse leaves the gallery section
    gallerySlideshow.addEventListener("mouseleave", function () {
      document.body.style.cursor = "auto"; // Reset to default cursor
    });

    // Gallery slideshow click event for navigation
    gallerySlideshow.addEventListener("click", function (event) {
      const rect = gallerySlideshow.getBoundingClientRect();
      const mouseX = event.clientX;

      if (mouseX < rect.left + rect.width / 2) {
        // Clicked on the left side
        if (currentIndex > 0) {
          currentIndex--;
        } else {
          currentIndex = totalPages - 1; // Loop back to the last image
        }
        showImage(currentIndex);
      } else {
        // Clicked on the right side
        if (currentIndex < totalPages - 1) {
          currentIndex++;
        } else {
          currentIndex = 0; // Loop back to the first image
        }
        showImage(currentIndex);
      }
    });
  }



  
  // Check screen size and location, and initialize gallery functionality if conditions are met
function checkAndInitializeGallery() {
  if (document.documentElement.clientWidth > 650 && window.location.pathname !== '/projects/screenbased/freakshow2045.html') {
    initializeGallery();
  } else {
    // Optionally, remove event listeners or reset state when conditions aren't met
    // Example: You can also add a cleanup function to remove event listeners if necessary
  }
}

// Initial check
checkAndInitializeGallery();

// Listen for window resize to adjust functionality dynamically
window.addEventListener('resize', function () {
  checkAndInitializeGallery();
});
  


if (window.location.pathname.includes('/projects/screenbased/freakshow2045.html')) {
  const style = document.createElement('style');
  style.textContent = `
    .media-item video {
      width: 70vh; /* Set width to 70% of the parent container */
      height: auto; /* Maintain aspect ratio */
      max-height: 100%;
      max-width: 100%;
    }
  `;
  document.head.appendChild(style);
}




});



