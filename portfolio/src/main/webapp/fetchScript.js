async function showServerHello() {
  const responseFromServer = await fetch('/hello');
  const textFromResponse = await responseFromServer.text();

  const dateContainer = document.getElementById('About');
  dateContainer.appendChild(textFromResponse);
}