function choose() {
  var choice = document.getElementById("choice");
  
  if (choice.value == "1") {
    window.document.getElementById("pokemon").src = 'https://i.pinimg.com/originals/7a/f6/0b/7af60b2b6fa202db54f0aa275fee6e17.png';
  } else if (choice.value == "2") {
    window.document.getElementById("pokemon").src = 'http://static.pokemonpets.com/images/monsters-images-800-800/7-Squirtle.png';
  } else if (choice.value == "3") {
    window.document.getElementById("pokemon").src = 'http://2.bp.blogspot.com/-IYIS_mwIUoY/URvCsPFFbkI/AAAAAAAAIZw/HslB515tC5I/s1600/Bulbasaur_by_Xous54.png';
  } else if (choice.value == "SECRETO") {
    window.document.getElementById("pokemon").src = 'https://i.pinimg.com/originals/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5.png';
  } else {
    window.document.getElementById("pokemon").src = 'https://media.istockphoto.com/vectors/pixel-art-gray-question-mark-8bit-style-glitch-effect-isolated-vector-vector-id1201187848?k=6&m=1201187848&s=170667a&w=0&h=CStcYj8MsdjMHVt8UdE4EvAyH2tbur_iHSng80MHDBg=';
  }
} 
