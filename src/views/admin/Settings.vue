<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-12/12 px-4">
      <CardSettings
        :title="title"
        :subtitle="subtitle"
        :undangUndangPertama="undangUndangPertama"
        :subUndangUndangPertama="subUndangUndangPertama"
        :undangUndangKedua="undangUndangKedua"
        :subUndangUndangKedua="subUndangUndangKedua"
        :tentang="tentang"
        :about="about"
        @update:title="updateField('title', $event)"
        @update:subtitle="updateField('subtitle', $event)"
        @update:undangUndangPertama="updateField('undangUndangPertama', $event)"
        @update:subUndangUndangPertama="
          updateField('subUndangUndangPertama', $event)
        "
        @update:undangUndangKedua="updateField('undangUndangKedua', $event)"
        @update:subUndangUndangKedua="
          updateField('subUndangUndangKedua', $event)
        "
        @update:tentang="updateField('tentang', $event)"
        @update:about="updateField('about', $event)"
        @submitForm="submitForm"
        @clearForm="clearForm"
      />
    </div>
    <div class="w-full lg:w-12/12 px-4">
      <CardTableSetting
        :color="color"
        :cartSettings="cartSettings"
        @deleteData="deleteData"
        @editData="editData"
      />
    </div>
  </div>
</template>
<script>
import CardSettings from "@/components/Cards/CardSettings.vue";
import CardTableSetting from "@/components/Cards/CardTableSetting.vue";
import api from "../../boot/api";

export default {
  components: {
    CardSettings,
    CardTableSetting,
  },
  data() {
    return {
      color: "light",
      title: "",
      subtitle: "",
      undangUndangPertama: "",
      subUndangUndangPertama: "",
      undangUndangKedua: "",
      subUndangUndangKedua: "",
      tentang: "",
      about: "",
      cartSettings: [],
      editItemId: null,
    };
  },
  created() {
    this.getStatus();
  },
  methods: {
    updateField(field, value) {
      this[field] = value;
    },
    async submitForm() {
      try {
        const formData = {
          title: this.title,
          subtitle: this.subtitle,
          undangUndangPertama: this.undangUndangPertama,
          subUndangUndangPertama: this.subUndangUndangPertama,
          undangUndangKedua: this.undangUndangKedua,
          subUndangUndangKedua: this.subUndangUndangKedua,
          tentang: this.tentang,
          about: this.about,
        };

        const endpoint = this.editItemId ? `data/${this.editItemId}` : "data";
        const response = await api[this.editItemId ? "put" : "post"](
          endpoint,
          formData
        );
        console.log(endpoint);

        console.log("Form submitted successfully:", response.data);
        this.clearForm();
        this.getStatus();
        this.editItemId = false;
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
    getStatus() {
      api
        .get("data")
        .then((response) => {
          this.cartSettings = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    deleteData(itemId) {
      console.log(itemId);
      api
        .delete(`data/${itemId}`)
        .then((response) => {
          console.log("Data berhasil dihapus:", response.data);
          this.cartSettings = this.cartSettings.filter(
            (item) => item.id !== itemId
          );
        })
        .catch((error) => {
          console.error("Error menghapus data:", error);
        });
    },
    editData(item) {
      this.title = item.title || "";
      this.subtitle = item.subtitle || "";
      this.undangUndangPertama = item.undangUndangPertama || "";
      this.subUndangUndangPertama = item.subUndangUndangPertama || "";
      this.undangUndangKedua = item.undangUndangKedua || "";
      this.subUndangUndangKedua = item.subUndangUndangKedua || "";
      this.tentang = item.tentang || "";
      this.about = item.about || "";
      this.editItemId = item.id;
      console.log(this.editItemId);
    },
    clearForm() {
      this.title = "";
      this.subtitle = "";
      this.undangUndangPertama = "";
      this.subUndangUndangPertama = "";
      this.undangUndangKedua = "";
      this.subUndangUndangKedua = "";
      this.tentang = "";
      this.about = "";
    },
  },
};
</script>
