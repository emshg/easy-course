import Image from 'next/image'
import Head from 'next/head'
import React, {useState, useEffect, useRef} from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Badge } from "@nextui-org/react";

export default function Tagging() {
    const router = useRouter();
    const preference = router.query;
    const [tags, setTags] = useState([]);
    const [courseData, setCourseData] = useState(Array());
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      setCourseData([]);
      async function fetchCourseData() {
        await fetch("http://localhost:3000/api/courses", {
          method: "GET"
        }).then((res) => res.json())
        .then((data) => {
          setCourseData(data.data);
          setLoading(false);
          console.log(data.data);
        });
      }
      fetchCourseData();
      }, []);

  if (isLoading) return( <p>Loading...</p>)
  
    const populateTag = () => {
      let keywordList = [];
      let check = new Set();
      let taglist = [];
        if (courseData.length>0) {
          courseData.map((course)=>{
            keywordList = keywordList.concat(course.keywords_yake)
          })
        }
        keywordList.map((keyword)=>{
          console.log(keyword);
          if(!check.has(keyword)){
            taglist.push(<Badge size='xl' isSquared>{keyword}</Badge>);
            check.add(keyword);
          }
        })
        return taglist;
    }

    const alltags = populateTag();
    
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

        <div>{alltags}</div>

        <Image 
          src="/P4/Group 25.svg"
          alt="semester background"
          height={900}
          width={120}
            style={{ zIndex: 1, objectFit: "cover", position:"absolute ! important", right:50, top:0, overflow:"hidden"}}
        />

      </main>
        </div>
    )
}