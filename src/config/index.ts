// Application Configuration

export const config = {
  app: {
    name: import.meta.env.VITE_APP_NAME || 'Advance Portfolio',
    version: import.meta.env.VITE_APP_VERSION || '1.0.0',
    environment: import.meta.env.VITE_ENVIRONMENT || 'development',
  },
  api: {
    baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
    timeout: 10000,
  },
  debug: import.meta.env.MODE === 'development',
};

export default config;
