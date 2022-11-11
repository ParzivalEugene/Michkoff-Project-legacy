import type {NextPage} from "next";
import styled from "styled-components";
import {Suspense} from "react";
import dynamic from "next/dynamic";
import colors from "../styles/colors";

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  suspense: true
});

const DefaultDiv = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`

const Hero = styled(DefaultDiv)`
  max-width: 1024px;
  display: flex;
  gap: 4rem;
  justify-content: center;
  width: 100%;
  margin-top: 6rem;
  color: #fff;
`

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem
`

const Home: NextPage = () => {
  // const users = trpc.user.all.useQuery();
  // if (!users.data) {
  //   return <div>Loading...</div>;
  // }
  // return <h1 className="text-2xl">{users.data.map((user) => user.name)}</h1>;

  return (
    <div>
      <Hero>
        <HeroText>
          <h1>Michkov Eugene</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In ullam nesciunt, laudantium porro accusantium
            dolorum nisi architecto veritatis reprehenderit laborum eos deleniti amet animi hic error dolore? Eos, iste
            hic.</p>
        </HeroText>
        <Suspense fallback={<div style={{"height": "128px", "width": "128px", "background": `${colors.text_sub}`}}/>}>
          <Spline scene="https://prod.spline.design/JwRrACAgzSTynr85/scene.splinecode"/>
        </Suspense>
      </Hero>
      <Hero>
        <HeroText>
          <h1>Michkov Eugene</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In ullam nesciunt, laudantium porro accusantium
            dolorum nisi architecto veritatis reprehenderit laborum eos deleniti amet animi hic error dolore? Eos, iste
            hic.</p>
        </HeroText>
        <Suspense fallback={<div style={{"height": "128px", "width": "128px", "background": `${colors.text_sub}`}}/>}>
          <Spline scene="https://prod.spline.design/JwRrACAgzSTynr85/scene.splinecode"/>
        </Suspense>
      </Hero>
      <Hero>
        <HeroText>
          <h1>Michkov Eugene</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In ullam nesciunt, laudantium porro accusantium
            dolorum nisi architecto veritatis reprehenderit laborum eos deleniti amet animi hic error dolore? Eos, iste
            hic.</p>
        </HeroText>
        <Suspense fallback={<div style={{"height": "128px", "width": "128px", "background": `${colors.text_sub}`}}/>}>
          <Spline scene="https://prod.spline.design/JwRrACAgzSTynr85/scene.splinecode"/>
        </Suspense>
      </Hero>
    </div>
  )
};

export default Home;