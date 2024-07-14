<template>
    <div>
        <div class="option">
            <h2 class="operator">{{ operator }}</h2>
            <div class="item" @click="start()"> Start </div>
            <div class="item" @click="$emit('clearOperator')"> Back </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: "OperatorQuiz",
    data() {
        return {
            
        }
    },
    props: {
        operator: String,
    },
    methods: {
        start() {

        }
    }
}
</script>
<style scoped>
.option .item {
    background: #2f2f9d;
    width: 100px;
    margin: auto;
    margin-top: 20px;
    color: white;
    font-weight: bold;
    padding: 20px;
    cursor: pointer;
}
.operator{
    color: black;
}
</style>