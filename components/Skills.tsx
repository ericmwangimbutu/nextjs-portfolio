'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'PHP', level: 80 },
    { name: 'TypeScript', level: 80 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'AI Integration', level: 75 },
];

const Skills = () => {
    return (
        <section className="py-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card p-6 rounded-xl"
                    >
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold">{skill.name}</span>
                            <span className="text-blue-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
