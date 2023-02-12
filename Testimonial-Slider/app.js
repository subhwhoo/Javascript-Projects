const testimonials = [
  {
    name: "John Doe",
    photoURL:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=2000&q=60",
    text: "I didn't even need training. Keep up the excellent work. Absolutely wonderful!",
  },
  {
    name: "Abc Xyx",
    photoURL:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60",
    text: "Consectetur adipiscing elit, sed do eiusmod tempor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
  },
  {
    name: "Jane Joe",
    photoURL:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
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
