import {HeroSection} from './HeroSection';
import LaunchAnnouncement from './launch-announcement/LaunchAnnouncement';
import { Header } from "../../components/layout/Header";
import FeaturedStories from './featured-stories/FeaturedStories';
import StoryExplorer from './story-explorer/StoryExplorer';
import RecentStories from './recent-stories/RecentStories';


export function Homepage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <LaunchAnnouncement />
      <FeaturedStories />
      <StoryExplorer />
      <RecentStories />
    </main>
  );
}
