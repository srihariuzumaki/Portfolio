'use client';
import Spline from '@splinetool/react-spline';
import { RainbowButton } from '../components/ui/rainbow-button';
import { Suspense } from 'react';
import CustomCursor from '../components/CustomCursor';
import { Spotlight } from '../components/ui/spotlight.jsx';

const LoadingSpinner = () => (
  <div className="w-full h-full flex items-center justify-center bg-background">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
  </div>
);

const Hero = () => {
  return (
    <>
      <CustomCursor />
      <style jsx global>{`
        body {
          cursor: none;
          background-color: #000000;
        }
        .custom-cursor {
          width: 20px;
          height: 20px;
          background-color: white;
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          transition: transform 0.3s ease;
        }
      `}</style>
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black" id="home">
        {/* Spotlight Effect */}
        <Spotlight
          className="opacity-100"
          size={200}
          springOptions={{
            bounce: 0.1,
            damping: 20,
            stiffness: 100,
          }}
        />

        {/* Hero Content */}
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 relative z-10 px-8 sm:px-12 mt-[-10%]">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-white hover-target">
              Hi, I am Srihari 👋
            </h1>
            <div className="space-y-3">
              <p className="text-xl text-gray-400 hover-target">
                An aspiring Web Developer
              </p>
              <p className="text-lg text-gray-500 max-w-2xl hover-target leading-relaxed">
                Building interactive and immersive web experiences. Passionate about creating 
                beautiful user interfaces with modern technologies like React, Three.js, and 
                cutting-edge animation libraries.
              </p>
            </div>
          </div>
        </div>

        {/* 3D Scene Background */}
        <div className="absolute inset-0 w-full h-full">
          <Suspense fallback={<LoadingSpinner />}>
            <div className="translate-x-[30%]">
              <Spline
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </Suspense>
        </div>

        {/* Resume Button */}
        <div className="absolute bottom-7 left-0 right-0 w-full z-10 flex justify-center">
          <a
            href="./assets/resume.pdf"
            onClick={(e) => {
              e.preventDefault();
              const link = document.createElement('a');
              link.href = './assets/srihari_resume.pdf';
              link.setAttribute('download', 'srihari_resume.pdf');
              link.style.display = 'none';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="hover-target"
          >
            <RainbowButton className="w-fit min-w-[250px] px-8 size-16">
              Get the Resume
            </RainbowButton>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
