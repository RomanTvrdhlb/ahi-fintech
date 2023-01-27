import {
  addCustomClass,
  removeCustomClass,
} from "../functions/customFunctions";
import vars from "../_vars";

const { bodyEl } = vars;
const pass = prompt("输入密码");

if (pass === "72127387348") {
    AccessСonfirmed();
} else {
  alert("密碼錯誤!");
  top.location.href = "";
}

function AccessСonfirmed() {
  removeCustomClass(bodyEl, "alert");
}
