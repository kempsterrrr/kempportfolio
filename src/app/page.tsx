'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import ArrowLink from '@/components/links/ArrowLink';
import Arlinkdeploybutton from '@/components/buttons/Arlinkdeploybutton';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F also check usage rules.md
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.
//



export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <Logo className='w-16' />
          <h1 className='mt-4'>Next.js + Tailwind CSS + TypeScript Starter</h1>
          <p className='mt-2 text-sm text-gray-800'>
            A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
            Import, Seo, Link component
          </p>
          <p className='mt-2 text-sm text-gray-700'>
            <ArrowLink href='https://github.com/ARlinklabs/Nextjs-starter'>
              See the repository
            </ArrowLink>
          </p>

         
        <div className='mt-6'>
          <Arlinkdeploybutton />
          </div>

         
        </div>
      </section>
    </main>
  );
}
