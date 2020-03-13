<template>
    <div>
         <div style="text-align:center; width:40%; margin:0 auto">
             <h4>ADD MEMBER</h4>
               <div>
                    <b-form-input class="input" v-model="firstName" type="text" placeholder="Firstname"></b-form-input>
                </div>
                <div>
                    <b-form-input class="input" v-model="lastName" type="text" placeholder="Lastname"></b-form-input>
                </div>
                <div>
                    <b-form-input class="input" v-model="gender" type="text" placeholder="Gender"></b-form-input>
                </div>
                <div>
                    <b-form-input class="input" v-model="email" type="email" placeholder="Email"></b-form-input>
                </div>
                <div>
                    <b-form-input class="input" v-model="password" type="password" placeholder="Password"></b-form-input>
                </div>
                <div>
                    <b-form-input class="input" v-model="phoneNumber" type="tel" placeholder="Phone number"></b-form-input>
                </div>
                <div>
                    <b-form-input class="input" v-model="deliveryAddress" type="text" placeholder="Delivery address"></b-form-input>
                </div>
                <div>
                    <b-form-input class="input" v-model="creditCardNumber" type="text" placeholder="Creditcard number"></b-form-input>
                </div>
           </div>
           <div style="margin:50px">
               <b-button  size="lg">Add member</b-button>
           </div><hr>
           <h4>REMOVE MEMBER</h4>
            <div style="width:40%; margin:0 auto">
                <b-form-input class="input" v-model="memberId" type="text" placeholder="Member Id"></b-form-input>
                <b-button size="lg">Remove</b-button>
            </div>

            <div style="margin:100px"></div>
    </div>
</template>
<script>
export default {
    name:'Member',
    data(){
        return{
            firstName: '',
            lastName: '',
            gender: '',
            email: '',
            password: '',
            phoneNumber: '',
            deliveryAddress: '',
            creditCardNumber: '',
            memberId:''
        }
    },
    methods:{
        
    }
}
</script>
<style scoped>
    .input{
    width: 90%;
    margin: 10px;
}
</style>