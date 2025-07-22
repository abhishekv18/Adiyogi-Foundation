// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//    extend: {
//       colors: {
//         // Golden Spiritual Palette
//         'sacred-gold': '#DAA520',
//         'deep-gold': '#B8860B', 
//         'soft-gold': '#F4E4BC',
//         'warm-ivory': '#FFFEF7',
//         'golden-cream': '#FDF6E3',
//         'rich-charcoal': '#2C2C2C',
//         'warm-brown': '#6B5B47',
        
//         // Semantic colors for forms/alerts
//         'success': '#059669',
//         'warning': '#EA580C', 
//         'error': '#DC2626',
//         'info': '#1E3A8A'
//       },
//       fontFamily: {
//         'sans': ['Inter', 'system-ui', 'sans-serif'],
//         'serif': ['Crimson Text', 'serif'],
//       },
//       boxShadow: {
//         'golden': '0 4px 12px rgba(218, 165, 32, 0.15)',
//         'golden-lg': '0 8px 24px rgba(218, 165, 32, 0.2)',
//         'soft': '0 2px 8px rgba(45, 55, 72, 0.1)',
//       },
//       backgroundImage: {
//         'golden-gradient': 'linear-gradient(135deg, #FDF6E3 0%, #F4E4BC 100%)',
//         'sacred-gradient': 'linear-gradient(135deg, #DAA520 0%, #B8860B 100%)',
//       },
//       animation: {
//         'fade-in': 'fadeIn 0.5s ease-in-out',
//         'slide-up': 'slideUp 0.5s ease-out',
//         'glow': 'glow 2s ease-in-out infinite alternate',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         slideUp: {
//           '0%': { transform: 'translateY(20px)', opacity: '0' },
//           '100%': { transform: 'translateY(0)', opacity: '1' },
//         },
//         glow: {
//           '0%': { boxShadow: '0 0 5px rgba(218, 165, 32, 0.3)' },
//           '100%': { boxShadow: '0 0 20px rgba(218, 165, 32, 0.6)' },
//         },
//       },
//       spacing: {
//         '18': '4.5rem',
//         '88': '22rem',
//       },
//       borderRadius: {
//         'xl': '1rem',
//         '2xl': '1.5rem',
//       }
//     },
//   },
//   plugins: [
//       require('@tailwindcss/forms')({
//       strategy: 'class',
//     }),
//   ],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       animation: {
    'spin-slow': 'spin 2s linear infinite',
  },
      colors: {
        // Red Spiritual Palette
        'sacred-crimson': '#C41E3A',
        'deep-ruby': '#8B1538', 
        'soft-rose': '#F4E8E8',
        'warm-ivory': '#FFFEF7',
        'rose-cream': '#FDF8F8',
        'rich-charcoal': '#2C2C2C',
        'warm-brown': '#6B4B4B',
                
        // Semantic colors for forms/alerts
        'success': '#059669',
        'warning': '#EA580C', 
        'error': '#DC2626',
        'info': '#1E3A8A'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Crimson Text', 'serif'],
      },
      boxShadow: {
        'crimson': '0 4px 12px rgba(196, 30, 58, 0.15)',
        'crimson-lg': '0 8px 24px rgba(196, 30, 58, 0.2)',
        'soft': '0 2px 8px rgba(45, 55, 72, 0.1)',
      },
      backgroundImage: {
        'sacred-gradient': 'linear-gradient(135deg, #FDF8F8 0%, #F4E8E8 100%)',
        'crimson-gradient': 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(196, 30, 58, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(196, 30, 58, 0.6)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [
      require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
