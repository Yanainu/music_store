<template>
    <div class="base-container">
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.base-container {
    position: relative;
    margin: auto;
    max-width: 1300px;
    padding-left: 5%;
    padding-right: 5%;

    @media (max-width: 1225px) {
        margin: auto 5%;
    }
}
</style>
