function makeBold(button) {
   
    var buttons = document.querySelectorAll('.language_button');
    buttons.forEach(function(btn) {
        btn.style.fontWeight = 'normal';
    });

   
    button.style.fontWeight = 'bold';
}