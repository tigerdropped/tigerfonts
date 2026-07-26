// Select key DOM elements
const previewInput = document.getElementById('preview-input');
const fontSizeSlider = document.getElementById('font-size');
const sizeDisplay = document.getElementById('size-display');
const previewTexts = document.querySelectorAll('.font-preview');
const filterBtns = document.querySelectorAll('.filter-btn');
const fontCards = document.querySelectorAll('.font-card');

// 1. Live Update Preview Text
previewInput.addEventListener('input', (e) => {
  const customText = e.target.value.trim();
  const defaultText = "The quick brown fox jumps over the lazy dog.";
  
  previewTexts.forEach(preview => {
    preview.textContent = customText !== "" ? customText : defaultText;
  });
});

// 2. Adjust Font Size Dynamically
fontSizeSlider.addEventListener('input', (e) => {
  const newSize = `${e.target.value}px`;
  sizeDisplay.textContent = newSize;

  previewTexts.forEach(preview => {
    preview.style.fontSize = newSize;
  });
});

// 3. Category Filtering
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons and add to the clicked one
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const selectedCategory = btn.dataset.category;

    fontCards.forEach(card => {
      const cardCategory = card.dataset.category;
      if (selectedCategory === 'all' || cardCategory === selectedCategory) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});