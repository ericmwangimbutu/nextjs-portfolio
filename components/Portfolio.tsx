'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution built with Next.js and modern technologies.',
        tags: ['Next.js', 'TypeScript', 'Stripe'],
        color: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'AI Dashboard',
        description: 'Analytics dashboard visualizing AI model performance metrics.',
        tags: ['React', 'D3.js', 'Python'],
        color: 'from-purple-500 to-pink-500'
    },
    {
        title: 'Corporate Portal',
        description: 'Internal portal for IT support ticketing and resource management.',
        tags: ['Next.js', 'Firebase', 'Tailwind'],
        color: 'from-green-500 to-emerald-500'
    }
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
                        <div className={`h-48 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs px-2 py-1 bg-white/10 rounded-full">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
