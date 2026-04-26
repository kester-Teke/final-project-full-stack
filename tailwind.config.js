/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                slate: {
                    900: '#0f172a',
                },
                green: {
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#16a34a',
                },
                emerald: {
                    500: '#10b981',
                    600: '#059669',
                    700: '#047857',
                },
                purple: {
                    900: '#581c87',
                },
                blue: {
                    500: '#3b82f6',
                },
                orange: {
                    500: '#f97316',
                    600: '#ea580c',
                },
                red: {
                    500: '#ef4444',
                    600: '#dc2626',
                    700: '#b91c1c',
                },
                yellow: {
                    400: '#facc15',
                    500: '#eab308',
                },
            },
            animation: {
                'fade-in': 'fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                'slide-up': 'slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                'slide-down': 'slideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                'scale-in': 'scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                'float': 'float 3s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite',
                'pulse-slow': 'pulseSlow 2s ease-in-out infinite',
                'spin-slow': 'spinSlow 20s linear infinite',
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
                slideDown: {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glow: {
                    '0%, 100%': { boxShadow: '0 0 5px rgba(34, 197, 94, 0.5)' },
                    '50%': { boxShadow: '0 0 20px rgba(34, 197, 94, 0.8)' },
                },
                pulseSlow: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                },
                spinSlow: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
            },
            boxShadow: {
                'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                'premium-lg': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
                'glow-green': '0 0 20px rgba(34, 197, 94, 0.5)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-premium': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            },
        },
    },
    plugins: [],
}