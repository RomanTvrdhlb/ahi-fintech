const pass = prompt('输入密码');

if (pass==='72127387348');
else { 
    alert('密碼錯誤!'); 
    AccessDenied();
    top.location.href="";
}

function AccessDenied() {
    document.body.innerHTML = '訪問被拒絕!';
    document.body.style.cssText = `
     opacity: 0;
    `;
  }