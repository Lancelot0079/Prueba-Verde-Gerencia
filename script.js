// Interacciones para el sistema de votación USTA
const themeBtn = document.getElementById('themeBtn');
const statusMsg = document.getElementById('statusMsg');
const votingForm = document.getElementById('votingForm');
const yearSpan = document.getElementById('year');

// Establecer el año actual en el footer
yearSpan.textContent = new Date().getFullYear();

// Alternar tema claro/oscuro
themeBtn?.addEventListener('click', () => {
  if (document.body.classList.contains('light-mode')) {
    // Cambiar a modo oscuro
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    document.body.classList.add('dark');
    themeBtn.textContent = 'Cambiar a claro';
    themeBtn.classList.remove('bg-usta-azul-claro');
    themeBtn.classList.add('bg-usta-dorado', 'text-usta-azul-oscuro');
  } else {
    // Cambiar a modo claro
    document.body.classList.remove('dark-mode', 'dark');
    document.body.classList.add('light-mode');
    themeBtn.textContent = 'Cambiar a oscuro';
    themeBtn.classList.remove('bg-usta-dorado', 'text-usta-azul-oscuro');
    themeBtn.classList.add('bg-usta-azul-claro', 'text-white');
  }
});

// Formulario de votación (solo front, sin backend)
votingForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(votingForm).entries());
  
  // Validar correo institucional
  if (!data.email.endsWith('@ustabuca.edu.co')) {
    statusMsg.textContent = 'Debes usar tu correo institucional (@ustabuca.edu.co)';
    statusMsg.className = 'mt-4 text-sm p-3 rounded-lg bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200';
    statusMsg.classList.remove('hidden');
    return;
  }
  
  // Validar que se haya seleccionado un candidato
  if (!data.representante) {
    statusMsg.textContent = 'Debes seleccionar un representante estudiantil';
    statusMsg.className = 'mt-4 text-sm p-3 rounded-lg bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200';
    statusMsg.classList.remove('hidden');
    return;
  }
  
  // Validar que se haya votado en el reglamento
  if (!data.reglamento) {
    statusMsg.textContent = 'Debes votar en la aprobación del reglamento estudiantil';
    statusMsg.className = 'mt-4 text-sm p-3 rounded-lg bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200';
    statusMsg.classList.remove('hidden');
    return;
  }
  
  // Simular envío exitoso
  statusMsg.textContent = `¡Gracias por votar! Tu participación ha sido registrada correctamente.`;
  statusMsg.className = 'mt-4 text-sm p-3 rounded-lg bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200';
  statusMsg.classList.remove('hidden');
  
  // Reiniciar formulario
  votingForm.reset();
  
  // Scroll a resultados después de 1.5 segundos
  setTimeout(() => {
    document.getElementById('resultados').scrollIntoView({ behavior: 'smooth' });
  }, 1500);
});

// Mejorar la experiencia de usuario en los inputs
document.querySelectorAll('input, select').forEach(element => {
  // Efecto de focus
  element.addEventListener('focus', (e) => {
    e.target.classList.add('ring-2', 'ring-usta-azul-claro');
  });
  
  element.addEventListener('blur', (e) => {
    e.target.classList.remove('ring-2', 'ring-usta-azul-claro');
  });
});