// 1. ANIMACIÓN AL HACER SCROLL
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active-scroll');
        }
    });
});

const hiddenElements = document.querySelectorAll('.reveal');
hiddenElements.forEach((el) => observer.observe(el));


// 2. FUNCIÓN PARA LAS PESTAÑAS (TABS)
function openTab(evt, tabName) {
    // 1. Identificar en qué proyecto estamos (para no cerrar las pestañas del otro proyecto)
    let projectContainer = evt.currentTarget.closest('.project-details');
    
    // 2. Ocultar todos los contenidos de ESTE proyecto
    var i, tabcontent, tablinks;
    tabcontent = projectContainer.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; 
        // Nota: Quitamos la clase active-tab para asegurar que el CSS funcione
        tabcontent[i].classList.remove("active-tab");
    }

    // 3. Desactivar los botones de ESTE proyecto
    tablinks = projectContainer.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // 4. Mostrar el contenido seleccionado
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active-tab");
    evt.currentTarget.className += " active";
}
// 3. SIMULACIÓN DE ENVÍO DE FORMULARIO
const contactForm = document.querySelector('.contact-form');
const submitBtn = contactForm.querySelector('button');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue (vital para SPAs)
    
    // 1. Efecto de "Cargando..."
    const originalText = submitBtn.innerText;
    submitBtn.innerText = 'Enviant...';
    submitBtn.style.opacity = '0.7';
    
    // 2. Simular espera de 1.5 segundos (como si viajara al servidor)
    setTimeout(() => {
        // 3. Cambio a estado de ÈXITO
        submitBtn.innerText = 'Missatge Enviat! ✅';
        submitBtn.classList.add('btn-success'); // Añadimos la clase verde del CSS
        
        // 4. Limpiar el formulario
        contactForm.reset();

        // 5. Volver al estado original después de 3 segundos
        setTimeout(() => {
            submitBtn.innerText = originalText;
            submitBtn.classList.remove('btn-success');
            submitBtn.style.opacity = '1';
        }, 3000);
        
    }, 1500);
});