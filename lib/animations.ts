import { Variants } from "framer-motion";

// Custom easing curve for a premium, smooth feel (Apple-like)
export const premiumEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Standard fade in and slide up
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.8, ease: premiumEasing } 
    },
};

// Fade in and slight scale up (for images or featured cards)
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
        opacity: 1, 
        scale: 1, 
        transition: { duration: 0.8, ease: premiumEasing } 
    },
};

// For staggering children elements (like lists or card grids)
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

// Slower stagger for hero sections
export const slowStaggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

// Floating animation for decorative elements or images
export const floatingAnimation = {
    y: ["-2%", "2%"],
    transition: {
        y: {
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut" as const,
        },
    },
};
