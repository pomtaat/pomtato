setTimeout(() => {
  startMatrix();
  startGlitch();
}, 10000);

function startGlitch() {
  let imgdiv = document.getElementById("glitchimg");
  if (!imgdiv.classList.contains("glitch")) {
    setTimeout(() => {
      document.getElementById("ired").classList.add("red");
      document.getElementById("igreen").classList.add("green");
      document.getElementById("iblue").classList.add("blue");
      imgdiv.classList.toggle("glitch");
      let txt = document.getElementById("glitchtxt");
      txt.innerHTML = '<span aria-hidden="true">Go peel a potato</span>Go peel a potato<span aria-hidden="true">Go peel a potato</span>';
      txt.classList.add("textglitch")
    }, 3000);
  }
}

function startMatrix() {
  document.getElementById('matrix').classList.add("matrix");

    const canvas = document.getElementById('matrix');
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';

    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width/fontSize;

    const rainDrops = [];

    for( let x = 0; x < columns; x++ ) {
        rainDrops[x] = 1;
    }

    const draw = () => {
      context.fillStyle = 'rgba(0, 0, 0, 0.08)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = '#73ff73';
      context.font = fontSize + 'px monospace';
    
      for(let i = 0; i < rainDrops.length; i++)
      {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
        
        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
          rainDrops[i] = 0;
            }
        rainDrops[i]++;
      }
    };
    
    setInterval(draw, 50);
}
