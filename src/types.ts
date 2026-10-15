export interface CeremonyEvent {
  id: string;
  time: string;
  khmerTitle: string;
  englishTitle: string;
  khmerDesc: string;
  englishDesc: string;
  iconType: 'procession' | 'haircut' | 'tying' | 'banquet' | 'ring';
}

export interface GuestWish {
  id: string;
  guestName: string;
  attendance: 'attending' | 'not_attending';
  guestCount: number;
  message: string;
  createdAt: string;
}

export interface WeddingData {
  groomNameKhmer: string;
  groomNameEnglish: string;
  brideNameKhmer: string;
  brideNameEnglish: string;
  groomFatherKhmer: string;
  groomMotherKhmer: string;
  brideFatherKhmer: string;
  brideMotherKhmer: string;
  weddingDateFormattedKhmer: string;
  weddingDateFormattedEnglish: string;
  lunarDateKhmer: string;
  weddingTimestamp: string; // ISO date string for countdown
  venueNameKhmer: string;
  venueNameEnglish: string;
  venueHall: string;
  venueAddressKhmer: string;
  venueAddressEnglish: string;
  googleMapsUrl: string;
  youtubeVideoId: string;
  youtubeUrl: string;
  khqrAccountName: string;
  khqrAccountNumber: string;
  khqrKhrAccount: string;
  khqrUsdAccount: string;
  khqrBankName: string;
  coupleQuoteKhmer: string;
  coupleQuoteEnglish: string;
  showRsvp?: boolean;
  schedule: CeremonyEvent[];
}

export const INITIAL_WEDDING_DATA: WeddingData = {
  groomNameKhmer: 'ស៊ឹម សុផល',
  groomNameEnglish: 'SEM SOPHOL',
  brideNameKhmer: 'ម៉ាក់ កញ្ញាដាវីន',
  brideNameEnglish: 'MAK KANHADAVIN',
  groomFatherKhmer: 'លោក ស៊ឹម សុផាត',
  groomMotherKhmer: 'លោកស្រី ឆែម ហ៊ុច',
  brideFatherKhmer: 'លោក ម៉ាក់ គង់',
  brideMotherKhmer: 'លោកស្រី ឆិល វណ្ណា',
  weddingDateFormattedKhmer: 'ថ្ងៃអាទិត្យ ទី១៥ ខែវិច្ឆិកា ឆ្នាំ២០២៦',
  weddingDateFormattedEnglish: 'Sunday, November 15, 2026',
  lunarDateKhmer: 'ត្រូវនឹងថ្ងៃ ៧កើត ខែកត្តិក ឆ្នាំមមី អដ្ឋស័ក ព.ស. ២៥៧០',
  weddingTimestamp: '2026-11-15T07:00:00+07:00',
  venueNameKhmer: 'មណ្ឌលរៀបចំពិធីមង្គលការ (ក្រុងដូនកែវ)',
  venueNameEnglish: 'Wedding Reception Venue (Doun Kaev)',
  venueHall: 'ក្រុងដូនកែវ ខេត្តតាកែវ (Plus Code: XQHP+HM5)',
  venueAddressKhmer: 'XQHP+HM5 ក្រុងដូនកែវ ខេត្តតាកែវ ប្រទេសកម្ពុជា',
  venueAddressEnglish: 'XQHP+HM5 Doun Kaev, Takeo Province, Cambodia',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=XQHP%2BHM5+Doun+Kaev',
  youtubeVideoId: 'YgGG8UysqUE',
  youtubeUrl: 'https://youtu.be/YgGG8UysqUE?si=NGfi1tD0d8vkKlnU',
  khqrAccountName: 'SOPHAL SEM',
  khqrAccountNumber: '600 807 171 (KHR) / 004 425 135 (USD)',
  khqrKhrAccount: '600 807 171',
  khqrUsdAccount: '004 425 135',
  khqrBankName: 'ABA Bank',
  coupleQuoteKhmer: '«ក្តីស្រឡាញ់ គឺការរួមដំណើរជាមួយគ្នាដោយការគោរព យោគយល់ និងផ្តល់តម្លៃឱ្យគ្នាជារៀងរហូត»',
  coupleQuoteEnglish: '"Two souls intertwined in mutual respect, devotion and lifelong harmony."',
  showRsvp: false,
  schedule: [
    {
      id: '1',
      time: '០៧:០០ ព្រឹក (07:00 AM)',
      khmerTitle: 'ពិធីហែជំនូន & សែនក្រុងពាលី',
      englishTitle: 'Groom Procession & Ancestral Blessings',
      khmerDesc: 'ក្បួនហែផ្លែឈើជំនូន និងគ្រឿងបណ្ណាការ ឆ្ពោះទៅកាន់គេហដ្ឋានខាងស្រី ប្រកបដោយភាពរីករាយ។',
      englishDesc: 'Traditional procession of fruit trays and gifts presented to the bride’s residence.',
      iconType: 'procession',
    },
    {
      id: '2',
      time: '០៨:៣០ ព្រឹក (08:30 AM)',
      khmerTitle: 'ពិធីកាត់សក់បង្កក់សិរី',
      englishTitle: 'Gaat Sah (Hair Cutting & Cleansing Ceremony)',
      khmerDesc: 'ពិធីកាត់សក់ដើម្បីជម្រះរឿងអពមង្គល និងប្រសិទ្ធពរជ័យសិរីសួស្តីដល់គូស្វាមីភរិយាថ្មី។',
      englishDesc: 'Symbolic cleansing and theatrical comedic blessings by parents and elders.',
      iconType: 'haircut',
    },
    {
      id: '3',
      time: '១០:៣០ ព្រឹក (10:30 AM)',
      khmerTitle: 'ពិធីសំពះផ្ទឹម ចងដៃ & បង្វិលពពិល',
      englishTitle: 'Sompeah Phtim (Knot-Tying & Passing of Blessings)',
      khmerDesc: 'ពិធីចងអំបោះក្រហមសូត្រលើកដៃ និងបង្វិលពពិល ៧ ជុំ ដើម្បីទទួលពរជ័យពីមាតាបិតា និងចាស់ទុំ។',
      englishDesc: 'The sacred red-thread wrist-tying ceremony and sacred candle rotation.',
      iconType: 'tying',
    },
    {
      id: '4',
      time: '០៥:០០ ល្ងាច (05:00 PM)',
      khmerTitle: 'ពិធីពិសាភោជនាហារ និងរាំកម្សាន្ត',
      englishTitle: 'Wedding Banquet Dinner & Evening Reception',
      khmerDesc: 'សូមគោរពអញ្ជើញភ្ញៀវកិត្តិយសទាំងអស់ ពិសាភោជនាហារ និងចូលរួមរាំកម្សាន្តអបអរសាទរ។',
      englishDesc: 'Honored guests are cordially invited to enjoy the formal banquet, toasts, and music celebration.',
      iconType: 'banquet',
    },
  ],
};

export const INITIAL_WISHES: GuestWish[] = [];
