import Images from '@/assets/images';
import CardList from '@/components/shared/cardList';
import AppLayout from '@/components/layout/appLayout';
import { blogList } from '@/config/blog.config';
import LandingPageBanner from '@/views/landingPageBanner';

export default function Home() {
  return (
    <AppLayout>
      <LandingPageBanner />
      <div style={{width:"100%", minHeight:"80vh",padding: "40px"}}>
        <CardList data={blogList} title={"Some Blog List"}/>
      </div>
      {/* <Services /> */}
      {/* <BalanceInfo /> */}
    </AppLayout>
  );
}
