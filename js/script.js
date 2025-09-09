document.addEventListener("DOMContentLoaded", () => {
    const countdownElement = document.getElementById('countdown');
    const timerKey = "discountTimer";
    const defaultMinutes = 5;

    function formatTime(seconds) {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    }

    let remainingTime = parseInt(localStorage.getItem(timerKey)) || defaultMinutes * 60;
    countdownElement.textContent = formatTime(remainingTime);

    const timerInterval = setInterval(() => {
        remainingTime--;
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            countdownElement.textContent = "00:00";
            localStorage.removeItem(timerKey);
            return;
        }
        countdownElement.textContent = formatTime(remainingTime);
        localStorage.setItem(timerKey, remainingTime);
    }, 1000);
});


// ===== MODAL =====
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close");

const modalContent = {
    terms: {
        title: "Termos de Uso",
        text: "Ao utilizar este site, você concorda em respeitar todas as regras estabelecidas. O conteúdo é apenas para uso pessoal e não pode ser redistribuído sem autorização. Reservamo-nos o direito de atualizar ou alterar estes termos a qualquer momento."
    },
    privacy: {
        title: "Política de Privacidade",
        text: "Seus dados pessoais são tratados com total confidencialidade. Coletamos apenas informações essenciais para melhorar sua experiência e nunca compartilhamos com terceiros sem sua autorização."
    },
    contact: {
        title: "Contato",
        text: "📧 Email: pedrodev.design@gmail.com\n📱 WhatsApp: (62) 9 9114-6866\nEntre em contato conosco para dúvidas, suporte ou parcerias."
    }
};

document.querySelectorAll("footer nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const type = link.getAttribute("data-modal");
        modalTitle.textContent = modalContent[type].title;
        modalText.textContent = modalContent[type].text;
        modal.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
    


// ==================== CONFIGURAÇÕES BÁSICAS ====================
gsap.registerPlugin(ScrollTrigger);

// Função helper para animação com fade + movimento
function revealAnimation(targets, options = {}) {
  gsap.from(targets, {
    opacity: 0,
    y: 80,
    duration: 1.2,
    ease: "power4.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: targets,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    ...options,
  });
}

// ==================== HERO ====================
const heroTimeline = gsap.timeline();

heroTimeline
  .from(".hero .sub-title", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out",
  })
  .from(".hero .title", {
    opacity: 0,
    y: 60,
    duration: 1.2,
    ease: "power4.out",
  }, "-=0.6")
  .from(".hero .description", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out",
  }, "-=0.6")
  .from(".hero .buttons", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
  }, "-=0.6");

// Parallax no título hero
gsap.to(".hero .title", {
  yPercent: -20,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

// ==================== ABOUT ====================
revealAnimation(".about .section-title");
revealAnimation(".about .about-description", { delay: 0.3 });
revealAnimation(".about-card");

// ==================== BENEFITS ====================
revealAnimation(".benefits .section-title");
revealAnimation(".benefits .card");

// ==================== OFFER ====================
gsap.from(".offer-card", {
  opacity: 0,
  scale: 0.85,
  y: 60,
  duration: 1.2,
  ease: "elastic.out(1, 0.7)",
  scrollTrigger: {
    trigger: ".offer-card",
    start: "top 80%",
  },
});

// ==================== TESTIMONIALS ====================
revealAnimation(".testimonials .section-title");
gsap.from(".testimonial-card", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".testimonials",
    start: "top 85%",
  },
});

// ==================== FINAL CTA ====================
gsap.from(".final-cta h2", {
  opacity: 0,
  y: 60,
  duration: 1.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".final-cta",
    start: "top 85%",
  },
});
gsap.from(".final-cta .btn", {
  opacity: 0,
  scale: 0.7,
  duration: 1,
  delay: 0.3,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".final-cta",
    start: "top 85%",
  },
});

// ==================== FOOTER ====================
gsap.from(".footer nav a", {
  opacity: 0,
  y: 20,
  stagger: 0.1,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".footer",
    start: "top 95%",
  },
});
