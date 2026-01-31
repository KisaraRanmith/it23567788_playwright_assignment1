const { test, expect } = require('@playwright/test');

/* ============================================================
   ✅ POSITIVE TEST CASES (PASS EXPECTED)
   Taken from Assignment_1_IT23543164.xlsx
   ============================================================ */
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
  { id: 'Pos_Fun_0024', input: 'mama heta enavaa.', expected: 'මම හෙට එනවා.' },

  // UI Test
  { id: 'Pos_UI_0001', input: 'mama gedhara yanavaa', expected: 'මම ගෙදර යනවා' }
];


/* ============================================================
   ❌ NEGATIVE TEST CASES (FAIL EXPECTED)
   ============================================================ */
const failTestCases = [
  { id: 'Neg_Fun_0001', input: 'mamagedharayanavaa', expected: 'මමගෙදරයනවා' },
  { id: 'Neg_Fun_0002', input: 'matapaankannaoonee', expected: 'මටපාන්කන්නඕනේ' },
  { id: 'Neg_Fun_0003', input: 'ela machan! supiri!!', expected: 'එල මචන්! සුපිරි!!' },
  { id: 'Neg_Fun_0004', input: 'adoo vaedak baaragaththaanam eeka hariyata karapanko bQQ.', expected: 'අඩෝ වැඩක් බාරගත්තානම් ඒක හරියට කරපන්කො බං.' },
  { id: 'Neg_Fun_0005', input: 'dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura ...', expected: 'දිට්වා සුළි කුණාටුව සමඟ ඇති වූ ගංවතුර...' },
  { id: 'Neg_Fun_0006', input: 'mama gedhara yanavaa.\noyaa enavadha?', expected: 'මම ගෙදර යනවා.\nඔයා එනවද?' },
  { id: 'Neg_Fun_0007', input: 'mama   gedhara   yanavaa.', expected: 'මම ගෙදර යනවා.' },
  { id: 'Neg_Fun_0008', input: 'Documents tika attach karalaa mata email ekak evanna.', expected: 'Documents ටික attach කරලා මට email එකක් එවන්න.' },
  { id: 'Neg_Fun_0009', input: 'CPU GPU RAM ROM', expected: 'CPU GPU RAM ROM' },
  { id: 'Neg_Fun_0010', input: '“oyaata kohomadha?”', expected: '“ඔයාට කොහොමද?”' }
];


test.describe('Singlish → Sinhala Transliteration', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/singlish-to-sinhala');
  });

  // Helper stays EXACTLY like your code
  async function getTranslation(page, text) {
    const inputArea = page.locator('textarea').first();
    await inputArea.click();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await inputArea.type(text + "   ", { delay: 100 });
    try { await inputArea.press('Tab'); } catch {}
    try { await inputArea.press('Enter'); } catch {}
    await page.waitForTimeout(300);

    const readOutput = async () => {
      const byId = page.locator('#output-text');
      if (await byId.count() > 0 && await byId.isVisible()) {
        const t = (await byId.textContent())?.trim() || '';
        if (/[\u0D80-\u0DFF]/.test(t)) return t;
      }
      return '';
    };

    for (let i = 0; i < 20; i++) {
      const val = await readOutput();
      if (val) return val;
      await page.waitForTimeout(500);
    }

    throw new Error("Translation did not appear in time.");
  }

  // ---------------- PASS TESTS ----------------
  for (const data of passTestCases) {
    test(`✅ ${data.id} | ${data.input}`, async ({ page }) => {
      const actual = await getTranslation(page, data.input);
      console.log(`[PASS] ${data.id} → ${actual}`);
      expect(actual).toBe(data.expected);
    });
  }

  // ---------------- FAIL TESTS ----------------
  for (const data of failTestCases) {
    test(`❌ ${data.id} | ${data.input}`, async ({ page }) => {
      const actual = await getTranslation(page, data.input);
      console.log(`[FAIL] ${data.id} → ${actual}`);
      expect(actual).not.toBe(data.expected);
    });
  }

});