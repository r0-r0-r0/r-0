// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
  // Select all toggle buttons (if you have multiple)
  const toggleButtons = document.querySelectorAll('.toggle-btn');

  toggleButtons.forEach(function(button) {
    // When a toggle button is clicked
    button.addEventListener('click', function() {
      const textContainer = this.previousElementSibling; // The <p class="text"> container
      textContainer.classList.toggle('expanded'); // Toggle the 'expanded' class

      // Change the button text based on whether the text is expanded or not
      if (textContainer.classList.contains('expanded')) {
        this.textContent = 'Read Less';
      } else {
        this.textContent = 'Read More';
      }
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelector(".projects");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  // Toggle dropdown visibility when clicking on "Projects"
  projects.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click event from bubbling up to the document
    // Toggle the dropdown visibility
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
  });

  // Close dropdown if clicking outside of it
  document.addEventListener("click", function (event) {
    if (!projects.contains(event.target)) {
      dropdownMenu.style.display = "none"; // Close the dropdown if clicked outside
    }
  });
});
























document.addEventListener("DOMContentLoaded", function () {
  const mediaContainer = document.querySelector(".media-container");
  const mediaItems = document.querySelectorAll(".media-item");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;
  const totalPages = mediaItems.length;

  // Function to show the current image
  function showImage(index) {
    const offset = -index * 100; // Adjust for each slide width (100%)
    mediaContainer.style.transform = `translateX(${offset}%)`;
  }





 const gallerySlideshow = document.querySelector(".gallery-slideshow");



 gallerySlideshow.addEventListener("mousemove", function (event) {
  const rect = gallerySlideshow.getBoundingClientRect();
  const mouseX = event.clientX;

  if (mouseX < rect.left + rect.width / 2) {
    // Mouse is on the left side
    document.body.style.cursor = "url('/imgs/Klee.cur'), auto"; // Set cursor to Klee.cur
  } else {
    // Mouse is on the right side
    document.body.style.cursor = "url('/imgs/Busy.cur'), auto"; // Set cursor to Busy.cur
  }
});

// Reset the cursor to default when mouse leaves the gallery section
gallerySlideshow.addEventListener("mouseleave", function () {
  document.body.style.cursor = "auto"; // Reset to default cursor
});




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








  // Event listeners for prev/next buttons
  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      currentIndex = (currentIndex === 0) ? totalPages - 1 : currentIndex - 1; // Loop to the last image
      showImage(currentIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      currentIndex = (currentIndex === totalPages - 1) ? 0 : currentIndex + 1; // Loop to the first image
      showImage(currentIndex);
    });
  }

  // Initialize the first image
  showImage(currentIndex);
});
