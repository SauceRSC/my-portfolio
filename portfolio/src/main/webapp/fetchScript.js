async function showServerHello() {
  const responseFromServer = await fetch('/name');
  const textFromResponse = await responseFromServer.text();

  //get the h1 inside the about id in position 0 of the array
  const dataContainer = document.getElementById('About').getElementsByTagName("h1");
  //create a parser
  var parser = new DOMParser();
  //parse the text 
  const text = parser.parseFromString(textFromResponse, "text/html");
  dataContainer[0].innerText = text.body.innerText;
}