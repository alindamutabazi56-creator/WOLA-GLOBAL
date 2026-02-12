document.getElementById('year').textContent = new Date().getFullYear();

const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
fadeEls.forEach((el) => observer.observe(el));

const chapterForm = document.getElementById('chapter-search-form');
const chapterInput = document.getElementById('chapter-search');
const chapterTiles = document.querySelectorAll('#chapter-grid .chapter-tile');

if (chapterForm && chapterInput && chapterTiles.length) {
  chapterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = chapterInput.value.trim().toLowerCase();

    chapterTiles.forEach((tile) => {
      const haystack = tile.dataset.chapter || '';
      const isMatch = !query || haystack.includes(query);
      tile.classList.toggle('hidden-chapter', !isMatch);
    });

    document.getElementById('chapters')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}
