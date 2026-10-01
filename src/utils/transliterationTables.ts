import { SupportedLanguage } from "../types/language";

export const URDU_DIGRAPHS: [RegExp, string][] = [
  [/tion/gi, "شن"], [/sion/gi, "ژن"], [/ment/gi, "منٹ"], [/ing/gi, "نگ"],
  [/sh/gi, "ش"], [/ch/gi, "چ"], [/th/gi, "تھ"], [/ph/gi, "ف"],
  [/kh/gi, "خ"], [/gh/gi, "غ"], [/zh/gi, "ژ"], [/qu/gi, "کو"],
  [/ck/gi, "ک"], [/ee/gi, "ی"], [/oo/gi, "و"], [/ai/gi, "ائی"],
  [/ou/gi, "او"], [/ea/gi, "ی"], [/ar/gi, "ار"], [/er/gi, "ر"],
  [/or/gi, "ور"], [/ur/gi, "ر"]
];

export const URDU_CHARS: Record<string, string> = {
  a: "ا", b: "ب", c: "ک", d: "ڈ", e: "ے", f: "ف", g: "گ", h: "ہ",
  i: "ی", j: "ج", k: "ک", l: "ل", m: "م", n: "ن", o: "و", p: "پ",
  q: "ق", r: "ر", s: "س", t: "ٹ", u: "یو", v: "و", w: "و", x: "کس",
  y: "ی", z: "ز"
};

export const ARABIC_DIGRAPHS: [RegExp, string][] = [
  [/tion/gi, "شن"], [/sion/gi, "سيون"], [/ment/gi, "منت"], [/ism/gi, "يزم"],
  [/sh/gi, "ش"], [/ch/gi, "تش"], [/th/gi, "ث"], [/ph/gi, "ف"],
  [/kh/gi, "خ"], [/gh/gi, "غ"], [/qu/gi, "كو"], [/ck/gi, "ك"],
  [/ee/gi, "ي"], [/oo/gi, "و"], [/ai/gi, "اي"], [/ou/gi, "او"],
  [/ea/gi, "ي"]
];

export const ARABIC_CHARS: Record<string, string> = {
  a: "ا", b: "ب", c: "ك", d: "د", e: "ي", f: "ف", g: "ج", h: "ه",
  i: "ي", j: "ج", k: "ك", l: "ل", m: "م", n: "ن", o: "و", p: "ب",
  q: "ق", r: "ر", s: "س", t: "ت", u: "و", v: "ف", w: "و", x: "كس",
  y: "ي", z: "ز"
};

export const RUSSIAN_DIGRAPHS: [RegExp, string][] = [
  [/tion/gi, "ция"], [/sion/gi, "зия"], [/ment/gi, "мент"], [/ism/gi, "изм"],
  [/sh/gi, "ш"], [/ch/gi, "ч"], [/th/gi, "т"], [/ph/gi, "ф"],
  [/kh/gi, "х"], [/zh/gi, "ж"], [/qu/gi, "кв"], [/ck/gi, "к"],
  [/ee/gi, "и"], [/oo/gi, "у"], [/ea/gi, "и"]
];

export const RUSSIAN_CHARS: Record<string, string> = {
  a: "а", b: "б", c: "к", d: "д", e: "е", f: "ф", g: "г", h: "х",
  i: "и", j: "дж", k: "к", l: "л", m: "м", n: "н", o: "о", p: "п",
  q: "к", r: "р", s: "с", t: "т", u: "у", v: "в", w: "в", x: "кс",
  y: "и", z: "з"
};

export const HINDI_DIGRAPHS: [RegExp, string][] = [
  [/tion/gi, "शन"], [/sion/gi, "ज़न"], [/ment/gi, "मेंट"],
  [/sh/gi, "श"], [/ch/gi, "च"], [/th/gi, "थ"], [/ph/gi, "फ"],
  [/kh/gi, "ख"], [/gh/gi, "घ"], [/qu/gi, "क्व"], [/ck/gi, "क"],
  [/ee/gi, "ी"], [/oo/gi, "ू"], [/ai/gi, "ै"], [/ou/gi, "ौ"]
];

export const HINDI_CHARS: Record<string, string> = {
  a: "अ", b: "ब", c: "क", d: "ड", e: "ए", f: "फ", g: "ग", h: "ह",
  i: "इ", j: "ज", k: "क", l: "ल", m: "म", n: "न", o: "ओ", p: "प",
  q: "क", r: "र", s: "स", t: "ट", u: "उ", v: "व", w: "व", x: "क्स",
  y: "य", z: "ज़"
};

