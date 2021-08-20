// import http from 'k6/http';
// import { sleep } from 'k6';

// export default function () {
//   http.get('http://localhost:3000/reviews');
//   http.get('http://localhost:3000/reviews/meta');
//   // http.post('http://localhost:3000/reviews');
//   // http.put('http://localhost:3000/reviews/:review_id/helpful');
//   // http.post('http://localhost:3000/reviews/report');


//   sleep(1);
// }


import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m30s', target: 10 },
    { duration: '20s', target: 0 },
  ],
};

export default function () {
  let res = http.get('http://localhost:3000/reviews/meta');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
