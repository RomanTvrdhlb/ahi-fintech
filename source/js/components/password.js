import {
  addCustomClass,
  removeCustomClass,
} from "../functions/customFunctions";
import vars from "../_vars";

const { bodyEl } = vars;

const pass = prompt("输入密码");

AccessDenied();
if (pass === "72127387348") {
  AccessСonfirmed();
} else {
  alert("密碼錯誤!");
  AccessDenied();
  top.location.href = "";
}

function AccessDenied() {
  addCustomClass(bodyEl, "active");
}

function AccessСonfirmed() {
  removeCustomClass(bodyEl, "active");
}
