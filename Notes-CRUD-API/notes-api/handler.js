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


module.exports.deleteNote = async (event) => {
  let noteId = event.pathParameters.id;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Note Deleted with noteId: ${noteId}`,
      },
      null,
      2
    ),
  };
};


module.exports.getAllNotes = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `All Notes`,
      },
      null,
      2
    ),
  };
};



module.exports.getNote = async (event) => {
  let noteId = event.pathParameters.id;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Note with noteId: ${noteId}`,
      },
      null,
      2
    ),
  };
};