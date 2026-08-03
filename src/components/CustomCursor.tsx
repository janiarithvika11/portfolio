"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [visible, setVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
    const cursorSpringX = useSpring(cursorX, springConfig);
    const cursorSpringY = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Hide default cursor only if on desktop
        const checkViewport = () => {
            const isTouch = window.matchMedia("(pointer: coarse)").matches;
            setVisible(!isTouch);
        };

        checkViewport();

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            // Check if hovering over buttons, links, or inputs
            const target = e.target as HTMLElement;
            if (
                target?.tagName === "A" ||
                target?.tagName === "BUTTON" ||
                target?.closest("a") ||
                target?.closest("button") ||
                target?.classList.contains("clickable") ||
                target?.getAttribute("role") === "button"
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    if (!visible) return null;

    return (
        <>
            {/* Outer follow glow */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference bg-white"
                style={{
                    x: cursorSpringX,
                    y: cursorSpringY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovered ? 2.5 : 1,
                    backgroundColor: isHovered ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.9)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] mix-blend-difference bg-white"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovered ? 0.3 : 1,
                }}
            />
        </>
    );
}
