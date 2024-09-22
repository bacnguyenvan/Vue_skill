<template>
    <div class="app-container">
        <form @submit.prevent="login">
            <div class="container">
                <label for="uname"><b>Username</b></label>
                <input v-model="email" type="email" placeholder="Email" required />

                <label for="psw"><b>Password</b></label>
                <input v-model="password" type="password" placeholder="Password" required />

                <button type="submit">Login</button>
                <!-- <label>
                    <input type="checkbox" checked="checked" name="remember"> Remember me
                </label> -->
            </div>

            <!-- <div class="container" style="background-color:#f1f1f1">
                <button type="button" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot <a href="#">password?</a></span>
            </div> -->
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        login() {
            axios.post('/api/login', {
                email: this.email,
                password: this.password,
            }).then(response => {
                const token = response.data.data.access_token;
                localStorage.setItem('auth_token', token);
                //   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                this.$router.push('/chat');
            }).catch(error => {
                console.error('Login failed', error);
            });
        }
    }
};
</script>

<style scoped>
@import "../../assets/css/style.css";
form {border: 3px solid #f1f1f1;}

input[type=text], input[type=password], input[type=email] {
  width: 40%;
  padding: 12px 20px;
  margin: 8px 0;
  /* display: block; */
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 40%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.container {
  padding: 16px;
  text-align: center;
  margin: auto;
}

span.psw {
  float: right;
  padding-top: 16px;
}
</style>