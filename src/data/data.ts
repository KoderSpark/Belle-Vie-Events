import babyShowerImg from "@/assets/baby-shower.webp";
import birthdayImg from "@/assets/birthday.webp";
import bridalImg from "@/assets/bridal-shower.webp";
import culturalImg from "@/assets/cultural.webp";
import heroImg from "@/assets/hero-event.webp";
import welcomeImg from "@/assets/welcome.webp";
import cateringImg from "@/assets/catering.webp";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
  location: string;
  featured?: boolean;
}

export const galleryImages: GalleryItem[] = [
  {
    id: "1",
    src: culturalImg,
    alt: "Outdoor wedding reception",
    category: "GALAS",
    title: "The Summer Soirée",
    location: "Cotswolds, UK",
    featured: true,
  },
  {
    id: "2",
    src: cateringImg,
    alt: "Elegant dinner party",
    category: "PRIVATE DINING",
    title: "L'Art de Vivre",
    location: "Paris, FR",
    featured: true,
  },
  {
    id: "3",
    src: babyShowerImg,
    alt: "Baby shower celebration",
    category: "PRIVATE DINING",
    title: "Metropolitan Elegance",
    location: "London, UK",
    featured: true,
  },
  {
    id: "4",
    src: birthdayImg,
    alt: "Birthday gala",
    category: "GALAS",
    title: "Golden Hour Estate",
    location: "Beverly Hills, CA",
    featured: true,
  },
  {
    id: "5",
    src: welcomeImg,
    alt: "Elegant wedding setup",
    category: "WEDDINGS",
    title: "The Grand Union",
    location: "New York, NY",
  },
  {
    id: "6",
    src: bridalImg,
    alt: "Bridal event",
    category: "WEDDINGS",
    title: "Morning Mist Bridal",
    location: "Tuscany, IT",
  },
  {
    id: "7",
    src: heroImg,
    alt: "Corporate event",
    category: "CORPORATE",
    title: "The Visionary Summit",
    location: "Berlin, DE",
  },
];

export const galleryFilters = ["ALL EVENTS", "WEDDINGS", "CORPORATE", "GALAS", "PRIVATE DINING"];
