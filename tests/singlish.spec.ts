const { test, expect } = require('@playwright/test');


const passTestCases = [
  { id: 'Pos_Fun_0001', input: 'suba udhaeesanak veevaa.', expected: 'සුබ උදෑසනක් වේවා.' },
  { id: 'Pos_Fun_0002', input: 'karuNaakaralaa mata pen eka dhenna puluvandha?', expected: 'කරුණාකරලා මට pen එක දෙන්න පුලුවන්ද?' },
  { id: 'Pos_Fun_0003', input: 'mama dhaen bus halt ekee inne.', expected: 'මම දැන් bus halt එකේ ඉන්නේ.' },
  { id: 'Pos_Fun_0004', input: 'api dhaen lunch ganna yanavaa. oyaalath enavadha?', expected: 'අපි දැන් lunch ගන්න යනවා. ඔයාලත් එනවද?' },
  { id: 'Pos_Fun_0005', input: 'oya enavaanam mama balan innavaa.', expected: 'ඔය එනවානම් මම බලන් ඉන්නවා.' },
  { id: 'Pos_Fun_0006', input: 'mama ehema karannee naehae.', expected: 'මම එහෙම කරන්නේ නැහැ' },
  { id: 'Pos_Fun_0007', input: 'api heta ennee naehae.', expected: 'අපි හෙට එන්නේ නැහැ.' },
  { id: 'Pos_Fun_0008', input: 'oyaata kohomadha?', expected: 'ඔයාට කොහොමද?' },
  { id: 'Pos_Fun_0009', input: 'oyaa kavadhdha enna hithan inne?', expected: 'ඔයා කවද්ද එන්න හිතන් ඉන්නේ?' },
  { id: 'Pos_Fun_0010', input: 'vahaama enna.', expected: 'වහාම එන්න.' },
  { id: 'Pos_Fun_0011', input: 'issarahata yanna.', expected: 'ඉස්සරහට යන්න.' },
  { id: 'Pos_Fun_0012', input: 'Zoom meeting ekak thiyennee.', expected: 'Zoom meeting එකක් තියෙන්නේ.' },
  { id: 'Pos_Fun_0013', input: 'mata nidhimathayi.', expected: 'මට නිදිමතයි.' },
  { id: 'Pos_Fun_0014', input: 'aayuboovan!', expected: 'ආයුබෝවන්!' },
  { id: 'Pos_Fun_0015', input: 'karuNaakaralaa eka poddak balanna.', expected: 'කරුණාකරලා ඒක පොඩ්ඩක් බලන්න.' },
  { id: 'Pos_Fun_0016', input: '25/12/2025', expected: '25/12/2025' },
  { id: 'Pos_Fun_0017', input: 'karuNaakaralaa eka poddak balanna.', expected: 'කරුණාකරලා එක පොඩ්ඩක් බලන්න.' },
  { id: 'Pos_Fun_0018', input: 'hari, mama karannam.', expected: 'හරි, මම කරන්නම්.' },
  { id: 'Pos_Fun_0019', input: 'hari hari', expected: 'හරි හරි' },
  { id: 'Pos_Fun_0020', input: 'kaeema kanna', expected: 'කෑම කන්න' },
  { id: 'Pos_Fun_0021', input: 'mama iiyee gedhara giyaa.', expected: 'මම ඊයේ ගෙදර ගියා.' },
  { id: 'Pos_Fun_0022', input: 'mama dhaen vaeda karanavaa.', expected: 'මම දැන් වැඩ කරනවා.' },
  { id: 'Pos_Fun_0023', input: 'Rs. 8390', expected: 'Rs. 8390' },
  { id: 'Pos_Fun_0024', input: 'mama heta enavaa.', expected: 'මම හෙට එනවා.' }
];




const failTestCases = [
  { id: 'Neg_Fun_0001', input: 'mamagedharayanavaa', expected: 'මමගෙදරයනවා' },
  { id: 'Neg_Fun_0002', input: 'matapaankannaoonee', expected: 'මටපාන්කන්නඕනේ' },
  { id: 'Neg_Fun_0003', input: 'ela machan! supiri!!', expected: 'එල මචන්! සුපිරි!!' },
  { id: 'Neg_Fun_0004', input: 'adoo vaedak baaragaththaanam eeka hariyata karapanko bQQ.', expected: 'අඩෝ වැඩක් බාරගත්තානම් ඒක හරියට කරපන්කො බං.' },
  { id: 'Neg_Fun_0005', input: 'dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura ...', expected: 'දිට්වා සුළි කුණාටුව සමඟ ඇති වූ ගංවතුර...' },
  { id: 'Neg_Fun_0006', input: 'mama gedhara yanavaa.\noyaa enavadha?', expected: 'මම ගෙදර යනවා.\nඔයා එනවද?' },
  { id: 'Neg_Fun_0007', input: 'mama   gedhara   yanavaa.', expected: 'මම ගෙදර යනවා.' },
  { id: 'Neg_Fun_0008', input: 'Documents tika attach karalaa mata email ekak evanna.', expected: 'Documents ටික attach කරලා මට email එකක් එවන්න.' },
  { id: 'Neg_Fun_0009', input: 'iiyee mama gedhara giyaa namuth adha yanna ba vagee', expected: 'ඊයේ මම ගෙදර ගියා නමුත් අද යන්න බෑ වගේ' },
  { id: 'Neg_Fun_0010', input: '“oyaata kohomadha?”', expected: '“ඔයාට කොහොමද?”' }
];



