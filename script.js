// =========================================
// 1. ANIMACIÓN AL HACER SCROLL (Intersection Observer)
// =========================================
const observerOptions = {
    threshold: 0.1, // Se activa cuando el 10% del elemento es visible
    rootMargin: "0px 0px -50px 0px" // Margen para que la animación se sienta natural
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Añadimos la clase que dispara el CSS
            entry.target.classList.add('active-scroll');
            // Opcional: dejamos de observar para ahorrar recursos
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Seleccionamos todos los elementos con la clase 'reveal' y los ponemos a observar
const hiddenElements = document.querySelectorAll('.reveal');
hiddenElements.forEach((el) => observer.observe(el));


// =========================================
// 2. FUNCIÓN PARA LAS PESTAÑAS (TABS)
// =========================================
function openTab(evt, tabName) {
    // 1. Identificar en qué proyecto estamos (fundamental para no cerrar pestañas ajenas)
    let projectContainer = evt.currentTarget.closest('.project-details');
    
    // 2. Ocultar todos los contenidos de ESTE proyecto específico
    let i, tabcontent, tablinks;
    tabcontent = projectContainer.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; 
        tabcontent[i].classList.remove("active-tab");
    }

    // 3. Desactivar solo los botones de ESTE proyecto
    tablinks = projectContainer.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // 4. Mostrar el contenido seleccionado y activar el botón
    const activeTab = document.getElementById(tabName);
    activeTab.style.display = "block";
    activeTab.classList.add("active-tab");
    evt.currentTarget.classList.add("active");
}


// =========================================
// 3. SIMULACIÓN DE ENVÍO DE FORMULARIO
// =========================================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    const submitBtn = contactForm.querySelector('button');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        // Efecto visual de carga
        const originalText = submitBtn.innerText;
        submitBtn.innerText = 'Enviant...';
        submitBtn.style.opacity = '0.7';
        submitBtn.disabled = true; // Evita múltiples clics
        
        // Simulación de respuesta del servidor (1.5s)
        setTimeout(() => {
            submitBtn.innerText = 'Missatge Enviat! ✅';
            submitBtn.classList.add('btn-success'); 
            
            contactForm.reset(); // Limpia los campos

            // Restaurar botón tras 3 segundos
            setTimeout(() => {
                submitBtn.innerText = originalText;
                submitBtn.classList.remove('btn-success');
                submitBtn.style.opacity = '1';
                submitBtn.disabled = false;
            }, 3000);
            
        }, 1500);
    });
}