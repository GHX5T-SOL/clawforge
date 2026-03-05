#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HTML_PATH = path.join(
  __dirname,
  "../reports/ClawForge_Business_Plan_Report.html"
);
const PDF_PATH = path.join(
  __dirname,
  "../reports/ClawForge_AI_Agency_Ultimate_Business_Plan.pdf"
);

async function generatePDF() {
  const htmlPath = `file://${path.resolve(HTML_PATH)}`;
  if (!fs.existsSync(HTML_PATH)) {
    console.error("HTML file not found:", HTML_PATH);
    process.exit(1);
  }

  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto(htmlPath, { waitUntil: "networkidle0" });
  await page.pdf({
    path: PDF_PATH,
    format: "A4",
    printBackground: true,
    margin: { top: "20mm", right: "20mm", bottom: "20mm", left: "20mm" }
  });
  await browser.close();
  console.log("PDF generated:", PDF_PATH);
}

generatePDF().catch((err) => {
  console.error(err);
  process.exit(1);
});
