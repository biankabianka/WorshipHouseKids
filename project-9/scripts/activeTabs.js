
/*document.addEventListener('DOMContentLoaded', function() {
    
    const tabButtons = document.querySelectorAll('.bestSellerTabs');
    const cardsContainer = document.querySelector('.bestSellerCardsContainer');
    const allProductsHTML = cardsContainer.innerHTML;
    
 
    const categoryData = {
      'Games': [1, 2, 3, 4], 
      'Kids videos': [2, 3, 5, 6],
      'Countdowns': [3, 4, 7, 8],
      'Motions': [1, 5, 6, 7],
      'Still backgrounds': [2, 4, 6, 8],
      'Curriculum': [1, 3, 5, 7]
    };
    
    function generateCardsHTML(frameNumbers) {
      let html = '';
      
      frameNumbers.forEach(number => {
        html += `
          <div class="bestSellerCards">
            <img src="./assets/best-seller/frame-${number}.png" alt="" />
            <div class="cardTextContainer">
              <h4 class="cardTitle">Match It! Back To School Edition</h4>
              <p class="cardParagraph">Children's Ministry Deals</p>
            </div>
          </div>
        `;
      });
      
      return html;
    }
    
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        tabButtons.forEach(btn => {
          btn.classList.remove('bgPink', 'textWhite');
          btn.classList.add('bgSoftPink');
        });
        
        this.classList.remove('bgSoftPink');
        this.classList.add('bgPink', 'textWhite');
        
        const category = this.textContent.trim();
        
        if (category === 'All products') {
          cardsContainer.innerHTML = allProductsHTML;
        } else if (categoryData[category]) {
          cardsContainer.innerHTML = generateCardsHTML(categoryData[category]);
        }
      });
    });
    tabButtons[0].classList.add('bgPink', 'textWhite');
  }); */

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.bestSellerTabs');
    
    const cardsContainer = document.querySelector('.bestSellerCardsContainer');
    
    const allProductsHTML = cardsContainer.innerHTML;
    
    const allFrameNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
    
    function generateCardsHTML(frameNumbers) {
      let html = '';
      
      frameNumbers.forEach(number => {
        html += `
          <div class="bestSellerCards">
            <img src="./assets/best-seller/frame-${number}.png" alt="" />
            <div class="cardTextContainer">
              <h4 class="cardTitle">Match It! Back To School Edition</h4>
              <p class="cardParagraph">Children's Ministry Deals</p>
            </div>
          </div>
        `;
      });
      
      return html;
    }
    
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        tabButtons.forEach(btn => {
          btn.classList.remove('bgPink', 'textWhite');
          btn.classList.add('bgSoftPink');
        });
        
        this.classList.remove('bgSoftPink');
        this.classList.add('bgPink', 'textWhite');
        
        const category = this.textContent.trim();
        if (category === 'All products') {
          cardsContainer.innerHTML = allProductsHTML;
        } else {
          cardsContainer.innerHTML = generateCardsHTML(allFrameNumbers);
        }
      });
    });
    
    tabButtons[0].classList.add('bgPink', 'textWhite');
  });