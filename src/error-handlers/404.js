'use strict';

/*
  In this example, we first declare a funcion and then explicitly export it
  Because we'll be building out an API that works with JSON, let's format
  our response as a JSON object
*/

function handle404(req, res, next) {

  try {
    const errorObject = {
      status: 404,
      message: 'Sorry, we could not find what you were looking for'
    }

    res.setHeader('Content-Type', 'application/json'); //from 500Auth.js

    res.status(404).json(errorObject);
  }  catch (e) {
    throw new Error(e.message)
  }
}

module.exports = handle404;