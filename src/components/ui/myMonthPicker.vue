<template>
  <month-picker-input :no-default="true"></month-picker-input>
</template>

<script>
import { MonthPickerInput } from "vue-month-picker";

export default {
  components: {
    MonthPickerInput,
  },
  mounted() {
    // console.log("myMonthPicker.... ");
    // const inputTagToremove = document.querySelector(".month-picker-input");
    // console.log(inputTagToremove);
    // inputTagToremove.remove();
    // const parent = document.querySelector(".month-picker-input-container");

    // let inputElement = document.createElement("v-text-field");
    // inputElement.setAttribute("label", "Date");
    // inputElement.setAttribute("placeholder", "input date");

    // let inputElement2 = document.createElement("input");
    // inputElement2.setAttribute("data-v-9941001a", "");
    // inputElement2.className = "month-picker-input";
    // inputElement2.setAttribute("type", "text");
    // inputElement2.setAttribute("readonly", "");
    // inputElement.appendChild(inputElement2);

    // parent.appendChild(myFunction());


//     let jsValue = `<div data-v-33cfc297="" class="v-input v-input--horizontal v-input--center-affix v-input--density-default v-locale--is-ltr v-text-field">
//    <!---->
//    <div class="v-input__control">
//       <div class="v-field v-field--center-affix v-field--variant-filled v-theme--light v-locale--is-ltr">
//          <div class="v-field__overlay"></div>
//          <div class="v-field__loader">
//             <div class="v-progress-linear v-theme--light v-locale--is-ltr" role="progressbar" aria-hidden="true" aria-valuemin="0" aria-valuemax="100" style="top: 0px; height: 0px; --v-progress-linear-height: 2px; left: 50%; transform: translateX(-50%);">
//                <!---->
//                <div class="v-progress-linear__background bg-primary" style="width: 100%;"></div>
//                <div class="v-progress-linear__indeterminate">
//                   <div class="v-progress-linear__indeterminate long bg-primary"></div>
//                   <div class="v-progress-linear__indeterminate short bg-primary"></div>
//                </div>
//                <!---->
//             </div>
//          </div>
//          <!---->
//          <div class="v-field__field" data-no-activator="">
//             <label class="v-label v-field-label v-field-label--floating" aria-hidden="true" for="input-15">
//                <!---->Position
//             </label>
//             <label class="v-label v-field-label" for="input-15">
//                <!---->Position
//             </label>
//             <!----><input placeholder="e.g web developer" size="1" type="text" id="input-15" aria-describedby="input-15-messages" class="v-field__input"><!---->
//          </div>
//          <!----><!---->
//          <div class="v-field__outline">
//             <!----><!---->
//          </div>
//       </div>
//    </div>
//    <!----><!---->
// </div>`;





//     let newElement = document.createElement("div");
//     newElement.innerHTML = jsValue;
//     parent.appendChild(newElement);
//     console.log(parent);
  },
};
</script>

<style scoped></style>
