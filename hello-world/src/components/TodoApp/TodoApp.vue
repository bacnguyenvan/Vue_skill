<template>
    <div class="app-container">
        <div class="todo-app">
            <h2 class="title">Todo Application</h2>
            <div class="container">
                <TodoCreate @create-task="createTodo"/>
                <TodoList :todoList="todoList" @remove-task="removeTask" @modify-task="modifyTask"/>
            </div>
        </div>
    </div>
</template>

<script>
import TodoCreate from './TodoCreate.vue'
import TodoList from './TodoList.vue'
export default {
    data() {
        return {
            todoList: []
        }
    },
    components: {
        TodoCreate,
        TodoList
    },
    methods: {
        createTodo(task) {
            this.todoList.push(task)
        },
        removeTask(id) {
            this.todoList = this.todoList.filter(item => item.id != id)
        },
        modifyTask(id, name) {
            const task = this.todoList.find(item => item.id == id)
            task.name = name
        }
    }
}
</script>
<style>
.todo-app .title {
    text-align: center;
    font-size: 30px;
}

.task-block {
    text-align: center;
}

.task-block input {
    margin-right: 20px;
    padding: 5px 0px;
    font-size: 20px;
}

.task-block button {
    padding: 5px;
    width: 100px;
    cursor: pointer;
    font-size: 20px;
}

.task-detail-block {
    display: flex;
    width: 300px;
    justify-content: space-around;
    flex-wrap: wrap;
}

.task-list ul {
    list-style-type: none;
    font-size: 20px;
}

.task-detail-block input, .task-detail-block button {
    cursor: pointer;
}

.task-detail-block li {
    width: 50%;
}

.new-task {
    text-align: center
}
</style>