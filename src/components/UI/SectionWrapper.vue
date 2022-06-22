<template>
    <section class="section">
        <div class="section__head-text-container">
            <h2 class="section__head-text">New products</h2>
        </div>

        <slot name="section"></slot>
    </section>
</template>

<script>

export default {};
</script>

<style lang="postcss" scoped>
.section {
    padding: 88px 0 80px 0;

    &__head-text-container {
        padding: 8px 0 16px 0;
    }
    &__head-text-container::before {
        content: '';
        width: 80px;
        height: 3px;
        background: #AB0433;
        margin: 0 auto;
        margin-bottom: 8px;
        display: block;
    }

    &__head-text {
        font-weight: 700;
        font-size: 40px;
        line-height: 120%;
        color: var(--dark-grey);
        text-align: center;
    }

    @media (max-width: 1225px) {
        &__head-text-container::before {
            width: 28%;
        }
    }

    @media (max-width: 760px) {
        padding: 56px 0 40px 0;
        &__head-text {
            font-size: 24px;
        }

        &__head-text-container::before {
            width: 80px;
        }
    }
}
</style>
