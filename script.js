// FONT DATABASE
    const fontData = [
      { name: "Aldrich", family: "'Aldrich', sans-serif", category: "Sans-Serif" },
      { name: "Alegreya Sans SC", family: "'Alegreya Sans SC', sans-serif", category: "Sans-Serif" },
      { name: "DM Sans", family: "'DM Sans', sans-serif", category: "Sans-Serif" },
      { name: "Inter", family: "'Inter', sans-serif", category: "Sans-Serif" },
      { name: "Jua", family: "'Jua', sans-serif", category: "Sans-Serif" },
      { name: "Jura", family: "'Jura', sans-serif", category: "Sans-Serif" },
      { name: "Lato", family: "'Lato', sans-serif", category: "Sans-Serif" },
      { name: "Lexend", family: "'Lexend', sans-serif", category: "Sans-Serif" },
      { name: "Mitr", family: "'Mitr', sans-serif", category: "Sans-Serif" },
      { name: "Montserrat", family: "'Montserrat', sans-serif", category: "Sans-Serif" },
      { name: "Montserrat Alternates", family: "'Montserrat Alternates', sans-serif", category: "Sans-Serif" },
      { name: "Poppins", family: "'Poppins', sans-serif", category: "Sans-Serif" },
      { name: "Raleway", family: "'Raleway', sans-serif", category: "Sans-Serif" },
      { name: "Roboto", family: "'Roboto', sans-serif", category: "Sans-Serif" },
      { name: "Roboto Condensed", family: "'Roboto Condensed', sans-serif", category: "Sans-Serif" },

      { name: "Abril Fatface", family: "'Abril Fatface', serif", category: "Serif" },
      { name: "DM Serif Text", family: "'DM Serif Text', serif", category: "Serif" },
      { name: "Cardo", family: "'Cardo', serif", category: "Serif" },
      { name: "Cinzel", family: "'Cinzel', serif", category: "Serif" },
      { name: "Crimson Text", family: "'Crimson Text', serif", category: "Serif" },
      { name: "DM Serif Text", family: "'DM Serif Text', serif", category: "Serif" },
      { name: "Fraunces", family: "'Fraunces', serif", category: "Serif" },
      { name: "Tagesschrift", family: "'Tagesschrift', serif", category: "Serif" },

      { name: "Black Ops One", family: "'Black Ops One', display", category: "Display"},
      { name: "Chango", family: "'Chango', display", category: "Display"},
      { name: "Cherry Bomb One", family: "'Cherry Bomb One', display", category: "Display"},
      { name: "Graduate", family: "'Graduate', display", category: "Display"},
      { name: "Fascinate", family: "'Fascinate', display", category: "Display"},
      { name: "Lobster", family: "'Lobster', display", category: "Display"},
      { name: "Monoton", family: "'Monoton', display", category: "Display"},
      { name: "Notable", family: "'Notable', display", category: "Display"},
      { name: "Orbitron", family: "'Orbitron', display", category: "Display"},
      { name: "Pirata One", family: "'Pirata One', display", category: "Display"},
      { name: "Rubik Glitch", family: "'Rubik Glitch', display", category: "Display"},
      { name: "Sigmar One", family: "'Sigmar One', display", category: "Display"},

      { name: "Aladin", family: "'Aladin', cursive", category: "Cursive" },
      { name: "Berkshire Swash", family: "'Berkshire Swash', cursive", category: "Cursive" },
      { name: "Pangolin", family: "'Pangolin', cursive", category: "Cursive" },
      { name: "Playpen Sans Hebrew", family: "'Playpen Sans Hebrew', cursive", category: "Cursive" },

      { name: "Courier Prime", family: "'Courier Prime', monospace", category: "Monospace" },
      { name: "Cutive Mono", family: "'Cutive Mono', monospace", category: "Monospace" },
      { name: "Share Tech", family: "'Share Tech', monospace", category: "Monospace" },
      { name: "Creepster", family: "'Creepster', cursive", category: "Display" },

      { name: "Cinzel Decorative", family: "'Cinzel Decorative', decorative", category: "Decorative"},
      { name: "Caveat", family: "'Caveat', decorative", category: "Decorative"},
      { name: "Caveat Brush", family: "'Caveat Brush', decorative", category: "Decorative"},
      { name: "Courgette", family: "'Courgette', decorative", category: "Decorative"},
      { name: "Grenze Gotisch", family: "'Grenze Gotisch', decorative", category: "Decorative"},
      { name: "Jim Nightshade", family: "'Jim Nightshade', decorative", category: "Decorative"},
      { name: "Lacquer", family: "'Lacquer', decorative", category: "Decorative"},
      { name: "Rock Salt", family: "'Rock Salt', decorative", category: "Decorative"},
      { name: "Sunshiney", family: "'Sunshiny', decorative", category: "Decorative"},

      { name: "DotGothic16", family: "'DotGothic16', pixel", category: "Pixel"},
      { name: "Jacquard 12", family: "'Jacquard 12', pixel", category: "Pixel"},
      { name: "Jacquard 24", family: "'Jacquard 24', pixel", category: "Pixel"},
      { name: "Silkscreen", family: "'Silkscreen', pixel", category: "Pixel"},
      { name: "Pixelify Sans", family: "'Pixelify Sans', pixel", category: "Pixel"},
      { name: "Press Start 2P", family: "'Press Start 2P', pixel", category: "Pixel"},
      { name: "VT323", family: "'VT323', pixel", category: "Pixel"},

      { name: "cursive", family: "'cursive", category: "System" },
      { name: "fangsong", family: "'fangsong", category: "System" },
      { name: "fantasy", family: "'fantasy", category: "System" },
      { name: "math", family: "'math", category: "System" },
      { name: "monospace", family: "'monospace", category: "System" },
      { name: "sans-serif", family: "'sans-serif", category: "System" },
      { name: "serif", family: "'serif", category: "System" },
      { name: "system-ui", family: "'system-ui", category: "System" },
      { name: "ui-monospace", family: "'ui-monospace", category: "System" },
      { name: "ui-rounded", family: "'ui-rounded", category: "System" },
      { name: "ui-sans-serif", family: "'ui-sans-serif", category: "System" },
      { name: "ui-serif", family: "'ui-serif", category: "System" },

      { name: "linefont", family: "'linefont", category: "Secret" }
    ];

    // GUARANTEE DOM IS READY BEFORE RUNNING CODE
    document.addEventListener('DOMContentLoaded', () => {
      
      // 1. SELECT DOM ELEMENTS
      const fontContainer = document.getElementById('font-container');
      const customText = document.getElementById('custom-text');
      const fontSizeInput = document.getElementById('font-size');
      const fontWeightInput = document.getElementById('font-weight');
      const letterSpacingInput = document.getElementById('letter-spacing');
      const lineHeightInput = document.getElementById('line-height');
      const fontStyleInput = document.getElementById('font-style');
      const fontVariantInput = document.getElementById('font-variant');
      const sizeValue = document.getElementById('size-value');
      const weightValue = document.getElementById('weight-value');

      const sidebar = document.getElementById('sidebar');
      const btnToggleSidebar = document.getElementById('toggle-sidebar');
      const btnCloseSidebar = document.getElementById('close-sidebar');

      const btnGrid = document.getElementById('btn-grid');
      const btnList = document.getElementById('btn-list');

      const categoryButtons = document.querySelectorAll('.category-filters .category');

      // 2. RENDER FONT CARDS
      function renderFonts() {
        let cardsHTML = '';
        fontData.forEach(font => {
          cardsHTML += `
            <article class="font-card" data-category="${font.category.toLowerCase()}">
              <header class="card-header">
                <h3 class="font-name">${font.name}</h3>
                <span class="badge">${font.category}</span>
              </header>
              <p class="font-preview" style="font-family: ${font.family};">
                ${customText.value || 'The quick brown fox jumps over the lazy dog.'}
              </p>
            </article>
          `;
        });
        fontContainer.innerHTML = cardsHTML;
      }

      // Initial render
      renderFonts();

      // Grab preview elements ONLY AFTER cards are created
      let previewElements = document.querySelectorAll('.font-preview');

      // 3. LIVE TEXT INPUT LISTENERS
      customText.addEventListener('input', (e) => {
        const value = e.target.value.trim() === '' ? 'Type something...' : e.target.value;
        previewElements.forEach(preview => {
          preview.textContent = value;
        });
      });

      // 4. FONT SIZE, WEIGHT, STYLE, VARIANT SLIDERS
      fontSizeInput.addEventListener('input', (e) => {
        sizeValue.textContent = `${e.target.value}px`;
        document.documentElement.style.setProperty('--preview-size', `${e.target.value}px`);
      });

      fontWeightInput.addEventListener('input', (e) => {
        weightValue.textContent = e.target.value;
        document.documentElement.style.setProperty('--preview-weight', e.target.value);
      });

      letterSpacingInput.addEventListener('input', (e) => {
        const spacingValue = `${e.target.value}px`;
        document.getElementById('letter-spacing-value').textContent = spacingValue;
        document.documentElement.style.setProperty('--preview-letter-spacing', spacingValue);
      });

      lineHeightInput.addEventListener('input', (e) => {
        const lineHeightValue = e.target.value;
        document.getElementById('line-height-value').textContent = lineHeightValue;
        document.documentElement.style.setProperty('--preview-line-height', lineHeightValue);
      });

      fontStyleInput.addEventListener('change', (e) => {
        document.documentElement.style.setProperty('--preview-style', e.target.value);
      });

      fontVariantInput.addEventListener('change', (e) => {
        document.documentElement.style.setProperty('--preview-variant', e.target.value);
      });

      // 5. SIDEBAR CONTROLS
      function closeSidebar() {
        sidebar.classList.remove('is-open');
        if (btnToggleSidebar) btnToggleSidebar.classList.remove('active');
      }

      btnToggleSidebar.addEventListener('click', () => {
        const isOpen = sidebar.classList.toggle('is-open');
        btnToggleSidebar.classList.toggle('active', isOpen);
      });

      btnCloseSidebar.addEventListener('click', closeSidebar);

      // 6. GRID / LIST VIEW TOGGLE
      btnGrid.addEventListener('click', () => {
        fontContainer.classList.add('card-grid');
        fontContainer.classList.remove('card-list');
        btnGrid.classList.add('active');
        btnList.classList.remove('active');
      });

      btnList.addEventListener('click', () => {
        fontContainer.classList.add('card-list');
        fontContainer.classList.remove('card-grid');
        btnList.classList.add('active');
        btnGrid.classList.remove('active');
      });

      // 7. CATEGORY FILTERING
      categoryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          categoryButtons.forEach(b => b.classList.remove('active'));
          e.target.classList.add('active');

          const selectedCategory = e.target.textContent.toLowerCase();
          const cards = document.querySelectorAll('.font-card');

          cards.forEach(card => {
            const cardCategory = card.dataset.category;
            if (selectedCategory === 'all' || cardCategory === selectedCategory) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });

    });