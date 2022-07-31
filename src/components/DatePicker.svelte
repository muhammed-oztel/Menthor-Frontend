<script>
export let date;
import SveltyPicker from "svelty-picker";
const tr = {
    days: [
      "Pazar",
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
    ],
    months: [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık",
    ],

    daysShort: ["Paz", "Pzt", "Sal", "Çarş", "Perş", "Cum", "Cmt", "Paz"],
    daysMin: ["Paz", "Pzt", "Sal", "Çarş", "Perş", "Cum", "Cmt", "Paz"],
    monthsShort: [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık",
    ],
    meridiem: ["am", "pm"],
    suffix: ["st", "nd", "rd", "th"],
    todayBtn: "Bugün",
    clearBtn: "Temizle",
    timeView: "Show time view",
    backToDate: "Back to calendar view",
  };
</script>

<SveltyPicker
    i18n={tr}
    placeholder={"Doğum Tarihi"}
    inputClasses="form-control"
    format="dd/mm/yyyy"
    bind:value={date}
    />
<style>
</style>
