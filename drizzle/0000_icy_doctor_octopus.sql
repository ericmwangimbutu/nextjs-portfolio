CREATE TABLE IF NOT EXISTS "Subscriber" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"name" text,
	"message" text,
	"createdAt" timestamp DEFAULT now(),
	CONSTRAINT "Subscriber_email_unique" UNIQUE("email")
);
