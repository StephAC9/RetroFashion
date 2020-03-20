<template>
  <div class="Payment">
    <PaymentCustomerDetails></PaymentCustomerDetails>
  </div>
</template>
<script>
import PaymentCustomerDetails from "../../components/payment/PaymentCustomerDetails";
export default {
  name: "Payment",
  components: { PaymentCustomerDetails }
};
</script>
<style scoped>
</style>