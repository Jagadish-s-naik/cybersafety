"use client";

import dynamic from 'next/dynamic';
import { ReactPlugin } from '@21st-extension/react';

const TwentyFirstToolbar = dynamic(
  () => import('@21st-extension/toolbar-next').then(mod => {
    const { TwentyFirstToolbar } = mod;
    return (props: any) => (
      <TwentyFirstToolbar {...props} config={{ plugins: [ReactPlugin()] }} />
    );
  }),
  { ssr: false }
);

export default function ToolbarClient() {
  return <TwentyFirstToolbar />;
}
