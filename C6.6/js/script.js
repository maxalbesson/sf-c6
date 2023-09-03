const wsUrl = "wss://echo-ws-service.herokuapp.com";

const input = document.querySelector('.input');
const btnMess = document.querySelector('.btn-message');
const btnGeo = document.querySelector('.btn-geolocation');
const clientMessages = document.querySelector('.client-messages');
const serverMessages = document.querySelector('.server-messages');
const chat = document.querySelector('.chat');

function writeToScreen(message, position='flex-end') {
  let element = `
        <p class='messages' style='align-self: ${position}'>
            ${message}
        </p>
    `;
  clientMessages.innerHTML += element;
  chat.scrollTop = chat.scrollHeight;
  }

let websocket = new WebSocket(wsUrl); 
websocket.onopen = function(evt) {
    console.log("CONNECTED");
  };
websocket.onmessage = function(evt) {
    writeToScreen(`Server: ${evt.data}`, 'flex-start');
  };
websocket.onerror = function(evt) {
    writeToScreen(`server: ${evt.data}`, 'flex-start');
  };
  
btnMess.addEventListener('click', () => {
  let message = input.value;
  websocket.send(message);
  writeToScreen(`Client: ${message}`);
  input.value = ''
  });

const success = (position) => {
  let latitude  = position.coords.latitude;
  let longitude = position.coords.longitude;
  let geoLink = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  writeToScreen(`<a  href='${geoLink}' target='_blank'>Your location</a>`);
  };
 
const error = () => {
  let textError = 'Failure of getting your location';
  writeToScreen(textError);
  };
  
btnGeo.addEventListener('click', () => {
  if (!navigator.geolocation) {
    console.log('Geolocation is not supporting on this browser');
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
  });

serverMessages.addEventListener('click', () => {
  clientMessages.innerHTML = "";
  });
