/* Get Data From Sample API */
const getJobsData = fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    return data;
  })
  .catch((error) => console.log(error));

const getJobs = async () => {
  const jobs = await getJobsData;
  displayJobs(jobs);
};

getJobs();

/* Display Jobs */

const displayJobs = function (jobs) {
  jobs.map(({ company, contract, logo, featured, languages, level, location, new: latest, position, postedAt, role, tools } = job) => {
    // console.log(logo);
    const jobListEl = document.createElement("article");
    jobListEl.classList.add("job");
    jobListEl.innerHTML = `
     
        <div class="job-wrapper">
          <div class="job-container-left">
            <img class="company-logo" src="${logo}" alt="photosnap" />
            <div class="job-container">
              <div class="job-header">
                <p class="company-name">${company}</p>
                <div class="job-category">
             
                </div>
              </div>
              <p class="job-title">${position}</p>
              <ul class="job-details">
                <li class="posted-date">${postedAt}</li>
                <li class="job-type">${contract}</li>
                <li class="job-working-type">${location}</li>
              </ul>
            </div>
          </div>
          <div class="line-separator"></div>
          <div class="job-filter-skills">
          <button class="job-skills" data-filter="${role}">${role}</button>       
          <button class="job-skills" data-filter="${level}">${level}</button>       
          </div>
        </div>
    
    `;

    document.querySelector(".job-list").appendChild(jobListEl);

    if (latest) {
      const spanEl = document.createElement("span");
      spanEl.classList.add("featured-tags", "new-tag");
      spanEl.innerText = "new";
      jobListEl.querySelector(".job-category").appendChild(spanEl);
    }

    if (featured) {
      const spanEl = document.createElement("span");
      spanEl.classList.add("featured-tags", "new-tag");
      spanEl.innerText = "featured";
      jobListEl.querySelector(".job-category").appendChild(spanEl);
      jobListEl.querySelector(".job-wrapper").classList.add("featured");
    }

    for (l of languages) {
      const jobSkillsEl = document.createElement("button");
      jobSkillsEl.classList.add("job-skills");
      jobSkillsEl.textContent = l;
      jobSkillsEl.dataset.filter = l;
      jobListEl.querySelector(".job-filter-skills").appendChild(jobSkillsEl);
    }

    for (t of tools) {
      const jobSkillsEl = document.createElement("button");
      jobSkillsEl.classList.add("job-skills");
      jobSkillsEl.textContent = t;
      jobSkillsEl.dataset.filter = t;
      jobListEl.querySelector(".job-filter-skills").appendChild(jobSkillsEl);
    }
  });

  filterTag();
};

/* Filter */
let tagArr = [];
const filterTag = function () {
  const tags = document.querySelectorAll("[data-filter]");
  tags.forEach((tag) => {
    tag.addEventListener("click", () => {
      filterDisplay(tag.innerText);
      removeFilter();
    });
  });
};

// let tagArr = new Set();
const filterDisplay = function (tagName) {
  const filterEl = document.querySelector(".filter");
  filterEl.classList.add("active");

  const filterTag = document.createElement("div");
  filterTag.classList.add("filter-tags");
  filterTag.innerHTML = `
      <span>${tagName}</span>
      <button><img src="./images/icon-remove.svg" alt="icon-remove" /></button>
  `;
  document.querySelector(".filter-wrapper").appendChild(filterTag);

  const tagNameEl = document.querySelectorAll(".filter-tags span");
  const uniqueTags = [];
  tagNameEl.forEach((tag) => {
    if (!uniqueTags.includes(tag.innerText)) {
      uniqueTags.push(tag.innerText);
    } else {
      tag.parentElement.remove();
    }
  });
  updatePageFilter(uniqueTags);
};

const removeFilter = function () {
  const removeTagEl = document.querySelectorAll(".filter-tags button");
  const filterWrapper = document.querySelector(".filter-wrapper");
  removeTagEl.forEach((tag) => {
    tag.addEventListener("click", () => {
      //   console.log(tag.parentElement);
      tag.parentElement.remove();

      const tagNameEl = document.querySelectorAll(".filter-tags span");
      const uniqueTags = [];
      tagNameEl.forEach((tag) => {
        if (!uniqueTags.includes(tag.innerText)) {
          uniqueTags.push(tag.innerText);
        } else {
          tag.parentElement.remove();
        }
      });
      updatePageFilter(uniqueTags);

      if (!filterWrapper.hasChildNodes()) {
        filterWrapper.parentElement.classList.remove("active");
      }
    });
  });

  document.querySelector(".clear").addEventListener("click", () => {
    const filterWrapperEl = document.querySelector(".filter");
    const filterWrapper = document.querySelector(".filter-wrapper");
    filterWrapper.replaceChildren();
    filterWrapperEl.classList.remove("active");
    // document.querySelector(".job-list").style.display = "none";
    updatePageFilter([]);
  });
};

const updatePageFilter = function (tags) {
  //   console.log(tags);
  const jobElements = document.querySelectorAll(".job");
  jobElements.forEach((job) => {
    const buttonFilter = job.querySelectorAll("[data-filter]");

    // const filters = Array.from(buttonFilter).map((button) => button.dataset.filter);
    const filters = [...buttonFilter].map((button) => button.dataset.filter);

    const shouldDisplay = tags.every((e) => {
      return filters.includes(e);
    });

    if (shouldDisplay) {
      job.style.display = "";
    } else {
      job.style.display = "none";
    }

    // const shouldDisplay = tags.every((tag) => {
    //   return filters.includes(tag);
    // });
    // job.style.display = shouldDisplay ? "" : "none";
  });
};
