// Animações de Entrada. (ScrollReveal)
window.sr = ScrollReveal({reset: true});

sr.reveal("header", {duration: 1500});
sr.reveal(".container-section1", {distance: "300px", origin: "left", duration: 1500});
sr.reveal(".text-container-section2", {duration: 1500});
sr.reveal(".img-container-section2", {duration: 1500});
sr.reveal(".section-2-5", {duration: 1500});
sr.reveal(".principal-text-section3", {duration: 1500});
sr.reveal(".img-container-section3", {distance: "100px", origin: "bottom", duration: 1500});
sr.reveal(".text-container-section3", {distance: "300px", origin: "left", duration: 1500});
sr.reveal(".text2-container-section3", {distance: "300px", origin: "right", duration: 1500});
sr.reveal(".principal-text-section4", {duration: 1500});
sr.reveal(".card", {distance: "300px", origin: "bottom", duration: 1500});
sr.reveal(".form-container", {duration: 1500});

// Armazena os links do menu de navegação
const navigationLinks = document.querySelectorAll(".item-menu");

// Armazena as seções correspondentes a cada link do menu de navegação
const sections = document.querySelectorAll('.section-1, .section-2, .section-3, .section-4');


// Adiciona o evento de rolagem na janela
window.addEventListener('scroll', function() {
  // Percorre todas as seções
  for (let i = 0; i < sections.length; i++) {
    // Obtém a posição da seção atual em relação à tela
    const sectionRect = sections[i].getBoundingClientRect();
    
    // Verifica se a seção atual está visível na tela (com uma margem de 200 pixels)
    if (sectionRect.top <= 200 && sectionRect.bottom >= 200) {
      // Adiciona a classe "active" ao link correspondente da seção atual
      navigationLinks[i].classList.add('active');
    } else {
      // Remove a classe "active" dos links não correspondentes à seção atual
      navigationLinks[i].classList.remove('active');
    }
  }
});

// Armazena o formulário
const form = document.getElementById("form");
  // Adiciona o evento de submit no formulário
  form.addEventListener("submit", function (event) {
    // Remove o evento padrão de recarregamento da página
    event.preventDefault();
    verifyForm()
    resetForm()

  });

  // Verifica se os inputs estão preenchidos
  function verifyForm() {
    const form = document.getElementById("form");
    const field1 = document.getElementById("name");
    const field2 = document.getElementById("email");
    const field3 = document.getElementById("message");

    if (field1.value && field2.value && field3.value) {
      field1.classList.add("verified");
      field2.classList.add("verified");
      field3.classList.add("verified");
    } else {
      field1.classList.remove("verified");
      field2.classList.remove("verified");
      field3.classList.remove("verified");
    }
  }

  // Reseta os campos do formulário após 2 segundos que ele é enviado
  function resetForm() {
    const field1 = document.getElementById("name");
    const field2 = document.getElementById("email");
    const field3 = document.getElementById("message");
    setTimeout (function () {
        form.reset()
        field1.classList.remove("verified");
        field2.classList.remove("verified");
        field3.classList.remove("verified");

    }, 2000);
  }