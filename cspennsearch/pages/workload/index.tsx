import Image from 'next/image'
import Head from 'next/head'
import React, {useState, useEffect, useRef} from 'react'
import { Radio, Text, Spacer } from "@nextui-org/react";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'

export default function Semester() {
    const [checked, setChecked] = useState('');
    const params = useSearchParams();
    return(
      <div className="container">
      <Head>
        <title>CSPennSearch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{backgroundColor:'#D291CC99'}}>
        <Image 
          src="/P3/column2.svg"
          alt="semester background"
          height={900}
          width={1050}
            style={{ zIndex: 1, objectFit: "cover", position:"relative", left:80}}
        />
       <Image 
          src="/P3/Group 18.svg"
          alt="semester background"
          height={900}
          width={150}
            style={{ zIndex: 1, objectFit: "cover", position:"absolute", left:0}}
        />
        <div style={{position:'absolute !important',zIndex:20, top:"400px !important"}}>
        <Radio.Group 
        value={checked}
        onChange={setChecked}
      >
        <div style={{position:'absolute !important', top:"142px", left:"383px", width:"200px"}}>
        <Radio value="Low" color='success' size='xl' isSquared style={{height:"5rem !important", width:"5rem !important", zIndex:20}}></Radio>
        </div>
        <div style={{position:'absolute !important', top:"10px", left:"602px", zIndex:20}}>
        <Radio value="Medium" color='primary' isSquared size='xl'></Radio>
        </div>
        <div style={{position:'absolute !important', top:"-112px", left:"910px", zIndex:20}}>
        <Radio value="High" color='secondary' isSquared size='xl'></Radio>
        </div>

      </Radio.Group>
      {/* <Spacer y={1} style={{position:'absolute !important', top:"320px ! important"}}/> */}
      <Text color='secondary' style={{position:'absolute', zIndex:20,fontWeight:600,fontSize:30, width:"400px",top:"-200px",left:"500px"}}>Workload: {checked}</Text>
      </div>

      <Link href={{
            pathname: "/tagging",
            query: {
              semester: params.get('semester'),
              workload: checked
            }
        }}>

        <Image 
          src="/P3/Group 19.svg"
          alt="semester background"
          height={900}
          width={150}
            style={{ zIndex: 1, objectFit: "cover", position:"absolute", right:50, top:0}}
        />
        </Link>

      </main>
      <style jsx>{`
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
/* 
        label {
            position: absolute !important;
            top: 0
            z-index: 2;
        } */
/*         
        .Radio {
            position: absolute;
            top: 0
            z-index: 2;
        } */


    
      `}</style>
      </div>
    )
}