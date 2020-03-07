<template>
<div>
    <b-popover
    v-if="layout == 'cart'"
    :target="`popover-1-${placement}`"
    :placement="placement"
    title="CART"
    triggers="hover focus">
    Hello cart
    </b-popover>
    <b-popover
    v-else-if="layout == 'login'"
    :target="`popover-2-${placement}`"
    :placement="placement"
    title="LOGIN!"
    triggers="focus">
        <div style="width:300px; padding:10px">
            <div>
                <input class="login-input" type="text" id="email" name="email"><br><br>
                </div>
                    <input class="login-input" type="password" id="password" name="password"><br><br>
                    <input style="background:rgb(247, 73, 125);font-weight:bold; color:rgb(230,230,230,2)" class="login-input" type="submit" value="LOGIN">
                </div>
                <div>
                <div>
                    <h4 style="text-align:center;color:#152429"><a style="color:#152429" id="login-link-register" href="#">Register</a></h4>
                </div>
                <div>
                <p style="text-align:center; color:#152429"><a style="color:#152429"  id="login-link-forgotten-pass" href="#">Forgotten password?</a></p>
            </div>
        </div>    
    </b-popover>
    <b-popover
    style="border-color:white"
    v-if="layout == 'dam'"
    :target="`popover-dam-${placement}`"
    :placement="placement"
    triggers="hover focus">
    <div style="width:700px; height:300px;background:gray"></div>
    </b-popover>

</div>
        
</template>
<script>
export default {
    name:'popover',
    props:['layout'],
     data: () => ({
    items: true,
    placement:'bottomleft',
  }),
}
</script>