"use client";

import gsap from "gsap";
import { useRef } from "react";
import Link from "next/link";

import { IoIosArrowBack } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { notFound } from "next/navigation";

import { FiBook } from "react-icons/fi";

type VideosApiProp = {
  slug: string;
  title: string;
  image: string;
};

type VideoApiProp = {
  description: string;
  title: string;
  video: string;
  order: number;
};
type ButtonAulaProp = {
  text: string;
  curso: string;
  styleIcone?: string;
  styleButton?: string;
  video: VideoApiProp;
  videos: VideosApiProp[];
  btnPrev?: "ativa";
  btnPlaylist?: "ativa";
  btnCheckout?: "ativa";
  iconeReverse?: true;
};

export default function ButtonAula({
  text,
  btnPrev,
  btnCheckout,
  video,
  videos,
  curso,
  styleButton,
  styleIcone,
  btnPlaylist,
  iconeReverse,
}: ButtonAulaProp) {
  const iconeOne = useRef<HTMLSpanElement>(null);
  const textBTN = useRef<HTMLParagraphElement>(null);

  if (
    videos == undefined ||
    videos == null ||
    videos.length == 0 ||
    video == null ||
    video == undefined ||
    curso == undefined ||
    curso == null
  ) {
    notFound();
  }

  const videoindex = video.order;

  const preveiw =
    videoindex - 1 >= 0
      ? `/cursos/${curso}/${videos.at(videoindex - 1)?.slug}`
      : `/cursos/${curso}`;

  const next = `/cursos/${curso}/${videos.at(videoindex + 1)?.slug}`;

  const handlePointerDown = (e: React.PointerEvent) => {
    gsap.to(e.currentTarget, {
      scale: 0.97,
      duration: 0.15,
      ease: "power1.out",
    });

    gsap.to(textBTN.current, {
      opacity: 0,
    });

    gsap.fromTo(
      iconeOne.current,
      { opacity: 0 },
      {
        position: "absolute",
        marginLeft: 0,
        opacity: 1,
        color: "red",
        ease: "bounce",
        duration: 0.5,
      }
    );
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const buttonConfig = [
    {
      ativa: btnPrev === "ativa",
      href: preveiw,
      IconeAntes: IoIosArrowBack,
      iconeRef: iconeOne,
    },
    {
      ativa: btnPlaylist === "ativa",
      href: `/cursos/${curso}`,
      IconeAntes: FiBook,
      iconeRef: iconeOne,
    },
    {
      ativa: btnCheckout === "ativa",
      href: next,
      IconeAntes: FaCheck,
      iconeRef: iconeOne,
    },
  ];

  return (
    <>
      {buttonConfig
        .filter(({ ativa }) => ativa)
        .map(({ href, IconeAntes, iconeRef }, index) => (
          <Link
            key={index}
            href={href}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            className={`flex items-center justify-center 
              py-2 md:px-5 max-md:px-2 
           md:full flex-1 gap-2 h-15
          text-sm cursor-pointer ${
            iconeReverse ? "flex-row-reverse" : ""
          } md:flex-col   border border-black/5 relative  rounded-sm ${styleButton}`}
          >
            {/* Ícone antes do texto, se existir */}
            {IconeAntes && (
              <>
                <span ref={iconeRef} className="max-md:ml-3">
                  <IconeAntes
                    className={`${styleIcone}  max-md:text-end  size-6`}
                  />
                </span>
                <p className="flex-1 text-center " ref={textBTN}>
                  {text}
                </p>
              </>
            )}
          </Link>
        ))}
    </>
  );
}
