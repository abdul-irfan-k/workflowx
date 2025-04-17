import { createAuthDependencies } from './auth/authDI';

const authDependencies = createAuthDependencies();

export const dependencies = {
  auth: authDependencies,
};

export const flattenDependencies = {
  services: {
    ...authDependencies.services,
  },
  repositories: {
    ...authDependencies.repositories,
  },
  useCases: {
    ...authDependencies.useCases,
  },
  controllers: {
    ...authDependencies.controllers,
  },
};
