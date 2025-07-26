/* Charts *
document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('activityChart');

  const datasets = {
    week: {
      labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
      data: [3, 5, 2, 7, 6, 4, 1],
    },
    month: {
      labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
      data: [15, 20, 12, 18],
    },
  };

  const baseConfig = (labels, data) => ({
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Interações',
          data,
          borderWidth: 1,
          borderColor:
            getComputedStyle(document.documentElement).getPropertyValue(
              '--col-02'
            ) || '#4bc0c0',
          backgroundColor:
            getComputedStyle(document.documentElement).getPropertyValue(
              '--bg-02'
            ) || 'rgba(75,192,192,0.2)',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          ticks: { color: getVar('--col-01') },
          grid: { color: getVar('--SpaceLine') },
          beginAtZero: true,
        },
        x: {
          ticks: { color: getVar('--col-01') },
          grid: { color: getVar('--SpaceLine') },
        },
      },
      plugins: {
        legend: {
          labels: { color: getVar('--col-01') },
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        },
      },
    },
  });

  // helper pra pegar vars do :root
  const getVar = (name) =>
    getComputedStyle(document.documentElement).getPropertyValue(name) || '#ccc';

  let chart = new Chart(
    ctx,
    baseConfig(datasets.week.labels, datasets.week.data)
  );

  // Troca de range (semana/mês)
  const rangeSelect = document.getElementById('rangeSelect');
  rangeSelect.addEventListener('change', (e) => {
    const { labels, data } = datasets[e.target.value];
    chart.destroy();
    chart = new Chart(ctx, baseConfig(labels, data));
  });
});
*/
