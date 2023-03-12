// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import javascript from "./assets/images/Skills/js.png";
import firebase from "./assets/images/Skills/firebase.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import native from "./assets/images/Skills/native.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import project4 from "./assets/images/Projects/img4.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
	nav: [
		{
			link: '#home',
			icon: TbSmartHome,
		},
		{
			link: '#skills',
			icon: BiUser,
		},
		{
			link: '#services',
			icon: RiServiceLine,
		},
		{
			link: '#projects',
			icon: RiProjectorLine,
		},
		{
			link: '#contact',
			icon: MdOutlinePermContactCalendar,
		},
	],
	hero: {
		title: 'Web Developer',
		firstName: 'EMMANUEL',
		LastName: 'EZE',
		btnText: 'Hire Me',
		image: Hero_person,
		hero_content: [
			{
				count: '4+',
				text: 'Years of Experinse in Web development',
			},
			{
				count: '10+',
				text: 'Projects Worked in my career',
			},
		],
	},
	skills: {
		title: 'Skills',
		subtitle: 'MY TOP SKILLS',
		skills_content: [
			{
				name: 'Javascript',
				para: '4+ years experience',
				logo: javascript,
			},
			{
				name: 'Node js',
				para: '3+ years experience',
				logo: nodejs,
			},
			{
				name: 'Firebase',
				para: '1+ years experience',
				logo: firebase,
			},
			{
				name: 'React js',
				para: '2+ years experience',
				logo: reactjs,
			},
			{
				name: 'Figma',
				para: '2+ years experience',
				logo: figma,
			},
			{
				name: 'React Native',
				para: '1+ years experience',
				logo: native,
			},
		],
		icon: MdArrowForward,
	},
	services: {
		title: 'Services',
		subtitle: 'WHAT I OFFER',
		service_content: [
			{
				title: 'Web Development',
				para: 'I love developing responsive and beautiful websites and web applications.',
				logo: services_logo1,
			},
			{
				title: 'ui / ux DESIGNING',
				para: "Using Figma, i can produce stunning UI designs for products that suits the client's needs",
				logo: services_logo2,
			},
			{
				title: 'Mobile App Development',
				para: 'I build mobile native cross platform applications using React Native.',
				logo: services_logo3,
			},
		],
	},
	Projects: {
		title: 'Projects',
		subtitle: 'MY CREATION',
		image: person_project,
		project_content: [
			{
				title: 'Photography website',
				image: project1,
				link: 'https://headshotsbysam.netlify.app/',
			},
			{
				title: 'Publishing web app',
				image: project2,
				link: 'https://stridesconnect.vercel.app/protected/dashboard',
			},
			{
				title: 'Legal website',
				image: project3,
				link: 'https://www.htlegal.com.ng/',
			},
			{
				title: 'Architecture website',
				image: project4,
				link: 'https://palmsatelier.netlify.app/',
			},
		],
	},
	Testimonials: {
		title: 'Testimonials',
		subtitle: 'MY CLIENT REVIEWS',
		testimonials_content: [
			{
				review:
					'“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
				img: avatar1,
				name: 'JOHN DOE',
			},
			{
				review:
					'“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
				img: avatar2,
				name: 'Tom Alex',
			},
			{
				review:
					'“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
				img: avatar3,
				name: 'Johnny',
			},
			{
				review:
					'“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
				img: avatar4,
				name: 'ROBBIN',
			},
		],
	},
	Hireme: {
		title: 'Hire Me',
		subtitle: 'FOR YOUR PROJECTS',
		image1: Hireme_person,
		image2: Hireme_person2,
		para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean',
		btnText: 'Hire Me',
	},
	Contact: {
		title: 'Contact Me',
		subtitle: 'GET IN TOUCH',
		social_media: [
			{
				text: 'emmanuel.andyeze@gmail.com',
				icon: GrMail,
				link: 'mailto:emmanuel.andyeze@gmail.com',
			},
			{
				text: '+234 7034 343 002',
				icon: MdCall,
				link: 'https://wa.me/2347034343002',
			},
			{
				text: 'emmanuel-andy-eze',
				icon: BsLinkedin,
				link: 'https://www.linkedin.com/in/emmanuel-andy-eze-55833b216/',
			},
		],
	},
	Footer: {
		text: 'All © Copy Right Reserved 2022',
	},
};
