(function() {
  const numOfFlowers = 4;

  function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  }

  let positions = [];

  function getNum() {
    let pos = getRandomArbitrary(0, 100);
    for (let x = 0; x < positions.length; x++) {
      if (pos > positions[x] - 3 && pos < positions[x] + 3) {
        return false;
      }
    }
    positions.push(pos);
    return pos;
  }

  while (positions.length < numOfFlowers) {
    getNum();
  }

  function growGarden() {
    let more = setInterval(function() {
      if (positions.length === 0) {
        clearInterval(more);
        return;
      }

      let flwr = document.createElement('div');
      let dim = getRandomArbitrary(30, 80);
      let leftPos = positions.shift();

      flwr.classList.add('sunflwr');
      flwr.style.left = `${leftPos}vw`;
      flwr.style.height = `${dim}vmin`;
      flwr.style.width = `${dim}vmin`;
      flwr.style.zIndex = 100 - dim;
      flwr.style.filter = `saturate(${getRandomArbitrary(70, 100)}%) brightness(${getRandomArbitrary(80, 150)}%)`;

      // Copy the inner structure of the original sunflower
      const template = document.querySelector('.sunflwr');
      if (template) {
        flwr.innerHTML = template.innerHTML;
      }

      document.body.appendChild(flwr);
    }, 150);
  }

  document.body.addEventListener('click', () => {
    growGarden();
  });
})();
