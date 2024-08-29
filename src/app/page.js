import '@/app/page.css';
import PersistentDrawerLeft from "./drawers";
import { Suspense } from 'react';
import Loading from './loading';
import DataSend from './dataSend/page';


export default function Home() {
  return (
    <>
        <div id="main">
          <Suspense fallback={<Loading/>}>
              <PersistentDrawerLeft/>
                <DataSend/>
          </Suspense>
        </div>
    </>

  );
}
