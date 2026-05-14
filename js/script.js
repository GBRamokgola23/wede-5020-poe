// Wait for page to load
document.addEventListener("DOMContentLoaded", function() {

  // 1. CONTACT FORM VALIDATION - AboutUs.html
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const msgEl = document.getElementById("formMsg");
      
      if (name === "" || email === "" || message === "") {
        msgEl.textContent = "Please fill in all fields.";
        msgEl.style.color = "red";
        return;
      }
      
      if (!email.includes("@")) {
        msgEl.textContent = "Please enter a valid email.";
        msgEl.style.color = "red";
        return;
      }
      
      msgEl.textContent = "Message sent successfully!";
      msgEl.style.color = "green";
      this.reset();
    });
  }

  // 2. IMAGE LIGHTBOX - GetInvolved.html
  const galleryImgs = document.querySelectorAll(".gallery-img");
  galleryImgs.forEach(img => {
    img.addEventListener("click", function() {
      const lightbox = document.getElementById("lightbox");
      const lightboxImg = document.getElementById("lightboxImg");
      if (lightbox && lightboxImg) {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
      }
    });
  });
  
  const closeBtn = document.getElementById("lightboxClose");
  if (closeBtn) {
    closeBtn.addEventListener("click", function() {
      document.getElementById("lightbox").style.display = "none";
    });
  }

  // 3. DYNAMIC PDF LIST - NewsHub.html
  const pdfContainer = document.getElementById("pdfList");
  if (pdfContainer) {
    const pdfs = [
      { title: "Latest News M2M", file: "downloads/Latest News M2M.pdf" },
      { title: "April Event", file: "downloads/April event.pdf" },
      { title: "2025 Impact Report Summary", file: "downloads/2025 Our impact report summary.pdf" },
      { title: "Contact Info Sheet", file: "downloads/contact.info.pdf" }
    ];
    
    pdfs.forEach(pdf => {
      const link = document.createElement("a");
      link.href = pdf.file;
      link.target = "_blank";
      link.className = "pdf-btn";
      link.textContent = "Download " + pdf.title;
      pdfContainer.appendChild(link);
      pdfContainer.appendChild(document.createElement("br"));
    });
  }

  // 4. DARK MODE TOGGLE - All pages
  const body = document.body;
  const darkToggle = document.createElement("button");
  darkToggle.textContent = "🌙";
  darkToggle.id = "darkToggle";
  darkToggle.style.cssText = "position:fixed; top:20px; right:20px; z-index:1000; padding:10px; border-radius:50%; border:none; cursor:pointer; font-size:18px; background:#c2185b; color:white;";
  document.body.appendChild(darkToggle);

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    darkToggle.textContent = "☀️";
  }

  darkToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
    darkToggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });

  // 5. SCROLL REVEAL ANIMATION - All pages
  const revealElements = document.querySelectorAll("section, h1, h2, .content-section, .pdf-section");
  const revealOnScroll = () => {
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  };

  revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
  });

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

});
// 6. LIVE CLOCK & CALENDAR
const clockEl = document.getElementById("liveClock");
const dateEl = document.getElementById("liveDate");
document.addEventListener("DOMContentLoaded", function() {
  const clockEl = document.getElementById("liveClock");
  const dateEl = document.getElementById("liveDate");

  function updateDateTime() {
    const now = new Date();
    
    const time = now.toLocaleTimeString('en-ZA', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: false 
    });
    
    const date = now.toLocaleDateString('en-ZA', { 
      weekday: 'long', 
      day: '2-digit', 
      month: 'long', 
      year: 'numeric' 
    });
    
    if (clockEl) clockEl.textContent = time;
    if (dateEl) dateEl.textContent = date;
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);

}); // end DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!enquiryForm.checkValidity()) { enquiryForm.reportValidity(); return; }
      
      const data = Object.fromEntries(new FormData(enquiryForm).entries());
      const msg = data.type === 'sponsor' 
        ? `Thanks ${data.name}! Sponsorship starts at R500/month.`
        : `Thanks ${data.name}! Next intake is 15 Nov.`;
      
      document.getElementById('formResponse').textContent = msg;
      enquiryForm.reset();
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      if (!contactForm.checkValidity()) { e.preventDefault(); contactForm.reportValidity(); }
    });
  }
});