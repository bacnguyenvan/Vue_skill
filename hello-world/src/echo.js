import Echo from 'laravel-echo';
import io from 'socket.io-client';

window.io = io;

const echo = new Echo({
  broadcaster: 'socket.io',
  host: 'http://192.168.20.135:6001', 
  transports: ['websocket'],
});

export default echo;
