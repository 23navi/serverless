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


module.exports.updateNote = async (event) => {
  let noteId = event.pathParameters.id;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Note Updated with noteId: ${noteId}`,
      },
      null,
      2
    ),
  };
};