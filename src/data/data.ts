import one from "@/assets/one.png";
import two from "@/assets/two.png";
import three from "@/assets/three.png";
import four from "@/assets/four.png";
import five from "@/assets/five.png";
import six from "@/assets/six.png";
import seven from "@/assets/seven.png";
import eight from "@/assets/eight.png";

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
    src: one,
    alt: "Elegant celebration event",
    category: "GALAS",
    title: "The Summer Soirée",
    location: "Cotswolds, UK",
    featured: true,
  },
  {
    id: "2",
    src: two,
    alt: "Refined dinner ambiance",
    category: "PRIVATE DINING",
    title: "L'Art de Vivre",
    location: "Paris, FR",
    featured: true,
  },
  {
    id: "3",
    src: three,
    alt: "Celebration gathering",
    category: "PRIVATE DINING",
    title: "Metropolitan Elegance",
    location: "London, UK",
    featured: true,
  },
  {
    id: "4",
    src: four,
    alt: "Luxurious gala affair",
    category: "GALAS",
    title: "Golden Hour Estate",
    location: "Beverly Hills, CA",
    featured: true,
  },
  {
    id: "5",
    src: five,
    alt: "Elegant wedding ceremony",
    category: "WEDDINGS",
    title: "The Grand Union",
    location: "New York, NY",
  },
  {
    id: "6",
    src: six,
    alt: "Bridal event splendor",
    category: "WEDDINGS",
    title: "Morning Mist Bridal",
    location: "Tuscany, IT",
  },
  {
    id: "7",
    src: seven,
    alt: "Corporate gathering",
    category: "CORPORATE",
    title: "The Visionary Summit",
    location: "Berlin, DE",
  },
  {
    id: "8",
    src: eight,
    alt: "Exquisite event experience",
    category: "GALAS",
    title: "Nocturne Elegance",
    location: "Monaco, MC",
    featured: true,
  },
];

export const galleryFilters = ["ALL EVENTS", "WEDDINGS", "CORPORATE", "GALAS", "PRIVATE DINING"];
