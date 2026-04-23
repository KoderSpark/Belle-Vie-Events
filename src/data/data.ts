import one from "@/assets/one.jpeg";
import two from "@/assets/two.jpeg";
import three from "@/assets/three.jpeg";
import four from "@/assets/four.jpeg";
import five from "@/assets/five.jpeg";
import six from "@/assets/six.jpeg";
import seven from "@/assets/seven.jpeg";
import eight from "@/assets/eight.jpeg";
import nine from "@/assets/nine.jpeg";
import photoOutput1 from "@/assets/photo-output.png";
import photoOutput2 from "@/assets/photo-output 2.png";
import photoOutput3 from "@/assets/photo-output 3.png";
import photoOutput4 from "@/assets/photo-output 4.png";
import photoOutput5 from "@/assets/photo-output 5.png";
import photoOutput6 from "@/assets/photo-output 6.png";

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
  { id: "10", src: photoOutput1, alt: "Photo output 1", category: "GALLERY", title: "Photo Output 1", location: "" },
  { id: "11", src: photoOutput2, alt: "Photo output 2", category: "GALLERY", title: "Photo Output 2", location: "" },
  { id: "12", src: photoOutput3, alt: "Photo output 3", category: "GALLERY", title: "Photo Output 3", location: "" },
  { id: "13", src: photoOutput4, alt: "Photo output 4", category: "GALLERY", title: "Photo Output 4", location: "" },
  { id: "14", src: photoOutput5, alt: "Photo output 5", category: "GALLERY", title: "Photo Output 5", location: "" },
  { id: "15", src: photoOutput6, alt: "Photo output 6", category: "GALLERY", title: "Photo Output 6", location: "" },
];

export const galleryFilters: string[] = [];
