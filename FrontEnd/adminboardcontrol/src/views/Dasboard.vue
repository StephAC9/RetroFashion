<template>
    <div style="padding: 10Px">
        <div style="width:50%; margin:0 auto">
            <b-list-group horizontal="md">
                <b-list-group-item @click="gotoProductBoard" button>MANAGE PRODUCTS</b-list-group-item>
                <b-list-group-item @click="gotoAdminBoard" button>MANAGE ADMINS</b-list-group-item>
                <b-list-group-item @click="gotoMemberBoard" button>MANAGE MEMBERS</b-list-group-item>
            </b-list-group>
        </div><hr>
        <section>
             <router-view/>
        </section>
    </div>
</template>
<script>
export default {
    name:'Dasboard',
    methods:{
        gotoProductBoard(){
            this.$router.push({name:'manageProduct'})
        },
        gotoAdminBoard(){
            this.$router.push({name:'manageAdmin'})
        },
         gotoMemberBoard(){
             this.$router.push({name:'manageMember'})
        }
    }
}
</script>