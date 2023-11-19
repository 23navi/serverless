async function fetchAllAuctions(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify([]),
  };
}

module.exports.handler = fetchAllAuctions;
