// import http from 'k6/http';
// import { sleep } from 'k6';

// export default function () {
//   http.get('http://3.21.97.207:3000/reviews/meta');
//   http.get('http://3.21.97.207:3000/reviews');
//   http.post('http://3.21.97.207:3000/reviews');
//   http.put('http://3.21.97.207:3000/reviews/1/helpful');
//   http.put('http://3.21.97.207:3000/reviews/1/report');


//   sleep(1);
// }


import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 100 },
    { duration: '1m30s', target: 100 },
    { duration: '20s', target: 0 },
  ],
};

export default function () {
  let res = http.get('http://3.21.97.207:3000/reviews/meta');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
