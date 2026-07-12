import yoga from "@/assets/yoga.jpg";
import yog from "@/assets/med.png";
import music from "@/assets/music.jpg";
import cultural from "@/assets/cultural.jpg";
import games from "@/assets/chess_h.png";
import hindi from "@/assets/hindi.jpg";
import rangoli from "@/assets/rangoli1.jpg";
import mehndi from "@/assets/mehndi.jpg";
import agecare from "@/assets/agecare.jpg";

import {
  Activity,
  Flower,
  Music as MusicIcon,
  Sparkles,
  Users,
  BookOpen,
  Palette,
  Flower2,
  UsersRound,
  Heart,
  type LucideIcon,
} from "lucide-react";

export interface ProgramNode {
  /** Stable key. */
  key: string;
  /** Display title (matches the poster wheel). */
  title: string;
  /** Three-word tagline from the poster. */
  tagline: string;
  /** Representative photo. */
  image: string;
  /** Section id to scroll to when clicked. */
  target: string;
  /** Badge icon. */
  icon: LucideIcon;
  /** Badge background — an HSL string used inline so each badge keeps its poster colour. */
  badge: string;
  /** True where the photo is a stand-in until a dedicated image is supplied. */
  placeholder?: boolean;
}

/**
 * The ten programs shown on the brand poster, in clockwise order starting
 * from the top. Order matters: the Hero wheel places them evenly around the
 * ring in this sequence.
 */
export const programs: ProgramNode[] = [
  { key: "yoga", title: "Yoga", tagline: "Mind · Body · Soul", image: yoga, target: "program-yoga", icon: Activity, badge: "142 78% 50%" },
  { key: "meditation", title: "Meditation", tagline: "Calm · Mindful · Present", image: yog, target: "program-meditation", icon: Flower, badge: "330 72% 52%" },
  // { key: "music", title: "Music", tagline: "Play · Express · Unite", image: music, target: "music", icon: MusicIcon, badge: "180 62% 38%" },
  { key: "dance", title: "Traditional Dance & Music", tagline: "Celebrate · Move · Inspire", image: cultural, target: "program-folk-dance", icon: Sparkles, badge: "270 55% 48%" },
  { key: "games", title: "Traditional Games", tagline: "Socialise · Offline · Resilience", image: games, target: "program-traditional-games", icon: Users, badge: "140 55% 40%" },
  { key: "hindi", title: "Drama & Cultural Storytelling", tagline: "Learn · Speak · Grow", image: hindi, target: "program-drama", icon: BookOpen, badge: "24 85% 52%" },
  { key: "rangoli", title: "Traditional Art & Craft", tagline: "Create · Decorate · Inspire", image: rangoli, target: "program-traditional-art", icon: Palette, badge: "45 90% 50%" },
  // { key: "henna", title: "Henna", tagline: "Art · Tradition · Beauty", image: mehndi, target: "art", icon: Flower2, badge: "335 75% 50%" },
  // { key: "socialise", title: "Socialise Offline", tagline: "Connect · Share · Belong", image: agecare, target: "community", icon: UsersRound, badge: "190 70% 42%", placeholder: true },
  { key: "agedcare", title: "Socialise Offline", tagline: "Care · Comfort · Connect", image: agecare, target: "age-care", icon: Heart, badge: "262 60% 55%", placeholder: true },
];
