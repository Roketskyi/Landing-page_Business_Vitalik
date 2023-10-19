const productHeaders = document.querySelectorAll('.product-header');
const containerProductButtons = document.querySelectorAll('.container-product-buttons');

productHeaders.forEach((header, index) => {
  header.addEventListener('click', function() {
    const selectedContainer = containerProductButtons[index];
    const isOpen = selectedContainer.classList.contains('open');
    
    containerProductButtons.forEach(container => {
      container.classList.remove('open');
    });
    
    if (!isOpen) {
      selectedContainer.classList.add('open');
    }
  });
});
