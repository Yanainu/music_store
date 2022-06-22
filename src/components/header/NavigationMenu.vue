<template>
    <div class="navigation__menu">
        <div class="menu">
            <div class="menu__item">
                <a class="menu__link" href="#">Guitars</a>
            </div>

            <div class="menu__item">
                <a class="menu__link" href="#">Accessories</a>
            </div>

            <div class="menu__item">
                <a class="menu__link" href="#">Storage</a>
            </div>

            <div class="menu__item">
                <a class="menu__link" href="#">Lessons</a>
            </div>

            <div class="menu__item">
                <a class="menu__link" href="#">Repairs</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="postcss" scoped>

.navigation {
    &__menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__item {
    margin-right: 24px;
    padding: 16px;
    }
    &__item:last-child {
        margin-right: 0;
    }
    &__link {
        text-decoration: none;
        color: #FCFCFC;
        font-size: 18px;
    }

    @media (max-width: 1225px) {
        display: none;
    }
}
</style>
