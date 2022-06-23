
const e = require('express');

const socket = io();

const chatForm = document.getElementById('chat-form');
const messages = document.getElementById('messages');

chatForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const message = event.target.m.value
  socket.emit('chat message', message);
  event.target.m.value = '';
});

socket.on('chat message', function(message) {
  messages.appendChild(makeMessage(message, true));
});

const makeMessage = function(message, isOthers) {
  const msgBox = document.createElement('div');
  const className = isOthers ? "others-message-wrapper" : "my-message-wrapper";
  msgBox.className = "message-wrapper";
  msgBox.innerText = message;
  return msgBox;
}