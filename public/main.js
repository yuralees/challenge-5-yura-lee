const apiRoute =
  'http://challenge-5-yura-lee-x9at-2skksvedq-yuralees.vercel.app/api/getuser';

fetch('apiRoute')
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
