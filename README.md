## Playwright Test Automation — SwiftTranslator (Singlish → Sinhala)
## 🧑‍🎓 Student Information

Name: RANMITH G A K                         
Registration Number: IT23567788                            
Assignment: IT3040 – ITPM Assignment 1              


## 📌 Project Description
This project contains automated end‑to‑end tests written with Playwright to verify the Singlish → Sinhala transliteration behavior of SwiftTranslator:

https://www.swifttranslator.com/

The suite validates positive, negative, and UI behaviors to ensure:

Transliteration accuracy for everyday language
Robust handling of mixed English terms, punctuation, and spacing
Real‑time UI updates during typing
Graceful behavior for invalid/edge inputs


## ✅ Prerequisites
Make sure the following are installed:

Node.js (v16+ recommended)
npm (bundled with Node.js)


If this is your first Playwright project on the machine, you’ll also need Playwright browsers (installed in the steps below).


## 🛠️ Installation

1.Clone or download the repository.
2.Open a terminal in the project root.
3.Install dependencies:

```bash
npm install
```

## 4.Install Playwright browsers (one‑time per environment):
```bash
npx playwright install
```

## ▶️ Running Tests
## Run all tests (headless by default)
```bash
npx playwright test
```
## Run headed (visible browser window)
```bash
npx playwright test --headed
```
## Run a specific file (headed)
```bash
npx playwright test tests/singlish.spec.ts --headed
```
## Run in UI Mode (great for debugging)
```bash
npx playwright test --ui
```

## View the HTML report
```bash
npx playwright show-report
```

## 🗂 Project Structure
```bash
ITPM-Assignment/
├─ node_modules/              # Dependencies
├─ playwright-report/         # HTML test reports (auto-generated)
├─ test-results/              # Raw results, traces, screenshots
├─ tests/
│  ├─ example.spec.ts         # (optional) Playwright sample — can be removed
│  └─ singlish.spec.ts        # Main Singlish → Sinhala tests
├─ .gitignore
├─ package.json
├─ package-lock.json
├─ playwright.config.ts       # Playwright config (projects, retries, reporter, etc.)
└─ README.md                  # This file

```
## 🧪 Test Categories

✅ Positive Functional Tests: 24 cases        
❌ Negative Functional Tests: 10 cases           
🎨 UI Test Cases: 1–2 focused scenarios (real‑time update, clear behavior)
Total: 35+ automated checks

## 🔍 What’s Covered

: Daily language usage (simple/compound/complex)      
: Interrogative & imperative forms      
: Tense variations (past/present/future)         
: Mixed language (Singlish + English terms/brands/abbreviations)     
: Punctuation, numbers, dates, currency, units       
: Formatting (multiple spaces, line breaks, long paragraphs)       
: UI behavior (real‑time output updates, clear/reset behavior)         
: Robustness against typos/slang/unsupported symbols     
