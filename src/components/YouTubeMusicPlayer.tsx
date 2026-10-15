import React, { useEffect, useRef, useState } from 'react';
import { Music, Pause, Play, Volume2, VolumeX, ExternalLink, Disc } from 'lucide-react';

interface YouTubeMusicPlayerProps {
  videoId: string;
  isPlaying: boolean;
  onTogglePlay: () => void;
  lang: 'km' | 'en';
}

// Declare YouTube API types on window
declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: {
      Player: new (
        elementId: string | HTMLElement,
        options: {
          videoId?: string;
          playerVars?: Record<string, unknown>;
          events?: {
            onReady?: (event: { target: YTPlayerInstance }) => void;
            onStateChange?: (event: { data: number }) => void;
          };
        }
      ) => YTPlayerInstance;
      PlayerState?: {
        PLAYING: number;
        PAUSED: number;
        ENDED: number;
      };
    };
  }
}

interface YTPlayerInstance {
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  getPlayerState: () => number;
  destroy: () => void;
}

export const YouTubeMusicPlayer: React.FC<YouTubeMusicPlayerProps> = ({
  videoId,
  isPlaying,
  onTogglePlay,
  lang,
}) => {
  const playerRef = useRef<YTPlayerInstance | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlayerBar, setShowPlayerBar] = useState(true);

  // Initialize YouTube Iframe API
  useEffect(() => {
    const initPlayer = () => {
      if (!window.YT || !window.YT.Player) return;

      const playerDiv = document.getElementById('yt-wedding-audio-frame');
      if (!playerDiv) return;

      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch {
          // ignore
        }
      }

      playerRef.current = new window.YT.Player('yt-wedding-audio-frame', {
        videoId: videoId || 'YgGG8UysqUE',
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          loop: 1,
          playlist: videoId || 'YgGG8UysqUE',
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
        },
        events: {
          onReady: (event) => {
            setIsReady(true);
            if (isPlaying) {
              try {
                event.target.playVideo();
              } catch {
                // browser autoplay restriction
              }
            }
          },
          onStateChange: (event) => {
            if (window.YT && window.YT.PlayerState) {
              if (event.data === window.YT.PlayerState.ENDED) {
                // loop
                playerRef.current?.playVideo();
              }
            }
          },
        },
      });
    };

    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
      document.body.appendChild(tag);
    } else {
      initPlayer();
    }

    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch {
          // ignore
        }
      }
    };
  }, [videoId]);

  // Handle play/pause sync
  useEffect(() => {
    if (!playerRef.current || !isReady) return;
    try {
      if (isPlaying) {
        playerRef.current.playVideo();
      } else {
        playerRef.current.pauseVideo();
      }
    } catch {
      // ignore
    }
  }, [isPlaying, isReady]);

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!playerRef.current) return;
    try {
      if (isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    } catch {
      // ignore
    }
  };

  return (
    <>
      {/* Hidden YouTube Iframe Mount */}
      <div className="fixed -bottom-96 -right-96 pointer-events-none opacity-0 overflow-hidden w-1 h-1">
        <div id="yt-wedding-audio-frame" />
      </div>

      {/* Floating Elegant Wedding Music Bar */}
      {showPlayerBar && (
        <div className="fixed bottom-5 left-5 z-40 animate-fade-in max-w-[340px] sm:max-w-sm">
          <div className="flex items-center gap-3 p-2.5 sm:px-4 sm:py-3 rounded-2xl bg-[#221812]/90 backdrop-blur-md text-white border border-[#D4AF37]/40 shadow-2xl">
            {/* Spinning Gold Disc Icon */}
            <div
              onClick={onTogglePlay}
              className={`w-10 h-10 rounded-full bg-gradient-to-tr from-[#8E2818] to-[#C5A059] flex items-center justify-center cursor-pointer shadow-md shrink-0 border border-[#FFF0BA] ${
                isPlaying ? 'animate-spin [animation-duration:4s]' : ''
              }`}
              title={isPlaying ? 'Pause music' : 'Play wedding song'}
            >
              <Disc className="w-5 h-5 text-white" />
            </div>

            {/* Song Details */}
            <div className="flex-1 min-w-0 pr-1 cursor-pointer" onClick={onTogglePlay}>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-semibold text-[#F7E7A9] uppercase tracking-wider">
                  {lang === 'km' ? 'បទភ្លេងមង្គលការ' : 'Wedding Soundtrack'}
                </span>
                {isPlaying && (
                  <span className="flex gap-0.5 items-end h-3">
                    <span className="w-0.5 h-2 bg-[#F7E7A9] animate-pulse" />
                    <span className="w-0.5 h-3 bg-[#F7E7A9] animate-pulse [animation-delay:150ms]" />
                    <span className="w-0.5 h-1.5 bg-[#F7E7A9] animate-pulse [animation-delay:300ms]" />
                  </span>
                )}
              </div>
              <p className="text-xs font-medium text-stone-200 truncate font-khmer">
                In God's Perfect Time (Wedding Song)
              </p>
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={onTogglePlay}
              className="p-2 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-all shrink-0"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4 text-[#F7E7A9]" /> : <Play className="w-4 h-4 text-[#F7E7A9]" />}
            </button>

            {/* Mute/Unmute */}
            <button
              onClick={handleToggleMute}
              className="p-2 rounded-xl hover:bg-white/10 text-stone-300 hover:text-white transition-all shrink-0 hidden sm:inline-flex"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Direct Link to YouTube */}
            <a
              href={`https://youtu.be/${videoId || 'YgGG8UysqUE'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-stone-400 hover:text-[#F7E7A9] transition-colors shrink-0"
              title="Open video on YouTube"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
