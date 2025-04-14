const covidDiv = document.getElementById('covid');
const select = document.getElementById('countries');

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1b72de69famshf79f6467176bb1dp1820ddjsnfcfcde6084c9', 
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
  }
};

// Fetch country list and fill dropdown
fetch('https://covid-193.p.rapidapi.com/countries', options)
  .then(response => response.json())
  .then(data => {
    data.response.forEach(country => {
      const opt = document.createElement('option');
      opt.value = country;
      opt.text = country;
      select.appendChild(opt);
    });
  })
  .catch(err => {
    console.error('Error loading countries:', err);
  });

// When a country is selected
function displayCovid() {
  const country = select.value;
  if (!country) return;

  fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`, options)
    .then(res => res.json())
    .then(data => {
      const result = data.response[0];
      covidDiv.innerHTML = `
        <h4>${result.country}</h4>
        <p><strong>Total Cases:</strong> ${result.cases.total?.toLocaleString() || 'N/A'}</p>
        <p><strong>Deaths:</strong> ${result.deaths.total?.toLocaleString() || 'N/A'}</p>
      `;
    })
    .catch(err => {
      console.error(err);
      covidDiv.innerHTML = `<p class="text-danger">Error loading data.</p>`;
    });
}
