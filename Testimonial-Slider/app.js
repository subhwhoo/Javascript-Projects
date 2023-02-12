const testimonials = [
  {
    name: "John Doe",
    photoURL:
      "https//images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60",
    text: "I didn't even need training. Keep up the excellent work. Absolutely wonderful!",
  },
  {
    name: "John Doe",
    photoURL:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60",
    text: "2nd Text",
  },
  {
    name: "John Doe2",
    photoURL:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60",
    text: "3rd Text",
  },
];
const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let INDEX = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoURL, text } = testimonials[INDEX];
  imgEl.src = photoURL;
  textEl.innerText = text;
  usernameEl.innerText = name;
  INDEX++;
  if (INDEX > testimonials.length - 1) {
    INDEX = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 5000);
}
