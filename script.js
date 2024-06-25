


var Toastify = require('toastify-js')

var butao = document.querySelector('button');
butao.addEventListener('click', alerta);

function alerta() {

Toastify({
    text: "Minha notificação de teste 🏆🏆!",
    duration: 3000,
    close: true,
    gravity: "top", 
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();

  
  
}