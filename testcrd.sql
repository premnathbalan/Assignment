create database testcrd;
use testcrd;
CREATE TABLE `users` (
  `id` varchar(32) DEFAULT NULL,
  `value` text NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `modified_on` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `users`
  ADD UNIQUE KEY `id` (`id`);
  