import '@/app/page.css';
import { Suspense } from 'react';
import Loading from './loading';
import Main from './main';


export default function Home() {
  return (
    <>
        <div id="main">
          <Suspense fallback={<Loading/>}>
              <Main/>
          </Suspense>
        </div>
    </>

  );
}
