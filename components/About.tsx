'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
                        {/* Placeholder for an image or abstract graphic */}
                        <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                            <span className="text-6xl">👨‍💻</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-6">About Me</h2>
                    <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                        I am a computer scientist with a deep passion for Artificial Intelligence and its potential to revolutionize development workflows.
                    </p>
                    <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                        With a background in Web Development, Design, and IT Support, I bring a versatile skillset to every project. I believe in creating interfaces that are not just functional, but also intuitive and visually stunning.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        My goal is to leverage modern tools like React, Next.js, Tailwind, and AI assistants to build high-quality software efficiently.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
