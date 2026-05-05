#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const wordlistPath = path.join(repoRoot, 'referrals', 'wordlist.txt');
const codesPath = path.join(repoRoot, 'referrals', 'codes.json');

const referrer = (process.argv[2] || '').trim();
if (!referrer) {
    process.stderr.write('Usage: npm run mint "<referrer note>"\n');
    process.stderr.write('Example: npm run mint "Jane (order #042)"\n');
    process.exit(1);
}

const words = fs.readFileSync(wordlistPath, 'utf8')
    .split('\n')
    .map(line => line.trim().toLowerCase())
    .filter(line => /^[a-z]+$/.test(line));

const uniqueWords = Array.from(new Set(words));
if (uniqueWords.length < 2) {
    process.stderr.write(`Wordlist at ${wordlistPath} needs at least two distinct words.\n`);
    process.exit(1);
}

const existing = fs.existsSync(codesPath)
    ? JSON.parse(fs.readFileSync(codesPath, 'utf8'))
    : [];

const taken = new Set(existing.map(entry => entry.code));

function pickPair() {
    const a = uniqueWords[Math.floor(Math.random() * uniqueWords.length)];
    let b = uniqueWords[Math.floor(Math.random() * uniqueWords.length)];
    let safety = 0;
    while (b === a && safety < 20) {
        b = uniqueWords[Math.floor(Math.random() * uniqueWords.length)];
        safety++;
    }
    return `${a}-${b}`;
}

const maxCombos = uniqueWords.length * (uniqueWords.length - 1);
if (taken.size >= maxCombos) {
    process.stderr.write('Wordlist exhausted — every word-pair is already issued. Add more words to wordlist.txt.\n');
    process.exit(1);
}

let code = pickPair();
let attempts = 0;
while (taken.has(code) && attempts < 500) {
    code = pickPair();
    attempts++;
}
if (taken.has(code)) {
    process.stderr.write('Could not find a free word-pair after 500 attempts. Add more words to wordlist.txt.\n');
    process.exit(1);
}

const entry = {
    code,
    referrer,
    issued: new Date().toISOString().slice(0, 10),
    redeemed: null,
    printed: false
};

existing.push(entry);
fs.writeFileSync(codesPath, JSON.stringify(existing, null, 2) + '\n');

const unprinted = existing.filter(e => !e.printed).length;
process.stdout.write(`↗ picked pair from referrals/wordlist.txt\n`);
process.stdout.write(`↗ no collision in referrals/codes.json\n`);
process.stdout.write(`↗ appended entry · ${unprinted} unprinted\n\n`);
process.stdout.write(`code: ${code}\n`);
