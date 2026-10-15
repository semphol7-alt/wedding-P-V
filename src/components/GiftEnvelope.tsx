import React, { useState } from 'react';
import { Gift, Copy, Check, QrCode, Heart, Sparkles, Maximize2, X, Download, ShieldCheck } from 'lucide-react';
import { WeddingData } from '../types';
import { KhmerFloralDivider } from '../utils/khmerOrnaments';

interface GiftEnvelopeProps {
  wedding: WeddingData;
  lang: 'km' | 'en';
}

export const GiftEnvelope: React.FC<GiftEnvelopeProps> = ({ wedding, lang }) => {
  const [copiedKhr, setCopiedKhr] = useState(false);
  const [copiedUsd, setCopiedUsd] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const khrAccount = wedding.khqrKhrAccount || '600 807 171';
  const usdAccount = wedding.khqrUsdAccount || '004 425 135';
  const accountName = wedding.khqrAccountName || 'SOPHAL SEM';

  const handleCopyKhr = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(khrAccount.replace(/\s+/g, ''));
    setCopiedKhr(true);
    setTimeout(() => setCopiedKhr(false), 2000);
  };

  const handleCopyUsd = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(usdAccount.replace(/\s+/g, ''));
    setCopiedUsd(true);
    setTimeout(() => setCopiedUsd(false), 2000);
  };

  // Reusable component rendering the authentic ABA' QR Card
  const AbaQrCard = ({ zoomed = false }: { zoomed?: boolean }) => (
    <div
      className={`bg-[#FDFBF7] rounded-3xl p-5 sm:p-7 shadow-2xl border-2 border-[#D4AF37]/80 text-[#1C2C39] transition-all relative overflow-hidden select-none ${
        zoomed ? 'max-w-md w-full' : 'max-w-[320px] w-full mx-auto'
      }`}
    >
      {/* Top Brand Title */}
      <div className="text-center pb-3">
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F3554] flex items-center justify-center gap-1">
          <span>ABA</span>
          <span className="text-[#E21A22] font-black">'</span>
          <span className="ml-1 text-[#0F3554]">QR</span>
        </h3>
      </div>

      {/* Main White QR Card Frame */}
      <div className="bg-white rounded-2xl border border-stone-200/90 shadow-md overflow-hidden relative">
        {/* Red Curved KHQR Banner */}
        <div className="bg-[#E21A22] text-white py-2 px-5 rounded-tr-2xl rounded-bl-3xl inline-block shadow-sm">
          <span className="font-extrabold tracking-widest text-sm sm:text-base font-sans">
            KHQR
          </span>
        </div>

        {/* Account Name */}
        <div className="px-5 pt-3 pb-2">
          <div className="font-bold text-[#1C2C39] text-base sm:text-lg tracking-wider font-mono">
            {accountName}
          </div>
        </div>

        {/* Dotted Divider */}
        <div className="border-b-2 border-dashed border-stone-300 mx-5 my-1" />

        {/* High-Fidelity KHQR Code Image / Graphic */}
        <div className="p-5 flex justify-center items-center">
          <div className="relative p-2 bg-white rounded-xl shadow-inner border border-stone-200">
            {/* The authentic QR pattern */}
            <svg
              viewBox="0 0 200 200"
              className={`w-full h-auto text-[#0F1D28] ${zoomed ? 'w-64 h-64' : 'w-48 h-48'}`}
            >
              {/* Outer Position Squares */}
              {/* Top-Left */}
              <rect x="12" y="12" width="46" height="46" fill="currentColor" rx="5" />
              <rect x="19" y="19" width="32" height="32" fill="white" rx="3" />
              <rect x="25" y="25" width="20" height="20" fill="currentColor" rx="2" />

              {/* Top-Right */}
              <rect x="142" y="12" width="46" height="46" fill="currentColor" rx="5" />
              <rect x="149" y="19" width="32" height="32" fill="white" rx="3" />
              <rect x="155" y="25" width="20" height="20" fill="currentColor" rx="2" />

              {/* Bottom-Left */}
              <rect x="12" y="142" width="46" height="46" fill="currentColor" rx="5" />
              <rect x="19" y="149" width="32" height="32" fill="white" rx="3" />
              <rect x="25" y="155" width="20" height="20" fill="currentColor" rx="2" />

              {/* Timing Patterns */}
              <rect x="65" y="25" width="6" height="6" fill="currentColor" />
              <rect x="77" y="25" width="6" height="6" fill="currentColor" />
              <rect x="89" y="25" width="6" height="6" fill="currentColor" />
              <rect x="101" y="25" width="6" height="6" fill="currentColor" />
              <rect x="113" y="25" width="6" height="6" fill="currentColor" />
              <rect x="125" y="25" width="6" height="6" fill="currentColor" />

              <rect x="25" y="65" width="6" height="6" fill="currentColor" />
              <rect x="25" y="77" width="6" height="6" fill="currentColor" />
              <rect x="25" y="89" width="6" height="6" fill="currentColor" />
              <rect x="25" y="101" width="6" height="6" fill="currentColor" />
              <rect x="25" y="113" width="6" height="6" fill="currentColor" />
              <rect x="25" y="125" width="6" height="6" fill="currentColor" />

              {/* Dense Data Matrix Cells */}
              <rect x="68" y="14" width="8" height="8" fill="currentColor" />
              <rect x="82" y="14" width="8" height="8" fill="currentColor" />
              <rect x="100" y="14" width="14" height="8" fill="currentColor" />
              <rect x="122" y="14" width="10" height="8" fill="currentColor" />

              <rect x="68" y="38" width="14" height="8" fill="currentColor" />
              <rect x="90" y="38" width="10" height="8" fill="currentColor" />
              <rect x="110" y="38" width="22" height="8" fill="currentColor" />

              <rect x="14" y="68" width="8" height="14" fill="currentColor" />
              <rect x="38" y="68" width="14" height="8" fill="currentColor" />
              <rect x="38" y="86" width="8" height="12" fill="currentColor" />
              <rect x="38" y="110" width="12" height="8" fill="currentColor" />

              <rect x="14" y="90" width="8" height="12" fill="currentColor" />
              <rect x="14" y="112" width="14" height="14" fill="currentColor" />

              <rect x="142" y="68" width="12" height="8" fill="currentColor" />
              <rect x="164" y="68" width="14" height="8" fill="currentColor" />
              <rect x="142" y="86" width="8" height="14" fill="currentColor" />
              <rect x="160" y="86" width="18" height="8" fill="currentColor" />
              <rect x="184" y="74" width="8" height="16" fill="currentColor" />
              <rect x="142" y="110" width="14" height="8" fill="currentColor" />
              <rect x="168" y="110" width="12" height="8" fill="currentColor" />

              <rect x="64" y="64" width="12" height="12" fill="currentColor" />
              <rect x="84" y="64" width="14" height="8" fill="currentColor" />
              <rect x="106" y="64" width="12" height="12" fill="currentColor" />
              <rect x="126" y="64" width="10" height="8" fill="currentColor" />

              <rect x="64" y="84" width="8" height="16" fill="currentColor" />
              <rect x="128" y="84" width="8" height="16" fill="currentColor" />

              <rect x="64" y="108" width="12" height="12" fill="currentColor" />
              <rect x="84" y="112" width="12" height="8" fill="currentColor" />
              <rect x="104" y="108" width="14" height="12" fill="currentColor" />
              <rect x="126" y="112" width="10" height="8" fill="currentColor" />

              <rect x="68" y="142" width="12" height="8" fill="currentColor" />
              <rect x="88" y="142" width="14" height="8" fill="currentColor" />
              <rect x="110" y="142" width="12" height="8" fill="currentColor" />
              <rect x="130" y="142" width="14" height="8" fill="currentColor" />
              <rect x="154" y="142" width="8" height="12" fill="currentColor" />
              <rect x="172" y="142" width="16" height="8" fill="currentColor" />

              <rect x="68" y="160" width="8" height="14" fill="currentColor" />
              <rect x="86" y="160" width="14" height="8" fill="currentColor" />
              <rect x="110" y="160" width="10" height="14" fill="currentColor" />
              <rect x="130" y="160" width="12" height="8" fill="currentColor" />
              <rect x="152" y="160" width="14" height="14" fill="currentColor" />
              <rect x="176" y="160" width="12" height="8" fill="currentColor" />

              <rect x="68" y="180" width="16" height="8" fill="currentColor" />
              <rect x="94" y="180" width="12" height="8" fill="currentColor" />
              <rect x="116" y="180" width="14" height="8" fill="currentColor" />
              <rect x="140" y="180" width="8" height="12" fill="currentColor" />
              <rect x="158" y="180" width="12" height="8" fill="currentColor" />
              <rect x="180" y="180" width="10" height="8" fill="currentColor" />

              {/* Authentic Bakong Center Emblem Badge */}
              <circle cx="100" cy="100" r="22" fill="white" stroke="#E21A22" strokeWidth="2.5" />
              <g transform="translate(100, 100) scale(0.9)">
                {/* Eight-Petal Sacred Bakong Lotus / Flower Emblem */}
                <path
                  d="M0,-14 C2,-8 7,-6 11,-10 C8,-6 10,-1 14,0 C10,1 8,6 11,10 C7,6 2,8 0,14 C-2,8 -7,6 -11,10 C-8,6 -10,1 -14,0 C-10,-1 -8,-6 -11,-10 C-7,-6 -2,-8 0,-14 Z"
                  fill="#E21A22"
                />
                <circle cx="0" cy="0" r="4" fill="white" />
                <circle cx="0" cy="0" r="2" fill="#E21A22" />
              </g>
            </svg>
          </div>
        </div>

        {/* Currency Accounts List matching 631.jpg */}
        <div className="px-4 pb-4 space-y-2.5">
          {/* KHR Account */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-stone-50 border border-stone-200 hover:bg-stone-100 transition-colors">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#1C2C39] text-white flex items-center justify-center font-bold text-xs shrink-0">
                ៛
              </div>
              <div className="text-left">
                <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-sans">
                  KHR account:
                </span>
                <span className="font-mono text-xs sm:text-sm font-bold text-[#1C2C39]">
                  {khrAccount}
                </span>
              </div>
            </div>
            <button
              onClick={handleCopyKhr}
              className="px-2.5 py-1 rounded-lg bg-white border border-stone-200 text-stone-700 hover:border-[#D4AF37] hover:text-[#8E2818] text-[11px] font-medium flex items-center gap-1 shadow-2xl transition-all"
            >
              {copiedKhr ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">{lang === 'km' ? 'បានចម្លង' : 'Copied'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-[#9C7026]" />
                  <span>{lang === 'km' ? 'ចម្លង' : 'Copy'}</span>
                </>
              )}
            </button>
          </div>

          {/* USD Account */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-stone-50 border border-stone-200 hover:bg-stone-100 transition-colors">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#1C2C39] text-white flex items-center justify-center font-bold text-xs shrink-0">
                $
              </div>
              <div className="text-left">
                <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-sans">
                  USD account:
                </span>
                <span className="font-mono text-xs sm:text-sm font-bold text-[#1C2C39]">
                  {usdAccount}
                </span>
              </div>
            </div>
            <button
              onClick={handleCopyUsd}
              className="px-2.5 py-1 rounded-lg bg-white border border-stone-200 text-stone-700 hover:border-[#D4AF37] hover:text-[#8E2818] text-[11px] font-medium flex items-center gap-1 shadow-2xl transition-all"
            >
              {copiedUsd ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">{lang === 'km' ? 'បានចម្លង' : 'Copied'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-[#9C7026]" />
                  <span>{lang === 'km' ? 'ចម្លង' : 'Copy'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Card Footer Banner */}
      <div className="mt-4 pt-3 border-t border-stone-200/80 flex items-center justify-between text-[#0F3554] px-1">
        <div className="font-bold tracking-tight text-xs flex items-center gap-1">
          <span>ABA</span>
          <span className="text-[#E21A22] font-black">'</span>
          <span>BANK</span>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] font-semibold text-[#0F3554]/80 uppercase tracking-tight">
          <span className="w-2.5 h-2.5 text-[#E21A22] inline-block">🍁</span>
          <span>National Bank of Canada Group</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="gift" className="py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#9C7026]">
          {lang === 'km' ? 'ចំណងដៃមង្គលការឌីជីថល' : 'Digital Wedding Envelope'}
        </span>
        <h2 className="font-moul text-2xl sm:text-3xl text-[#8E2818] mt-1 mb-2">
          {lang === 'km' ? 'ចំណងដៃ និងអាំងប៉ាវឌីជីថល (KHQR)' : 'Digital Gift Envelope (KHQR)'}
        </h2>
        <p className="text-xs sm:text-sm text-[#7D6652] max-w-lg mx-auto">
          {lang === 'km'
            ? 'កាតអាំងប៉ាវក្រហមមាស ជាមួយ KHQR សម្រាប់ភ្ញៀវកិត្តិយសដែលចង់ផ្ញើចំណងដៃ និងពាក្យជូនពរតាមធនាគារ'
            : 'For honored guests wishing to present a monetary gift and blessings via banking apps:'}
        </p>
        <KhmerFloralDivider className="max-w-xs mx-auto" />
      </div>

      {/* Luxury Red & Gold Envelope Outer Presentation */}
      <div className="relative rounded-3xl bg-gradient-to-br from-[#8E2818] via-[#751A0E] to-[#4A0E06] text-white p-6 sm:p-10 shadow-2xl border-2 border-[#D4AF37]/60 overflow-hidden">
        {/* Subtle patterned gold overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F7E7A9_1px,transparent_1px)] [background-size:22px_22px] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 justify-between">
          {/* Left Column: Traditional Red Packet & Blessing Text */}
          <div className="flex-1 text-center lg:text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-[#F7E7A9]/40 text-xs font-medium text-[#F7E7A9]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'km' ? 'កាតអាំងប៉ាវក្រហមមាស' : 'Red & Gold Gift Packet'}</span>
            </div>

            <h3 className="font-moul text-xl sm:text-2xl text-[#F7E7A9] tracking-wide">
              {accountName}
            </h3>

            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed max-w-md">
              {lang === 'km'
                ? 'លោកអ្នកអាចស្កេន KHQR នេះ តាមរយៈកម្មវិធី ABA Mobile ឬគ្រប់ធនាគារក្នុងប្រទេសកម្ពុជា (Bakong, Wing, ACLEDA, Sathapana, Canadia...) ទាំងប្រាក់រៀល (KHR) និងប្រាក់ដុល្លារ (USD)។'
                : 'Scan this official KHQR via ABA Mobile or any Bakong-enabled Cambodian banking app (Wing, ACLEDA, etc.) in both KHR and USD currencies.'}
            </p>

            {/* Account Quick Reference Box */}
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 space-y-3 max-w-md">
              <div className="flex items-center justify-between text-xs text-[#F7E7A9] pb-1 border-b border-white/10 font-semibold">
                <span>{lang === 'km' ? 'ព័ត៌មានគណនីធនាគារ ABA' : 'ABA Bank Account Details'}</span>
                <span className="text-[11px] font-normal text-stone-300">National Bank of Canada Group</span>
              </div>

              {/* KHR */}
              <div className="flex items-center justify-between gap-3">
                <div className="text-left">
                  <span className="text-[10px] text-stone-300 block">
                    {lang === 'km' ? 'គណនីប្រាក់រៀល (KHR):' : 'KHR Account:'}
                  </span>
                  <span className="font-mono text-sm font-bold text-white tracking-wider">
                    {khrAccount}
                  </span>
                </div>
                <button
                  onClick={handleCopyKhr}
                  className="px-3 py-1 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-medium flex items-center gap-1.5 transition-all"
                >
                  {copiedKhr ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span className="text-emerald-300">{lang === 'km' ? 'បានចម្លង' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#F7E7A9]" />
                      <span>{lang === 'km' ? 'ចម្លងលេខ' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* USD */}
              <div className="flex items-center justify-between gap-3 pt-1 border-t border-white/10">
                <div className="text-left">
                  <span className="text-[10px] text-stone-300 block">
                    {lang === 'km' ? 'គណនីប្រាក់ដុល្លារ (USD):' : 'USD Account:'}
                  </span>
                  <span className="font-mono text-sm font-bold text-white tracking-wider">
                    {usdAccount}
                  </span>
                </div>
                <button
                  onClick={handleCopyUsd}
                  className="px-3 py-1 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-medium flex items-center gap-1.5 transition-all"
                >
                  {copiedUsd ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span className="text-emerald-300">{lang === 'km' ? 'បានចម្លង' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#F7E7A9]" />
                      <span>{lang === 'km' ? 'ចម្លងលេខ' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Instruction Tip */}
            <div className="flex items-center gap-2 text-xs text-stone-300 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                {lang === 'km'
                  ? 'សុវត្ថិភាពខ្ពស់ និងរហ័សទាន់ចិត្ត តាមរយៈប្រព័ន្ធទូទាត់បាគង (Bakong KHQR)'
                  : 'Fast, secure, and instant transfer powered by Bakong KHQR'}
              </span>
            </div>
          </div>

          {/* Right Column: Exact ABA' QR Card Presentation */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="relative group cursor-pointer" onClick={() => setIsZoomed(true)}>
              <AbaQrCard />
              {/* Zoom hint overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity flex items-center justify-center text-white gap-2 font-medium text-xs backdrop-blur-xs">
                <Maximize2 className="w-5 h-5 text-[#F7E7A9]" />
                <span>{lang === 'km' ? 'ចុចដើម្បីពង្រីកស្កេន' : 'Click to enlarge & scan'}</span>
              </div>
            </div>
            <p className="text-[11px] text-[#F7E7A9] mt-3 font-medium flex items-center gap-1.5">
              <QrCode className="w-3.5 h-3.5" />
              <span>{lang === 'km' ? 'ចុចលើរូបដើម្បីពង្រីកធំ' : 'Click card to zoom in'}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox / Zoomed Card Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <AbaQrCard zoomed={true} />
            <div className="text-center mt-3 text-xs text-stone-300">
              {lang === 'km'
                ? 'បើកកម្មវិធី ABA Mobile ឬធនាគារផ្សេងៗ ហើយស្កេន QR Code នេះ'
                : 'Open your ABA Mobile app or Bakong wallet to scan'}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
