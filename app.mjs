import express from 'express';
import { area } from './math.mjs';

const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
    console.log(area(4))
});
