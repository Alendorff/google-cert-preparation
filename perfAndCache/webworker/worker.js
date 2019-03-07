self.postMessage('I CREATED!');
(function() {

  function heavyShit() {
    let result = []
    for (let i = 0; i < 1999999; i++) {
      result = [].map.call(Math.random().toString(), (e) => e)
    }
    return result
  }

  onmessage = function (event) {
    const { type } = event.data
    switch (type) {
      case 'RUN_SHIT': {
        const result = heavyShit().filter((e) => e !== '.').join(', ');
        self.postMessage({ type: 'SHIT_DONE', payload: result });
        break;
      }
      default:
        break;
    }
  }


})()
