const errorHandler = (error, _req, res, next) => {
  console.error(error.message);
  console.error(error.name);

  if (error.name === 'MongoNotConnectedError') {
    return res.status(400).send(
      `
      <html>
        <script>
          function db_connect() {
          window.location.href = 'http://localhost:3000/db_connect';
          }
        </script>
        <div>
          <button onclick="db_connect()">
            try to connect mongodb
          </button>
        </div>
      </html>
      `
    );
  } 

  if (error.name === 'ValidationError') {
    return res.status(400).send({error: error.message});
  } 

  next(error);
};

module.exports = errorHandler;
