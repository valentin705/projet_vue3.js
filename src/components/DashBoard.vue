<template>
    <div class="dashboard">
        <div class="dashboard__dash-emp">
            <div class="dashboard__bloc">
                <p class="dashboard__text">Dashbaord</p>
                <li class="dashboard__li">Products manager</li>
            </div>
            <p class="dashboard__text">Employees management</p>
        </div>
        <p class="dashboard__log">Logout</p>
    </div>
</template>

<script>
export default {
    name: 'DashBoard',
    components: {
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/_variablesColor.scss';
@import '@/assets/_variablesTypographie.scss';

.dashboard {
    position: absolute;
    background-color: $primary-color;
    height: 150px;
    width: 100%;
    padding: 10px;

    &__dash-emp {
        display: flex;
        justify-content: space-between;
    }

    &__text,
    &__li {
        font-size: $font-size-m;
        font-weight: bold;
        color: $write-color-w;
        margin: 15px;
    }

    &__log {
        display: flex;
        justify-content: center;
        margin: 15px;
        padding: 15px;
        border-top: 1px solid $write-color-w;
        font-size: $font-size-m;
        font-weight: bold;
    }

    @media screen and (min-width: 768px) {
        margin-left: 9.3rem;
        width: auto;
        height: 60rem;

        .dashboard {
            display: flex;
            flex-direction: column;
        }

        .dashboard__dash-emp {
            display: flex;
            flex-direction: column;

            .dashboard__bloc {
                display: flex;
                flex-direction: column;
            }
        }
    }

    @media screen and (min-width: 900px) {
        display: none;
    }
}
</style>