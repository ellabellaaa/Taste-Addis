window.onload = function() {
  
  const form = document.querySelector("form");

  
  form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    alert("Thank you for your suggestion!");
  });
};
