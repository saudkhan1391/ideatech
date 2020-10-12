<template>
  <div>
    <!-- <div
      class="container ml-10"
      v-for="weather in this.weatherData"
      :key="weather.id"
    >
      {{ weather.title }}
    </div> -->
    <div>
      <div id="contact-form " class="contact-form mt-9">
        <h1 class="contact-form_title">Contact Form</h1>
        <div class="separator"></div>

        <div v-if="isSending" class="loading">Sendig...</div>

        <form class="form" @submit="onSubmit">
          <input
            required
            name="name"
            v-model="contact.name"
            placeholder="Name"
            type="text"
            autocomplete="off"
          />
          <input
            required
            name="email"
            v-model="contact.email"
            placeholder="E-mail"
            type="email"
            autocomplete="off"
          />
          <textarea
            name="message"
            v-model="contact.message"
            rows="4"
            placeholder="Message"
          ></textarea>
          <button class="button">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.callWeatherApi();
  },
  data: () => ({
    contact: {
      name: "",
      email: "",
      message: "",
    },

    isSending: false,
    weatherData: "",
    payload: "",
  }),

  methods: {
    /**
     * Clear the form
     */
    callWeatherApi() {
      fetch("https://jsonplaceholder.typicode.com/posts/")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.weatherData = json;
          this.weatherData = this.weatherData.filter(
            (item, index) => index < 5
          );
        });
      //   fetch(
      //     "https://community-open-weather-map.p.rapidapi.com/weather?lat=0&lon=0&callback=test&id=2172797&lang=null&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=London%252Cuk",
      //     {
      //       method: "GET",
      //       headers: {
      //         "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      //         "x-rapidapi-key":
      //           "4c45f51113msh86a5a5bab2a4a0cp1d7170jsnc475dcee52d0",
      //       },
      //     }
      //   )
      //     .then((response) => {
      //       console.log(response);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });

      //   fetch("https://community-open-weather-map.p.rapidapi.com/weather")
      //     .then((res) => {
      //       console.log("res: ", res);
      //     })
      //     .catch((e) => {
      //       console.log("err : ", e);
      //     });
    },
    clearForm() {
      for (let field in this.contact) {
        this.contact[field] = "";
      }
    },

    /**
     * Handler for submit
     */
    onSubmit(evt) {
      evt.preventDefault();

      this.isSending = true;

      setTimeout(() => {
        // Build for data
        // let form = new FormData();
        // for (let field in this.contact) {
        //   form.append(field, this.contact[field]);
        // }
       let form = {
          title: this.contact.name,
          body: this.contact.email,
          userId: this.contact.message
        };
        console.log("payload : ", form);
        // Send form to server
        this.$http
          .post("/https://jsonplaceholder.typicode.com/posts/", form)
          .then((response) => {
            console.log(response);
            this.clearForm();
            this.isSending = false;
          })
          .catch((e) => {
            console.log(e);
          });
      }, 1000);
    },
  },
};
</script>

<style scoped>
body {
  background: #f1f1f1;
  font-family: "Roboto", sans-serif;
}

.contact-form {
  font-family: 16px;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
}

.contact-form .separator {
  border-bottom: solid 1px #ccc;
  margin-bottom: 15px;
}

.contact-form .form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.contact-form_title {
  color: #333;
  text-align: left;
  font-size: 28px;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
  border: solid 1px #e8e8e8;
  font-family: "Roboto", sans-serif;
  padding: 10px 7px;
  margin-bottom: 15px;
  outline: none;
}

.contact-form textarea {
  resize: none;
}

.contact-form .button {
  background: rgb(56, 56, 240);
  /* border: solid 1px #da552f; */
  color: white;
  cursor: pointer;
  padding: 10px 50px;
  text-align: center;
  text-transform: uppercase;
}

.contact-form .button:hover {
  background: #ea532a;
  border: solid 1px #ea532a;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
  font-size: 15px;
  border-radius: 3px;
}
</style>