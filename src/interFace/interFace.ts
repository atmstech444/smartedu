import { StaticImageData } from "next/image";
// context api data type
export interface AppContextType {
  sideMenuOpen?: boolean;
  toggleSideMenu?: () => void;
  headerSerachOpen?: boolean;
  toggleHeaderSerach?: () => void;
  scrollDirection?: string;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  // filterType, setFilterType
  filterType: string;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
}

//category-type-data
export interface categoryType {
  id: number;
  icon: () => JSX.Element;
  title: string;
  desc: string;
}

//courses-type
export interface coursesType {
  id: number;
  image: StaticImageData;
  category: string;
  lesson: number;
  ratingAve: number;
  ratingCount: number;
  ratings: number;
  title: string;
  tutorImg: StaticImageData;
  author: string;
  price: number;
  oldPrice: number;
  quantity: number;
  categoryClass?: string;
  priceClass?: string;
  desc?: string;
  info?: string;
  videoUrl: string;
}
//category-filter-Type
export interface categoryFilterType {
  id: number;
  category: string;
}
//events-type
export interface eventType {
  id: number;
  title: string;
  date: string;
  time: string;
  place: string;
}
//counter-type
export interface counterType {
  id: number;
  countIcon: () => JSX.Element;
  countNum: number;
  countTitle: string;
  countPlus?: string;
  wrapperClass?: string;
  counterItemClass?: string;
  counterIconClass?: string;
}
//blog-type
export interface blogType {
  id: number;
  image: StaticImageData;
  blogTag: string;
  blogWrapperClass?: string;
  title: string;
  authorImg: StaticImageData;
  author: string;
  date: string;
}
//hero-slider-type
export interface heroSliderType {
  id: number;
  image: StaticImageData;
  title: string;
  info: string;
  titleInfo?: string;
  titleCategory?: string;
  YellowBg?: StaticImageData;
  wrapperClass?: string;
  desc?: string;
  sliderBtn?: string;
}

//instructor
interface SocialType {
  id: number;
  link: string;
  icon: string;
}
//instructor type
export interface instructorType {
  id: number;
  image: StaticImageData;
  title: string;
  category: string;
  socialIcon: SocialType[];
}
//testimonial-Type
export interface TestimonialType {
  id: number;
  desc?: string;
  info?: string;
  authorName?: string;
}
//image-slider
export interface imageSliderType {
  id: number;
  image: StaticImageData;
}
// id type
export interface idType {
  id?: number;
}
//review-data-type
export interface reviewType {
  id?: number;
  image?: StaticImageData;
  title?: string;
  ratings?: number;
  duration?: string;
  description?: string;
}
// product type
export interface productsType {
  id?: number;
  image?: StaticImageData;
  title: string;
  category?: string;
  level?: string;
  price: number;
  oldPrice?: number;
  rating: number;
  quantity: number;
}
