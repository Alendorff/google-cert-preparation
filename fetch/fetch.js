(async function () {
  'use strict';

  async function validateResponse(response) {
    console.log(response)
    if (!response.ok) {
      console.info(await response.text())
      throw Error(response.statusText);
    }
    return response;
  }

  async function printText(response) {
    console.log(await response.text())
    return response
  }
  async function printJSON(response) {
    console.log(await response.json())
    return response
  }
  function errorHandler(error) {
    console.error(error)
  }

  await fetch('https://reqres.in/api/users/23')
    .then(validateResponse)
    .then(printText)
    .catch(errorHandler);

  await fetch('https://reqres.in/api/users?page=2')
    .then(validateResponse)
    .then(printText)
    .catch(errorHandler);

  await fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: { name: "morpheus", job: "leader" }
  })
    .then(validateResponse)
    .then(printJSON)
    .catch(errorHandler)



})();
