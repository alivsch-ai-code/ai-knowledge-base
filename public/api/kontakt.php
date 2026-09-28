<?php
// Kontaktformular-Versand über die PHP-mail()-Funktion von IONOS.
// Voraussetzung: Die Absenderadresse (FROM) existiert als Postfach bei IONOS.

const TO   = 'hallo@klarwerk.ai';
const FROM = 'website@klarwerk.ai';

function back(string $path): void {
    header('Location: ' . $path, true, 303);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    back('/kontakt/');
}

// Honeypot: Bots füllen das versteckte Feld aus
if (!empty($_POST['website'])) {
    back('/kontakt/danke/');
}

$clean = fn(string $key, int $max) => trim(mb_substr((string)($_POST[$key] ?? ''), 0, $max));

$name    = str_replace(["\r", "\n"], ' ', $clean('name', 100));
$email   = $clean('email', 200);
$topic   = str_replace(["\r", "\n"], ' ', $clean('topic', 100));
$message = $clean('message', 5000);
$consent = !empty($_POST['consent']);

if ($name === '' || $message === '' || !$consent || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    back('/kontakt/?fehler=1');
}

$subject = '=?UTF-8?B?' . base64_encode("Kontaktanfrage: $topic") . '?=';
$body    = "Name: $name\nE-Mail: $email\nThema: $topic\n\n$message\n";
$headers = implode("\r\n", [
    'From: Klarwerk Website <' . FROM . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'MIME-Version: 1.0',
]);

if (mail(TO, $subject, $body, $headers, '-f' . FROM)) {
    back('/kontakt/danke/');
}
back('/kontakt/?fehler=1');
