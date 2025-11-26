/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // バウムブルーム カラーパレット
        baum: {
          50: '#FFF8F0',
          100: '#FFF5EB',
          200: '#FFE6CC',
          300: '#FFD6AD',
          400: '#FFB570',
          500: '#FF6B00',  // メインカラー
          550: '#FF8533',  // グラデーション用
          600: '#E55A00',
          700: '#CC5000',
          800: '#A33F00',
          900: '#6B2A00',
        },
        // テキストカラー（直接使用可能）
        'text-primary': '#000000',
        'text-secondary': '#333333',
        'text-tertiary': '#666666',
        'text-light': '#999999',
        // 背景カラー（直接使用可能）
        'bg-cream': '#FFF8F0',
        'bg-orange-light': '#FFF5EB',
        // 後方互換性のため、ネスト構造も保持
        text: {
          primary: '#000000',
          secondary: '#333333',
          tertiary: '#666666',
          light: '#999999',
        },
        bg: {
          white: '#FFFFFF',
          cream: '#FFF8F0',
          'orange-light': '#FFF5EB',
        }
      },
      fontFamily: {
        sans: [
          'Noto Sans JP',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        'sm': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'md': '0 4px 24px rgba(0, 0, 0, 0.08)',
        'lg': '0 12px 40px rgba(0, 0, 0, 0.12)',
        'cta': '0 8px 24px rgba(255, 107, 0, 0.3)',
        'cta-hover': '0 12px 32px rgba(255, 107, 0, 0.4)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        'xl': '24px',
        '2xl': '32px',
        '3xl': '48px',
        'full': '9999px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(40px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { 
            opacity: '0', 
            transform: 'translateX(-50px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateX(0)' 
          },
        },
        slideInRight: {
          '0%': { 
            opacity: '0', 
            transform: 'translateX(50px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateX(0)' 
          },
        },
        scaleIn: {
          '0%': { 
            opacity: '0', 
            transform: 'scale(0.9)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'scale(1)' 
          },
        },
        gradientShift: {
          '0%, 100%': { 
            backgroundPosition: '0% 50%' 
          },
          '50%': { 
            backgroundPosition: '100% 50%' 
          },
        },
      },
    },
  },
  plugins: [],
}




