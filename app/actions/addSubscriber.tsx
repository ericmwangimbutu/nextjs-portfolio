'use server';

import { revalidatePath } from 'next/cache';
import { PrismaClient } from '@prisma/client/extension';

const prisma = new PrismaClient();


export async function addSubscriber(formData: FormData) {
    const email = formData.get('email')?.toString().trim();
    const name = formData.get('name')?.toString().trim();
    const message = formData.get('message')?.toString().trim();

    try {
        await prisma.subscriber.create({
            data: {
                email,
                name,
                message,
            },
        });
        revalidatePath('/');
    } catch (error) {
        console.error('Error adding subscriber:', error);
        throw error;
    }
}
