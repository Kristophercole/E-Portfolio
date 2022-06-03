let isModalOpen = false;
let contrastToggle = false;
let contrastRotate = false;
const contrastSymbol = document.querySelector(".fa-circle-half-stroke");
const scaleFactor = 1 / 20;

function rotate() {
  if (contrastRotate) {
    contrastRotate = false;
    contrastSymbol.classList.remove("rotate-switch");
    return (contrastSymbol.classList += " rotate-switch--back");
  }
  contrastRotate = true;
  contrastSymbol.classList.remove("rotate-switch--back");
  contrastSymbol.classList += " rotate-switch";
}

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const booleanInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * booleanInt}px, ${
      y * booleanInt
    }px)`;
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_eh0w0gs",
      "template_m8z5pd9",
      event.target,
      "6jnBHp2HpYfP_jJdn"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on kristopher.cole52@gmail.com"
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}
