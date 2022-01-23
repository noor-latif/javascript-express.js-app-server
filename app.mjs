import express from 'express';
import * as math from './math.mjs';

const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(port, function () {
    console.log(`Example app listening on http://localhost:${port}/`)
    console.log("Example calculation using custom library: 4 * 4 = \n" + math.area(4))
});
