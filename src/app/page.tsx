'use client';

import * as React from 'react';
import '@/lib/env';


/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F also check usage rules.md
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.
//



export default function HomePage() {
  return (
      <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        ar://kemp
      </h1>
      <p className="mb-4 prose">
        Building blockchain ecosystems. Currently focused on the Permaweb as
        Head of Ecosystem @{" "}
        <a href="https://pds.inc/" target="_blank">
          PDS Inc
        </a>
        , decentralising access to Arweaave with{" "}
        <a href="https://ar.io/" target="_blank">
          AR.IO Network
        </a>
        . Supporting builders and founders to solve problems where data
        permanence and provenance matters.
      </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  );
}