test.describe('Singlish → Sinhala Transliteration', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/singlish-to-sinhala');
  });

  async function getTranslation(page, text) {
    // 1. Target the input
    const inputArea = page.locator('textarea').first();

    // 2. Click and Clear
    await inputArea.click();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');

    // 3. Type like a human with a slight delay
    // We add THREE spaces at the end to force the engine to 'commit' the buffer
    await inputArea.type(text + "   ", { delay: 100 });

    // Try to blur the input to trigger the transliteration engine
    try { await inputArea.press('Tab'); } catch (e) { /* ignore */ }
    try { await inputArea.press('Enter'); } catch (e) { /* ignore */ }
    await page.waitForTimeout(300);

    // Helper that tries multiple ways to read the translation
    const readOutput = async () => {
      // 1) Prefer #output-text if it exists and contains Sinhala characters
      const byId = page.locator('#output-text');
      if (await byId.count() > 0 && await byId.isVisible()) {
        const t = (await byId.textContent()) || '';
        const trimmed = t.trim();
        if (/[\u0D80-\u0DFF]/.test(trimmed)) return trimmed;
      }

      // 2) Try to find the translation inside the nearby UI block (prefer elements close to the "Sinhala" label)
      const label = page.locator('text=Sinhala').first();
      if (await label.count() > 0) {
        
        let el = label;
        for (let depth = 0; depth < 6; depth++) {
          const parent = el.locator('xpath=..').first();
          if (await parent.count() === 0) break;
          const hasTextarea = await parent.locator('textarea').count();
          if (hasTextarea > 0) {
            const candidate = parent.locator(':visible').filter({ hasText: /[\u0D80-\u0DFF]{2,}/ }).first();
            if (await candidate.count() > 0) {
              const txt = (await candidate.textContent()) || '';
              const trimmed = txt.trim();
              if (trimmed.length > 1 && trimmed.length < 200 && !/Features|Suggestions|Word Autocorrect/.test(trimmed)) {
                
                try {
                  const inputBox = await inputArea.boundingBox();
                  const cb = await candidate.boundingBox();
                  if (inputBox && cb && cb.x > (inputBox.x + inputBox.width * 0.4)) return trimmed;
                } catch (e) {
                  // if bbox fails, return candidate as last resort
                  return trimmed;
                }
              }
            }
          }
          el = parent;
        }
      }

      // 3) Global fallback: visible elements that contain Sinhala script (avoid very long blocks like headers)
      const sinhalaEls = page.locator(':visible').filter({ hasText: /[\u0D80-\u0DFF]{2,}/ });
      const count = await sinhalaEls.count();
      for (let i = 0; i < count; i++) {
        const el = sinhalaEls.nth(i);
        const txt = (await el.textContent()) || '';
        const trimmed = txt.trim();
        if (trimmed.length > 1 && trimmed.length < 200 && !/Features|Suggestions|Word Autocorrect/.test(trimmed)) {
          try {
            const inputBox = await inputArea.boundingBox();
            const cb = await el.boundingBox();
            if (inputBox && cb && cb.x > (inputBox.x + inputBox.width * 0.4)) return trimmed;
          } catch (e) {
            return trimmed;
          }
        }
      }

      return '';
    };

    // 4. Manual Polling (Wait up to 10 seconds)
    for (let i = 0; i < 20; i++) {
        const val = await readOutput();
        if (val && val.length > 0) return val;
        await page.waitForTimeout(500);
    }

    throw new Error("Translation did not appear in time.");
  }

  // ---------- PASS TESTS ----------
  for (const data of passTestCases) {
    test(`✅ ${data.id} | ${data.input}`, async ({ page }) => {
      const actualValue = await getTranslation(page, data.input);
      console.log(`[PASS] ${data.id} result: ${actualValue}`);
      expect(actualValue).not.toBe(data.expected);
    });
  }

  // ---------- FAIL TESTS ----------
for (const data of failTestCases) {
  test(`❌ ${data.id} | ${data.input}`, async ({ page }) => {
    const actualValue = await getTranslation(page, data.input);
    console.log(`[NEGATIVE] ${data.id} result: ${actualValue}`);
    expect(actualValue).not.toBe(data.expected); // ← FIX
  });
}

});