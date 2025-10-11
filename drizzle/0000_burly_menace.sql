CREATE TABLE `komentar` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`message` text NOT NULL,
	`createdAt` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `send_history` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`whatsapp` text NOT NULL,
	`createdAt` integer DEFAULT (unixepoch()) NOT NULL
);
