<template>
    <div class="login">
        <div class="login-box">
            <div class="head">LOGIN</div>
            <div class="fields">
                <div>
                    <input type="email" v-model="email" placeholder="Email">
                </div>
                <div>
                    <input type="password" v-model="password" placeholder="Password">
                </div>
                <div>
                    <button class="btn" @click="login">Login</button>
                </div>
            </div> 
        </div>
    </div>
</template>
<script>
export default {
    name:'Login',
    data(){
        return{
            email:'',
            password:''
        }
    },
    computed:{

    },
    methods:{
        login(){
            this.$store.dispatch('login',{email:this.email,password:this.password})
        }
    }
    
}
</script>

<style scoped>
.login{
    padding: 10%;
}
.login-box{
    margin: 0 auto;
    padding: 20px;
    border: solid 1px gray;
    border-radius: 5px;
    width: 400px;

}
.head{
    margin-bottom: 30px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
}
.fields{
    border-radius: 5px;
    border:gray 0.5px;
    padding:4px;
    text-align: center;
    
}
input{
    padding: 5px;
    background: gray;
    color: white;
    width: 220px;
    margin: 10px
}
</style>

