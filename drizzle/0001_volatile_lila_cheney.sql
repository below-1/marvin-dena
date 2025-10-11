ALTER TABLE `send_history` ADD `uniqueToken` text NOT NULL;--> statement-breakpoint
ALTER TABLE `send_history` ADD `url` text NOT NULL;--> statement-breakpoint
ALTER TABLE `send_history` ADD `attempt` integer DEFAULT 0 NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX `send_history_uniqueToken_unique` ON `send_history` (`uniqueToken`);--> statement-breakpoint
ALTER TABLE `send_history` DROP COLUMN `whatsapp`;