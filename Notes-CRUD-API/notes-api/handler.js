'use strict';

module.exports.createNote = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Note Created',
      },
      null,
      2
    ),
  };
};
