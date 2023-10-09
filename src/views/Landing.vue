<template>
  <div
    class="h-screen overflow-hidden"
    style="background-color: #850d0d; height: 100%"
  >
    <!-- hero -->
    <div class="min-h-screen">
      <div class="flex flex-col items-center">
        <div
          class="fixed text-justify z-10 px-3 md:w-8/12"
          style="top: 50%; transform: translateY(-50%)"
        >
          <div class="leading-relaxed">
            <div class="wrapper">
              <h1 class="title font-bold text-white">
                {{ title }}
              </h1>
              <h2 class="subtitle font-medium text-lg italic text-white mb-2">
                {{ subtitle }}
              </h2>
              <p
                class="UU font-semibold text-sm text-white"
                style="margin-bottom: 5px"
              >
                {{ undangUndangPertama }}
                <br />
                <span class="subUU italic font-light text-xs">{{
                  subUndangUndangPertama
                }}</span>
              </p>
              <p
                class="UU font-semibold text-sm text-white"
                style="margin-bottom: 5px"
              >
                {{ undangUndangKedua }} <br />
                <span class="subUU italic font-light text-xs">{{
                  subUndangUndangKedua
                }}</span>
              </p>
              <h1 class="tentang text-sm font-semibold text-white mt-3 sm:mt-1">
                {{ tentang }}
              </h1>
              <h1 class="about text-sm font-semibold text-white">
                Sorry, access to this website has been denied by The Government
                of Indonesia due to negative content as it violates Indonesia
                Law
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="min-h-screen">
        <img
          class="fixed h-full z-0 object-contain"
          src="../assets/shape/Dekstop-05.png"
          style="filter: grayscale(100%); top: 50%; transform: translateY(-50%)"
        />
      </div>
      <!-- hero -->
    </div>
    <!-- desktop -->
    <div class="h-full hidden md:flex sm:hidden lg:flex">
      <div
        class="fixed top-0 left-0 z-3"
        style="
          background: white;
          width: 180px;
          height: 90%;
          clip-path: polygon(0% 0%, 97.2% 0%, 0% 100%);
        "
      ></div>
      <div
        class="fixed top-0 left-0 z-2"
        style="
          background: #00000038;
          width: 195px;
          height: 94.5%;
          clip-path: polygon(0% 0%, 97.4% 0%, 0% 100%);
        "
      ></div>
      <img
        class="fixed top-0 left-0 z-10"
        style="margin: 10px 1rem; width: 100px; height: 100px"
        src="../assets/logo/logo-01.png"
      />
      <div
        class="fixed top-0 right-0 z-3"
        style="
          height: 400px;
          width: 580px;
          clip-path: polygon(0% 0%, 100.2% 36%, 100.2% 0%);
          background: linear-gradient(90deg, #474bff 0%, #00057e 100%);
        "
      ></div>
      <div
        class="fixed top-0 right-0 z-2"
        style="
          height: 440px;
          width: 625px;
          background: #00000038;
          clip-path: polygon(0% 0%, 100.2% 36%, 100.2% 0%);
        "
      ></div>
      <img
        class="fixed top-0 right-0 mt-6 mr-4 z-10 w-20 h-16"
        src="../assets/logo/logo-03.png"
      />
      <div
        class="fixed bottom-0 right-0 z-3"
        style="
          height: 400px;
          width: 650px;
          clip-path: polygon(0% 100.3%, 100.2% 100.3%, 100.2% 60.8%);
          background: linear-gradient(90deg, #474bff 0%, #00057e 100%);
        "
      ></div>
      <div
        class="fixed bottom-0 right-0 z-2"
        style="
          height: 430px;
          width: 685px;
          clip-path: polygon(0% 100.3%, 100.2% 100.3%, 100.2% 60.8%);
          filter: blur(11px);
          background: #00000038;
        "
      ></div>
      <h1
        class="fixed bottom-0 right-0 z-10 mb-6 mr-4 text-white font-bold text-xl"
      >
        www.varnion.com
      </h1>
    </div>
    <!-- mobile -->
    <div class="flex lg:hidden md:hidden">
      <div class="shapeTpRght fixed top-0 left-0 z-40"></div>
      <div class="sdwShpTpRg fixed top-0 left-0 z-10"></div>
      <img
        class="logo1 fixed top-0 left-0 z-50"
        src="../assets/logo/logo-01.png"
      />
      <div class="shapeTpLft fixed top-0 right-0 z-3"></div>
      <div class="sdwShpTpLf fixed top-0 right-0 z-2"></div>
      <img
        class="logo2 fixed top-0 right-0 mr-1 mt-2 z-10 object-fill"
        src="../assets/logo/logo-03.png"
      />
      <div class="shapeBtm fixed bottom-0 right-0 z-3"></div>
      <div class="sdwShpBtm fixed bottom-0 right-0 z-2"></div>
      <h1
        class="logo3 fixed bottom-0 right-0 z-10 mb-4 mr-2 text-white font-bold text-xl"
      >
        www.varnion.com
      </h1>
    </div>
  </div>
</template>

<script>
import "../assets/styles/landing.css";
import api from "../boot/api";

export default {
  data() {
    return {
      title: "",
      subtitle: "",
      undangUndangPertama: "",
      subUndangUndangPertama: "",
      undangUndangKedua: "",
      subUndangUndangKedua: "",
      tentang: "",
      cartSettings: [],
    };
  },
  components: {
    // Navbar,
    // FooterComponent,
  },
  created() {
    this.getStatus();
  },
  methods: {
    getStatus() {
      api
        .get("situs/getAll")
        .then((response) => {
          this.cartSettings = response.data.data[0];
          this.title = this.cartSettings.title;
          this.subtitle = this.cartSettings.subtitle;
          this.undangUndangPertama = this.cartSettings.undangUndangPertama;
          this.subUndangUndangPertama =
            this.cartSettings.subUndangUndangPertama;
          this.undangUndangKedua = this.cartSettings.undangUndangKedua;
          this.subUndangUndangKedua = this.cartSettings.subUndangUndangKedua;
          this.tentang = this.cartSettings.tentang;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>
<style scoped>
/* dwsktop */
@media screen and (min-width: 1200px) and (max-width: 1600px) {
  .leading-relaxed {
    margin: 1rem 0;
    padding: 1rem 0.3rem;
  }
  .wrapper {
    margin: 2rem 0;
    line-height: 2;
  }
  .title {
    font-size: 50px;
    word-spacing: 2px;
  }
  .subUU {
    margin: 1rem 0;
    font-size: 15px;
  }
}
/* mobile */
@media only screen and (min-width: 375px) and (max-width: 767px) {
  .title {
    font-size: 28px;
  }
  .shapeTpRght {
    background-color: white;
    width: 360px;
    height: 450px;
    clip-path: polygon(94.4% 0%, 0% 0%, 0% 17.5%);
  }
  .sdwShpTpRg {
    background: #000000a2;
    width: 375px;
    height: 485px;
    clip-path: polygon(94.4% 0%, 0% 0%, 0% 17.5%);
  }
  .shapeTpLft {
    width: 360px;
    height: 400px;
    clip-path: polygon(100.3% 0%, 0% 0%, 100.3% 21.5%);
    background: linear-gradient(90deg, #474bff 0%, #00057e 100%);
  }
  .sdwShpTpLf {
    width: 375px;
    height: 430px;
    clip-path: polygon(100.3% 0%, 0% 0%, 100.3% 21.5%);
    background: #00000074;
  }
  .shapeBtm {
    width: 360px;
    height: 480px;
    clip-path: polygon(100.3% 82.8%, 100% 100%, 0% 100%);
    background: linear-gradient(90deg, #474bff 0%, #00057e 100%);
  }
  .sdwShpBtm {
    width: 380px;
    height: 520px;
    clip-path: polygon(100.3% 82.8%, 100% 100%, 0% 100%);
    background: #00000074;
  }
  .logo1 {
    margin: 5px 0 1rem 1rem;
    width: 60px;
    height: 60px;
  }
  .logo2 {
    width: 100px;
    height: 40px;
    margin: 1rem 5px 0 0;
    object-fit: cover;
  }
}

/* small mobile */
@media only screen and (min-width: 319px) and (max-width: 380px) {
  .title {
    font-size: 14px;
    font-weight: 550;
  }
  .subtitle {
    font-size: 13px;
    margin-bottom: 0px;
  }
  .UU {
    font-size: 10px;
    line-height: 1.3;
    font-weight: 500;
  }
  .subUU {
    font-size: 9px;
  }
  .tentang {
    font-size: 11px;
    font-weight: 500;
    line-height: 1.2;
  }
  .about {
    font-size: 11px;
    margin-top: 3px;
    line-height: 1.2;
  }
  .shapeTpRght {
    background-color: white;
    width: 320px;
    height: 450px;
    clip-path: polygon(100.3% 0%, 0% 16.3%, 0% 0%);
  }
  .sdwShpTpRg {
    background: #000000a2;
    width: 340px;
    height: 485px;
    clip-path: polygon(100.3% 0%, 0% 16.3%, 0% 0%);
  }
  .shapeTpLft {
    width: 320px;
    height: 320px;
    clip-path: polygon(100.3% 0%, 100.3% 22.8%, 0% 0%);
    background: linear-gradient(90deg, #474bff 0%, #00057e 100%);
  }
  .sdwShpTpLf {
    width: 340px;
    height: 345px;
    clip-path: polygon(100.3% 0%, 100.3% 22.8%, 0% 0%);
    background: #00000074;
  }
  .shapeBtm {
    width: 320px;
    height: 480px;
    clip-path: polygon(100.3% 85.8%, 100.3% 100.3%, 0% 100.3%);
    background: linear-gradient(90deg, #474bff 0%, #00057e 100%);
  }
  .sdwShpBtm {
    width: 340px;
    height: 510px;
    clip-path: polygon(100.3% 85.8%, 100.3% 100.3%, 0% 100.3%);
    background: #00000074;
  }
  .logo1 {
    margin: 10px 0 1rem 1rem;
    width: 40px;
    height: 40px;
  }
  .logo2 {
    width: 70px;
    height: 30px;
    margin: 1rem 8px 0 0;
    object-fit: cover;
  }
  .logo3 {
    font-size: 18px;
    margin: 4px 8px 8px 0;
  }
}
</style>
