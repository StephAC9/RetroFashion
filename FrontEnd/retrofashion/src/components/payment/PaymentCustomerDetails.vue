<template>
  <div class="payment">
    <div class="row">
      <div class="col-75">
        <div class="container">
          <form action="/action_page.php">
            <div class="row">
              <div class="col-50">
                <h3>Billing Address</h3>
                <label for="fname">
                  <i class="fa fa-user"></i> Full Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="pay[firstname]"
                  v-model="pay.firstname"
                  placeholder="Anna Kalle Moa"
                />
                <label for="email">
                  <i class="fa fa-envelope"></i> Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="pay[email]"
                  v-model="pay.email"
                  placeholder="project@webdevelopment.com"
                />
                <label for="adr">
                  <i class="fa fa-address-card-o"></i> Address
                </label>
                <input
                  type="text"
                  id="adr"
                  name="pay[address]"
                  v-model="pay.address"
                  placeholder="Olastörpvägen 123"
                />
                <label for="city">
                  <i class="fa fa-institution"></i>Municipality
                </label>
                <input
                  type="text"
                  id="city"
                  name="pay[city]"
                  v-model="pay.city"
                  placeholder="Kristianstad"
                />

                <div class="row">
                  <div class="col-50">
                    <label for="state">Region</label>
                    <input
                      type="text"
                      id="state"
                      name="pay[state]"
                      v-model="pay.state"
                      placeholder="Skåne"
                    />
                  </div>
                  <div class="col-50">
                    <label for="zip">Postnummer</label>
                    <input
                      type="text"
                      id="zip"
                      name="pay[zip]"
                      v-model="pay.zip"
                      placeholder="29339"
                    />
                  </div>
                </div>
              </div>

              <div class="col-50">
                <h3>Payment</h3>
                <label for="fname">Accepted Cards</label>
                <div class="icon-container">
                  <i class="fa fa-cc-visa" style="color:navy;"></i>
                  <i class="fa fa-cc-amex" style="color:blue;"></i>
                  <i class="fa fa-cc-mastercard" style="color:red;"></i>
                  <i class="fa fa-cc-discover" style="color:orange;"></i>
                </div>
                <label for="cname">Name on Card</label>
                <input
                  type="text"
                  id="cname"
                  name="pay[cardname]"
                  v-model="pay.cardname"
                  placeholder="Anna Kalle Moa"
                />
                <label for="ccnum">Credit card number</label>
                <input
                  type="text"
                  id="ccnum"
                  name="pay[cardnumber]"
                  v-model="pay.cardnumber"
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                />
                <label for="expmonth">Exp Month</label>
                <select
                  type="text"
                  id="expmonth"
                  name="pay[expmonth]"
                  v-model="pay.expmonth"
                  placeholder="Select a month"
                >
                  <option v-for="month in months" v-bind:key="month.id">{{ month.value }}</option>
                </select>
                <div class="row">
                  <div class="col-50">
                    <label for="expyear">Exp Year</label>
                    <select
                      type="text"
                      id="expyear"
                      name="pay[expyear]"
                      v-model="pay.expyear"
                      placeholder="2020"
                    >
                      <option v-for="year in years" v-bind:key="year">{{ year }}</option>
                    </select>
                  </div>
                  <div class="col-50">
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" name="pay[cvv]" v-model="pay.cvv" placeholder="123" />
                  </div>
                </div>
              </div>
            </div>
            <label>
              <input type="checkbox" checked="checked" name="sameadr" />
              Shipping address same as billing
            </label>
            <input type="submit" value="Complete Purchase" class="btn" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import payment from "../../public/payment.html";

export default {
  name: "payment-customer-details",
  data() {
    return {
      pay: {
        firstname: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        cardname: "",
        cardnumber: "",
        expmonth: "",
        expyear: "",
        cvv: ""
      },
      months: [
        { value: "January", id: 1 },
        { value: "February", id: 2 },
        { value: "March", id: 3 },
        { value: "April", id: 4 },
        { value: "May", id: 5 },
        { value: "June", id: 6 },
        { value: "July", id: 7 },
        { value: "August", id: 8 },
        { value: "September", id: 9 },
        { value: "October", id: 10 },
        { value: "November", id: 11 },
        { value: "December", id: 12 }
      ]
    };
  },

  computed: {
    years() {
      //var years = [];
      var currentYear = new Date().getFullYear();
      return Array.from(
        { length: currentYear - 2010 },
        (value, index) => 2010 + index
      );

      //for (var i = 0; i < 10; i++) {
      // years.push(currentYear + 1);

      // return value;
    }
  }
};
</script>
<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);

body {
  font-family: Arial;
  font-size: 17px;
  padding: 8px;
}

* {
  box-sizing: border-box;
}

.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  margin: 0 -16px;
}

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}

.col-50 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}

.col-75 {
  -ms-flex: 75%; /* IE10 */
  flex: 75%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}

.container {
  background-color: #f2f2f2;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
}

input[type="text"] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
select[type="text"] {
  font-size: 28px;
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

label {
  margin-bottom: 10px;
  display: block;
}

.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
}

.btn {
  background-color: #0d0d11;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 27px;
}

.btn:hover {
  background-color: #df3721;
}

a {
  color: #2196f3;
}

hr {
  border: 1px solid lightgrey;
}

span.price {
  float: right;
  color: grey;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (also change the direction - make the "cart" column go on top) */
@media (max-width: 800px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}
</style>
