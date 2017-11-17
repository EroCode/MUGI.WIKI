<template>
    <p>I'm {{ vue_name }} !</p>
</template>

<script>
module.exports = {
    data: function() {
        return {
            vue_name: "component"
        }
    }
}
</script>

<style scoped>
p {
    color: #00F;
}
</style>
