
const logger = (req, res, next) => {
    console.log(req); 
    return next();
}

const testRouter = (req, res) => {
    res.send("It worked")
}

export {logger, testRouter};