'use server';

import { revalidatePath } from 'next/cache';
import db from '../../lib/db';
import { subscribers } from '../../lib/schema';

export async function addSubscriber(formData: FormData) {
    const email = formData.get('email')?.toString().trim();
    const name = formData.get('name')?.toString().trim();
    const message = formData.get('message')?.toString().trim();

    if (!email) {
        return { success: false, error: 'Email is required' };
    }

    try {
        await db.insert(subscribers).values({
            email,
            name,
            message,
        });
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Error adding subscriber:', error);
        return { success: false, error: 'Failed to add subscriber' };
    }
}
