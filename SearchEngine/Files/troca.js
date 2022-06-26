function Pesquisa() {
  Apagar();
  document.getElementById('pesquisa').hidden = (false);
  document.getElementById('um').style.background = "linear-gradient(0, Crimson, DarkRed)";
}
function Jogos() {
  Apagar();
  document.getElementById('jogos').hidden = (false);
  document.getElementById('dois').style.background = "linear-gradient(0, Crimson, DarkRed)";
}
function Livros() {
  Apagar();
  document.getElementById('livros').hidden = (false);
  document.getElementById('tres').style.background = "linear-gradient(0, Crimson, DarkRed)";
}
function SeriesFilmes() {
  Apagar();
  document.getElementById('seriesfilmes').hidden = (false);
  document.getElementById('quatro').style.background = "linear-gradient(0, Crimson, DarkRed)";
}
function RedeSociais() {
  Apagar();
  document.getElementById('redessociais').hidden = (false);
  document.getElementById('cinco').style.background = "linear-gradient(0, Crimson, DarkRed)";
}
function Apagar() {
  document.getElementById('um').style.background = "linear-gradient(0, LawnGreen, GreenYellow)";
  document.getElementById('dois').style.background = "linear-gradient(0, LawnGreen, GreenYellow)";
  document.getElementById('tres').style.background = "linear-gradient(0, LawnGreen, GreenYellow)";
  document.getElementById('quatro').style.background = "linear-gradient(0, LawnGreen, GreenYellow)";
  document.getElementById('cinco').style.background = "linear-gradient(0, LawnGreen, GreenYellow)";
  document.getElementById('pesquisa').hidden = (true);
  document.getElementById('jogos').hidden = (true);
  document.getElementById('livros').hidden = (true);
  document.getElementById('seriesfilmes').hidden = (true);
  document.getElementById('redessociais').hidden = (true);
  document.getElementById('xxx').hidden = (true);
}
