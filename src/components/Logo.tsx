'use client';

import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { useState, useEffect } from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by showing a placeholder during SSR
  if (!mounted) {
    return (
      <div className={`block ${className}`}>
        <div className="h-full w-auto bg-transparent" />
      </div>
    );
  }

  // On dark backgrounds (dark theme), show dark logo (white text)
  // On light backgrounds (light theme), show light logo (black text)
  const logoFileName = theme === 'dark' ? 'logo_dark.png' : 'logo_light.png';
  const fallbackTextColor = theme === 'dark' ? 'text-white' : 'text-black';

  return (
    <div className={`block ${className}`}>
      <Image
        src={`/${logoFileName}`}
        alt="Digimint"
        width={240}
        height={80}
        className="h-full w-auto"
        priority
        onError={(e) => {
          console.error(`Failed to load logo: /${logoFileName}`);
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement?.classList.add('text-2xl', 'font-bold', fallbackTextColor);
          e.currentTarget.parentElement!.textContent = 'Digimint';
        }}
      />
    </div>
  );
}