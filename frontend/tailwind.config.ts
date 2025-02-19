import type { Config } from 'tailwindcss';

import myPlugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '1rem',
      },
      screens: {
        DEFAULT: '640px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1376px',
        '2xl': '1536px',
      },
    },
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontSize: {
        h1: [
          '47px',
          {
            lineHeight: '52px',
            fontWeight: 800,
          },
        ],
        h2: [
          '45px',
          {
            lineHeight: '52px',
            fontWeight: 700,
          },
        ],
        h3: [
          '36px',
          {
            lineHeight: '44px',
            fontWeight: 700,
          },
        ],
        h4: [
          '32px',
          {
            lineHeight: '40px',
            fontWeight: 700,
          },
        ],
        h5: [
          '28px',
          {
            lineHeight: '36px',
            fontWeight: 700,
          },
        ],
        h6: [
          '24px',
          {
            lineHeight: '32px',
            fontWeight: 700,
          },
        ],
        title1: [
          '22px',
          {
            lineHeight: '28px',
            fontWeight: 600,
          },
        ],
        title2: [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: 600,
          },
        ],
        title3: [
          '14px',
          {
            lineHeight: '20px',
            fontWeight: 600,
          },
        ],
        body1: [
          '22px',
          {
            lineHeight: '35px',
            fontWeight: 400,
          },
        ],
        body2: [
          '16px',
          {
            lineHeight: '25.6px',
            fontWeight: 400,
          },
        ],
        body3: [
          '14px',
          {
            lineHeight: '22.4px',
            fontWeight: 400,
          },
        ],
        body4: [
          '12px',
          {
            lineHeight: '16px',
            fontWeight: 400,
          },
        ],
        label1: [
          '20px',
          {
            lineHeight: '24px',
            fontWeight: 600,
          },
        ],
        label2: [
          '16px',
          {
            lineHeight: '20px',
            fontWeight: 600,
          },
        ],
        label3: [
          '14px',
          {
            lineHeight: '16px',
            fontWeight: 600,
          },
        ],
      },
    },
  },
  plugins: [
    myPlugin(function ({ addUtilities }) {
      addUtilities({
        '.my-utility': {
          property: 'value',
        },
      });
    }),
  ],
  corePlugins: {
    backdropFilter: true,
  },
};
export default config;
