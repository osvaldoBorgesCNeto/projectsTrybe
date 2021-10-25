const socket = window.io();

let nickname = '';

socket.emit('initialList');

const saveButton = document.querySelector('#saveButton');
saveButton.addEventListener('click', () => {
  const nameValue = document.querySelector('#inputName');
  socket.emit('saveName', nameValue.value);

  nameValue.value = '';
  return false; 
});

socket.on('updateOnline', ({ users, newNickname }) => {
  const usersOnline = document.querySelector('#users-online');
  usersOnline.innerHTML = '';
  nickname = newNickname;

  const firstNick = Object.keys(users).find((user) => user === socket.id.toString());
  const otherNicks = Object.values(users).filter((user) => user !== users[firstNick]);

  const userList = [users[firstNick], ...otherNicks];
  userList.forEach((user) => {
    const li = document.createElement('li');
    li.innerHTML = user;
    li.setAttribute('data-testid', 'online-user');
    usersOnline.appendChild(li);
  });
});

const sendButton = document.querySelector('#sendButton');
sendButton.addEventListener('click', () => {
  const chatMessage = document.querySelector('#inputMessage'); 
  socket.emit('message', { chatMessage: chatMessage.value, nickname });

  chatMessage.value = '';
  return false;
});

const createMessage = (message) => {
  const menssagesUl = document.querySelector('#messages');
  const li = document.createElement('li');
  li.innerHTML = message;
  li.setAttribute('data-testid', 'message');

  menssagesUl.appendChild(li);
};

socket.on('message', (message) => {
  createMessage(message);
});

socket.on('getAllMessage', (messages) => {
  messages.forEach(({ message, nickname: nick, timestamp }) => {
    const msg = `${timestamp} - ${nick}: ${message}`;
    createMessage(msg);
  });
});

window.onbeforeunload = () => {
  socket.disconnect();
};