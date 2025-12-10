'use client';

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Image from 'next/image';

const Hero = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        setMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
            aria-label="Hero section"
        >
            <div className="absolute inset-0 bg-background transition-colors duration-300">
                {mounted && (
                    <motion.div
                        className="pointer-events-none absolute inset-0 opacity-30"
                        style={{
                            background: `radial-gradient(600px circle at ${x}px ${y}px, var(--primary), transparent 40%)`,
                        }}
                    />
                )}

                <div
                    className="absolute inset-0 opacity-[0.03]"
                    aria-hidden="true"
                    style={{
                        backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px),
                     linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />

                <motion.div
                    className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
                    aria-hidden="true"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"
                    aria-hidden="true"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-6xl md:text-8xl font-display font-bold mb-4 leading-tight tracking-tight">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x">
                                    Eric Mwangi
                                </span>
                                <br />
                                <span className="text-text-primary">Kinyua</span>
                            </h1>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-2xl md:text-3xl text-text-secondary font-light"
                        >
                            Web Developer <span className="text-primary mx-2">|</span> Designer <span className="text-primary mx-2">|</span> IT Support
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-text-secondary text-lg md:text-xl max-w-xl leading-relaxed"
                        >
                            I'm a versatile web developer passionate about building intuitive, modern digital experiences. With strong expertise in React, Next.js, Laravel, and Tailwind, I craft scalable solutions that balance functionality with design.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 25px var(--primary)" }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-8 py-4 bg-primary rounded-xl font-semibold text-white overflow-hidden shadow-lg shadow-primary/30"
                                aria-label="View my projects"
                            >
                                <span className="relative z-10">View Projects</span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                    aria-hidden="true"
                                />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border border-border-color bg-surface/50 backdrop-blur-sm rounded-xl font-semibold text-text-primary hover:border-primary/50 hover:bg-surface transition-all shadow-lg shadow-black/5"
                                aria-label="Contact me"
                            >
                                Contact Me
                            </motion.button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap gap-3 pt-6"
                            role="list"
                            aria-label="Technology stack"
                        >
                            {['React', 'Next.js', 'Tailwind', 'UI/UX'].map((tech, index) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                    className="px-4 py-2 bg-surface/50 border border-border-color rounded-full text-sm font-medium text-text-secondary backdrop-blur-sm hover:border-primary/50 hover:text-primary transition-all cursor-default shadow-sm"
                                    role="listitem"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative hidden md:flex justify-center items-center"
                    >
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 5, 0, -5, 0]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-secondary/30 to-accent/30 rounded-full blur-3xl scale-110" />

                            <div className="relative z-10 glass-card rounded-3xl p-4 transform rotate-3 transition-transform hover:rotate-0 duration-500">
                                <Image
                                    src="/assets/hero_image.png"
                                    alt="eric mwangi"
                                    width={500}
                                    height={500}
                                    className="w-full h-auto object-contain rounded-2xl"
                                    priority
                                />

                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full blur-xl opacity-60"></div>
                                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full blur-xl opacity-60"></div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                aria-hidden="true"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center pt-2 opacity-60"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
