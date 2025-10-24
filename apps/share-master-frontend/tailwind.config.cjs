module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#eab769',
          sand: '#f0d5a3',
          espresso: '#694501',
          tagBg: '#fcf6ec',
          tagText: '#ea9d2e',
          night: '#232122',
          deleteBg: '#f1f1f1',
          deleteText: '#a2a2a2',
          accent: '#e1ac7d',
          buttonLeft: '#f1d5a4',
          buttonRight: '#ebb565'
        }
      },
      fontFamily: {
        display: ['"Poppins"', 'system-ui', 'sans-serif'],
        body: ['"Noto Sans SC"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
