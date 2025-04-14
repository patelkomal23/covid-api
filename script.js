const url = 'https://covid-193.p.rapidapi.com/statistics';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1b72de69famshf79f6467176bb1dp1820ddjsnfcfcde6084c9',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
  }
};

fetch(url, options)
  .then(response => response.json())
  .then(data => {
    console.log(data); // See full response
    if (data.response && data.response.length > 0) {
      // Initialize totals
      let totalConfirmed = 0;
      let totalDeaths = 0;
      let totalRecovered = 0;

      // Loop through each entry and add up the values
      data.response.forEach(stats => {
        totalConfirmed += stats.cases.total || 0;
        totalDeaths += stats.deaths.total || 0;
        totalRecovered += stats.cases.recovered || 0;
      });

      document.getElementById('totalConfirmed').textContent = totalConfirmed.toLocaleString();
      document.getElementById('totalDeaths').textContent = totalDeaths.toLocaleString();
      document.getElementById('totalRecovered').textContent = totalRecovered.toLocaleString();
    } else {
      console.error("No data available.");
    }
  })
  .catch(err => {
    console.error("Error fetching data:", err);
  });
