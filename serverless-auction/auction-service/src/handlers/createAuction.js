async function createAuction(event, context) {
  const body = JSON.parse(event.body);

  return {
    statusCode: 201,
    body: JSON.stringify({ body }),
  };
}

module.exports.handler = createAuction;
