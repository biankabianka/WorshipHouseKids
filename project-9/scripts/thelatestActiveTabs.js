
document.addEventListener('DOMContentLoaded', function() {
    
    const latestTabButtons = document.querySelectorAll('.headingTitle.textBlue + div .bestSellerTabs');
    
    const latestCardsContainer = document.querySelector('.theLatest .bestSellerCardsContainer');
    const originalLatestHTML = latestCardsContainer.innerHTML;
    latestTabButtons.forEach(button => {
      button.addEventListener('click', function() {
        latestTabButtons.forEach(btn => {
          btn.classList.remove('bgDarkBlue', 'textWhite');
          btn.classList.add('bgSoftBlue');
        });
        this.classList.remove('bgSoftBlue');
        this.classList.add('bgDarkBlue', 'textWhite');
        
        latestCardsContainer.innerHTML = originalLatestHTML;
      });
    });
  });