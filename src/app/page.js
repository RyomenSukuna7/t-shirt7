import '@/app/page.css';
import PersistentDrawerLeft from "./drawers";
import Cards from './cards';
import { Suspense } from 'react';
import Loading from './loading';


export default function Home() {
  return (
    <>
        <div id="main">
          <Suspense fallback={<Loading/>}>
              <PersistentDrawerLeft/>
                <Cards/>
          </Suspense>
        </div>
    </>

  );
}
