import { type ConfigContext, type ExpoConfig } from 'expo/config';
import assert from 'node:assert';

export default ({ config }: ConfigContext): ExpoConfig => {
  const name = config.name;
  const slug = config.slug;
  assert(name);
  assert(slug);

  return {
    name,
    slug,
    ...config,
    ios: {
      ...config.ios,
      googleServicesFile:
        process.env.IOS_GOOGLE_SERVICES_FILE_PATH ||
        './assets/stub-GoogleService-Info.plist',
    },
  };
};
