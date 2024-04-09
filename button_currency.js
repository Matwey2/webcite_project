function makeBolder(button) {
   
    var buttons = document.querySelectorAll('.currency_button');
    buttons.forEach(function(btn) {
        btn.style.fontWeight = 'normal';
    });

   
    button.style.fontWeight = 'bold';
}