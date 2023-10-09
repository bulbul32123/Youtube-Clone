import React, { useContext, useEffect } from 'react';
import LeftNav from './LeftNav';
import VideoCard from './VideoCard';
import { Context } from '../context/ContextApi';

export default function Feed() {
  const { loading, searchResults } = useContext(Context);

  useEffect(() => {
    document.getElementById('root').classList.remove('custom-h');
  }, []);
  const renderVideoCards = () => {
    if (!Array.isArray(searchResults)) {
      return null;
    }
    return searchResults?.map((item) => {
      if (item?.type !== 'video') return null;
      return <VideoCard key={Math.random()} video={item?.video} />;
    });
  };

  return (
    <>
      <div className="flex flex-row h-[calc(100%-56px)]">
        <LeftNav />
        <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
            {!loading && searchResults && renderVideoCards()}
          </div>
        </div>
      </div>
    </>
  );
}
