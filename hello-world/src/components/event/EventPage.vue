<template>
    <div class="app-container">
        <div class="center">
            <h2 class="center">Welcome event</h2>
            <div>{{eventName}}</div>
        </div>
        <div class="top">
            <div class="input-block">
                <input type="text" placeholder="enter your event" v-model="eventName"/>
                <button @click="createEvent">Save</button>
            </div>
        </div>
        <div class="bottom">
            <EventList :eventList="eventList" @delete-event="deleteEvent"/>
        </div>
    </div>
</template>

<script>
import EventList from './EventList.vue';
export default {
    data() {
        return {
            eventName: '',
            eventList: []
        }
    },
    components: {
        EventList
    },
    methods: {
        createEvent() {
            if(this.eventName == '') {
                alert("Please enter your event!")
                return;
            }
            this.eventList.push({
                id: Date.now(),
                name: this.eventName
            })

            this.eventName = ''
        },
        deleteEvent(id) {
            this.eventList = this.eventList.filter(item => item.id != id)
        }
    }
}
</script>

<style scoped>
@import "../../assets/css/style.css";



.input-block {
    margin: auto;
    text-align: center;
}

.input-block input {
    font-size: 20px;
    padding: 5px;
}

.input-block button {
    font-size: 20px;
    padding: 5px;
    margin-left: 20px;
}

</style>