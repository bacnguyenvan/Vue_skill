<template>
    <div class="app-container">
        <div v-for="message in messages" :key="message.id">
            <p><strong>{{ message.user.name }}:</strong> {{ message.message }}</p>
        </div>
        <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message" />
    </div>
</template>

<script>
import axios from 'axios';
import echo from '@/echo';

export default {
    data() {
        return {
            messages: [],
            newMessage: '',
        };
    },
    mounted() {

        echo.connector.socket.on('connect', () => {
            console.log('Connected to Laravel Echo Server');
        });

        echo.connector.socket.on('connect_error', (error) => {
            console.error('Connection error:', error);
        });

        echo.connector.socket.on('disconnect', () => {
            console.log('Disconnected from Laravel Echo Server');
        });

        echo.connector.socket.on('reconnect_attempt', (attempt) => {
            console.log(`Reconnecting... Attempt #${attempt}`);
        });

        this.fetchMessages();


        echo.channel('laravel_database_chat')
            .listen('MessageSent', (e) => {
                console.log(e.message);
            });
    },
    methods: {
        fetchMessages() {

            const token = localStorage.getItem('auth_token');
            axios.get('/api/messages', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }).then(response => {
                this.messages = response.data;
            }).catch(error => {
                console.error('Failed to fetch messages:', error);
            });
        },

        sendMessage() {
            const token = localStorage.getItem('auth_token');
            axios.post('/api/messages', {
                message: this.newMessage
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }).then(() => {
                this.newMessage = '';
            }).catch(error => {
                console.error('Failed to send message:', error);
            });
        }

    }
};
</script>

<style scoped>
@import "../../assets/css/style.css";
</style>