export const BENGALI_DIGRAPHS: [RegExp, string][] = [
  [/tion/gi, "শন"], [/sion/gi, "শন"], [/ment/gi, "মেন্ট"],
  [/sh/gi, "শ"], [/ch/gi, "চ"], [/th/gi, "থ"], [/ph/gi, "ফ"],
  [/kh/gi, "খ"], [/gh/gi, "ঘ"], [/qu/gi, "ক্ব"], [/ck/gi, "ক"],
  [/ee/gi, "ি"], [/oo/gi, "ু"]
];

export const BENGALI_CHARS: Record<string, string> = {
  a: "অ", b: "ব", c: "ক", d: "ড", e: "এ", f: "ফ", g: "গ", h: "হ",
  i: "ই", j: "জ", k: "ক", l: "ল", m: "ম", n: "ন", o: "ও", p: "প",
  q: "ক", r: "র", s: "স", t: "ট", u: "উ", v: "ভ", w: "ও", x: "ক্স",
  y: "ই", z: "জ"
};

export const JAPANESE_KATAKANA_MAPPINGS: [RegExp, string][] = [
  [/tion/gi, "ション"], [/sion/gi, "ジョン"], [/ment/gi, "メント"],
  [/che/gi, "チェ"], [/chi/gi, "チ"], [/cha/gi, "チャ"], [/chu/gi, "チュ"], [/cho/gi, "チョ"],
  [/she/gi, "シェ"], [/shi/gi, "シ"], [/sha/gi, "シャ"], [/shu/gi, "シュ"], [/sho/gi, "ショ"],
  [/ka/gi, "カ"], [/ki/gi, "キ"], [/ku/gi, "ク"], [/ke/gi, "ケ"], [/ko/gi, "コ"],
  [/sa/gi, "サ"], [/si/gi, "シ"], [/su/gi, "ス"], [/se/gi, "セ"], [/so/gi, "ソ"],
  [/ta/gi, "タ"], [/ti/gi, "ティ"], [/tu/gi, "ツ"], [/te/gi, "テ"], [/to/gi, "ト"],
  [/na/gi, "ナ"], [/ni/gi, "ニ"], [/nu/gi, "ヌ"], [/ne/gi, "ネ"], [/no/gi, "ノ"],
  [/ha/gi, "ハ"], [/hi/gi, "ヒ"], [/fu/gi, "フ"], [/he/gi, "ヘ"], [/ho/gi, "ホ"],
  [/ma/gi, "マ"], [/mi/gi, "ミ"], [/mu/gi, "ム"], [/me/gi, "メ"], [/mo/gi, "モ"],
  [/ya/gi, "ヤ"], [/yu/gi, "ユ"], [/yo/gi, "ヨ"],
  [/ra/gi, "ラ"], [/ri/gi, "リ"], [/ru/gi, "ル"], [/re/gi, "レ"], [/ro/gi, "ロ"],
  [/wa/gi, "ワ"], [/wo/gi, "ウォ"],
  [/ga/gi, "ガ"], [/gi/gi, "ギ"], [/gu/gi, "グ"], [/ge/gi, "ゲ"], [/go/gi, "ゴ"],
  [/za/gi, "ザ"], [/ji/gi, "ジ"], [/zu/gi, "ズ"], [/ze/gi, "ゼ"], [/zo/gi, "ゾ"],
  [/da/gi, "ダ"], [/de/gi, "デ"], [/do/gi, "ド"],
  [/ba/gi, "バ"], [/bi/gi, "ビ"], [/bu/gi, "ブ"], [/be/gi, "ベ"], [/bo/gi, "ボ"],
  [/pa/gi, "パ"], [/pi/gi, "ピ"], [/pu/gi, "プ"], [/pe/gi, "ペ"], [/po/gi, "ポ"],
  [/a/gi, "ア"], [/i/gi, "イ"], [/u/gi, "ウ"], [/e/gi, "エ"], [/o/gi, "オ"],
  [/k/gi, "ク"], [/s/gi, "ス"], [/t/gi, "ト"], [/n/gi, "ン"], [/h/gi, "フ"],
  [/m/gi, "ム"], [/r/gi, "ル"], [/w/gi, "ウ"], [/y/gi, "イ"], [/d/gi, "ド"],
  [/b/gi, "ブ"], [/p/gi, "プ"], [/g/gi, "グ"], [/z/gi, "ズ"], [/v/gi, "ヴ"],
  [/l/gi, "ル"], [/f/gi, "フ"], [/c/gi, "ク"], [/q/gi, "ク"], [/x/gi, "クス"]
];

