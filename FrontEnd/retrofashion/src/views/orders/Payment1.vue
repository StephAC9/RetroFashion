<template>
  <div class="payment">
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
.payment{
  padding: 30px;
  margin-bottom: 100px;
}
</style>