<template>
    <p class="new-task">{{ newTask }}</p>
    <div class="task-block">
        <input type="text" name="task" placeholder="Input a task" v-model="newTask">
        <button @click="createTask">create</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTask: ''
        }
    },
    methods: {
        createTask() {
            if(this.newTask == '') {
                alert("please enter the task");
                return;
            }

            this.$emit('createTask', {id: Date.now(), name: this.newTask})

            this.newTask = ''
        }
    }
}
</script>