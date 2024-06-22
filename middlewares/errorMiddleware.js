const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ error: err.message || 'An unexpected error occurred.' });
};

module.exports = errorMiddleware;
