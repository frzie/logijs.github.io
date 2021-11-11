function cek() {
  if (document.frmbuku.nama.value == "") {
    alert("nama harus diisi");
    document.frmbuku.nama.focus();
    return false;
  }
  if (document.frmbuku.email.value == "") {
    alert("email harus diisi");
    document.frmbuku.email.focus();
    return false;
  }
  if (document.frmbuku.Pass.value == "") {
    alert("Password harus diisi");
    document.frmbuku.Pass.focus();
    return false;
  } else {
    return true;
  }
}
