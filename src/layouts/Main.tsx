import Posts from '@/components/Posts';
import TopicSidebar from '@/components/topic_sidebar';

import Header from './Header';

export default function Main(props: any) {
  const { topic } = props || {};
  return (
    <div>
      <div className="flex">
        <div className="hidden h-screen w-full max-w-[220px] bg-[#0A0F19] p-3 lg:block">
          <TopicSidebar topic={topic} />
        </div>
        <div className="h-screen w-full overflow-y-scroll">
          {/* Header */}
          <Header />
          <div className="py-2 px-3">Showing your search result?</div>
          {/* Content */}
          <div className="py-3 px-2">
            <Posts />
          </div>
        </div>
      </div>
    </div>
  );
}
