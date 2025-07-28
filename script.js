const flagImage = document.querySelector('.flag-image');
const fetchButton = document.querySelector('.fetch-button');
const countryName = document.querySelector('.country-name');
const capital = document.querySelector('.capital');
const population = document.querySelector('.population');
const inputValue = document.querySelector('.inputBox');

fetchButton.addEventListener('click', async () => {
    try {
        const inputHandler = inputValue.value.trim();
        const response = await fetch(`https://restcountries.com/v3.1/name/${inputHandler}`);
        const data = await response.json();
        const country = data[0];
        countryName.innerHTML = `Country name: ${country.name.common}`;
        capital.innerHTML = `Capital name: ${country.capital[0]}`;
        population.innerHTML = `Population: ${country.population.toLocaleString()}`;
        flagImage.src = country.flags.png;

        inputValue.value = '';
    } catch (error) {
        countryName.innerHTML = error;
        console.log(error);
    }
});
