const apiRoute = 'https://challenge-5-yura-nesop89m9-yuralees.vercel.app/';

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
