CREATE TABLE `komentar` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`message` text NOT NULL,
	`created_at` text DEFAULT (current_timestamp) NOT NULL
);
