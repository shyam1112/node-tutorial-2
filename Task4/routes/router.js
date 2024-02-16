const express = require('express');
const router = express.Router();
const app = express();
app.use(express.json());

app.use((err, req, res, next) => {
    console.error("Error:", err.stack);
    res.status(500).send('Something went wrong!');
});

router.get('/route1', (req, res, next) => {
    try {
        throw new Error('This is an error from /route1');
    } catch (error) {
        next(error); 
    }
});

router.get('/route2', (req, res) => {
    res.send('This is from /route2');
});

module.exports = router;