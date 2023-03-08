const apiRoute = 'http://localhost:3000/api/getuser';

fetch('/api/getuser')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    document.getElementById('name').textContent = data.name;
    document.getElementById('job-title').textContent = data.jobTitle;
    document.getElementById('interesting-fact').textContent =
      data.interestingFact;
    document.getElementById('cta').textContent = data.cta;
  });
