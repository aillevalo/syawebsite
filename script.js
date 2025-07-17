// Currently no JavaScript functionality needed,
// but this file is ready for future enhancements.

console.log("Welcome to the Gothic Fantasy Homepage");

const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }

  // Reveal mist effect
  const booksSection = document.getElementById("booksSection");
  const rect = booksSection.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    booksSection.classList.add("revealed");
  }
};

scrollBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

function showSection(id) {
  const tabs = document.querySelectorAll('.tab-section');
  tabs.forEach(tab => tab.classList.remove('active-tab'));

  const selected = document.getElementById(id);
  if (selected) {
    selected.classList.add('active-tab');
  }
}
document.addEventListener('DOMContentLoaded', function () {
  const playBtn = document.getElementById('playBtn');
  const audio = document.getElementById('albumAudio');
  const glow = document.querySelector('.album-glow'); // Get the glow background

  if (playBtn && audio && glow) {
    playBtn.addEventListener('click', function () {
      if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸ Pause";
        glow.classList.add("active"); // Add animation when playing
      } else {
        audio.pause();
        playBtn.textContent = "▶️ Play";
        glow.classList.remove("active"); // Remove animation when paused
      }
    });
  }
});


