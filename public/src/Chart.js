document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('activityChart');
  const countChart = document.getElementById('countChart');

  const percentage = 82.2; // Valor do progresso
  const remaining = 100 - percentage;

  // Função para animar o contador
  function animateCounter(target, element, duration = 1500) {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));
    const timer = setInterval(() => {
      start += 1;
      element.innerText = `${start}%`;
      if (start >= target) clearInterval(timer);
    }, stepTime);
  }

  // Inicializa gráfico com Chart.js
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [percentage, remaining],
          backgroundColor: ['#c1906d', '#e5e7eb'],
          borderWidth: 0,
        },
      ],
    },
    options: {
      cutout: '75%',
      plugins: {
        tooltip: { enabled: false },
        legend: { display: false },
      },
      animation: {
        animateRotate: true,
        onComplete: () => {
          // dispara a animação do contador quando o gráfico completa
          animateCounter(Math.floor(percentage), countChart);
        },
      },
    },
  });
});
