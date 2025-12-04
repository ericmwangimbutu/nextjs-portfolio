'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';


const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution built with Vue.js and Python/Django.',
        tags: ['Vue.js', 'Python', 'Django'],
        image: '/ecommerce-platform.png',
        liveDemo: 'https://alycs-fashion.com',
        sourceCode: 'https://github.com/ericmwangimbutu/alycs-fashion',
    },
    {
        title: 'Business Website',
        description: 'A modern business website with React and PHP/laravel.',
        tags: ['React', 'PHP', 'Laravel'],
        image: '/inner-beauty.png',
        liveDemo: 'https://inner-beauty.beauty',
        sourceCode: 'https://github.com/ericmwangimbutu/inner-beauty',
    },
    {
        title: 'Portfolio Website',
        description: 'A portfolio website built with Next.js and Tailwind CSS.',
        tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
        image: '/portfolio-website.png',
        liveDemo: 'https://ericmwangi.dev',
        sourceCode: 'https://github.com/ericmwangimbutu/nextjs-portfolio',
    },
    {
        title: 'Business Website',
        description: 'A modern business website with React and PHP/laravel.',
        tags: ['React', 'PHP', 'Laravel'],
        image: '/inner-beauty.png',
        liveDemo: 'https://inner-beauty.beauty',
        sourceCode: 'https://github.com/ericmwangimbutu/inner-beauty',
    },
    {
        title: 'Business Website',
        description: 'A modern business website with React and PHP/laravel.',
        tags: ['React', 'PHP', 'Laravel'],
        image: '/inner-beauty.png',
        liveDemo: 'https://inner-beauty.beauty',
        sourceCode: 'https://github.com/ericmwangimbutu/inner-beauty',
    },
];

const Portfolio = () => {
    return (
        <section className="py-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-xl overflow-hidden group"
                    >
                        <div className={`h-48 bg-gradient-to-br opacity-80 group-hover:opacity-100 transition-opacity`}>
                            <Image src={project.image} alt={project.title} width={500} height={500} className="object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs px-2 py-1 bg-white/10 rounded-full">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-2 p-6">
                            <Link href={project.liveDemo} target="_self" className="text-white bg-blue-500 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none">Live Demo</Link>
                            <Link href={project.sourceCode} target="github.com" className="text-white bg-success box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none">Source Code</Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
