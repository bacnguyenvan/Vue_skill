<template>
<div>
    <h2>Product detail</h2>
    <p>{{ detail.id + "---------: " + detail.name}}</p>
    <button class="btn active" @click="$emit('IncreateEvent', 2)">+2</button>
</div>
</template>

<script>
export default {
    props: {
        detail: Array
    }
}
</script>