<template>
    <div class="dashbord">
        <div class="dash-emp">
            <div>
            <p>Dashbord</p>
            <li>Products manager</li>
            </div>
            <p>Employees management</p>
        </div>
        <p class="log">Logout</p>
    </div>
</template>

<script>
export default {
    name: 'DashbordMobile',
    components: {
    }
}
</script>

<style lang="scss">
$primary-color: #804BF1;
$write-color: #F2F2F2;

.dashbord {
    position: absolute;
    background-color: $primary-color;
    height: 150px;
    width: 100%;
    padding: 10px;
}

.dash-emp {
    display: flex;
    justify-content: space-between;
}

.dash-emp p, li {
    font-size: 12px;
    font-weight: bold;
    color: $write-color;
    margin: 15px;
}

.log {
    display: flex;
    justify-content: center;
    margin: 15px;
    padding: 15px;
    border-top: 1px solid $write-color;
    font-size: 12px;
    font-weight: bold;
}

</style>