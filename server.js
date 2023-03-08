const express = require('express');
const app = express();
const port = process.env.PORT || 5050;

app.use(express.static('public'));
app.get('/api/getuser', (req, res) => {
  const data = {
    name: 'Yura Lee',
    jobTitle:
      'a product designer whose natural inclination is to think about problems and how things can be improved for a better quility of life',
    interestingFact: 'I love to these thigns',
    cta: 'Chat with Me!',
  };

  res.json(data);
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
