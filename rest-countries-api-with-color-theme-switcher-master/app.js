const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

const btnTheme = document.querySelector(".btn-theme");
const searchInput = document.getElementById("search-input");

class RESTCountries {
  constructor() {
    this.filterValueSelected = "";
  }

  customFilter() {
    selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));
    options.forEach((option) => {
      option.addEventListener("click", () => {
        let selectedOption = option.querySelector("span").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
        this.filterValueSelected = selectedOption.toLowerCase();
        this.searchCountryHelper(searchInput.value, this.filterValueSelected);
      });
    });

    document.addEventListener("click", function (e) {
      const isClickInsideDiv = optionMenu.contains(e.target);

      if (optionMenu.classList.contains("active") && !isClickInsideDiv) {
        // Mouse click occurred outside of the div
        optionMenu.classList.remove("active");
      }
    });
  }

  userTheme() {
    btnTheme.addEventListener("click", () => {
      document.querySelector("header").classList.toggle("dark");
      document.querySelector("h1").classList.toggle("dark");
      document.querySelector(".btn-theme").classList.toggle("dark");
      document.querySelector("body").classList.toggle("dark");
      document.querySelector(".search i").classList.toggle("dark");
      document.querySelector("#search-input").classList.toggle("dark");
      document.querySelector(".select-menu .select-btn").classList.toggle("dark");
      document.querySelector(".options").classList.toggle("dark");
      document.querySelectorAll(".option").forEach((e) => {
        e.classList.toggle("dark");
      });
      document.querySelectorAll(".country").forEach((e) => {
        e.classList.toggle("dark");
      });
      document.querySelector(".btn-back").classList.toggle("dark");
      document.querySelectorAll(".btn-border").forEach((e) => {
        e.classList.toggle("dark");
      });

      const countryDesc = document.querySelector(".country-details-description");

      if (countryDesc) {
        countryDesc.classList.toggle("dark");
      }
    });
  }

  async getCountryData() {
    try {
      const res = await fetch("./data.json");
      const data = await res.json();
      //   console.log(data[0]);
      this.renderCountry(data);
      this.countryDetails(data);
    } catch (err) {
      console.error(err);
    }
  }

  renderCountry(data) {
    data.map((country) => {
      //   console.log(country);
      const countryEl = document.createElement("div");
      countryEl.classList.add("country");

      countryEl.innerHTML = `
    <div class="country-img-wrapper">
        <img class="country-pic" src= "${country.flag}" alt="${country.name} flag image" />
        <img class= "country-img" src= "${country.flag}" alt="${country.name} flag image" />
        </div>
        <h3>${country.name}</h3>

        <div class="country-description">
          <div class="population">
            <span>Population:</span>
            <span>${country.population.toLocaleString()}</span>
          </div>
          <div class="region">
            <span>Region:</span>
            <span>${country.region}</span>
          </div>
          <div class="capital">
            <span>Capital:</span>
            <span>${country.capital ?? "No capital"}</span>
          </div>
        </div>
      `;

      document.querySelector(".country-list").appendChild(countryEl);

      // const imgCountry = document.querySelectorAll(".country-img");
      // imgCountry.forEach((e) => {
      //   e.style.backgroundImage = `url(${country.flag})`;
      // });
    });

    this.searchCountry();
  }

  searchCountryHelper(searchValue, filterValue) {
    //searchValue = e.target.value.toLowerCase(); // Convert the search value to lowercase for case-insensitive matching

    // console.log(filterValue);

    const countryEl = document.querySelectorAll(".country");
    countryEl.forEach((country) => {
      const countryName = country.querySelectorAll("h3");
      const regionName = country.querySelectorAll(".country-description .region span:last-child");

      let matchFound = false;
      countryName.forEach((cname, i) => {
        const name = cname.innerText.toLowerCase(); // Convert the country name to lowercase for case-insensitive matching

        // Use regular expression with wildcard matching (.*)
        const regex = new RegExp(searchValue.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&").replace(/\*/g, ".*"));

        // console.log(regionName[i].innerText.toLowerCase() === filterValue);

        if (filterValue) {
          if (regex.test(name) && regionName[i].innerText.toLowerCase() === filterValue) {
            matchFound = true;
            return;
          }
        } else {
          if (regex.test(name)) {
            matchFound = true;
            return;
          }
        }
      });

      if (matchFound) {
        country.style.display = "";
      } else {
        country.style.display = "none";
      }
    });
  }

  searchCountry() {
    searchInput.addEventListener("input", (e) => {
      const searchValue = e.target.value.toLowerCase();
      this.searchCountryHelper(searchValue, this.filterValueSelected);
    });
  }

  countryDetails(data) {
    const countries = document.querySelectorAll(".country-pic");
    countries.forEach((country) => {
      country.addEventListener("click", () => {
        const countryModal = document.querySelector(".country-modal");
        countryModal.classList.add("active");

        const countryDetails = document.querySelector(".country-details");
        // console.log(countryDetails);

        // if (countryModal.contains()) {
        //   console.log("Hello");
        // }
        document.querySelector(".filter-search-container").classList.add("active");
        document.querySelectorAll(".country").forEach((c) => {
          c.classList.add("active");
        });

        const countryName = country.parentElement.parentElement.querySelector("h3").innerText;
        // console.log(countryName);
        // this.renderCountryDetails(data, countryName);

        if (!countryDetails) {
          this.renderCountryDetails(data, countryName);
        } else {
          countryDetails.remove();
          // countryDetails.style.display = "none";
          this.renderCountryDetails(data, countryName);
        }

        // // Render based on border country
        // const borderCountry = document.querySelectorAll(".btn-border");
        // borderCountry.forEach((border) =>
        //   border.addEventListener("click", () => {
        //     const result = data.filter((c) => c.alpha3Code === border.innerText);
        //     // console.log(result[0].name);
        //     border.closest(".country-details").remove();
        //     this.renderCountryDetails(data, result[0].name);
        //   })
        // );

        const backBtn = document.querySelector(".btn-back");
        backBtn.addEventListener("click", () => {
          countryModal.classList.remove("active");
          document.querySelector(".filter-search-container").classList.remove("active");
          document.querySelectorAll(".country").forEach((c) => {
            c.classList.remove("active");
            // c.style.display = "none";
          });
        });
      });
    });
  }

  renderCountryDetails(data, countryName) {
    const result = data.filter((c) => c.name === countryName);
    // console.log(result[0]);

    const articleEl = document.createElement("article");
    articleEl.classList.add("country-details");
    articleEl.innerHTML = `
      <div class="country-details-wrapper">
        <img src="${result[0].flag}" alt="" />
        <div class="country-details-description">
          <h2>${result[0].name}</h2>
          <div class="country-description-lists">
            <ul class="left-details">
              <li><span>Native Name:</span> <span>${result[0].nativeName}</span></li>
              <li><span>Population: </span><span>${result[0].population.toLocaleString()}</span></li>
              <li><span>Region:</span> <span>${result[0].region}</span></li>
              <li><span>Sub Region:</span> <span>${result[0].subregion}</span></li>
              <li><span>Capital:</span> <span>${result[0].capital ?? "N/A"}</span></li>
            </ul>

            <ul class="right-details">
              <li><span>Top Level Domain:</span> <span>${result[0].topLevelDomain}</span></li>
              <li><span>Currencies:</span> <span>${result[0].currencies && result[0].currencies.length > 0 ? result[0].currencies[0].name : "N/A"}</span></li>
              <li><span>Languages:</span> ${result[0].languages.map((l) => `<span>${l.name}</span>`).join(", ")}</li>
            </ul>
          </div>
          <div class="border">
            <h4>Border Countries:</h4>
            <ul class="border-country">
            ${result[0].borders && result[0].borders.length > 0 ? result[0].borders.map((border) => `<li><button class="btn btn-border">${border}</button></li>`).join("") : "<li>No border countries</li>"}
              
            </ul>
          </div>
        </div>
      </div>
    `;
    document.querySelector(".country-modal").appendChild(articleEl);

    if (btnTheme.classList.contains("dark")) {
      document.querySelectorAll(".btn-border").forEach((e) => {
        e.classList.toggle("dark");
      });
      document.querySelector(".country-details-description").classList.toggle("dark");
    }

    // Render based on border country
    const borderCountry = document.querySelectorAll(".btn-border");
    borderCountry.forEach((border) =>
      border.addEventListener("click", () => {
        const result = data.filter((c) => c.alpha3Code === border.innerText);
        // console.log(result[0].name);
        border.closest(".country-details").remove();
        this.renderCountryDetails(data, result[0].name);
      })
    );
  }

  init() {
    this.getCountryData();
    this.customFilter();
    this.userTheme();
  }
}

const restCountries = new RESTCountries();
restCountries.init();
