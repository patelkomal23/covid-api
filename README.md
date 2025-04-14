# covid-api
The site https://covid-api-rho.vercel.app/ is a frontend app that fetches COVID-19 data, likely from an external API. However, it does not provide its own documentation or public API directly on the site.

Based on the interface, here's what the app does:
Lets users select a country.

Displays:

Confirmed cases

Deaths

Last updated time

How to Figure Out the API Source
To understand the API being used behind the scenes, we can inspect the network requests made by the site:

The frontend likely makes a GET request to a COVID-19 data API (possibly a public one like covid19api.com).

The API returns stats based on the selected country.
