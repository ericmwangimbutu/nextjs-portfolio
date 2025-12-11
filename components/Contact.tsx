'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Github, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // For now, just simulate a successful submission
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const contactInfo = [
        {
            icon: Phone,
            title: 'Phone',
            value: '+254 798 865988',
            href: 'tel:+254798865988',
            color: 'text-blue-400'
        },
        {
            icon: Mail,
            title: 'Email',
            value: 'ericmwangimbutu@gmail.com',
            href: 'mailto:ericmwangimbutu@gmail.com',
            color: 'text-purple-400'
        },
        {
            icon: Github,
            title: 'GitHub',
            value: 'ericmwangimbutu',
            href: 'https://github.com/ericmwangimbutu',
            color: 'text-gray-400'
        }
    ];

    return (
        <section className="py-20" id="contact">
            <div className="container mx-auto px-4 md:px-20">
                <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="glass-card p-8 rounded-2xl h-full flex flex-col justify-center">
                            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                            <p className="text-gray-300 mb-8 text-lg">
                                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={index}
                                        href={info.href}
                                        target={info.title === 'GitHub' ? '_blank' : undefined}
                                        rel={info.title === 'GitHub' ? 'noopener noreferrer' : undefined}
                                        className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer"
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className={`p-3 rounded-full bg-white/5 ${info.color} group-hover:scale-110 transition-transform`}>
                                            <info.icon size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 font-medium">{info.title}</p>
                                            <p className="text-lg font-semibold tracking-wide">{info.value}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="glass-card p-8 rounded-2xl h-full">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-lg font-bold shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                                >
                                    <span>
                                        {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                                    </span>
                                    {status === 'idle' && <Send size={18} />}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
