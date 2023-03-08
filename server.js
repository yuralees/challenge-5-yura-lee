const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.get('/api/getuser', (req, res) => {
  const data = {
    name: 'Yura Lee',
    jobTitle: 'Product Designer',
    interestingFact: 'I love to play the piano and draw digital art',
    cta: 'Chat with Me!',
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(
    `server listening on port challenge-5-yura-6ki2npkn9-yuralees.vercel.app${port}`
  );
});
