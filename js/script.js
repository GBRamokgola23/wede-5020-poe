// Wait for the page to load before running JS
document.addEventListener("DOMContentLoaded", function() {

  // 1. CONTACT FORM VALIDATION - For AboutUs.html
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

  // 2. IMAGE LIGHTBOX - For GetInvolved.html
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

  // 3. DYNAMIC PDF LIST - For NewsHub.html
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

});