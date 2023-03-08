const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use((req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Origin',
    'challenge-5-yura-ap156156u-yuralees.vercel.app'
  );
  next();
});
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
  console.log(`server listening on port http://localhost:${port}`);
});
