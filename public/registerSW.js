if ('serviceWorker' in navigator) { window.addEventListener('load', () => { navigator.serviceWorker.register('/sw.js', { scope: 'https://drello-app.herokuapp.com/' }) }) }