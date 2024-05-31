import { InfinityAuthVariant1Props } from '@appcorp/app-corp-designs';

export const infinityAuthVariant1Data: InfinityAuthVariant1Props = {
  heading: 'Sign In',
  description: 'Sign in with your Google Account to proceed',
  socialLogins: [
    {
      alt: 'Google Logo',
      enabled: true,
      handleSignInWithProvider: () => console.log('handleSignInWithProvider'),
      id: 'item-1',
      label: 'SIGN IN WITH GOOGLE',
      providerLogo: 'https://wgipzowaktxphuhhqjzj.supabase.co/storage/v1/object/public/appcorpblob/google-logo.svg',
    },
  ],
  banner: 'https://wgipzowaktxphuhhqjzj.supabase.co/storage/v1/object/public/appcorpblob/app-corp-login.webp',
  bannerAlt: 'background image',
};
