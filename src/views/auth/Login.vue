<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
        >
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-blueGray-500 text-sm font-bold">
                Selamat di halaman login
              </h6>
            </div>

            <hr class="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  v-model="email"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  v-model="password"
                  type="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
              </div>
              <!-- <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  />
                  <span class="ml-2 text-sm font-semibold text-blueGray-600">
                    Remember me
                  </span>
                </label>
              </div> -->

              <div class="text-center mt-6">
                <button
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  @click="login()"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-wrap mt-6 relative">
          <div class="w-2/2 text-right">
            <router-link to="/register" class="text-blueGray-200">
              <small>Create new account</small>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import github from "@/assets/img/github.svg";
import google from "@/assets/img/google.svg";
import api from "../../boot/api";

export default {
  data() {
    return {
      github,
      google,
      email: "",
      password: "",
    };
  },
  methods: {
    // async subMit() {
    //   try {
    //     const response = await api.post("user/login", {
    //       email: this.email,
    //       password: this.password,
    //     });
    //     if (response.data.sukses) {
    //       localStorage.setItem("dataUser", JSON.stringify(response.data.data));
    //       this.$router.push("/");
    //       alert("Login successful!");
    //     } else {
    //       alert("Invalid email or password.");
    //     }
    //   } catch (error) {
    //     console.error("Error logging in:", error);
    //     alert("Error logging in. Please try again later.");
    //   }
    // },
    async login() {
      const credential = {
        email: this.email,
        password: this.password,
      };
      await api
        .post("login", credential)
        .then((res) => {
          const token = res.data.accessToken;
          localStorage.setItem("authToken", token);
          alert("Login successful!");
          this.$router.push("/");
        })
        .catch((err) => {
          console.err(err, "login gagal");
          alert(err);
        });
    },
  },
};
// node
// email: "admin@gmail.com";
// password: "123";

// db.json
// "email": "test@gmail.com",
// "password": "test123",
</script>
