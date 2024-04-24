const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("search-button").addEventListener("click", function() {
      searchPets();
  });
});


document.addEventListener("DOMContentLoaded", function() {
  // This code will run after the DOM is fully loaded
  var searchButton = document.getElementById("search-button");
  if (searchButton) {
      searchButton.addEventListener("click", function() {
          searchPets();
      });
  } else {
      console.error("Search button not found");
  }
});

function searchPets() {
  var input = document.getElementById("search-input").value.toLowerCase();
  var pets = document.getElementsByClassName("pet");

  for (var i = 0; i < pets.length; i++) {
      var petName = pets[i].querySelector("h2").textContent.toLowerCase();
      if (petName.includes(input)) {
          pets[i].style.display = "";
      } else {
          pets[i].style.display = "none";
      }
  }
}


