async function createAuction(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ event }),
  };
}

module.exports.handler = createAuction;
