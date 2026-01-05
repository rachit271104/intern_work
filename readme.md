# ImpactLens Frontend

This is the frontend codebase for **ImpactLens**, built using **React + Vite + Tailwind CSS**.  
The project follows a **feature-based architecture** with a clear separation between **UI**, **layout**, **features**, and **content**.

---

## 🧱 Tech Stack

- React (Vite)
- Tailwind CSS
- JavaScript (ES6+)
- Feature-based folder structure

---

## 📁 Project Structure

```txt
src/
├── assets/
│   └── images/                 # Static images used across the app
│
├── components/
│   ├── layout/                 # Layout-level components (page structure)
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Container.jsx
│   │
│   ├── ui/                     # Reusable UI primitives
│   │   ├── Button.jsx
│   │   ├── Badge.jsx
│   │   ├── Link.jsx
│   │   └── Card.jsx
│   │
│   └── common/                 # Shared components used across features
│       ├── SectionHeading.jsx
│       └── EmptyState.jsx
│
├── features/
│   ├── home/                   # Homepage-related features
│   │   ├── Homepage.jsx        # Main homepage composition
│   │   ├── HeroSection.jsx     # Hero section (header image + headline)
│   │
│   │   ├── launch-announcement/
│   │   │   └── LaunchAnnouncement.jsx
│   │
│   │   ├── featured-stories/
│   │   │   ├── FeaturedStories.jsx
│   │   │   └── FeaturedStoryColumn.jsx
│   │
│   │   ├── story-explorer/
│   │   │   ├── StoryExplorer.jsx
│   │   │   └── storyExplorerContent.js
│   │
│   │   └── recent-stories/
│   │       ├── RecentStories.jsx
│   │       └── RecentStoryCard.jsx
│   │
│   └── stories/                # Story-related pages & components
│       ├── StoryCardCompact.jsx
│       ├── StoryMeta.jsx
│       └── storiesContent.js
│
├── data/
│   ├── navigation.js           # Navigation links & menu config
│   └── siteConfig.js           # Global site-level configuration
│
├── lib/
│   ├── classNames.js           # Utility for conditional class handling
│   └── formatDate.js           # Date formatting helpers
│
├── index.css                   # Tailwind base styles
├── App.jsx                     # Root app component
├── main.jsx                    # Entry point




//////////////  url
| URL        | What you see          |
| ---------- | --------------------- |
| `/`        | Homepage (no sidebar) |
| `/login`   | Login page            |
| `/blogs/1` | Sidebar + Blog Page 1 |
| `/blogs/2` | Sidebar + Blog Page 2 |
| `/blogs/3` | Sidebar + Blog Page 3 |
