const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            id: '1',
            image: 'https://placeimg.com/64/64/any',
            name: '홍길동',
            birthday: '20190102',
            gender: '남자',
            job: '프로그래머'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));