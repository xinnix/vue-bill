<script>
    import store from '../store';
    import balance from './balance';
    import records from './records';
    import addbar from './addbar';


    export default {
        el: '#app',
        data () {
            return {
                items:[],
                total:0
            };
        },
        components: {
            balance,records,addbar
        }
    };

</script>

<template>
    <div>
      <balance :total="total"></balance>
      <addbar  :total="total"></addbar>
      <records :items="items"></records>
        <!-- <div class="sidebar">
            <card :user="user" :search.sync="search"></card>
            <list :user-list="userList" :session="session" :session-index.sync="sessionIndex" :search="search"></list>
        </div>
        <div class="main">
            <message :session="session" :user="user" :user-list="userList"></message>
            <text :session="session"></text>
        </div> -->
    </div>
</template>

<style lang="less">
    #chat {
        overflow: hidden;
        border-radius: 3px;

        .sidebar, .main {
            height: 100%;
        }
        .sidebar {
            float: left;
            width: 200px;
            color: #f4f4f4;
            background-color: #2e3238;
        }
        .main {
            position: relative;
            overflow: hidden;
            background-color: #eee;
        }
        .m-text {
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
        }
        .m-message {
            height: ~'calc(100% - 160px)';
        }
    }
</style>
