import React, { useState } from 'react'
import Primarycard from '../cards/primarycard'
import Secondarycard from '../cards/secondarycard'
import primaryimg1 from './primaryimg1.jpg'
import primaryimg2 from './primaryimg2.jpg'
import primaryimg3 from './primaryimg3.jpg'
import sec1 from './secondary1.jpg'
import sec2 from './secondary2.jpg'
import sec3 from './secondary3.jpg'
import sec4 from './secondary4.jpg'
import sec5 from './secondary5.jpg'
import sec6 from './secondary6.jpg'
import problems21 from './problems21.jpg'
import problems22 from './problems22.jpg'
import Options1raw from './Options1raw'
import Option2raw from './Option2raw'
import { Link } from 'react-router-dom'
function Problems() {
  const [expand, setExpand] = useState(false)
  const problems = [
    {
      status: "",
      title: "1. Two Sum",
      solution: "https://leetcode.com/problems/two-sum/solution",
      compiler: "https://leetcode.com/problems/two-sum/description/",
      Acceptance: "51.6%",
      Difficulty: "Easy"
    },
    {
      status: "",
      title: "2. Add Two Numbers",
      solution: "https://leetcode.com/problems/add-two-numbers/editorial/",
      compiler: "https://leetcode.com/problems/add-two-numbers/description/",
      Acceptance: "42.1%",
      Difficulty: "Medium"
    },
    {
      status: "",
      title: "3. Longest Substring Without Repeating Characters",
      solution: "https://leetcode.com/problems/longest-substring-without-repeating-characters/editorial/",
      compiler: "https://leetcode.com/problems/longest-substring-without-repeating-characters/description/",
      Acceptance: "34.4%",
      Difficulty: "Medium"
    },
    {
      status: "",
      title: "4. Median of Two Sorted Arrays",
      solution: "https://leetcode.com/problems/median-of-two-sorted-arrays/editorial/",
      compiler: "https://leetcode.com/problems/median-of-two-sorted-arrays/description/",
      Acceptance: "39.1%",
      Difficulty: "Hard"
    },
    {
      status: "",
      title: "5. Longest Palindromic Substring",
      solution: "https://leetcode.com/problems/longest-palindromic-substring/editorial/",
      compiler: "https://leetcode.com/problems/longest-palindromic-substring/description/",
      Acceptance: "33.5%",
      Difficulty: "Medium"
    },
    {
      status: "",
      title: "1. Two Sum",
      solution: "https://leetcode.com/problems/two-sum/solution",
      compiler: "https://leetcode.com/problems/two-sum/description/",
      Acceptance: "51.6%",
      Difficulty: "Easy"
    },
    {
      status: "",
      title: "2. Add Two Numbers",
      solution: "https://leetcode.com/problems/add-two-numbers/editorial/",
      compiler: "https://leetcode.com/problems/add-two-numbers/description/",
      Acceptance: "42.1%",
      Difficulty: "Medium"
    },
    {
      status: "",
      title: "3. Longest Substring Without Repeating Characters",
      solution: "https://leetcode.com/problems/longest-substring-without-repeating-characters/editorial/",
      compiler: "https://leetcode.com/problems/longest-substring-without-repeating-characters/description/",
      Acceptance: "34.4%",
      Difficulty: "Medium"
    },
    {
      status: "",
      title: "4. Median of Two Sorted Arrays",
      solution: "https://leetcode.com/problems/median-of-two-sorted-arrays/editorial/",
      compiler: "https://leetcode.com/problems/median-of-two-sorted-arrays/description/",
      Acceptance: "39.1%",
      Difficulty: "Hard"
    },
    {
      status: "",
      title: "5. Longest Palindromic Substring",
      solution: "https://leetcode.com/problems/longest-palindromic-substring/editorial/",
      compiler: "https://leetcode.com/problems/longest-palindromic-substring/description/",
      Acceptance: "33.5%",
      Difficulty: "Medium"
    },
    {
      status: "",
      title: "1. Two Sum",
      solution: "https://leetcode.com/problems/two-sum/solution",
      compiler: "https://leetcode.com/problems/two-sum/description/",
      Acceptance: "51.6%",
      Difficulty: "Easy"
    },
    {
      status: "",
      title: "2. Add Two Numbers",
      solution: "https://leetcode.com/problems/add-two-numbers/editorial/",
      compiler: "https://leetcode.com/problems/add-two-numbers/description/",
      Acceptance: "42.1%",
      Difficulty: "Medium"
    },
    {
      status: "",
      title: "3. Longest Substring Without Repeating Characters",
      solution: "https://leetcode.com/problems/longest-substring-without-repeating-characters/editorial/",
      compiler: "https://leetcode.com/problems/longest-substring-without-repeating-characters/description/",
      Acceptance: "34.4%",
      Difficulty: "Medium"
    },
    {
      status: "",
      title: "4. Median of Two Sorted Arrays",
      solution: "https://leetcode.com/problems/median-of-two-sorted-arrays/editorial/",
      compiler: "https://leetcode.com/problems/median-of-two-sorted-arrays/description/",
      Acceptance: "39.1%",
      Difficulty: "Hard"
    },
    {
      status: "",
      title: "5. Longest Palindromic Substring",
      solution: "https://leetcode.com/problems/longest-palindromic-substring/editorial/",
      compiler: "https://leetcode.com/problems/longest-palindromic-substring/description/",
      Acceptance: "33.5%",
      Difficulty: "Medium"
    },
  ]
  return (
    <div className='problems-page'>
      <div className='problems'>
        <div className='problems1'>
          <div className='primary-cards'>
            <Primarycard Getimage={primaryimg1} />
            <Primarycard Getimage={primaryimg2} />
            <Primarycard Getimage={primaryimg3} />
          </div>
          <div className='secondary-cards'>
            <div className='p2-text'>
              <p>Study Plan</p>
              <p className='p2-text-2'>See all</p>
            </div>
            <div className='p2-card'>
              <div className='p2-card-1'>
                <Secondarycard secimg={sec1} text1={"Top interview 150"} text2={"Must-do list for Interview Prep"} />
                <Secondarycard secimg={sec2} text1={"LeetCode 75"} text2={"Ace Coding Interview with 75 Qs"} />
                <Secondarycard secimg={sec3} text1={"SQL 50"} text2={"Crack SQL Interview in 50 Qs"} />
              </div>
              <div className='p2-card-2'>
                <Secondarycard secimg={sec4} text1={"Introduction to Pandas"} text2={"Learn Basic Pandas in 15 Qs"} />
                <Secondarycard secimg={sec5} text1={"30 Days of Javascript"} text2={"Learn JS Basics with Qs"} />
                <Secondarycard secimg={sec6} text1={"Amazon Spring '23 High Frequency"} text2={"Practice Amazon 25 Recently Asked Qs"} />
              </div>
            </div>
          </div>
          <div className='third-section'>
            {expand ? (
              <>
                <Options1raw data1={"Array"} count1={1545} data2={"String"} count2={663} data3={"Hash Table"} count3={543} data4={"Dynamic Programming"} count4={480} data5={"Math"} count5={475} data6={"Sorting"} count6={365} data7={"Greedy"} count7={339} expand={expand} setexpand={setExpand} />
                <Options1raw data1={"Array"} count1={1545} data2={"String"} count2={663} data3={"Hash Table"} count3={543} data4={"Dynamic Programming"} count4={480} data5={"Math"} count5={475} data6={"Sorting"} count6={365} data7={"Greedy"} count7={339} expand={expand} setexpand={setExpand} />
                <Options1raw data1={"Array"} count1={1545} data2={"String"} count2={663} data3={"Hash Table"} count3={543} data4={"Dynamic Programming"} count4={480} data5={"Math"} count5={475} data6={"Sorting"} count6={365} data7={"Greedy"} count7={339} expand={expand} setexpand={setExpand} />
                <Options1raw data1={"Array"} count1={1545} data2={"String"} count2={663} data3={"Hash Table"} count3={543} data4={"Dynamic Programming"} count4={480} data5={"Math"} count5={475} data6={"Sorting"} count6={365} data7={"Greedy"} count7={339} expand={expand} setexpand={setExpand} />
                <Options1raw data1={"Array"} count1={1545} data2={"String"} count2={663} data3={"Hash Table"} count3={543} data4={"Dynamic Programming"} count4={480} data5={"Math"} count5={475} data6={"Sorting"} count6={365} data7={"Greedy"} count7={339} expand={expand} setexpand={setExpand} />
                <Options1raw data1={"Array"} count1={1545} data2={"String"} count2={663} data3={"Hash Table"} count3={543} data4={"Dynamic Programming"} count4={480} data5={"Math"} count5={475} data6={"Sorting"} count6={365} data7={"Greedy"} count7={339} expand={expand} setexpand={setExpand} />
                <Options1raw data1={"Array"} count1={1545} data2={"String"} count2={663} data3={"Hash Table"} count3={543} data4={"Dynamic Programming"} count4={480} data5={"Math"} count5={475} data6={"Sorting"} count6={365} data7={"Greedy"} count7={339} expand={expand} setexpand={setExpand} />
              </>
            ) : (
              <>
                <Options1raw data1={"Array"} count1={1545} data2={"String"} count2={663} data3={"Hash Table"} count3={543} data4={"Dynamic Programming"} count4={480} data5={"Math"} count5={475} data6={"Sorting"} count6={365} data7={"Greedy"} count7={339} expand={expand} setexpand={setExpand} />
              </>
            )}
            <Option2raw />
          </div>
          <div className='actual-problems'>
            <table>
              <thead>
                <tr>
                  <td>Status</td>
                  <td>Title</td>
                  <td>Solution</td>
                  <td>Acceptance</td>
                  <td>Difficulty</td>
                </tr>
              </thead>
              <tbody>
                {problems.map((curData) => {
                  const { title, Acceptance, solution, Difficulty, status , compiler } = curData;
                  const probTitle = title.substring(0, 42);

                  let difficultyClass = '';
                  switch (Difficulty) {
                    case 'Easy':
                      difficultyClass = 'easy';
                      break;
                    case 'Medium':
                      difficultyClass = 'medium';
                      break;
                    case 'Hard':
                      difficultyClass = 'hard';
                      break;
                    default:
                      difficultyClass = '';
                  }

                  return (
                    <tr>
                      <td>{status}</td>
                      <td>{<Link to={compiler}>{probTitle.length >= 42 ? `${probTitle}...` : title}</Link>}</td>
                      <td>{<Link to={solution}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" style={{ color: "#bf5af2" }} class="text-purple dark:text-dark-purple h-5 w-5"><path d="M10 15.464v-3.927a.8.8 0 011.259-.656l2.805 1.964a.8.8 0 010 1.31l-2.805 1.964A.8.8 0 0110 15.464z" /><path d="M7 4a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V9h-3a2 2 0 01-2-2V4H7zm8 .6V7h1.92L15 4.6zM4 5a3 3 0 013-3h7.039a3 3 0 012.342 1.126l2.962 3.701A3 3 0 0120 8.702V19a3 3 0 01-3 3H7a3 3 0 01-3-3V5z" /></svg></Link>}</td>
                      <td>{Acceptance}</td>
                      <td className={difficultyClass}>{Difficulty}</td>
                    </tr>
                  );
                })}

              </tbody>
            </table>
          </div>
        </div>
        <div className='problems2'>
          <img src={problems21} />
          <img src={problems22} />
        </div>
      </div>
    </div>
  )
}

export default Problems