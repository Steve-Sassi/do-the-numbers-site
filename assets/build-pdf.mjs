import puppeteer from 'puppeteer';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = resolve(__dirname, 'enterprise-ai-playbook.html');
const pdfPath = resolve(__dirname, 'enterprise-vibe-coding-guide.pdf');

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');

await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 });

await page.pdf({
  path: pdfPath,
  format: 'Letter',
  printBackground: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' }
});

await browser.close();
console.log('PDF saved to:', pdfPath);
