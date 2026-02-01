// =============================================
// Pomelo Cottage - Configuration & Constants
// =============================================
// แก้ไข path รูปภาพและข้อมูลต่างๆ ได้ที่นี่

export const SITE_CONFIG = {
  name: 'Pomelo Cottage',
  nameThai: 'บ้านสวนส้มโอ',
  tagline: 'พักผ่อนกลางสวนส้มโอ สัมผัสวิถีธรรมชาติ',
  description: 'โฮมสเตย์กลางสวนส้มโอ บรรยากาศอบอุ่น เป็นกันเอง',
}

// =============================================
// Images - เปลี่ยน path รูปภาพได้ที่นี่
// =============================================
const basePath = import.meta.env.BASE_URL

export const IMAGES = {
  logo: `${basePath}images/logo.jpg`,
  hero: `${basePath}images/pomelo-garden.jpg`,
  blueHouse: `${basePath}images/blue-house.jpg`,
  pomeloFruit: `${basePath}images/pomelo-fruit.jpg`,
  riverView: `${basePath}images/river-view.jpg`,
  pomeloGarden: `${basePath}images/pomelo-garden.jpg`,
  roomTwinBeds: `${basePath}images/room-twin-beds.jpg`,
  bathroom: `${basePath}images/bathroom.jpg`,
  roomSingleBed: `${basePath}images/room-single-bed.jpg`,
  kitchen: `${basePath}images/kitchen.jpg`,
  hallway: `${basePath}images/hallway.jpg`,
  livingRoom: `${basePath}images/living-room.jpg`,
  balcony: `${basePath}images/balcony.jpg`,
  stairs: `${basePath}images/stairs.jpg`,
}

// =============================================
// Gallery Images
// =============================================
export interface GalleryImage {
  src: string
  alt: string
  category: 'nature' | 'garden' | 'atmosphere' | 'house'
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: `${basePath}images/room-twin-beds.jpg`, alt: 'ห้องนอนเตียงคู่', category: 'house' },
  { src: `${basePath}images/bathroom.jpg`, alt: 'ห้องน้ำ', category: 'house' },
  { src: `${basePath}images/room-single-bed.jpg`, alt: 'ห้องนอนเตียงเดี่ยว', category: 'house' },
  { src: `${basePath}images/kitchen.jpg`, alt: 'ห้องครัว', category: 'house' },
  { src: `${basePath}images/hallway.jpg`, alt: 'ทางเข้า', category: 'house' },
  { src: `${basePath}images/living-room.jpg`, alt: 'ห้องนั่งเล่น', category: 'house' },
  { src: `${basePath}images/balcony.jpg`, alt: 'ระเบียง', category: 'house' },
  { src: `${basePath}images/stairs.jpg`, alt: 'บันได', category: 'house' },
  { src: `${basePath}images/blue-house.jpg`, alt: 'บ้านสีฟ้า', category: 'house' },
  
  // Garden flowers and plants
  { src: `${basePath}images/1.jpg`, alt: 'ดอกส้มโอ', category: 'garden' },
  { src: `${basePath}images/2.jpg`, alt: 'ดอกไม้สีม่วงแดง', category: 'garden' },
  { src: `${basePath}images/3.jpg`, alt: 'ต้นไม้ดอกม่วง', category: 'garden' },
  { src: `${basePath}images/4.jpg`, alt: 'ดอกไม้เล็กหลากสี', category: 'garden' },
  { src: `${basePath}images/5.jpg`, alt: 'ใบไม้ลายสวย', category: 'garden' },
  { src: `${basePath}images/6.jpg`, alt: 'ดอกไม้สีส้ม', category: 'garden' },
  { src: `${basePath}images/7.jpg`, alt: 'ดอกไม้ส้มซีด', category: 'garden' },
  { src: `${basePath}images/8.jpg`, alt: 'ดอกไม้ขาวเล็ก', category: 'garden' },
  { src: `${basePath}images/9.jpg`, alt: 'ดอกไม้ขาวด่าง', category: 'garden' },
  { src: `${basePath}images/10.jpg`, alt: 'ดอกไม้ส้มซ้อนกลีบ', category: 'garden' },
  
  // Nature and pomelo garden
  { src: `${basePath}images/pomelo-garden.jpg`, alt: 'สวนส้มโอ', category: 'nature' },
  { src: `${basePath}images/pomelo-fruit.jpg`, alt: 'ผลส้มโอ', category: 'nature' },
]

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'ทั้งหมด' },
  { id: 'nature', label: 'ธรรมชาติ' },
  { id: 'garden', label: 'สวน' },
  { id: 'atmosphere', label: 'บรรยากาศ' },
  { id: 'house', label: 'ที่พัก' },
]

// =============================================
// Room/House Details
// =============================================
export const ROOM_INFO = {
  name: 'บ้านสีฟ้า',
  description: 'บ้านไม้ใต้ถุนสูงสไตล์ไทยประยุกต์ โอบล้อมด้วยสวนส้มโอ พร้อมระเบียงชมวิว',
  features: [
    'บ้านใต้ถุนสูง 2 ชั้น อากาศถ่ายเทดี',
    '3 ห้องนอน 2 ห้องน้ำ',
    'ชั้น 1: ห้องนอน 1 ห้อง, ห้องน้ำ 1 ห้อง, ลานสังสรรค์, ห้องครัว',
    'ชั้น 2: ระเบียง, ห้องโถง, ห้องนอน 2 ห้อง, ห้องน้ำ 1 ห้อง, ห้องครัว',
    'ลานจอดรถ 3 คัน',
  ],
  pricePerNight: 1500,
  maxGuests: 5,
  extraGuestPrice: 300,
  maxTotalGuests: 10,
}

