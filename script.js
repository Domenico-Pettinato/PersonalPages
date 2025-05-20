// Attendi che il DOM sia completamente caricato
document.addEventListener('DOMContentLoaded', function() {
  // Animazione per i titoli delle sezioni
  const sectionTitles = document.querySelectorAll('.section-title');

  // Funzione per controllare se un elemento è nel viewport
  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
          rect.bottom >= 0
      );
  }

  // Funzione per animare gli elementi quando sono visibili
  function animateOnScroll() {
      // Anima i titoli delle sezioni
      sectionTitles.forEach(title => {
          if (isInViewport(title)) {
              title.classList.add('animate');
          }
      });

      // Anima le sezioni
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
          if (isInViewport(section)) {
              section.classList.add('visible');
          }
      });

      // Anima le card dei progetti
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach((card, index) => {
          if (isInViewport(card)) {
              setTimeout(() => {
                  card.style.opacity = '1';
                  card.style.transform = 'translateY(0)';
              }, index * 100);
          }
      });
  }

  // Inizializza le card dei progetti con opacità 0
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  // Esegui l'animazione al caricamento e allo scroll
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);

  // Gestione del form di contatto
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();

          // Ottieni i valori dei campi
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;

          // Qui puoi aggiungere il codice per inviare i dati a un server
          // Per ora, mostriamo solo un alert
          alert(`Grazie ${name}! Il tuo messaggio è stato inviato.\nTi risponderemo presto all'indirizzo ${email}.`);

          // Reset del form
          contactForm.reset();
      });
  }

  // Effetto parallasse per l'header
  const header = document.querySelector('header');
  window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      if (header) {
          header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
      }
  });

  // Animazione per la sezione "Under Construction"
  const constructionSection = document.querySelector('.under-construction');
  if (constructionSection) {
      // Aggiungi un effetto di luce che si muove
      const lightEffect = document.createElement('div');
      lightEffect.style.position = 'absolute';
      lightEffect.style.width = '150%';
      lightEffect.style.height = '50px';
      lightEffect.style.background = 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)';
      lightEffect.style.top = '0';
      lightEffect.style.left = '-100%';
      lightEffect.style.transform = 'rotate(45deg)';
      lightEffect.style.animation = 'lightMove 3s infinite linear';
      constructionSection.appendChild(lightEffect);

      // Aggiungi l'animazione CSS
      const style = document.createElement('style');
      style.textContent = `
          @keyframes lightMove {
              0% { left: -100%; }
              100% { left: 100%; }
          }
      `;
      document.head.appendChild(style);
  }

  // Effetto hover avanzato per le card dei progetti
  projectCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.style.backgroundColor = 'rgba(15, 23, 42, 0.9)';
      });

      card.addEventListener('mouseleave', function() {
          this.style.backgroundColor = 'rgba(15, 23, 42, 0.6)';
      });

      // Aggiungi effetto click
      card.addEventListener('click', function() {
          // Qui puoi aggiungere un'azione quando l'utente clicca su un progetto
          // Ad esempio, aprire una modale con maggiori dettagli
          const projectTitle = this.querySelector('h3').textContent;
          alert(`Hai selezionato: ${projectTitle}\nMaggiori dettagli saranno disponibili a breve!`);
      });
  });
});
// Funzione per il caricamento della pagina
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});