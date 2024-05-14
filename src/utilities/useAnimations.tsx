//GSAP
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

//Funzione per scrollare ad una determinata posizione della pagina
export const handleScroll = (divId: string) => {
    gsap.to(window, { duration: 1, scrollTo: { y: divId, offsetY: 50 } });
}

//Posizione con effetto apparizione
export const handleFade = (ref: string, duration: number, delay: number) => {
    gsap.fromTo(ref, { opacity: 0 }, { opacity: 1, duration: duration, scrollTrigger: { trigger: ref }, delay: delay });
}