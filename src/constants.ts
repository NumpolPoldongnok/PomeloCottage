// =============================================
// Pomelo Cottage - Configuration & Constants
// =============================================
// แก้ไข path รูปภาพและข้อมูลต่างๆ ได้ที่นี่

export const SITE_CONFIG = {
  name: 'Pomelo Cottage',
  nameThai: 'บ้านสวนส้มโอ',
  tagline: 'พักผ่อนกลางสวนส้มโอ สัมผัสวิถีธรรมชาติ',
  description: 'โฮมสเตย์กลางสวนส้มโอ บรรยากาศอบอุ่น เป็นกันเอง พร้อม Welcome Drink น้ำส้มโอสด',
}

// =============================================
// Images - เปลี่ยน path รูปภาพได้ที่นี่
// =============================================
export const IMAGES = {
  logo: '/images/logo.jpg',
  hero: '/images/pomelo-garden.jpg',
  blueHouse: '/images/blue-house.jpg',
  pomeloFruit: '/images/pomelo-fruit.jpg',
  riverView: '/images/river-view.jpg',
  pomeloGarden: '/images/pomelo-garden.jpg',
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
  { src: '/images/blue-house.jpg', alt: 'บ้านสีฟ้า', category: 'house' },
  { src: '/images/pomelo-garden.jpg', alt: 'สวนส้มโอ', category: 'garden' },
  { src: '/images/pomelo-fruit.jpg', alt: 'ผลส้มโอ', category: 'garden' },
  { src: '/images/river-view.jpg', alt: 'วิวริมน้ำ', category: 'nature' },
  { src: '/images/pomelo-garden.jpg', alt: 'บรรยากาศสวน', category: 'atmosphere' },
  { src: '/images/blue-house.jpg', alt: 'ที่พักบ้านสีฟ้า', category: 'house' },
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
    'บ้านใต้ถุนสูง อากาศถ่ายเทดี',
    'ห้องนอนพร้อมเตียงขนาดใหญ่',
    'ห้องน้ำในตัว สะอาด',
    'ระเบียงชมวิวสวน',
  ],
  pricePerNight: 1500,
  maxGuests: 4,
}

export const AMENITIES = [
  { icon: 'ac', label: 'แอร์' },
  { icon: 'wifi', label: 'Wi-Fi' },
  { icon: 'cctv', label: 'CCTV' },
  { icon: 'parking', label: 'ที่จอดรถ' },
  { icon: 'fridge', label: 'ตู้เย็น' },
  { icon: 'kettle', label: 'กาต้มน้ำ' },
]

// =============================================
// Contact Information
// =============================================
export const CONTACT_INFO = {
  phone: '081-234-5678',
  lineId: '@pomelocottage',
  lineUrl: 'https://line.me/ti/p/@pomelocottage',
  facebook: 'Pomelo Cottage บ้านสวนส้มโอ',
  facebookUrl: 'https://m.me/pomelocottage',
  address: 'ตำบลสวนส้มโอ อำเภอเมือง จังหวัดนครปฐม',
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
      icon: 'drink',
      title: 'Welcome Drink',
      description: 'น้ำส้มโอสดคั้นต้อนรับทุกท่าน',
    },
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
