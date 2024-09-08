<template>
    <div class="task-list">
        <ul>
            <div v-for="todo in todoList" :key="todo.id" class="task-detail-block">
                <input type="checkbox" name="task-checkbox"/>
                <li v-if="!isEditing(todo.id)">{{ todo.name }}</li>
                <input type="text" v-else v-model="taskModify"/>
                <button @click="isEditing(todo.id) ? saveModifyTask(todo.id, taskModify) : modifyTask(todo.id)">
                    {{ isEditing(todo.id) ? "Save" : "Edit" }}
                </button>
                <button @click="removeTask(todo.id)">Delete</button>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            taskModify: '',
            editingId: null
        }
    },
    props: ['todoList'],
    methods: {
        removeTask(id) {
            this.$emit('removeTask', id)
        },
        isEditing(id) {
            return this.editingId === id;
        },
        modifyTask(id) {
            const task = this.todoList.find(item => item.id === id);
            this.taskModify = task ? task.name : '';
            this.editingId = id;
        },
        saveModifyTask(id, taskModify) {
            if(this.taskModify == '') {
                alert("Please enter the task name!");
                return;
            }
            this.$emit('modifyTask', id, taskModify)
            this.editingId = null;
        }
    }
}
</script>