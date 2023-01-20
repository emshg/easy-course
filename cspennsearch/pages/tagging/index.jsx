import Image from 'next/image'
import Head from 'next/head'
import React, {useState, useEffect, useRef} from 'react'
import Link from 'next/link';

export default function Tagging() {
    const [tags, setTags] = useState([]);
    return(
        <div className="container">
      <Head>
        <title>CSPennSearch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{backgroundColor:'#D291CC99'}}>
        <Image 
          src="/P4/Group 22.svg"
          alt="semester background"
          height={900}
          width={1050}
            style={{ zIndex: 1, objectFit: "cover", position:"relative", left:80}}
        />
       <Image 
          src="/P4/Group 24.svg"
          alt="semester background"
          height={900}
          width={150}
            style={{ zIndex: 1, objectFit: "cover", position:"absolute", left:0}}
        />
        <div style={{position:'absolute !important',zIndex:20, top:"400px !important"}}>
   
      </div>
      <Link href={{
            pathname: "/tagging",
            query: tags
        }}>
        <Image 
          src="/P4/Group 25.svg"
          alt="semester background"
          height={900}
          width={120}
            style={{ zIndex: 1, objectFit: "cover", position:"absolute ! important", right:50, top:0, overflow:"hidden"}}
        />
        </Link>

      </main>
        </div>
    )
}