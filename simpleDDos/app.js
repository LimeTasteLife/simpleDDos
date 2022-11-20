const axios = require('axios');

axios.get('https://engineeo.kr/notice?page=1').then((res) => {
  if (res.data) {
    console.log('success!');
  }
});

const howM = 0;

(async (number) => {
  for await (const i of number) {
    let a = i % 10;
    axios.get(`https://engineeo.kr/notice?page=${a}`).then((res) => {
      if (res.data) {
        howM++;
        console.log('success!' + howM);
      }
    });
  }
})(10000);
