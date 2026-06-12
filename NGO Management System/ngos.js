 function openLoginModal() {
     document.getElementById("loginModal").style.display = "flex";
 }

 function closeLoginModal() {
     document.getElementById("loginModal").style.display = "none";
 }

 function openSignupModal() {
     document.getElementById("signupModal").style.display = "flex";
 }

 function closeSignupModal() {
     document.getElementById("signupModal").style.display = "none";
 }

 window.onclick = function(event) {
     let loginModal = document.getElementById("loginModal");
     let signupModal = document.getElementById("signupModal");

     if (event.target === loginModal) {
         loginModal.style.display = "none";
     }

     if (event.target === signupModal) {
         signupModal.style.display = "none";
     }
 };