export const CHINESE_SYLLABLE_MAPPINGS: [RegExp, string][] = [
  [/tion/gi, "项"], [/ment/gi, "度"], [/ism/gi, "论"], [/ist/gi, "家"],
  [/water/gi, "水"], [/flow/gi, "流"], [/gradient/gi, "度"],
  [/sys/gi, "系"], [/net/gi, "网"], [/bio/gi, "生"], [/chem/gi, "化"],
  [/geo/gi, "地"], [/hydro/gi, "水"], [/micro/gi, "微"], [/macro/gi, "宏"],
  [/ph/gi, "夫"], [/th/gi, "特"], [/sh/gi, "希"], [/ch/gi, "奇"],
  [/ba/gi, "巴"], [/be/gi, "贝"], [/bi/gi, "比"], [/bo/gi, "博"], [/bu/gi, "布"],
  [/ca/gi, "卡"], [/ce/gi, "塞"], [/ci/gi, "西"], [/co/gi, "科"], [/cu/gi, "库"],
  [/da/gi, "达"], [/de/gi, "德"], [/di/gi, "迪"], [/do/gi, "多"], [/du/gi, "杜"],
  [/fa/gi, "法"], [/fe/gi, "费"], [/fi/gi, "菲"], [/fo/gi, "福"], [/fu/gi, "富"],
  [/ga/gi, "加"], [/ge/gi, "格"], [/gi/gi, "基"], [/go/gi, "戈"], [/gu/gi, "古"],
  [/ha/gi, "哈"], [/he/gi, "赫"], [/hi/gi, "希"], [/ho/gi, "霍"], [/hu/gi, "胡"],
  [/la/gi, "拉"], [/le/gi, "勒"], [/li/gi, "利"], [/lo/gi, "洛"], [/lu/gi, "鲁"],
  [/ma/gi, "马"], [/me/gi, "梅"], [/mi/gi, "米"], [/mo/gi, "莫"], [/mu/gi, "穆"],
  [/na/gi, "纳"], [/ne/gi, "内"], [/ni/gi, "尼"], [/no/gi, "诺"], [/nu/gi, "努"],
  [/pa/gi, "帕"], [/pe/gi, "佩"], [/pi/gi, "皮"], [/po/gi, "珀"], [/pu/gi, "普"],
  [/ra/gi, "拉"], [/re/gi, "雷"], [/ri/gi, "里"], [/ro/gi, "罗"], [/ru/gi, "鲁"],
  [/sa/gi, "萨"], [/se/gi, "瑟"], [/si/gi, "斯"], [/so/gi, "索"], [/su/gi, "苏"],
  [/ta/gi, "塔"], [/te/gi, "特"], [/ti/gi, "蒂"], [/to/gi, "托"], [/tu/gi, "图"],
  [/va/gi, "瓦"], [/ve/gi, "维"], [/vi/gi, "维"], [/vo/gi, "沃"], [/vu/gi, "武"],
  [/a/gi, "阿"], [/b/gi, "布"], [/c/gi, "克"], [/d/gi, "德"], [/e/gi, "厄"],
  [/f/gi, "夫"], [/g/gi, "格"], [/h/gi, "赫"], [/i/gi, "伊"], [/j/gi, "杰"],
  [/k/gi, "克"], [/l/gi, "尔"], [/m/gi, "姆"], [/n/gi, "恩"], [/o/gi, "奥"],
  [/p/gi, "普"], [/q/gi, "奇"], [/r/gi, "尔"], [/s/gi, "斯"], [/t/gi, "特"],
  [/u/gi, "乌"], [/v/gi, "维"], [/w/gi, "瓦"], [/x/gi, "克斯"], [/y/gi, "依"],
  [/z/gi, "兹"]
];

