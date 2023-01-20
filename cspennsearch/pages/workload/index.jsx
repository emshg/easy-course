import Image from 'next/image'
import Head from 'next/head'
import React, {useState, useEffect, useRef} from 'react'
import { Radio, Text, Spacer } from "@nextui-org/react";
import Link from 'next/link';

export default function Semester() {
    const [checked, setChecked] = useState('');

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
        <div style={{position:'absolute !important', top:"150px", left:"387px", width:"200px"}}>
        <Radio value="Low" style={{height:"5rem !important", width:"5rem !important"}}></Radio>
        </div>
        <div style={{position:'absolute !important', top:"22px", left:"606px"}}>
        <Radio value="Medium" ></Radio>
        </div>
        <div style={{position:'absolute !important', top:"-110px", left:"914px"}}>
        <Radio value="High"></Radio>
        </div>

      </Radio.Group>
      {/* <Spacer y={1} style={{position:'absolute !important', top:"320px ! important"}}/> */}
      <Text style={{position:'absolute', zIndex:20,fontWeight:600,fontSize:30, width:"400px",top:"200px",left:"800px"}}>Workload: {checked}</Text>
      </div>
      <Link href={{
            pathname: "/tagging",
            query: checked
        }}>
        <Image 
          src="/P3/Group 19.svg"
          alt="semester background"
          height={900}
          width={150}
            style={{ zIndex: 1, objectFit: "cover", position:"absolute ! important", right:50, top:0}}
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