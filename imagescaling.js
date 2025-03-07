window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY; // Der Wert des Scrollens
    var scaleFactor = 70 + scrollPosition / 5; // Berechnet den Skalierungsfaktor
    document.body.style.setProperty('--bg-size', scaleFactor + '%'); // Setzt den Wert für background-size
});


