<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">
          Settings Account Terblokir
        </h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          User Information
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Title
              </label>
              <input
                type="text"
                :value="title"
                @input="$emit('update:title', $event.target.value)"
                placeholder="Masukkan title information"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Subtitle
              </label>
              <input
                type="text"
                :value="subtitle"
                @input="$emit('update:subtitle', $event.target.value)"
                placeholder="Masukkan subtitle information"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Undang-Undang
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Undang-undang pertama
              </label>
              <input
                type="text"
                :value="undangUndangPertama"
                @input="
                  $emit('update:undangUndangPertama', $event.target.value)
                "
                placeholder="Masukkan undang Undang Pertama information"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
            <div class="relative w-full mb-3">
              <input
                type="text"
                :value="subUndangUndangPertama"
                @input="
                  $emit('update:subUndangUndangPertama', $event.target.value)
                "
                placeholder="Masukkan sub undang Undang Pertama information"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Undang-undang kedua
              </label>
              <input
                type="text"
                :value="undangUndangKedua"
                @input="$emit('update:undangUndangKedua', $event.target.value)"
                placeholder="Masukkan undangUndangKedua information"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
            <div class="relative w-full mb-3">
              <input
                type="text"
                :value="subUndangUndangKedua"
                @input="
                  $emit('update:subUndangUndangKedua', $event.target.value)
                "
                placeholder="Masukkan sub undang undang kedua information"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Information
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Tentang
              </label>
              <textarea
                :value="tentang"
                @input="$emit('update:tentang', $event.target.value)"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Masukkan tentang information"
              >
              </textarea>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <textarea
                :value="about"
                @input="$emit('update:about', $event.target.value)"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Masukkan tentang information"
              >
              </textarea>
            </div>
          </div>
        </div>
        <button
          @click="submitForm"
          :disabled="
            title &&
            subtitle &&
            undangUndangPertama &&
            undangUndangKedua &&
            subUndangUndangKedua &&
            subUndangUndangPertama &&
            tentang
              ? false
              : true
          "
          type="button"
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "title",
    "subtitle",
    "undangUndangPertama",
    "subUndangUndangPertama",
    "undangUndangKedua",
    "subUndangUndangKedua",
    "tentang",
    "about",
  ],
  methods: {
    submitForm() {
      this.$emit("submitForm", {
        title: this.title,
        subtitle: this.subtitle,
        undangUndangPertama: this.undangUndangPertama,
        subUndangUndangPertama: this.subUndangUndangPertama,
        undangUndangKedua: this.undangUndangKedua,
        subUndangUndangKedua: this.subUndangUndangKedua,
        tentang: this.tentang,
        about: this.about,
      });
    },
    clearForm() {
      this.$emit("clearForm");
    },
  },
};
</script>
