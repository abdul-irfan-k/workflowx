import { createAuthDependencies } from './auth/auth.di';

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
