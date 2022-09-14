declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EMAIL_HOST: string;
      EMAIL_PORT: number;
      EMAIL_USER: string;
      EMAIL_PASS: string;
    }
  }
}

export {};
