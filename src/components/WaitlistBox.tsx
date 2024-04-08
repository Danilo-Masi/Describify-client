import { useEffect, useRef } from "react";
//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
//Images
import profilePicture1 from '../assets/images/profile-picture-1.png';
import profilePicture2 from '../assets/images/profile-picture-2.png';
import profilePicture3 from '../assets/images/profile-picture-3.png';
import profilePicture4 from '../assets/images/profile-picture-4.png';
import profilePicture5 from '../assets/images/profile-picture-5.png';
import profilePicture6 from '../assets/images/profile-picture-6.png';
import WaitlistGadget from './WaitlistGadget';

export default function WaitlistBox() {

    const logoRef = useRef(null);
    const titleRef = useRef(null);
    const captionRef = useRef(null);
    const img1Ref = useRef(null);
    const img2Ref = useRef(null);
    const img3Ref = useRef(null);
    const img4Ref = useRef(null);
    const img5Ref = useRef(null);
    const img6Ref = useRef(null);

    useEffect(() => {
        const logo = logoRef.current;
        const title = titleRef.current;
        const caption = captionRef.current;
        const image1 = img1Ref.current;
        const image2 = img2Ref.current;
        const image3 = img3Ref.current;
        const image4 = img4Ref.current;
        const image5 = img5Ref.current;
        const image6 = img6Ref.current;
        gsap.fromTo(logo, { opacity: 0 }, { opacity: 1, duration: 1.5, scrollTrigger: { trigger: logo } });
        gsap.fromTo(title, { opacity: 0 }, { opacity: 1, duration: 1.5, scrollTrigger: { trigger: title }, delay: 0.5 });
        gsap.fromTo(caption, { opacity: 0 }, { opacity: 1, duration: 1, scrollTrigger: { trigger: caption }, delay: 1 });
        gsap.fromTo(image1, { opacity: 0 }, { opacity: 1, duration: 1, scrollTrigger: { trigger: image1 }, delay: 1.2 });
        gsap.fromTo(image2, { opacity: 0 }, { opacity: 1, duration: 1, scrollTrigger: { trigger: image2 }, delay: 1.5 });
        gsap.fromTo(image3, { opacity: 0 }, { opacity: 1, duration: 1, scrollTrigger: { trigger: image3 }, delay: 1.7 });
        gsap.fromTo(image4, { opacity: 0 }, { opacity: 1, duration: 1, scrollTrigger: { trigger: image4 }, delay: 1.9 });
        gsap.fromTo(image5, { opacity: 0 }, { opacity: 1, duration: 1, scrollTrigger: { trigger: image5 }, delay: 2.1 });
        gsap.fromTo(image6, { opacity: 0 }, { opacity: 1, duration: 1, scrollTrigger: { trigger: image6 }, delay: 2.3 });
        // Cleanup 
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div className='w-[90%] flex items-center justify-center'>
            <div className="w-full md:w-1/2 h-auto min-h-[50svh] flex flex-col items-center justify-center text-center p-5 gap-y-5 mb-5 md:mb-10 rounded-lg bg-gradient-to-tr from-emerald-500 via-cyan-700 to-blue-500">
                {/* Logo */}
                <h1 className="text-3xl font-bold text-balance text-dark-textPrimary" ref={logoRef}>Describify</h1>
                {/* Testo */}
                <div className='flex flex-col gap-y-2'>
                    <h1 className="text-2xl font-bold text-balance text-dark-textPrimary" ref={titleRef}>Join our journey and get early access</h1>
                    <p className="text-md font-light text-balance text-dark-textSecondary" ref={captionRef}>Join our extensive waitlist today to spark connection and get notified when we launch</p>
                </div>
                {/* Avatar */}
                <div className="flex -space-x-3 rtl:space-x-reverse">
                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={profilePicture1} alt="profile-picture-1" ref={img1Ref}/>
                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={profilePicture2} alt="profile-picture-2" ref={img2Ref}/>
                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={profilePicture3} alt="profile-picture-3" ref={img3Ref}/>
                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={profilePicture4} alt="profile-picture-4" ref={img4Ref}/>
                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={profilePicture5} alt="profile-picture-5" ref={img5Ref}/>
                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={profilePicture6} alt="profile-picture-6" ref={img6Ref}/>
                </div>
                {/* Input waitlist */}
                <WaitlistGadget
                    mdWidth='md:w-2/3'
                    buttonColor='bg-[#ecb405] dark:bg-[#F1C53D] border-[#FEF8E6] dark:border-[#FEF8E6] hover:bg-[#F1C53D] dark:hover:bg-[#ecb405]' />
            </div>
        </div>
    )
}
