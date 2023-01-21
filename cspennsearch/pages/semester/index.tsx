import Image from 'next/image'
import Head from 'next/head'
import React, {useState, useEffect, useRef} from 'react'
import { Switch } from '@nextui-org/react';
import Link from 'next/link';

export default function Semester() {
    const [semester, setSemester] = useState(false);
    const handleSwitch = (e) => {
      setSemester((x)=>!x);
      console.log(semester);
    }
    return(
      <div className="container">
      <Head>
        <title>CSPennSearch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{backgroundColor:'#D291CC99'}}>
        <Switch style={{transform: "rotate(90deg)", position:"absolute", 
        top:400, left: 420}} squared size="xl" shadow color="secondary" value={semester} onChange={handleSwitch} >
        </Switch>

        <Image 
          src="/P2/column1.svg"
          alt="semester background"
          height={900}
          width={1050}
            style={{ zIndex: 1, objectFit: "cover"}}
        />
        <Link href={{
            pathname: "/workload",
            query: {semester: semester}
        }}><Image 
          src="/P2/column 2.svg"
          alt="semester background"
          height={900}
          width={150}
            style={{ zIndex: 1, objectFit: "cover", position:"relative", left:-52}}
        />
        </Link>

        <Image 
          src="/P2/column 3.svg"
          alt="semester background"
          height={900}
          width={150}
            style={{ zIndex: 1, objectFit: "cover", position:"relative", left:-52}}
        />

      </main>
      </div>
    )
}