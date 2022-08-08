<script>
import Swal from "sweetalert2";
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger me-3",
    },
    buttonsStyling: false,
    backdrop: false,
  });
swalWithBootstrapButtons.fire(
    "Doğrulama Başarılı!",
    "Hesabınız başarıyla doğrulandı.",
    "success"
  );


</script>


<style>

</style>