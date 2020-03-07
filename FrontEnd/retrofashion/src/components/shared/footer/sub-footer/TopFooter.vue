<template>
    <div class="footer-top">
         <div class="container-footer-top">
            <div class="left-top-footer"></div>
            <div class="center-top-footer">
                <div class="top-element" style="text-align:center; color:white">Subscribe to our newspappers to get notification of all new arrivals!</div>
                <div class="top-element">
                    <b-form-input type="email" style="text-align:center; width:100%" v-model="email" placeholder="Enter your E-post"></b-form-input>
                </div>
                <div class="top-element child">
                    <div class="top-element-child"><strong>WOMEN</strong></div>
                    <div class="top-element-child"><strong>MEN</strong></div>
                </div>
            </div>
            <div class="right-top-footer"></div>
        </div> 
         <div class="footer-top-bottom">
            <div class="top-bottom">
                <p style="font-size:13ps; display:block"><strong>HELP?</strong></p>
                <a class="link" href="#">FaQ</a>
            </div>
            <div class="top-bottom">
                <p style="font-size:13ps;display:block"><strong>ABOUT US</strong></p>
                <a class="link" href="#">Retrofashion</a><br>
                <a class="link" href="#">Founders</a>
            </div>
            <div class="top-bottom">
                <p style="font-size:13ps;display:block"><strong>CONTACT US</strong></p>
                <a class="link" href="mailto:retrofashion@yahoo.com">retrofashion@yahoo.com</a><br>
                <p>Call us: +4679907743</p>
            </div>
            <div class="top-bottom">
                <p style="font-size:13ps;display:block"><strong>OTHER</strong></p>
                <a class="link" href="#">Jobs</a><br>
                <a class="link" href="#">Present cards</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TopFooter',
    data(){
        return{
            email:''
        }
    }
}
</script>
<style scoped>
    .footer-top{
        background-color: #203139;
    }
    .container-footer-top{
        display: flex;
        padding-top: 20px;
    }
    .left-top-footer,.right-top-footer{
        flex-basis: 25%;
    }
    .center-top-footer{
        flex-basis: 50%;
    }
    @media (max-width: 650px) {
        .left-top-footer,.right-top-footer{
        flex-basis: 0%;
    }
    .center-top-footer{
        flex-basis: 0%;
    }
    .center-top-footer{
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
        justify-items: center;
    }
    .link{
        font-size: smaller;
    }
    }
    .top-element{
        margin:10px;
    }
    .child{
        display: flex;
        justify-content: space-between;
    }
    .top-element-child{
        text-align: center;
        background-color: rgb(247, 73, 125);
        flex-basis: 49%;
        padding: 10px;
        color: white;
        cursor: pointer;
        border-radius: 5px;
    }
    .top-element-child:hover{
       background-color: rgb(187, 71, 106); 
    }
    .footer-top-bottom{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .top-bottom{
        flex-basis: 24%;
        min-width: 200px;
        color: whitesmoke;
        margin-top:15px;
        text-align: center;
        margin: 20px;
    }
    .link{
        color: whitesmoke;
        text-decoration: none;
    }
    .link:hover{
        text-decoration: underline;
    }  
</style>