export const AMENITIES = [
  { icon: 'ac', label: 'แอร์ 3 ห้อง' },
  { icon: 'cctv', label: 'CCTV' },
  { icon: 'parking', label: 'ที่จอดรถ 3 คัน' },
  { icon: 'fridge', label: 'ตู้เย็น 2 ตู้' },
  { icon: 'kettle', label: 'กาต้มน้ำ' },
]

// =============================================
// Contact Information
// =============================================
export const CONTACT_INFO = {
  phone: '065-496-5695',
  phones: [
    { number: '064-469-6965', name: 'คุณสินี' },
    { number: '065-496-5695', name: 'คุณสินี' },
  ],
  lineId: 'aoysiprachan',
  lineUrl: 'https://line.me/ti/p/aoysiprachan',
  facebook: 'Pomelo Cottage บ้านสวนส้มโอ',
  facebookUrl: 'https://m.me/pomelocottage',
  address: 'ตำบลสวนส้มโอ อำเภอเมือง จังหวัดนครปฐม',
  location: 'ตำบลสามชุก อำเภอสามชุก จังหวัดสุพรรณบุรี',
  googleMapUrl: 'https://maps.google.com/?q=14.0,100.5',
  googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5!2d100.5!3d14.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDAwJzAwLjAiTiAxMDDCsDMwJzAwLjAiRQ!5e0!3m2!1sen!2sth!4v1234567890',
}

// =============================================
// House Rules
// =============================================
export const HOUSE_RULES = [
  { icon: 'clock', rule: 'เช็คอิน 14:00 น. / เช็คเอาท์ 12:00 น.' },
  { icon: 'no-smoking', rule: 'ห้ามสูบบุหรี่ภายในบ้านพัก' },
  { icon: 'no-pet', rule: 'ไม่อนุญาตสัตว์เลี้ยง' },
  { icon: 'quiet', rule: 'งดส่งเสียงดังหลัง 22:00 น.' },
  { icon: 'trash', rule: 'กรุณาแยกขยะก่อนทิ้ง' },
  { icon: 'garden', rule: 'ยินดีต้อนรับเข้าชมสวนส้มโอ' },
  { icon: 'fruit', rule: 'สามารถเก็บส้มโอได้ (กรุณาสอบถามเจ้าของ)' },
]

// =============================================
// Navigation Links
// =============================================
export const NAV_LINKS = [
  { id: 'home', label: 'หน้าแรก', href: '#home' },
  { id: 'about', label: 'เกี่ยวกับเรา', href: '#about' },
  { id: 'rooms', label: 'ที่พัก', href: '#rooms' },
  { id: 'gallery', label: 'แกลเลอรี่', href: '#gallery' },
  { id: 'contact', label: 'ติดต่อเรา', href: '#contact' },
]

// =============================================
// About Section Content
// =============================================
export const ABOUT_CONTENT = {
  title: 'เรื่องราวของบ้านสวนส้มโอ',
  subtitle: 'วิถีธรรมชาติ ความสุขที่เรียบง่าย',
  description: `
    บ้านสวนส้มโอ เกิดจากความรักในวิถีชีวิตชนบท และความตั้งใจที่จะแบ่งปันความสุขให้กับผู้มาเยือน 
    ที่นี่คุณจะได้สัมผัสบรรยากาศของสวนส้มโอเขียวขจี อากาศบริสุทธิ์ และความเงียบสงบห่างไกลจากความวุ่นวาย
  `,
  highlights: [
    {
      icon: 'garden',
      title: 'สวนส้มโอ',
      description: 'เดินชมสวน เก็บผลไม้สด',
    },
    {
      icon: 'nature',
      title: 'ธรรมชาติ',
      description: 'วิวสวย อากาศดี ผ่อนคลาย',
    },
  ],
}

// =============================================
// Nearby Attractions
// =============================================
export interface Attraction {
  name: string
  distance: string
  mapUrl: string
}

export const NEARBY_ATTRACTIONS: Attraction[] = [
  { 
    name: 'อนุสรณ์สถานดอนเจดีย์', 
    distance: '15 นาที',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=อนุสรณ์สถานดอนเจดีย์+สุพรรณบุรี' 
  },
  { 
    name: 'ตลาดสามชุก', 
    distance: '10 นาที',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=ตลาดสามชุก+100+ปี+สุพรรณบุรี' 
  },
  { 
    name: 'วัดป่าเลไล', 
    distance: '12 นาที',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=วัดป่าเลไลย์+สุพรรณบุรี' 
  },
  { 
    name: 'อุทยานมังกรสวรรค์และพิพิธภัณฑ์ลูกหลานพันธุ์มังกร', 
    distance: '20 นาที',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=อุทยานมังกรสวรรค์+สุพรรณบุรี' 
  },
  { 
    name: 'พระแกะสลักวัดเขาทำเทียม', 
    distance: '18 นาที',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=วัดเขาทำเทียม+สุพรรณบุรี' 
  },
]

// =============================================
// Emergency Services
// =============================================
export interface EmergencyService {
  name: string
  phone: string
}

export const EMERGENCY_SERVICES: EmergencyService[] = [
  { 
    name: 'โรงพยาบาลศรีประจันต์',
    phone: '035-459-045'
  },
  { 
    name: 'สถานีตำรวจสามชุก',
    phone: '035-597-001'
  },
]
