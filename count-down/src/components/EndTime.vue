<template>
    <div>
        <h2>End from parent to child: {{ endTime.toLocaleString() }} </h2>
    </div>
</template>
<script>
export default {
    name: 'EndTime',
    props: ['endTime']
}
</script>