// Google Fonts
  WebFontConfig = {
    google: { families: [ 'Exo:400,800,400italic:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

// Read More Button for Transcripts
document.querySelector('.transcript-expand-button').addEventListener('click', function(e){
  document.querySelector('.transcript').setAttribute('class', 'transcript js--open');
}, false);