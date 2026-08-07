// Welcome Message
window.onload = function () {
  console.log("Welcome to Ali Khan's Portfolio!");
};

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Scroll to Top Button
const topButton = document.createElement("button");
topButton.innerHTML = "⬆ Top";
topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "10px 15px";
topButton.style.background = "#0a66c2";
topButton.style.color = "#fff";
topButton.style.border = "none";
topButton.style.borderRadius = "8px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Fade-in Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "all 0.6s ease";
  observer.observe(section);
});

// Typing Effect
const heading = document.querySelector("h1");

if (heading) {
  const text = heading.innerText;
  heading.innerText = "";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      heading.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();
}

// Highlight Navigation on Scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (nav) {
    if (window.scrollY > 50) {
      nav.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
    } else {
      nav.style.boxShadow = "none";
    }
  }
});

// Current Year in Footer
const footer = document.querySelector("footer p");

if (footer) {
  footer.innerHTML = `© ${new Date().getFullYear()} Ali Khan | All Rights Reserved`;
}

// Project Card Hover Effect
const projects = document.querySelectorAll(".project");

projects.forEach(project => {
  project.addEventListener("mouseenter", () => {
    project.style.transform = "translateY(-8px)";
    project.style.transition = "0.3s";
  });

  project.addEventListener("mouseleave", () => {
    project.style.transform = "translateY(0)";
  });
});

// Contact Button Click
const contactLinks = document.querySelectorAll("#contact-links a");

contactLinks.forEach(link => {
  link.addEventListener("click", () => {
    console.log("Opening: " + link.href);
  });
});

// Welcome Alert (Only Once)
if (!sessionStorage.getItem("welcomeShown")) {
  alert("Welcome to Ali Khan's Portfolio Website!");
  sessionStorage.setItem("welcomeShown", "true");
}
