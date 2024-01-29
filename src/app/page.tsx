import CardList from '@/components/shared/cardList';
import AppLayout from '@/components/layout/appLayout';
import blogList from '@/config/blog.config.json';
import LandingPageBanner from '@/views/landingPageBanner';
import RoadMap from '@/components/roadMap';

export default function Home() {
  return (
    <AppLayout>
      <LandingPageBanner />
      <div
        style={{
          width: '100%',
          minHeight: '80vh',
          padding: '40px',
          marginTop: '60px',
        }}>
        <CardList data={blogList} title={'Blog List'} />
      </div>

      <RoadMap title={'Blogs to be published next week'} />
      {/* <Services /> */}
      {/* <BalanceInfo /> */}
    </AppLayout>
  );
}
