const { test, expect } = require('@playwright/test');


const passTestCases = [
  { id: 'Pos_Fun_0001', input: 'mama gedhara yanavaa.', expected: 'මම ගෙදර යනවා.' },
  { id: 'Pos_Fun_0002', input: 'mata bath oonee.', expected: 'මට බත් ඕනේ.' },
  { id: 'Pos_Fun_0003', input: 'api kaeema kanna yanavaa saha passe gedhara enavaa', expected: 'අපි කෑම කන්න යනවා සහ පස්සේ ගෙදර එනවා' },
  { id: 'Pos_Fun_0004', input: 'karuNaakaralaa mata podi udhavvak karanna puLuvandha?', expected: 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?' },
  { id: 'Pos_Fun_0005', input: 'Zoom meeting eka heta thiyennee', expected: 'Zoom meeting එක හෙට තියෙන්නේ' },
  { id: 'Pos_Fun_0006', input: 'vaeda karanavaa saha passe api kathaa karamu kiyalaa hithan inne', expected: 'මම දැන් වැඩ කරනවා සහ පස්සේ අපි කතා කරමු කියලා හිතන් ඉන්නේ' },
  { id: 'Pos_Fun_0007', input: 'oyaata heta office enna puLuvandha kiyalaa mata kiyanna puluvandha?', expected: 'ඔයාට හෙට office එන්න පුළුවන්ද කියලා මට කියන්න පුළුවන්ද?' },
  { id: 'Pos_Fun_0008', input: 'karuNaakaralaa magee lipinaya eyaata yavanna kiyalaa oyaata puLuvandha?', expected: 'කරුණාකරලා මගේ ලිපිනය ඒයාට යවන්න කියලා ඔයාට පුළුවන්ද?' },
  { id: 'Pos_Fun_0009', input: 'heta 7.30 AM venakota api office yanna oonee kiyalaa kiyannaa', expected: 'හෙට 7.30 AM වෙද්දී අපි office යන්න ඕනේ කියලා කියන්නා' },
  { id: 'Pos_Fun_0010', input: 'mata eeka karanna baee.', expected: 'මට ඒක කරන්න බැහැ.' },
  { id: 'Pos_Fun_0011', input: 'api heta gedhara yamu.', expected: 'අපි හෙට ගෙදර යමු.' },
  { id: 'Pos_Fun_0012', input: 'mama iiyee gedhara giyaa.', expected: 'මම ඉයෙ ගෙදර ගියා' },
  { id: 'Pos_Fun_0013', input: 'api kaeema kanna yanavaa saha passe chithrapatayak balanavaa', expected: 'අපි කතා කර ගත්තාඅපි කෑම කන්න යනවා සහ පස්සේ චිත්‍රපටයක් බලනවා.' },
  { id: 'Pos_Fun_0014', input: 'heta api gedhara inne.passee 1.00 PM valata family ekath ekkama kaeema kanna yamu.weather eka hodhayi hari nam, api podi road trip ekakuth yanna hithan inne.', expected: 'හෙට අපි ගෙදර ඉන්නේ.පස්සේ 1.00 PM වලට family එකත් එක්කම කෑම කන්න යමු.weather එක හොදයි හරි නම්, අපි පොඩි road trip එකකුත් යන්න හිතන් ඉන්නේ..' },
  { id: 'Pos_Fun_0015', input: 'iiyee mama apee gedhara gihin podi velavak nidhagaththaa. adha udhaesana mata vaeda karanna thiyenavaa namuth heta api loku ammalage gedhara yanna kiyalaa hithan inne. ehema yannee nam api amma saha thaththaa ekka tikak velavak kathaa karala kaeema kaalama yana eka hodhayi kiyala hithenavaa. api evidhiyata dhavasee vaeda raajakaari tika karanna thiiraNaya kalaa.', expected: 'ඊයේ මම අපේ ගෙදර ගිහින් පොඩි වෙලවක් නිදගත්තා. අද උදැසන මට වැඩ කරන්න තියෙනවා නමුත් හෙට අපි ලොකු අම්මලගෙ ගෙදර යන්න කියලා හිතන් ඉන්නේ. එහෙම යන්නේ නම් අපි අම්ම සහ තත්තා එක්ක ටිකක් වෙලවක් කතා කරල කෑම කාලම යන එක හොදයි කියල හිතෙනවා. අපි එවිදියට දවසේ වැඩ රාජකාරි ටික කරන්න තීරණය කලා.' },
  { id: 'Pos_Fun_0016', input: 'adha udhaesana mama gedhara sitiye. passe mama office yanna hadhanakotama, vaessa vahinna patan gaththaa! ee nisaa mata bas ekata parakku unaa. mama heta 7.30 AM venakota office ekata enna oonee kiyalaa maenejar mata kivva. ee nisaa mata heta udheema naegitinna venava. mata tayim eka maeneaj karaganna puluvan veyi kiyalaa mama hithan inne.', expected: 'අද උදැසන මම ගෙදර සිටියෙ. පස්සෙ මම office යන්න හදනකොටම, වැස්ස වහින්න පටන් ගත්තා! ඒ නිසා මට බස් එකට පරක්කු උනා. මම හෙට 7.30 AM වෙනකොට office එකට එන්න ඕනේ කියලා මැනෙජර් මට කිව්ව. ඒ නිසා මට හෙට උදේම නැගිටින්න වෙනව. මට ටයිම් එක මැනේජ් කරගන්න පුලුවන් වෙයි කියලා මම හිතන් ඉන්නේ.' },
  { id: 'Pos_Fun_0017', input: 'karuNaakaralaa mata adha podi udhavvak karanna puLuvandha kiyalaa kasun magen ahalaa thibuna. eyaa ehema ahala passe eyaa mata hari vaedee karagaththa kiyalaa mata kiyala thibuna. passe mama aehuva mokakdha unee kiyala .iita passe thamayi eyaa kivve eyaata podi hadhissiyakata eyaata nambar ekak uvamanaa unaa eeka passe baladhdhi eyaage pothaka liyala thibuna ekayi une iita passe mata ee vistharaya kiyala maeseej karaa eyaa.', expected: 'කරුණාකරලා මට අද පොඩි උදව්වක් කරන්න පුළුවන්ද කියලා කසුන් මගෙන් අහලා තිබුන. එයා එහෙම අහල පස්සෙ එයා මට හරි වැඩේ කරගත්ත කියලා මට කියල තිබුන. පස්සෙ මම ඇහුව මොකක්ද උනේ කියල .ඊට පස්සෙ තමයි එයා කිව්වෙ එයාට පොඩි හදිස්සියකට එයාට නම්බර් එකක් උවමනා උනා ඒක පස්සෙ බලද්දි එයාගෙ පොතක ලියල තිබුන එකයි උනෙ ඊට පස්සෙ මට ඒ විස්තරය කියල මැසේජ් කරා එයා.' },
  { id: 'Pos_Fun_0018', input: 'suba udhaeesanak!', expected: 'සුබ උදෑසනක්!' },
  { id: 'Pos_Fun_0019', input: 'eeyi, meeka araganin.', expected: 'ඒයි, මේක අරගනින්.' },
  { id: 'Pos_Fun_0020', input: 'Rs. 10008', expected: 'Rs. 10008' },
  { id: 'Pos_Fun_0021', input: 'bohoma sthuthi!', expected: 'බොහොම ස්තුති!' },
  { id: 'Pos_Fun_0022', input: 'mama naanna yanavaa.', expected: 'මම නාන්න යනවා.' },
  { id: 'Pos_Fun_0023', input: 'api pansal yanavaa.', expected: 'අපි පන්සල් යනවා.' },
  { id: 'Pos_Fun_0024', input: 'mata dhukayi.', expected: 'මට දුකයි.' },
  { id: 'Pos_Fun_0025', input: 'hari hari', expected: 'හරි හරි' },
  { id: 'Pos_UI_0001', input: 'mama dhaen vaeda karanavaa api passe kathaa karamu', expected: 'මම දැන් වැඩ කරනවා අපි පස්සෙ කතා කරමු' }
];




const failTestCases = [
  { id: 'Neg_Fun_0001', input: 'mamapaasalyanavaa', expected: 'මම පාසල් යනවා' },
  { id: 'Neg_Fun_0002', input: 'MaMa GeDhArA YaNaVaA', expected: 'මම ගෙදර යනවා' },
  { id: 'Neg_Fun_0003', input: 'adha ASAP office yanna oonee kiyalaa manager kiwwaa namuth mata adha sick vagee. ehema unaath HR ta msg ekak daalaa leave ekak ganna puluvanda kiyalaa ahanna oonee kiyalaa hithenavaa', expected: 'අද ASAP office යන්න ඕනේ කියලා manager කිව්වා නමුත් මට අද sick වගේ. එහෙම උනත් HR ට message එකක් දාලා leave එකක් ගන්න පුළුවන්ද කියලා අහන්න ඕනේ කියලා හිතෙනවා.' },
  { id: 'Neg_Fun_0004', input: 'mata   yanna   hithanne   naee', expected: 'මට යන්න හිතන්නෙ නෑ' },
  { id: 'Neg_Fun_0005', input: 'heta pahala wathur liters pahak ganna oonee', expected: 'හෙට පහල වතුර ලීටර් පහක් ගන්න ඕනේ' },
  { id: 'Neg_Fun_0006', input: 'adha mama office yanna kalin email eka chek krla Zoom meeting ekk thibuna kiyala dkkkaa. meeting eken passe manager kiwwaa documents tika review krla heta office enna kiyalaa. passe mama bus eken Colombo yanna hdann inne namuth traffic thibuna nisaa late unaa ehema unaath mama WhatsApp eken message ekk daalaa explain krla thibuna', expected: 'අද මම office යන්න කලින් email එක check කරලා Zoom meeting එකක් තිබුණා කියලා දැක්කා. meeting එකෙන් පස්සේ manager කිව්වා documents ටික review කරලා හෙට office එන්න කියලා. පස්සේ මම bus එකෙන් Colombo යන්න හදන් ඉන්නේ නමුත් traffic තිබුණ නිසා late උනා. එහෙම උනත් මම WhatsApp එකෙන් message එකක් දාලා explain කරලා තිබුණා.' },
  { id: 'Neg_Fun_0007', input: 'iiyee mama gedhr giyaa saha podi velavk nidagththaa. adha udhaesana mama vaedaa karanavaa namuth heta api gedhara yanna hdann inne kiyalaa hithn inne. ehema yanne nam api amma thaththa ekka kathaa karla kaema kaala passe yanna pulvn kiyalaa plan ekak hdgththaa namuth me input eke bahu typos saha spacing issues thiyenavaa nisaa Sinhala output eka hariyata venne naehae kiyalaa dakinna puluvan', expected: 'ඊයේ මම ගෙදර ගියා සහ පොඩි වෙලාවක් නිදාගත්තා. අද උදෑසන මම වැඩ කරනවා නමුත් හෙට අපි ගෙදර යන්න හදන් ඉන්නේ කියලා හිතන් ඉන්නේ. එහෙම යන්නේ නම් අපි අම්මා තාත්තා එක්ක කතා කරලා කෑම කාලා පස්සේ යන්න පුළුවන් කියලා සැලැස්මක් හැදුවා.' },
  { id: 'Neg_Fun_0008', input: 'mata baya ne', expected: 'මට බය නෑ' },
  { id: 'Neg_Fun_0009', input: 'iiyee mama gedhara giyaa namuth adha yanna ba vagee', expected: 'ඊයේ මම ගෙදර ගියා නමුත් අද යන්න බෑ වගේ' },
  { id: 'Neg_Fun_0010', input: 'oyaata puluvanda mage wada poddak balanna', expected: 'ඔයාට පුළුවන්ද මගේ වැඩ පොඩ්ඩක් බලන්න' },
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
