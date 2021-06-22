async function showServerHello() {
  const responseFromServer = await fetch('/name');
  const textFromResponse = await responseFromServer.json();

  //get the h1 inside the about id in position 0 of the array
  const dataContainer = document.getElementById('About');
  //create a parser
  var parser = new DOMParser();
  //parse the text 
  const text = parser.parseFromString(textFromResponse, "text/html");
  dataContainer.getElementsByTagName("h1")[0].innerText = textFromResponse.name;
  dataContainer.getElementsByTagName("h3")[0].innerText = textFromResponse.Facts[Math.floor(Math.random() * textFromResponse.Facts.length)]
}