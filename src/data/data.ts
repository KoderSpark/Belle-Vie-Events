import one from "@/assets/one.jpeg";
import two from "@/assets/two.jpeg";
import three from "@/assets/three.jpeg";
import four from "@/assets/four.jpeg";
import five from "@/assets/five.jpeg";
import six from "@/assets/six.jpeg";
import seven from "@/assets/seven.jpeg";
import eight from "@/assets/eight.jpeg";
import nine from "@/assets/nine.jpeg";

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
  { id: "1", src: one, alt: "Event photo 1", category: "GALAS", title: "Event One", location: "Location 1", featured: true },
  { id: "2", src: two, alt: "Event photo 2", category: "PRIVATE DINING", title: "Event Two", location: "Location 2", featured: true },
  { id: "3", src: three, alt: "Event photo 3", category: "PRIVATE DINING", title: "Event Three", location: "Location 3", featured: true },
  { id: "4", src: four, alt: "Event photo 4", category: "GALAS", title: "Event Four", location: "Location 4", featured: true },
  { id: "5", src: five, alt: "Event photo 5", category: "WEDDINGS", title: "Event Five", location: "Location 5" },
  { id: "6", src: six, alt: "Event photo 6", category: "CORPORATE", title: "Event Six", location: "Location 6" },
  { id: "7", src: seven, alt: "Event photo 7", category: "CORPORATE", title: "Event Seven", location: "Location 7" },
  { id: "8", src: eight, alt: "Event photo 8", category: "GALAS", title: "Event Eight", location: "Location 8", featured: true },
  { id: "9", src: nine, alt: "Event photo 9", category: "GALAS", title: "Event Nine", location: "Location 9" },
];

export const galleryFilters: string[] = [];