export function adaptEnglishWordToLatinLanguage(word: string, lang: SupportedLanguage): string {
  const lower = word.toLowerCase();
  
  if (lang === "es") {
    let w = lower
      .replace(/tion$/g, "ción")
      .replace(/sion$/g, "sión")
      .replace(/ity$/g, "idad")
      .replace(/ities$/g, "idades")
      .replace(/ment$/g, "miento")
      .replace(/ments$/g, "mientos")
      .replace(/ous$/g, "oso")
      .replace(/ic$/g, "ico")
      .replace(/ical$/g, "ico")
      .replace(/ly$/g, "mente")
      .replace(/able$/g, "able")
      .replace(/ible$/g, "ible")
      .replace(/ive$/g, "ivo")
      .replace(/ism$/g, "ismo")
      .replace(/ist$/g, "ista")
      .replace(/ists$/g, "istas")
      .replace(/ology$/g, "ología");
    if (w === lower && lower.length > 3) {
      if (lower.endsWith("ed")) w = lower.slice(0, -2) + "ado";
      else if (lower.endsWith("ing")) w = lower.slice(0, -3) + "ando";
      else if (!/[aeiou]$/.test(w)) w = w + "o";
    }
    return w;
  }
  
  if (lang === "fr") {
    let w = lower
      .replace(/tion$/g, "tion")
      .replace(/sion$/g, "sion")
      .replace(/ity$/g, "ité")
      .replace(/ities$/g, "ités")
      .replace(/ment$/g, "ment")
      .replace(/ments$/g, "ments")
      .replace(/ous$/g, "eux")
      .replace(/ic$/g, "ique")
      .replace(/ical$/g, "ique")
      .replace(/ly$/g, "ment")
      .replace(/able$/g, "able")
      .replace(/ive$/g, "if")
      .replace(/ism$/g, "isme")
      .replace(/ist$/g, "iste")
      .replace(/ology$/g, "ologie");
    if (w === lower && lower.length > 3) {
      if (lower.endsWith("ed")) w = lower.slice(0, -2) + "é";
      else if (lower.endsWith("ing")) w = lower.slice(0, -3) + "ant";
    }
    return w;
  }
  
  if (lang === "de") {
    let w = lower
      .replace(/tion$/g, "ung")
      .replace(/tions$/g, "ungen")
      .replace(/sion$/g, "sion")
      .replace(/ity$/g, "ität")
      .replace(/ment$/g, "ung")
      .replace(/ous$/g, "ig")
      .replace(/ic$/g, "isch")
      .replace(/ical$/g, "isch")
      .replace(/ly$/g, "lich")
      .replace(/able$/g, "bar")
      .replace(/ive$/g, "iv")
      .replace(/ism$/g, "ismus")
      .replace(/ist$/g, "ist")
      .replace(/ology$/g, "ologie");
    return w;
  }
  
  if (lang === "pt") {
    let w = lower
      .replace(/tion$/g, "ção")
      .replace(/tions$/g, "ções")
      .replace(/sion$/g, "são")
      .replace(/ity$/g, "idade")
      .replace(/ities$/g, "idades")
      .replace(/ment$/g, "mento")
      .replace(/ments$/g, "mentos")
      .replace(/ous$/g, "oso")
      .replace(/ic$/g, "ico")
      .replace(/ical$/g, "ico")
      .replace(/ly$/g, "mente")
      .replace(/able$/g, "ável")
      .replace(/ible$/g, "ível")
      .replace(/ive$/g, "ivo")
      .replace(/ism$/g, "ismo")
      .replace(/ist$/g, "ista")
      .replace(/ology$/g, "ologia");
    if (w === lower && lower.length > 3) {
      if (lower.endsWith("ed")) w = lower.slice(0, -2) + "ado";
      else if (lower.endsWith("ing")) w = lower.slice(0, -3) + "ando";
      else if (!/[aeiou]$/.test(w)) w = w + "o";
    }
    return w;
  }

  return word;
}

export function transliterateScriptToken(token: string, lang: SupportedLanguage): string {
  if (!token || !/[a-zA-Z]/.test(token)) return token;

  const lower = token.toLowerCase();

  if (lang === "ur") {
    let s = lower;
    for (const [pattern, repl] of URDU_DIGRAPHS) s = s.replace(pattern, repl);
    let res = "";
    for (const ch of s) res += URDU_CHARS[ch] || ch;
    return res;
  }

  if (lang === "ar") {
    let s = lower;
    for (const [pattern, repl] of ARABIC_DIGRAPHS) s = s.replace(pattern, repl);
    let res = "";
    for (const ch of s) res += ARABIC_CHARS[ch] || ch;
    return res;
  }

  if (lang === "ru") {
    let s = lower;
    for (const [pattern, repl] of RUSSIAN_DIGRAPHS) s = s.replace(pattern, repl);
    let res = "";
    for (const ch of s) res += RUSSIAN_CHARS[ch] || ch;
    return res;
  }

  if (lang === "hi") {
    let s = lower;
    for (const [pattern, repl] of HINDI_DIGRAPHS) s = s.replace(pattern, repl);
    let res = "";
    for (const ch of s) res += HINDI_CHARS[ch] || ch;
    return res;
  }

  if (lang === "bn") {
    let s = lower;
    for (const [pattern, repl] of BENGALI_DIGRAPHS) s = s.replace(pattern, repl);
    let res = "";
    for (const ch of s) res += BENGALI_CHARS[ch] || ch;
    return res;
  }

  if (lang === "ja") {
    let s = lower;
    for (const [pattern, repl] of JAPANESE_KATAKANA_MAPPINGS) s = s.replace(pattern, repl);
    return s;
  }

  if (lang === "zh") {
    let s = lower;
    for (const [pattern, repl] of CHINESE_SYLLABLE_MAPPINGS) s = s.replace(pattern, repl);
    return s;
  }

  if (lang === "es" || lang === "fr" || lang === "de" || lang === "pt") {
    return adaptEnglishWordToLatinLanguage(token, lang);
  }

  return token;
}
