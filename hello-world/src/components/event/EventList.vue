<template>
    <div class="list-block">
        <div>
            <div class="item" v-for="event in eventList" :key="event.id">
                <input type="checkbox"/>
                <div class="event-name"> 
                    <span v-if="!isEditing(event.id)">{{event.name}}</span>
                    <span v-else><input v-model="eventNew"/></span>
                </div>

                <button @click="!isEditing(event.id) ? edit(event.id): saveModify(event.id)">{{ isEditing(event.id)? "Save" : "Edit"}}</button>
                <button @click="deleteEvent(event.id)">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['eventList'],
    data() {
        return {
            editingId: '',
            eventNew: ''
        }
    },
    methods: {
        deleteEvent(id) {
            const confirmed = confirm("Do you want to delete this event?");
            if (confirmed) {
                this.$emit("delete-event", id);
            } else {
                return;
            }
        },
        isEditing(id) {
            return this.editingId == id
        },
        edit(id) {
            this.editingId = id
            const eventDetail = this.eventList.find(item => item.id == id)
            this.eventNew = eventDetail? eventDetail.name : ''
        },
        saveModify(id) {
            if(this.eventNew == '') {
                alert("please enter new name!")
                return
            }

            var eventModify = this.eventList.find(item => item.id == id)
            if(eventModify) eventModify.name = this.eventNew
            this.editingId = null
        }
    }
}
</script>

<style scoped>
.list-block .item {
    margin-top: 30px;
    display: flex;
}
.event-name {
    width: 10%;
}
</style>
