<template>
    <button
        @click="open"
        class="hamburger"
        :class="{ active: false }"
    >
        <div></div>
        <div></div>
        <div></div>
    </button>
</template>

<script>
export default {
    methods: {
        open() {
            this.$emit('open');
        },
    },
};
</script>

<style lang="scss" scoped>
.hamburger {
    background: transparent;
    border: 0px;
    position: relative;
    z-index: 1;

    div {
        width: 35px;
        height: 5px;
        border-radius: 4px;
        margin-bottom: 6px;
        background-color: #00A1ED;
        transition: 0.5s;
        &:last-child {
            margin-bottom: 0px;
        }
    }

    &.active {
        div:nth-of-type(1) {
            transform: rotate(45deg);
        }
        div:nth-of-type(2) {
            transform: rotate(-45deg);
            margin-top: -12px;
        }
        div:nth-of-type(3) {
            opacity: 0;
        }
    }
}
</style>
