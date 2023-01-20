import Image from 'next/image'
import Head from 'next/head'
import React, {useState, useEffect, useRef} from 'react'
import * as Switch from '@radix-ui/react-switch';

export default function Semester() {
    return(
      <div className="container">
      <Head>
        <title>CSPennSearch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{backgroundColor:'#D291CC99'}}>
        <Switch.Root>
            <Switch.Thumb />
        </Switch.Root>
        <Image 
          src="/P2/column1.svg"
          alt="semester background"
          height={900}
          width={1050}
            style={{ zIndex: 1, objectFit: "cover"}}
        />
        <Image 
          src="/P2/column 2.svg"
          alt="semester background"
          height={900}
          width={150}
            style={{ zIndex: 1, objectFit: "cover", position:"relative", left:-52}}
        />

<Image 
          src="/P2/column 3.svg"
          alt="semester background"
          height={900}
          width={150}
            style={{ zIndex: 1, objectFit: "cover", position:"relative", left:-52}}
        />

      </main>
      <style jsx>{`

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .SwitchRoot {
            width: 200px;
            height: 205px;
            background-color: var(--blackA9);
            border-radius: 9999px;
            position: relative;
            box-shadow: 0 2px 10px var(--blackA7);
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }

        .SwitchRoot:focus {
            box-shadow: 0 0 0 2px black;
        }
        .SwitchRoot[data-state='checked'] {
            background-color: black;
        }

        .SwitchThumb {
            display: block;
            width: 100px;
            height: 200px;
            background-color: white;
            border-radius: 9999px;
            box-shadow: 0 2px 2px var(--blackA7);
            transition: transform 100ms;
            transform: translateX(2px);
            will-change: transform;
        }
        .SwitchThumb[data-state='checked'] {
            transform: translateX(19px);
        }

        .Label {
            color: white;
            font-size: 15px;
            line-height: 1;
        }


    
      `}</style>
      </div>
    )
}