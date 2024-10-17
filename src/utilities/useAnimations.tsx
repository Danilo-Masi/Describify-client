// Gsap
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// Funzione per lo scrolling ad una determinata posizione della pagina
export const scrollToElement = (elementId: string) => {
    gsap.to(window, { duration: 1, scrollTo: { y: elementId, offsetY: 50 } });
}

// Animazione di dissolvenza con effetto apparizione
export const fadeInElement = (elementId: string, duration: number, delay: number) => {
    gsap.fromTo(elementId, { opacity: 0 }, { opacity: 1, duration: duration, scrollTrigger: { trigger: elementId }, delay: delay });
}