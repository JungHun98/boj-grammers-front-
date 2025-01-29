declare global {
    namespace NodeJS {
      interface ProcessEnv {
        VITE_APP_URL: string;
      }
    }
  }