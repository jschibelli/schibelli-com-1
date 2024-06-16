"use client";
import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/johnschibelli/",
		label: "LinkedIn",
		handle: "@johnschibelli",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:jschibelli@gmail.com",
		label: "Email",
		handle: "jschibelli@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/jschibelli",
		label: "Github",
		handle: "jschibelli",
	},
];

export default function Example() {
	return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="w-full grid-cols-12 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:gap-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
            About
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            John Schibelli is a distinguished Full Stack Web Developer with a
            rich history of impactful contributions to the tech industry. Since
            joining Intraweb Technology in October 2020, where he serves as the
            owner and president, John has demonstrated unparalleled expertise in
            web development, solidifying his reputation as a leading developer
            in his field. His innovative approach and dedication to excellence
            are evident through his creation of Schibelli.com, a modern, dynamic
            platform showcasing his mastery in NEXT.js, React, and GraphQL.
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            John’s journey in the tech world began with a remarkable tenure at
            CNBC, where he served as an 'On-Air' Graphic Designer. His creative
            prowess brought life to prominent shows such as 'Morning Call,'
            'Wake Up Call,' 'Dennis Miller,' and 'Power Lunch.' This role was a
            testament to his ability to blend technical skill with artistic
            vision, a combination that has become his signature style.
					</p>
					<p className="mt-6 text-lg leading-8 text-zinc-300">
						John’s talent extends beyond corporate environments. He was personally selected by comedian Jim Florentine to be the Art Director for 'Meet The Creeps, Vol. 2,' a project that showcased his versatility and creativity. Following his time with NBC, John dedicated his knowledge and passion to educating others, instructing graphic design and web development at The Chubb Institute until June 2009.
					</p>
					<p className="mt-6 text-lg leading-8 text-zinc-300">
						Beyond his professional achievements, John’s personal journey is equally inspiring. From traversing the country with his wife Tracy, hauling furniture for Allied Van Lines, to establishing a nurturing home in Northern New Jersey, John’s story is one of resilience and dedication.
					</p>
					<p className="mt-6 text-lg leading-8 text-zinc-300">
						John’s expertise isn’t confined to just full stack web development; his leadership and collaborative skills have also made him a vital asset to any team he joins. At Intraweb Technologies, he is known not only for his technical acumen but also for his ability to mentor colleagues and drive projects to successful completion. His work in AI development and web development exemplifies his forward-thinking approach and commitment to delivering high-quality solutions.
					</p>
					<p className="mt-6 text-lg leading-8 text-zinc-300">
						John's educational background and professional experiences are complemented by his continuous pursuit of knowledge and innovation. He remains at the forefront of technological advancements, constantly exploring new frameworks and methodologies to enhance his skill set. This dedication to lifelong learning ensures that he brings the most current and effective strategies to his work.
					</p>
					<p className="mt-6 text-lg leading-8 text-zinc-300">
						In his personal life, John is a devoted family man. He and his wife, Tracy, share a strong bond, having navigated life’s ups and downs together since they met in 1998. Their son, Jack, is a central part of their lives, and John takes pride in being a supportive and loving father.
					</p>
					<p className="mt-6 text-lg leading-8 text-zinc-300">
						John's roots in Northern New Jersey have always been a significant part of his identity. Despite living in various places, he has always considered New Jersey his true home. This deep connection to his community is reflected in his commitment to excellence and his drive to give back through his work and personal endeavors.
					</p>
					<p className="mt-6 text-lg leading-8 text-zinc-300">
						Through his resilience, creativity, and unwavering dedication, John Schibelli continues to leave an indelible mark on the tech industry and all who have the privilege of working with him. His story is one of remarkable achievements and an enduring spirit, making him a true leader and innovator in his field.
					</p>

          {/* {socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))} */}
        </div>
      </div>
    </div>
  );
}
