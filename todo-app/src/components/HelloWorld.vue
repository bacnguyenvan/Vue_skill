<template>
  <div class="hello">
    <h2>Target</h2>
    <div>
      <input placeholder="Type new toDo" v-model="newTodo"/>
      <button @click="addTodo">Add</button>
      <span>{{ newTodo }}</span>
    </div>
    <ul class="todo">
      <li v-for="(todo, index) in todoList" :key="index">
        <input type="checkbox" :value="index" v-model="todo.done"/>
        <span :class="{done: todo.done }">{{ todo.title }}</span>
        <button @click="removeTodo(todo)">Remove</button>
      </li>
    </ul>
    <button class="remove-selected" @click="removeSelected">Remove selected</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      todoList: [
        {
          "done": false,
          "title": "Travel"
        },
        {
          "done": true,
          "title": "Learn Vue"
        },
        {
          "done": false,
          "title": "Save the world"
        },
      ],
      newTodo: ''
    }
  },
  methods: {
    addTodo() {
      this.todoList.push({
        'done': false,
        'title': this.newTodo
      })
      this.newTodo = ''
    },
    removeTodo(todo) {
      const index = this.todoList.indexOf(todo);
      if (index > -1) { // only splice array when item is found
        this.todoList.splice(index, 1); // 2nd parameter means remove one item only
      }
    },
    removeSelected() {
      this.todoList.forEach((element) => {
        if(element.done) {
          this.removeTodo(element)
        }
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .todo {
    text-align: left;
  }
  .todo li {
    display: flex;
    margin-top: 20px;
  }
  .todo li span {
    width: 10%;
  }
  .todo .done {
    text-decoration: line-through;
  }
</style>
