import { SupportedLanguage } from "../types/language";
import { lookupMultilingualTranslation } from "./multilingualTranslatorEngine";
import { translateWordTokenWithLemmatization } from "./multilingualCoreLexicon";
import { ALL_NEW_UI_TRANSLATIONS } from "./translations/allUiTranslations";
import { TRANSLATIONS } from "./translations";

// Comprehensive phrase & sentence translations for all 10 non-English languages
// Keys are normalized English strings (trimmed, lowercased for lookup)
export const EXACT_DICTIONARY: Record<string, Partial<Record<SupportedLanguage, string>>> = {
  // Navigation & Core Hub
  "lingofi institute of language & testing": {
    es: "Instituto de Idiomas y Pruebas LingoFi",
    fr: "Institut de Langues et d'Évaluation LingoFi",
    de: "LingoFi Institut für Sprache und Prüfungen",
    zh: "LingoFi 语言与考试学院",
    ar: "معهد LingoFi للغات والاختبارات",
    hi: "LingoFi भाषा एवं परीक्षा संस्थान",
    pt: "Instituto LingoFi de Idiomas e Testes",
    ru: "Институт языков и тестирования LingoFi",
    ja: "LingoFi 語学・試験研究所",
    ur: "لِنگو فائی انسٹیٹیوٹ آف لینگویج اینڈ ٹیسٹنگ",
    bn: "লিঙ্গোফাই ইনস্টিটিউট অব ল্যাঙ্গুয়েজ অ্যান্ড টেস্টিং"
  },
  "official ielts academic examination platform": {
    es: "Plataforma Oficial de Exámenes Académicos IELTS",
    fr: "Plateforme Officielle d'Examens Académiques IELTS",
    de: "Offizielle Plattform für IELTS Academic Prüfungen",
    zh: "官方雅思学术类考试平台",
    ar: "المنصة الرسمية لامتحانات الآيلتس الأكاديمية",
    hi: "आधिकारिक आईईएलटीएस अकादमिक परीक्षा मंच",
    pt: "Plataforma Oficial de Exames Acadêmicos IELTS",
    ru: "Официальная платформа академических экзаменов IELTS",
    ja: "公式 IELTS アカデミック試験プラットフォーム",
    ur: "آفیشل آئی ایل ٹی ایس اکیڈمک امتحانی پلیٹ فارم",
    bn: "অফিসিয়াল আইইএলটিএস একাডেমিক পরীক্ষা প্ল্যাটফর্ম"
  },
  "official ielts examination & trf certification": {
    es: "Examen Oficial IELTS y Certificación TRF",
    fr: "Examen Officiel IELTS et Certification TRF",
    de: "Offizielle IELTS-Prüfung & TRF-Zertifizierung",
    zh: "官方雅思考试与 TRF 成绩单认证",
    ar: "امتحان آيلتس الرسمي وإصدار شهادة تقرير الاختبار (TRF)",
    hi: "आधिकारिक आईईएलटीएस परीक्षा और टीआरएफ प्रमाणन",
    pt: "Exame Oficial IELTS e Certificação TRF",
    ru: "Официальный экзамен IELTS и сертификация TRF",
    ja: "公式 IELTS 試験および TRF 成績証明書",
    ur: "آفیشل آئی ایل ٹی ایس امتحان اور ٹی آر ایف سرٹیفیکیشن",
    bn: "অফিসিয়াল আইইএলটিএস পরীক্ষা ও টিআরএফ সার্টিফিকেশন"
  },
  "idp & british council aligned": {
    es: "Alineado con IDP y British Council",
    fr: "Aligné sur IDP et le British Council",
    de: "Ausgerichtet an IDP und British Council",
    zh: "与 IDP 及英国文化协会官方标准同步",
    ar: "متوافق مع معايير آي دي بي والمجلس الثقافي البريطاني",
    hi: "आईडीपी और ब्रिटिश काउंसिल के मानकों के अनुरूप",
    pt: "Alinhado com IDP e British Council",
    ru: "Соответствует стандартам IDP и British Council",
    ja: "IDP およびブリティッシュ・カウンシル準拠",
    ur: "آئی ڈی پی اور برٹش کونسل کے عین مطابق",
    bn: "আইডিপি ও ব্রিটিশ কাউন্সিল মানদণ্ডে প্রণীত"
  },
  "creator & owner: lingofi academic board": {
    es: "Creador y Propietario: LingoFi Academic Board",
    fr: "Créateur et Propriétaire : LingoFi Academic Board",
    de: "Schöpfer & Eigentümer: LingoFi Academic Board",
    zh: "创始人与所有者：LingoFi Academic Board",
    ar: "المؤسس والمالك: حميد علي",
    hi: "निर्माता एवं स्वामी: लिंगोफाई एकेडेमिक बोर्ड",
    pt: "Criador e Proprietário: LingoFi Academic Board",
    ru: "Создатель и владелец: Академический совет LingoFi",
    ja: "創設者兼所有者：LingoFi 学術評議会",
    ur: "بانی اور مالک: LingoFi اکیڈمک بورڈ",
    bn: "নির্মাতা ও স্বত্বাধিকারী: লিঙ্গোফাই একাডেমিক বোর্ড"
  },
  "creator: lingofi academic board": {
    es: "Creador: LingoFi Academic Board",
    fr: "Créateur : LingoFi Academic Board",
    de: "Entwickler: LingoFi Academic Board",
    zh: "创始人：LingoFi Academic Board",
    ar: "المطور: حميد علي",
    hi: "निर्माता: लिंगोफाई एकेडेमिक बोर्ड",
    pt: "Criador: LingoFi Academic Board",
    ru: "Создатель: Академический совет LingoFi",
    ja: "創設者：LingoFi 学術評議会",
    ur: "بانی: LingoFi اکیڈمک بورڈ",
    bn: "নির্মাতা: লিঙ্গোফাই একাডেমিক বোর্ড"
  },
  "about creator": {
    es: "Sobre el Creador",
    fr: "À propos du Créateur",
    de: "Über den Entwickler",
    zh: "关于创始人",
    ar: "عن المطور",
    hi: "निर्माता के बारे में",
    pt: "Sobre o Criador",
    ru: "О создателе",
    ja: "創設者について",
    ur: "بانی کے بارے میں",
    bn: "নির্মাতা সম্পর্কে"
  },
  "founder, architect & sole owner": {
    es: "Fundador, Arquitecto y Único Propietario",
    fr: "Fondateur, Architecte et Propriétaire Unique",
    de: "Gründer, Architekt & Alleineigentümer",
    zh: "创始人、总架构师兼唯一所有人",
    ar: "المؤسس والمهندس المعماري والمالك الوحيد",
    hi: "संस्थापक, वास्तुकार एवं एकमात्र स्वामी",
    pt: "Fundador, Arquiteto e Único Proprietário",
    ru: "Основатель, архитектор и единственный владелец",
    ja: "創設者・主任設計者・単独所有者",
    ur: "بانی، چیف معمار اور واحد مالک",
    bn: "প্রতিষ্ঠাতা, স্থপতি ও একমাত্র স্বত্বাধিকারী"
  },
  "academic leadership": {
    es: "Liderazgo Académico",
    fr: "Direction Académique",
    de: "Akademische Leitung",
    zh: "学术领导力",
    ar: "القيادة الأكاديمية",
    hi: "अकादमिक नेतृत्व",
    pt: "Liderança Acadêmica",
    ru: "Академическое руководство",
    ja: "学術的リーダーシップ",
    ur: "تعلیمی قیادت",
    bn: "একাডেমিক নেতৃত্ব"
  },
  "creator photographic gallery": {
    es: "Galería Fotográfica del Creador",
    fr: "Galerie Photographique du Créateur",
    de: "Fotogalerie des Entwicklers",
    zh: "创始人摄影画廊",
    ar: "معرض صور المطور",
    hi: "निर्माता फोटोग्राफिक गैलरी",
    pt: "Galeria Fotográfica do Criador",
    ru: "Фотогалерея создателя",
    ja: "創設者フォトギャラリー",
    ur: "بانی کی تصویری گیلری",
    bn: "নির্মাতার ফটো গ্যালারি"
  },
  "director's office": {
    es: "Despacho del Director",
    fr: "Bureau du Directeur",
    de: "Büro des Direktors",
    zh: "院长办公室",
    ar: "مكتب المدير",
    hi: "निदेशक कार्यालय",
    pt: "Gabinete do Diretor",
    ru: "Кабинет директора",
    ja: "所長室",
    ur: "ڈائریکٹر کا دفتر",
    bn: "পরিচালকের কার্যালয়"
  },
  "update portrait": {
    es: "Actualizar Retrato",
    fr: "Mettre à jour le portrait",
    de: "Porträt aktualisieren",
    zh: "更新个人肖像",
    ar: "تحديث الصورة الشخصية",
    hi: "चित्र अपडेट करें",
    pt: "Atualizar Retrato",
    ru: "Обновить портрет",
    ja: "肖像写真を更新",
    ur: "تصویر تبدیل کریں",
    bn: "প্রতিকৃতি পরিবর্তন করুন"
  },
  "update campus photo": {
    es: "Actualizar Foto de Campus",
    fr: "Mettre à jour la photo du campus",
    de: "Campus-Foto aktualisieren",
    zh: "更新校园环境照",
    ar: "تحديث صورة الحرم الجامعي",
    hi: "परिसर की फोटो अपडेट करें",
    pt: "Atualizar Foto do Campus",
    ru: "Обновить фото кампуса",
    ja: "キャンパス写真を更新",
    ur: "کیمپس کی تصویر تبدیل کریں",
    bn: "ক্যাম্পাসের ছবি হালনাগাদ করুন"
  },
  "upload director pictures": {
    es: "Subir Fotos del Director",
    fr: "Téléverser les photos du directeur",
    de: "Direktorenfotos hochladen",
    zh: "上传院长照片",
    ar: "تحميل صور المدير",
    hi: "निदेशक की तस्वीरें अपलोड करें",
    pt: "Carregar Fotos do Diretor",
    ru: "Загрузить фотографии директора",
    ja: "所長写真をアップロード",
    ur: "ڈائریکٹر کی تصاویر اپ لوڈ کریں",
    bn: "পরিচালকের ছবি আপলোড করুন"
  },
  "director media & photo studio": {
    es: "Estudio de Fotos y Medios del Director",
    fr: "Studio Média et Photo du Directeur",
    de: "Medien- & Fotostudio des Direktors",
    zh: "院长媒体与照片影像室",
    ar: "استودیو الصور والوسائط للمدير",
    hi: "निदेशक मीडिया एवं फोटो स्टूडियो",
    pt: "Estúdio de Mídia e Fotos do Diretor",
    ru: "Медиа и фотостудия директора",
    ja: "所長メディア＆写真スタジオ",
    ur: "ڈائریکٹر میڈیا اور فوٹو اسٹوڈیو",
    bn: "পরিচালক মিডিয়া ও ফটো স্টুডিও"
  },
  "official portrait": {
    es: "Retrato Oficial",
    fr: "Portrait Officiel",
    de: "Offizielles Porträt",
    zh: "官方正式肖像",
    ar: "الصورة الرسمية",
    hi: "आधिकारिक चित्र",
    pt: "Retrato Oficial",
    ru: "Официальный портрет",
    ja: "公式肖像",
    ur: "آفیشل تصویر",
    bn: "অফিসিয়াল প্রতিকৃতি"
  },
  "verified official": {
    es: "Oficial Verificado",
    fr: "Officiel Vérifié",
    de: "Verifiziert Offiziell",
    zh: "官方已认证",
    ar: "مسؤول موثق",
    hi: "सत्यापित आधिकारिक",
    pt: "Oficial Verificado",
    ru: "Официально подтверждено",
    ja: "公式認証済み",
    ur: "تصدیق شدہ آفیشل",
    bn: "যাচাইকৃত অফিসিয়াল"
  },
  "primary creator portrait": {
    es: "Retrato principal del creador",
    fr: "Portrait principal du créateur",
    de: "Hauptporträt des Entwicklers",
    zh: "创始人主肖像",
    ar: "الصورة الرئيسية للمطور",
    hi: "मुख्य निर्माता चित्र",
    pt: "Retrato principal do criador",
    ru: "Основной портрет создателя",
    ja: "創設者のメイン肖像",
    ur: "بانی کی بنیادی تصویر",
    bn: "প্রধান নির্মাতার প্রতিকৃতি"
  },
  "developer • ielts educator • writer • researcher": {
    es: "Desarrollador • Educador de IELTS • Escritor • Investigador",
    fr: "Développeur • Éducateur IELTS • Écrivain • Chercheur",
    de: "Entwickler • IELTS-Pädagoge • Schriftsteller • Forscher",
    zh: "开发者 • 雅思教育家 • 作家 • 学术研究员",
    ar: "مطور • معلم آيلتس • كاتب • باحث",
    hi: "डेवलपर • आईईएलटीएस शिक्षक • लेखक • शोधकर्ता",
    pt: "Desenvolvedor • Educador de IELTS • Escritor • Pesquisador",
    ru: "Разработчик • Преподаватель IELTS • Писатель • Исследователь",
    ja: "開発者 • IELTS教育者 • 作家 • 研究員",
    ur: "ڈیولپر • آئی ایل ٹی ایس استاد • مصنف • محقق",
    bn: "ডেভেলপার • আইইএলটিএস শিক্ষক • লেখক • গবেষক"
  },
  "international islamic university islamabad (iiui)": {
    es: "Universidad Islámica Internacional de Islamabad (IIUI)",
    fr: "Université Islamique Internationale d'Islamabad (IIUI)",
    de: "Internationale Islamische Universität Islamabad (IIUI)",
    zh: "伊斯兰堡国际伊斯兰大学 (IIUI)",
    ar: "الجامعة الإسلامية العالمية بإسلام آباد (IIUI)",
    hi: "अंतर्राष्ट्रीय इस्लामी विश्वविद्यालय इस्लामाबाद (IIUI)",
    pt: "Universidade Islâmica Internacional de Islamabad (IIUI)",
    ru: "Международный исламский университет в Исламабаде (IIUI)",
    ja: "イスラマバード国際イスラム大学 (IIUI)",
    ur: "بین الاقوامی اسلامی یونیورسٹی اسلام آباد (IIUI)",
    bn: "আন্তর্জাতিক ইসলামিক বিশ্ববিদ্যালয় ইসলামাবাদ (আইআইইউআই)"
  },
  "iiui islamabad, pakistan": {
    es: "IIUI Islamabad, Pakistán",
    fr: "IIUI Islamabad, Pakistan",
    de: "IIUI Islamabad, Pakistan",
    zh: "巴基斯坦伊斯兰堡 IIUI",
    ar: "الجامعة الإسلامية العالمية بإسلام آباد، باكستان",
    hi: "आईआईयूआई इस्लामाबाद, पाकिस्तान",
    pt: "IIUI Islamabad, Paquistão",
    ru: "IIUI Исламабад, Пакистан",
    ja: "パキスタン・イスラマバード IIUI",
    ur: "بین الاقوامی اسلامی یونیورسٹی، اسلام آباد، پاکستان",
    bn: "আইআইইউআই ইসলামাবাদ, পাকিস্তান"
  },
  "the lost happiness": {
    es: "La Felicidad Perdida",
    fr: "Le Bonheur Perdu",
    de: "Das verlorene Glück",
    zh: "《迷失的幸福》",
    ar: "السعادة المفقودة",
    hi: "द लॉस्ट हैप्पीनेस (खोई हुई खुशी)",
    pt: "A Felicidade Perdida",
    ru: "Потерянное счастье",
    ja: "「失われた幸福」",
    ur: "دی لاسٹ ہیپینس (گمشدہ مسرت)",
    bn: "দ্য লস্ট হ্যাপিনেস"
  },
  "academic technologist & educator": {
    es: "Tecnólogo Académico y Educador",
    fr: "Technologue Académique et Éducateur",
    de: "Akademischer Technologe & Pädagoge",
    zh: "学术技术专家与教育家",
    ar: "تقني أكاديمي ومعلم",
    hi: "अकादमिक प्रौद्योगिकीविद एवं शिक्षक",
    pt: "Tecnólogo Acadêmico e Educador",
    ru: "Академический технолог и преподаватель",
    ja: "学術テクノロジスト兼教育者",
    ur: "تعلیمی ٹیکنولوجسٹ اور استاد",
    bn: "একাডেমিক প্রযুক্তিবিদ ও শিক্ষক"
  },
  "campus & evening study": {
    es: "Campus y Estudio Nocturno",
    fr: "Campus et Études du Soir",
    de: "Campus- & Abendstudium",
    zh: "校园与夜间研学",
    ar: "الحرم الجامعي والدراسة المسائية",
    hi: "परिसर एवं सांध्य अध्ययन",
    pt: "Campus e Estudo Noturno",
    ru: "Кампус и вечерняя учеба",
    ja: "キャンパスと夜間研究",
    ur: "کیمپس اور شبینہ مطالعہ",
    bn: "ক্যাম্পাস ও সান্ধ্যকালীন অধ্যয়ন"
  },
  "visual data provided in exam": {
    es: "Datos Visuales Proporcionados en el Examen",
    fr: "Données Visuelles Fournies lors de l'Examen",
    de: "In der Prüfung bereitgestellte visuelle Daten",
    zh: "考试中提供的图表数据",
    ar: "البيانات المرئية المقدمة في الامتحان",
    hi: "परीक्षा में प्रदान किए गए विज़ुअल डेटा",
    pt: "Dados Visuais Fornecidos no Exame",
    ru: "Наглядные данные, представленные на экзамене",
    ja: "試験で提示された視覚的データ",
    ur: "امتحان میں فراہم کردہ تصویری ڈیٹا",
    bn: "পরীক্ষায় প্রদত্ত ভিজ্যুয়াল ডেটা"
  },
  "task 1: academic report": {
    es: "Tarea 1: Informe Académico",
    fr: "Tâche 1 : Rapport Académique",
    de: "Aufgabe 1: Akademischer Bericht",
    zh: "任务 1：学术图表报告",
    ar: "المهمة 1: تقرير أكاديمي",
    hi: "कार्य 1: अकादमिक रिपोर्ट",
    pt: "Tarefa 1: Relatório Acadêmico",
    ru: "Задание 1: Академический отчет",
    ja: "タスク 1: アカデミックレポート",
    ur: "ٹاسک 1: اکیڈمک رپورٹ",
    bn: "টাস্ক ১: একাডেমিক রিপোর্ট"
  },
  "task 2: discursive essay": {
    es: "Tarea 2: Ensayo Discursivo",
    fr: "Tâche 2 : Essai Argumentatif",
    de: "Aufgabe 2: Diskursiver Aufsatz",
    zh: "任务 2：议论文写作",
    ar: "المهمة 2: مقال مناقشة",
    hi: "कार्य 2: परिचर्चात्मक निबंध",
    pt: "Tarefa 2: Redação Argumentativa",
    ru: "Задание 2: Дискуссионное эссе",
    ja: "タスク 2: 討議エッセイ",
    ur: "ٹاسک 2: بحثی مضمون",
    bn: "টাস্ক ২: বর্ণনামূলক প্রবন্ধ"
  },
  "task 1 prompt": {
    es: "Enunciado de la Tarea 1",
    fr: "Sujet de la Tâche 1",
    de: "Aufgabenstellung Teil 1",
    zh: "任务 1 题目要求",
    ar: "موضوع المهمة 1",
    hi: "कार्य 1 निर्देश",
    pt: "Enunciado da Tarefa 1",
    ru: "Задание к части 1",
    ja: "タスク 1 プロンプト",
    ur: "ٹاسک 1 کا سوال",
    bn: "টাস্ক ১ নির্দেশিকা"
  },
  "task 2 prompt": {
    es: "Enunciado de la Tarea 2",
    fr: "Sujet de la Tâche 2",
    de: "Aufgabenstellung Teil 2",
    zh: "任务 2 题目要求",
    ar: "موضوع المهمة 2",
    hi: "कार्य 2 निर्देश",
    pt: "Enunciado da Tarefa 2",
    ru: "Задание к части 2",
    ja: "タスク 2 プロンプト",
    ur: "ٹاسک 2 کا سوال",
    bn: "টাস্ক ২ নির্দেশিকা"
  },
  "discursive essay": {
    es: "Ensayo Discursivo",
    fr: "Essai Argumentatif",
    de: "Diskursiver Aufsatz",
    zh: "论证性学术短文",
    ar: "مقال مناقشة",
    hi: "परिचर्चात्मक निबंध",
    pt: "Redação Argumentativa",
    ru: "Дискуссионное эссе",
    ja: "論述エッセイ",
    ur: "بحثی مضمون",
    bn: "বর্ণনামূলক প্রবন্ধ"
  },
  "model band 9.0 answer": {
    es: "Respuesta Modelo de Banda 9.0",
    fr: "Réponse Modèle Niveau 9.0",
    de: "Musterantwort für Band 9.0",
    zh: "9.0 分官方范文",
    ar: "نموذج إجابة الدرجة 9.0",
    hi: "आदर्श बैंड 9.0 उत्तर",
    pt: "Resposta Modelo Banda 9.0",
    ru: "Образцовый ответ на балл 9.0",
    ja: "バンド 9.0 模範解答",
    ur: "ماڈل بینڈ 9.0 جواب",
    bn: "আদর্শ ব্যান্ড ৯.০ উত্তর"
  },
  "estimated band score": {
    es: "Puntuación de Banda Estimada",
    fr: "Score de Bande Estimé",
    de: "Geschätzte Band-Punktzahl",
    zh: "预估雅思总分",
    ar: "درجة النطاق المقدرة",
    hi: "अनुमानित बैंड स्कोर",
    pt: "Pontuação de Banda Estimada",
    ru: "Ориентировочный балл",
    ja: "推定バンドスコア",
    ur: "تخمینہ شدہ بینڈ سکور",
    bn: "আনুমানিক ব্যান্ড স্কোর"
  },
  "task achievement": {
    es: "Cumplimiento de la Tarea",
    fr: "Réalisation de la tâche",
    de: "Aufgabenerfüllung",
    zh: "写作任务完成情况",
    ar: "إنجاز المهمة",
    hi: "कार्य उपलब्धि",
    pt: "Cumprimento da Tarefa",
    ru: "Выполнение задания",
    ja: "タスク達成度",
    ur: "ٹاسک کی تکمیل",
    bn: "টাস্ক অর্জন (Task Achievement)"
  },
  "coherence and cohesion": {
    es: "Coherencia y Cohesión",
    fr: "Cohérence et Cohésion",
    de: "Kohärenz und Kohäsion",
    zh: "连贯与衔接",
    ar: "التماسك والترابط",
    hi: "सुसंगतता और सामंजस्य",
    pt: "Coerência e Coesão",
    ru: "Связность и последовательность",
    ja: "一貫性と連結性",
    ur: "ربط اور تسلسل",
    bn: "সংগতি ও সংযুক্তি (Coherence & Cohesion)"
  },
  "lexical resource": {
    es: "Recursos Léxicos",
    fr: "Richesse Lexicale",
    de: "Lexikalische Ressourcen",
    zh: "词汇丰富度",
    ar: "المفردات المعجمية",
    hi: "शब्दावली संसाधन",
    pt: "Recursos Lexicais",
    ru: "Лексический запас",
    ja: "語彙の豊富さ",
    ur: "ذخیرہ الفاظ",
    bn: "শব্দভাণ্ডার সম্পদ (Lexical Resource)"
  },
  "grammatical range and accuracy": {
    es: "Variedad y Precisión Gramatical",
    fr: "Étendue et Précision Grammaticales",
    de: "Grammatikalische Bandbreite und Genauigkeit",
    zh: "语法多样性与准确性",
    ar: "التنوع النحوي والدقة",
    hi: "व्याकरणिक सीमा और सटीकता",
    pt: "Alcance Gramatical e Precisão",
    ru: "Грамматический диапазон и точность",
    ja: "文法力と正確さ",
    ur: "گرامر کا دائرہ اور درستگی",
    bn: "ব্যাকরণগত ব্যাপ্তি ও নির্ভুলতা (Grammatical Range & Accuracy)"
  },
  "review answers": {
    es: "Revisar Respuestas",
    fr: "Examiner les Réponses",
    de: "Antworten überprüfen",
    zh: "查阅答卷与解析",
    ar: "مراجعة الإجابات",
    hi: "उत्तरों की समीक्षा करें",
    pt: "Revisar Respostas",
    ru: "Просмотреть ответы",
    ja: "解答を確認する",
    ur: "جوابات کا جائزہ لیں",
    bn: "উত্তরসমূহ পর্যালোচনা করুন"
  },
  "back to hub": {
    es: "Volver al Panel",
    fr: "Retour au Hub",
    de: "Zurück zur Übersicht",
    zh: "返回主中心",
    ar: "العودة إلى البوابة",
    hi: "हब पर वापस जाएँ",
    pt: "Voltar ao Hub",
    ru: "Вернуться в центр",
    ja: "ハブに戻る",
    ur: "واپس ہب پر جائیں",
    bn: "প্রধান হাবে ফিরে যান"
  },
  "status: completed": {
    es: "Estado: Completado",
    fr: "Statut : Terminé",
    de: "Status: Abgeschlossen",
    zh: "考试状态：已完成",
    ar: "الحالة: مكتمل",
    hi: "स्थिति: पूर्ण",
    pt: "Status: Concluído",
    ru: "Статус: Завершено",
    ja: "ステータス: 完了",
    ur: "حالت: مکمل",
    bn: "অবস্থা: সম্পন্ন"
  },
  "voice reader": {
    es: "Lector de Voz",
    fr: "Lecteur Vocal",
    de: "Sprachausgabe",
    zh: "语音朗读",
    ar: "القارئ الصوتي",
    hi: "आवाज वाचक",
    pt: "Leitor de Voz",
    ru: "Голосовое чтение",
    ja: "音声読み上げ",
    ur: "آواز سے پڑھیں",
    bn: "ভয়েস রিডার"
  },
  "menu hub": {
    es: "Menú Principal",
    fr: "Menu Principal",
    de: "Hauptmenü",
    zh: "主功能导航",
    ar: "بوابة القائمة",
    hi: "मुख्य मेनू",
    pt: "Menu Principal",
    ru: "Главное меню",
    ja: "メニューハブ",
    ur: "مرکزی مینو",
    bn: "মেনু হাব"
  },
  "close hub": {
    es: "Cerrar Menú",
    fr: "Fermer le Menu",
    de: "Menü schließen",
    zh: "关闭导航",
    ar: "إغلاق القائمة",
    hi: "मेनू बंद करें",
    pt: "Fechar Menu",
    ru: "Закрыть меню",
    ja: "閉じる",
    ur: "مینو بند کریں",
    bn: "হাব বন্ধ করুন"
  },
  "overview": {
    es: "Inicio y Resumen",
    fr: "Vue d'ensemble",
    de: "Übersicht",
    zh: "主页概览",
    ar: "نظرة عامة",
    hi: "अवलोकन",
    pt: "Visão Geral",
    ru: "Обзор",
    ja: "概要",
    ur: "جائزہ",
    bn: "সারসংক্ষেপ"
  },
  "full tests": {
    es: "Exámenes Completos",
    fr: "Examens Complets",
    de: "Vollständige Prüfungen",
    zh: "完整模拟考试",
    ar: "امتحانات كاملة",
    hi: "पूर्ण परीक्षाएं",
    pt: "Testes Completos",
    ru: "Полные тесты",
    ja: "フル模擬試験",
    ur: "مکمل امتحانات",
    bn: "পূর্ণাঙ্গ পরীক্ষাসমূহ"
  },
  "full tests (20)": {
    es: "Exámenes Completos (20)",
    fr: "Examens Complets (20)",
    de: "Vollprüfungen (20)",
    zh: "全套模考 (20)",
    ar: "امتحانات كاملة (20)",
    hi: "पूर्ण परीक्षाएं (20)",
    pt: "Testes Completos (20)",
    ru: "Полные тесты (20)",
    ja: "全試験 (20)",
    ur: "مکمل امتحانات (20)",
    bn: "পূর্ণাঙ্গ পরীক্ষা (২০টি)"
  },
  "reading": {
    es: "Lectura Académica",
    fr: "Lecture Académique",
    de: "Leseverstehen",
    zh: "学术阅读",
    ar: "القراءة الأكاديمية",
    hi: "अकादमिक पठन",
    pt: "Leitura Acadêmica",
    ru: "Академическое чтение",
    ja: "アカデミック・リーディング",
    ur: "اکیڈمک ریڈنگ",
    bn: "পঠন (রিডিং)"
  },
  "listening": {
    es: "Comprensión Auditiva",
    fr: "Compréhension Orale",
    de: "Hörverstehen",
    zh: "听力考试",
    ar: "الاستماع",
    hi: "श्रवण कौशल",
    pt: "Compreensão Auditiva",
    ru: "Аудирование",
    ja: "リスニング",
    ur: "لسننگ",
    bn: "শ্রবণ (লিসেনিং)"
  },
  "writing": {
    es: "Escritura Académica",
    fr: "Expression Écrite",
    de: "Schreibkompetenz",
    zh: "写作评估",
    ar: "الكتابة الأكاديمية",
    hi: "अकादमिक लेखन",
    pt: "Redação Acadêmica",
    ru: "Письмо",
    ja: "ライティング",
    ur: "اکیڈمک رائٹنگ",
    bn: "লিখন (রাইটিং)"
  },
  "speaking": {
    es: "Expresión Oral",
    fr: "Expression Orale",
    de: "Sprechfertigkeit",
    zh: "口语面试",
    ar: "المحادثة والحديث",
    hi: "मौखिक साक्षात्कार",
    pt: "Expressão Oral",
    ru: "Говорение",
    ja: "スピーキング",
    ur: "اسپیکنگ",
    bn: "কথোপকথন (স্পিকিং)"
  },
  "iq test": {
    es: "Test de Inteligencia (CI)",
    fr: "Test de QI Standardisé",
    de: "Standardisierter IQ-Test",
    zh: "智商标准测试",
    ar: "اختبار الذكاء المقنن (IQ)",
    hi: "बुद्धिलब्धि (आईक्यू) परीक्षण",
    pt: "Teste de QI Padronizado",
    ru: "Тест IQ на интеллект",
    ja: "標準 IQ 知能テスト",
    ur: "معیاری ذہانت (IQ) ٹیسٹ",
    bn: "আইকিউ টেস্ট"
  },
  "trf certificate": {
    es: "Certificado Oficial TRF",
    fr: "Certificat TRF Officiel",
    de: "Offizielles TRF-Zertifikat",
    zh: "官方 TRF 成绩证书",
    ar: "شهادة تقرير الاختبار (TRF)",
    hi: "आधिकारिक टीआरएफ प्रमाणपत्र",
    pt: "Certificado Oficial TRF",
    ru: "Официальный сертификат TRF",
    ja: "公式 TRF 成績証明書",
    ur: "آفیشل ٹی آر ایف سرٹیفکیٹ",
    bn: "টিআরএফ সনদপত্র"
  },
  "direct verification": {
    es: "Verificación Directa",
    fr: "Vérification Directe",
    de: "Direktüberprüfung",
    zh: "证书在线验证",
    ar: "التحقق المباشر",
    hi: "प्रत्यक्ष सत्यापन",
    pt: "Verificação Direta",
    ru: "Прямая проверка",
    ja: "オンライン検証",
    ur: "براہ راست تصدیق",
    bn: "সরাসরি যাচাইকরণ"
  },
  "format guide": {
    es: "Guía de Formato",
    fr: "Guide du Format",
    de: "Prüfungsleitfaden",
    zh: "考试格式指南",
    ar: "دليل تنسيق الاختبار",
    hi: "परीक्षा प्रारूप गाइड",
    pt: "Guia de Formato",
    ru: "Руководство по формату",
    ja: "試験構成ガイド",
    ur: "امتحانی فارمیٹ گائیڈ",
    bn: "ফরমেট গাইড"
  },
  "stories (110+)": {
    es: "Historias Reales (110+)",
    fr: "Témoignages (110+)",
    de: "Erfahrungsberichte (110+)",
    zh: "高分心得 (110+)",
    ar: "قصص النجاح (110+)",
    hi: "सफलता की कहानियां (110+)",
    pt: "Histórias de Sucesso (110+)",
    ru: "Истории кандидатов (110+)",
    ja: "合格体験記 (110+)",
    ur: "کامیاب کہانیاں (110+)",
    bn: "সফলতার গল্প (১১০+)"
  },
  "youtube trends": {
    es: "Tendencias YouTube",
    fr: "Tendances YouTube",
    de: "YouTube-Trends",
    zh: "YouTube 视频精选",
    ar: "فيديوهات يوتيوب الشائعة",
    hi: "यूट्यूब वीडियो रुझान",
    pt: "Tendências do YouTube",
    ru: "Тренды YouTube",
    ja: "YouTube 学習トレンド",
    ur: "یوٹیوب ویڈیو ٹرینڈز",
    bn: "ইউটিউব ট্রেন্ডস"
  },
  "all 80 practice tests directory": {
    es: "Directorio de los 80 Exámenes de Práctica",
    fr: "Répertoire des 80 Tests d'Entraînement",
    de: "Verzeichnis aller 80 Übungsprüfungen",
    zh: "全套 80 套精选模考题库目录",
    ar: "دليل جميع اختبارات التدريب الثمانين",
    hi: "सभी 80 अभ्यास परीक्षाओं की निर्देशिका",
    pt: "Diretório de Todos os 80 Testes de Prática",
    ru: "Каталог всех 80 практических тестов",
    ja: "全80問 模擬試験ディレクトリ",
    ur: "تمام 80 پریکٹس امتحانات کی مکمل ڈائرکٹری",
    bn: "সকল ৮০টি অনুশীলন পরীক্ষার তালিকা"
  },
  "filter by skill section or search by academic topic": {
    es: "Filtre por habilidad o busque por tema académico",
    fr: "Filtrer par compétence ou rechercher par sujet académique",
    de: "Nach Modul filtern oder nach akademischem Thema suchen",
    zh: "按考试模块筛选或搜索学术主题",
    ar: "تصفية حسب قسم المهارة أو البحث عن موضوع أكاديمي",
    hi: "कौशल अनुभाग द्वारा फ़िल्टर करें या अकादमिक विषय खोजें",
    pt: "Filtrar por módulo ou pesquisar por tópico acadêmico",
    ru: "Фильтр по навыкам или поиск по академической теме",
    ja: "科目で絞り込む、または学術トピックで検索",
    ur: "مہارت کے شعبے سے فلٹر کریں یا تعلیمی موضوع تلاش کریں",
    bn: "দক্ষতা বা বিষয় অনুযায়ী অনুসন্ধান করুন"
  },
  "search test topic...": {
    es: "Buscar tema de examen...",
    fr: "Rechercher un sujet de test...",
    de: "Thema suchen...",
    zh: "搜索考试主题...",
    ar: "البحث في موضوعات الاختبار...",
    hi: "परीक्षा विषय खोजें...",
    pt: "Pesquisar tópico de exame...",
    ru: "Поиск темы теста...",
    ja: "テストのトピックを検索...",
    ur: "امتحانی موضوع تلاش کریں...",
    bn: "পরীক্ষার বিষয় অনুসন্ধান করুন..."
  },
  "back": {
    es: "Atrás",
    fr: "Retour",
    de: "Zurück",
    zh: "返回",
    ar: "رجوع",
    hi: "वापस",
    pt: "Voltar",
    ru: "Назад",
    ja: "戻る",
    ur: "واپس",
    bn: "পেছনে"
  },
  "all tests": {
    es: "Todos los Exámenes",
    fr: "Tous les Tests",
    de: "Alle Prüfungen",
    zh: "全部考试",
    ar: "جميع الاختبارات",
    hi: "सभी परीक्षाएं",
    pt: "Todos os Testes",
    ru: "Все тесты",
    ja: "すべてのテスト",
    ur: "تمام امتحانات",
    bn: "সকল পরীক্ষা"
  },
  "submit test": {
    es: "Enviar Examen",
    fr: "Soumettre le Test",
    de: "Prüfung einreichen",
    zh: "提交考试",
    ar: "إرسال الاختبار",
    hi: "परीक्षा सबमिट करें",
    pt: "Enviar Teste",
    ru: "Сдать тест",
    ja: "テストを提出",
    ur: "امتحان جمع کریں",
    bn: "পরীক্ষা জমা দিন"
  },
  "retake test": {
    es: "Repetir Examen",
    fr: "Reprendre le Test",
    de: "Prüfung wiederholen",
    zh: "重新测试",
    ar: "إعادة الاختبار",
    hi: "पुनः परीक्षा दें",
    pt: "Refazer Teste",
    ru: "Пересдать тест",
    ja: "再受験する",
    ur: "دوبارہ امتحان دیں",
    bn: "পুনরায় পরীক্ষা দিন"
  },
  "retake": {
    es: "Repetir",
    fr: "Reprendre",
    de: "Wiederholen",
    zh: "重试",
    ar: "إعادة",
    hi: "पुनः",
    pt: "Refazer",
    ru: "Повторить",
    ja: "やり直す",
    ur: "دوبارہ",
    bn: "পুনরায় পরীক্ষা"
  },
  "completed": {
    es: "Completado",
    fr: "Terminé",
    de: "Abgeschlossen",
    zh: "已完成",
    ar: "مكتمل",
    hi: "पूर्ण हुआ",
    pt: "Concluído",
    ru: "Завершено",
    ja: "完了",
    ur: "مکمل",
    bn: "সম্পন্ন হয়েছে"
  },
  "score": {
    es: "Puntuación",
    fr: "Score",
    de: "Punktzahl",
    zh: "得分",
    ar: "الدرجة",
    hi: "स्कोर",
    pt: "Pontuação",
    ru: "Балл",
    ja: "スコア",
    ur: "اسکور",
    bn: "স্কোর"
  },
  "band score": {
    es: "Banda IELTS",
    fr: "Score de Bande",
    de: "Band-Score",
    zh: "雅思总分",
    ar: "درجة النطاق",
    hi: "बैंड स्कोर",
    pt: "Pontuação de Banda",
    ru: "Балл шкалы",
    ja: "バンドスコア",
    ur: "بینڈ اسکور",
    bn: "ব্যান্ড স্কোর"
  },
  "listen": {
    es: "Escuchar",
    fr: "Écouter",
    de: "Anhören",
    zh: "播放音频",
    ar: "استماع",
    hi: "सुनें",
    pt: "Ouvir",
    ru: "Слушать",
    ja: "聴く",
    ur: "سنیں",
    bn: "শুনুন"
  },
  "read aloud": {
    es: "Leer en Voz Alta",
    fr: "Lire à Voix Haute",
    de: "Laut vorlesen",
    zh: "语音朗读",
    ar: "قراءة بصوت عالٍ",
    hi: "बोलकर पढ़ें",
    pt: "Ler em Voz Alta",
    ru: "Читать вслух",
    ja: "音読する",
    ur: "بلند آواز سے پڑھیں",
    bn: "উচ্চস্বরে পড়ুন"
  },
  "stop voice": {
    es: "Detener Voz",
    fr: "Arrêter la Voix",
    de: "Stimme stoppen",
    zh: "停止朗读",
    ar: "إيقاف الصوت",
    hi: "आवाज बंद करें",
    pt: "Parar Voz",
    ru: "Остановить голос",
    ja: "音声を停止",
    ur: "آواز روکیں",
    bn: "ভয়েস বন্ধ করুন"
  },
  "narrator": {
    es: "Narrador",
    fr: "Narrateur",
    de: "Erzähler",
    zh: "旁白播音",
    ar: "الراوي",
    hi: "कथावाचक",
    pt: "Narrador",
    ru: "Диктор",
    ja: "ナレーター",
    ur: "راوی",
    bn: "বর্ণনাকারী"
  },
  "receptionist": {
    es: "Recepcionista",
    fr: "Réceptionniste",
    de: "Rezeptionist",
    zh: "前台接待",
    ar: "موظف الاستقبال",
    hi: "रिसेप्शनिस्ट",
    pt: "Recepcionista",
    ru: "Администратор",
    ja: "受付担当",
    ur: "ریسیپشنسٹ",
    bn: "রিসেপশনিস্ট"
  },
  "student": {
    es: "Estudiante",
    fr: "Étudiant",
    de: "Student",
    zh: "学生",
    ar: "طالب",
    hi: "छात्र",
    pt: "Estudante",
    ru: "Студент",
    ja: "学生",
    ur: "طالب علم",
    bn: "শিক্ষার্থী"
  },
  "customer": {
    es: "Cliente",
    fr: "Client",
    de: "Kunde",
    zh: "顾客",
    ar: "العميل",
    hi: "ग्राहक",
    pt: "Cliente",
    ru: "Клиент",
    ja: "お客様",
    ur: "کسٹمر",
    bn: "গ্রাহক"
  },
  "interviewer": {
    es: "Entrevistador",
    fr: "Interviewer",
    de: "Interviewer",
    zh: "考官 / 采访者",
    ar: "المحاور",
    hi: "साक्षात्कारकर्ता",
    pt: "Entrevistador",
    ru: "Экзаменатор",
    ja: "面接官",
    ur: "انٹرویو لینے والا",
    bn: "সাক্ষাৎকার গ্রহণকারী"
  },
  "true": {
    es: "Verdadero",
    fr: "Vrai",
    de: "Wahr",
    zh: "正确",
    ar: "صحيح",
    hi: "सत्य",
    pt: "Verdadeiro",
    ru: "Верно",
    ja: "正 (True)",
    ur: "درست",
    bn: "সত্য (True)"
  },
  "false": {
    es: "Falso",
    fr: "Faux",
    de: "Falsch",
    zh: "错误",
    ar: "خطأ",
    hi: "असत्य",
    pt: "Falso",
    ru: "Неверно",
    ja: "誤 (False)",
    ur: "غلط",
    bn: "মিথ্যা (False)"
  },
  "not given": {
    es: "No Mencionado",
    fr: "Non Mentionné",
    de: "Nicht angegeben",
    zh: "未提及",
    ar: "غير معطى",
    hi: "नहीं दिया गया",
    pt: "Não Mencionado",
    ru: "Не указано",
    ja: "記載なし (Not Given)",
    ur: "نہیں دیا گیا",
    bn: "দেওয়া নেই (Not Given)"
  },
  "yes": {
    es: "Sí",
    fr: "Oui",
    de: "Ja",
    zh: "是",
    ar: "نعم",
    hi: "हाँ",
    pt: "Sim",
    ru: "Да",
    ja: "はい",
    ur: "ہاں",
    bn: "হ্যাঁ (Yes)"
  },
  "no": {
    es: "No",
    fr: "Non",
    de: "Nein",
    zh: "否",
    ar: "لا",
    hi: "नहीं",
    pt: "Não",
    ru: "Нет",
    ja: "いいえ",
    ur: "نہیں",
    bn: "না (No)"
  }
};

// Common word and phrase replacement dictionary for deep translation
export const PHRASE_MAPPINGS: Record<string, Partial<Record<SupportedLanguage, string>>> = {
  "candidate name": {"es":"Nombre del candidato","fr":"Nom du candidat","de":"Name des Kandidaten","zh":"考生姓名","ar":"اسم المرشح","hi":"परीक्षार्थी का नाम","pt":"Nome do candidato","ru":"Имя кандидата","ja":"受験者氏名","ur":"امیدوار کا نام","bn":"পরীক্ষার্থীর নাম"},
  "candidate number": {"es":"Número de candidato","fr":"Numéro de candidat","de":"Kandidatennummer","zh":"考生考号","ar":"رقم المرشح","hi":"परीक्षार्थी क्रमांक","pt":"Número do candidato","ru":"Номер кандидата","ja":"受験者番号","ur":"امیدوار کا نمبر","bn":"পরীক্ষার্থী নম্বর"},
  "date of birth": {"es":"Fecha de nacimiento","fr":"Date de naissance","de":"Geburtsdatum","zh":"出生日期","ar":"تاريخ الميلاد","hi":"जन्म तिथि","pt":"Data de nascimento","ru":"Дата рождения","ja":"生年月日","ur":"تاریخ پیدائش","bn":"জন্ম তারিখ"},
  "country of origin": {"es":"País de origen","fr":"Pays d'origine","de":"Herkunftsland","zh":"国籍籍贯","ar":"بلد الأصل","hi":"मूल देश","pt":"País de origem","ru":"Страна происхождения","ja":"出身国","ur":"اصل ملک","bn":"উৎস দেশ"},
  "most popular": {"es":"Más populares","fr":"Les plus populaires","de":"Am beliebtesten","zh":"最受欢迎","ar":"الأكثر شهرة","hi":"सबसे लोकप्रिय","pt":"Mais populares","ru":"Самые популярные","ja":"最も人気","ur":"سب سے زیادہ مقبول","bn":"সবচেয়ে জনপ্রিয়"},
  "top rated": {"es":"Mejor valorados","fr":"Les mieux notés","de":"Bestbewertet","zh":"评分最高","ar":"الأعلى تقييماً","hi":"शीर्ष मूल्यांकित","pt":"Mais bem avaliados","ru":"Лучшие оценки","ja":"高評価順","ur":"اعلیٰ درجہ بند","bn":"শীর্ষ মূল্যায়িত"},
  "recent releases": {"es":"Publicaciones recientes","fr":"Dernières publications","de":"Neueste Veröffentlichungen","zh":"最新发布","ar":"أحدث الإصدارات","hi":"हाल की रिलीज़","pt":"Lançamentos recentes","ru":"Свежие выпуски","ja":"最新リリース","ur":"حالیہ ریلیز","bn":"সাম্প্রতিক প্রকাশনা"},
  "no matching articles found": {"es":"No se encontraron artículos coincidentes","fr":"Aucun article correspondant trouvé","de":"Keine passenden Artikel gefunden","zh":"未找到符合条件的文章","ar":"لم يتم العثور على مقالات مطابقة","hi":"कोई मेल खाता लेख नहीं मिला","pt":"Nenhum artigo correspondente encontrado","ru":"Подходящих статей не найдено","ja":"該当する記事が見つかりませんでした","ur":"کوئی مماثل مضمون نہیں ملا","bn":"কোনো মেলানো নিবন্ধ পাওয়া যায়নি"},
  "flashcard mode": {"es":"Modo tarjetas de memoria","fr":"Mode cartes mémoires","de":"Karteikarten-Modus","zh":"抽认卡记忆模式","ar":"وضع البطاقات التعليمية","hi":"फ्लैशकार्ड मोड","pt":"Modo cartões de memória","ru":"Режим карточек памяти","ja":"フラッシュカードモード","ur":"فلیش کارڈ موڈ","bn":"ফ্ল্যাশকার্ড মোড"},
  "curated topics": {"es":"Temas seleccionados","fr":"Thèmes sélectionnés","de":"Ausgewählte Themen","zh":"精选高频考题","ar":"مواضيع منتقاة بعناية","hi":"क्यूरेट किए गए विषय","pt":"Tópicos selecionados","ru":"Отобранные темы","ja":"厳選トピック","ur":"منتخب موضوعات","bn":"বাছাইকৃত বিষয়সমূহ"},
  "full mock simulations": {"es":"Simulacros completos de examen","fr":"Simulations complètes d'examen","de":"Vollständige Prüfungssimulationen","zh":"全真机考全套模考","ar":"محاكاة الامتحانات الكاملة","hi":"पूर्ण मॉक सिमुलेशन","pt":"Simulações completas de exame","ru":"Полные симуляции экзаменов","ja":"完全フル模試シミュレーション","ur":"مکمل ماک نقلی امتحانات","bn":"পূর্ণাঙ্গ মক সিমুলেশন"},
  "practice tests": {"es":"Exámenes de práctica","fr":"Tests d'entraînement","de":"Übungstests","zh":"单科专项模考","ar":"امتحانات تدريبية","hi":"अभ्यास परीक्षण","pt":"Testes práticos","ru":"Практические тесты","ja":"実践模試演習","ur":"مشقی امتحانات","bn":"অনুশীলন পরীক্ষাসমূহ"},
  "high-engagement stories": {"es":"Historias de alto impacto","fr":"Témoignages à fort engagement","de":"Erfolgsgeschichten","zh":"高赞名师高分心得","ar":"قصص وتجارب تفاعلية ملهمة","hi":"उच्च जुड़ाव वाली कहानियां","pt":"Histórias de alto engajamento","ru":"Вдохновляющие истории успеха","ja":"合格体験ストーリー","ur":"متاثر کن کہانیاں","bn":"উচ্চ-অংশগ্রহণমূলক গল্প"},
  "youtube search trends": {"es":"Tendencias de búsqueda de YouTube","fr":"Tendances de recherche YouTube","de":"YouTube-Suchtrends","zh":"YouTube 官方热门考情趋势","ar":"مؤشرات بحث يوتيوب الشائعة","hi":"यूट्यूब खोज रुझान","pt":"Tendências de busca do YouTube","ru":"Тренды поиска YouTube","ja":"YouTube 検索トレンド","ur":"یوٹیوب سرچ ٹرینڈز","bn":"ইউটিউব অনুসন্ধান ট্রেন্ডস"},
  "seo optimized": {"es":"Optimizado para SEO","fr":"Optimisé pour le SEO","de":"SEO-optimiert","zh":"深度系统优化","ar":"محسّن لمحركات البحث","hi":"एसईओ अनुकूलित","pt":"Otimizado para SEO","ru":"SEO-оптимизированный","ja":"体系的最適化","ur":"ایس ای او آپٹمائزڈ","bn":"এসইও অপটিমাইজড"},
  "knowledge base": {"es":"Base de conocimientos","fr":"Base de connaissances","de":"Wissensdatenbank","zh":"雅思官方备考百科知识库","ar":"قاعدة المعرفة الشاملة","hi":"ज्ञान आधार","pt":"Base de conhecimento","ru":"База знаний","ja":"公式ナレッジベース","ur":"علمی ڈیٹا بیس","bn":"জ্ঞান ভাণ্ডার"},
  "scoring matrix & traps": {"es":"Matriz de puntuación y trampas comunes","fr":"Grille de notation et pièges courants","de":"Bewertungsmatrix & Fallen","zh":"考官官方评分矩阵与高频陷阱","ar":"مصفوفة التقييم والأفخاخ الشائعة","hi":"स्कोरिंग मैट्रिक्स और जाल","pt":"Matriz de pontuação e armadilhas comuns","ru":"Матрица оценивания и типичные ловушки","ja":"採点基準マトリックスと落とし穴","ur":"اسکورنگ میٹرکس اور عام دھوکے","bn":"স্কোরিং ম্যাট্রিক্স ও সাধারণ ফাঁদ"},
  "task response": {"es":"Respuesta a la tarea","fr":"Réponse à la tâche","de":"Beantwortung der Aufgabe","zh":"观点切题度 (Task Response)","ar":"الاستجابة لمتطلبات السؤال","hi":"कार्य प्रतिक्रिया","pt":"Resposta à tarefa","ru":"Полнота ответа (Task Response)","ja":"課題への応答度","ur":"ٹاسک کا جواب","bn":"টাস্ক প্রতিক্রিয়া"},
  "fluency and coherence": {"es":"Fluidez y coherencia","fr":"Fluidité et cohérence","de":"Flüssigkeit und Kohärenz","zh":"流利度与连贯性 (Fluency & Coherence)","ar":"الطلاقة والتماسك في الحديث","hi":"धाराप्रवाह और सुसंगतता","pt":"Fluência e coerência","ru":"Беглость и связность речи (Fluency & Coherence)","ja":"流暢さと一貫性","ur":"روانی اور ربط","bn":"সাবলীলতা ও ধারাবাহিকতা"},
  "official cambridge / idp assessment standard": {"es":"Estándar Oficial de Evaluación de Cambridge / IDP","fr":"Norme Officielle d'Évaluation Cambridge / IDP","de":"Offizieller Cambridge / IDP Bewertungsstandard","zh":"剑桥与 IDP 官方考官评审标准","ar":"معيار التقييم الرسمي لكامبريدج و IDP","hi":"आधिकारिक कैम्ब्रिज / आईडीपी मूल्यांकन मानक","pt":"Padrão Oficial de Avaliação Cambridge / IDP","ru":"Официальный стандарт оценивания Cambridge / IDP","ja":"公式ケンブリッジ／IDP 採点基準","ur":"آفیشل کیمبرج / آئی ڈی پی تشخیصی معیار","bn":"অফিসিয়াল কেমব্রিজ / আইডিপি মূল্যায়ন মানদণ্ড"},
  "in-depth masterclasses & candidate journeys": {"es":"Clases magistrales detalladas y experiencias de candidatos","fr":"Cours magistraux approfondis et parcours de candidats","de":"Tiefgehende Meisterklassen & Kandidatenwege","zh":"深度名师大师课与高分上岸全流程分享","ar":"دورات متقدمة مفصلة ورحلات وتجارب المرشحين","hi":"गहन मास्टरक्लास और उम्मीदवार यात्राएं","pt":"Aulas magnas aprofundadas e jornadas de candidatos","ru":"Углубленные мастер-классы и реальный опыт кандидатов","ja":"徹底マスタークラスと合格者の体験談","ur":"گہرائی میں ماسٹر کلاسز اور امیدواروں کے تجربات","bn":"বিস্তারিত মাস্টারক্লাস ও পরীক্ষার্থীদের বাস্তব অভিজ্ঞতা"},
  "how thoroughly you address prompt questions & support ideas": {"es":"Cómo abordas a fondo las preguntas y fundamentas tus ideas","fr":"Comment vous traitez en profondeur les questions et étayez vos idées","de":"Wie gründlich Sie die Aufgabenfragen behandeln und Ideen begründen","zh":"评估是否全面切题并提供充分论据支持各个分论点","ar":"مدى دقة معالجتك لأسئلة التوجيه ودعمك للأفكار بالحجج","hi":"आप कितनी पूरी तरह से प्रश्नों का उत्तर देते हैं और विचारों का समर्थन करते हैं","pt":"Quão minuciosamente você aborda as perguntas e sustenta suas ideias","ru":"Насколько полно раскрыта тема и аргументированы ключевые мысли","ja":"設問に対して徹底的に回答し、論点を論理的に支持できているか","ur":"آپ کتنی باریکی سے سوالات کا احاطہ کرتے ہیں اور دلائل فراہم کرتے ہیں","bn":"আপনি কত গভীরভাবে প্রশ্নের উত্তর দিচ্ছেন এবং ধারণাগুলোকে সমর্থন করছেন"},
  "examiner is speaking:": {"es":"El examinador está hablando:","fr":"L'examinateur parle :","de":"Der Prüfer spricht:","zh":"考官正在发言：","ar":"الممتحن يتحدث الآن:","hi":"परीक्षक बोल रहे हैं:","pt":"O examinador está falando:","ru":"Экзаменатор говорит:","ja":"試験官が話しています：","ur":"ممتحن بول رہا ہے:","bn":"পরীক্ষক কথা বলছেন:"},
  "recording complete!": {"es":"¡Grabación completada!","fr":"Enregistrement terminé !","de":"Aufnahme abgeschlossen!","zh":"口语录音完成！","ar":"اكتمل التسجيل بنجاح!","hi":"रिकॉर्डिंग पूरी हुई!","pt":"Gravação concluída!","ru":"Запись завершена!","ja":"録音が完了しました！","ur":"ریکارڈنگ مکمل ہو گئی!","bn":"রেকর্ডিং সম্পন্ন হয়েছে!"},
  "candidate success stories": {"es":"Historias de éxito de candidatos","fr":"Témoignages de réussite de candidats","de":"Erfolgsgeschichten von Kandidaten","zh":"高分学员成功案例","ar":"قصص نجاح المرشحين","hi":"सफल उम्मीदवारों की कहानियां","pt":"Histórias de sucesso de candidatos","ru":"Истории успеха кандидатов","ja":"合格体験談集","ur":"کامیاب امیدواروں کی کہانیاں","bn":"সফল পরীক্ষার্থীদের গল্প"},
  "band score calculator": {"es":"Calculadora de puntuación Band","fr":"Calculateur de score Band","de":"Band-Score-Rechner","zh":"雅思总分与分科智能计算器","ar":"حاسبة درجات الآيلتس (Band)","hi":"बैंड स्कोर कैलकुलेटर","pt":"Calculadora de pontuação Band","ru":"Калькулятор баллов IELTS Band","ja":"バンドスコア計算機","ur":"بینڈ اسکور کیلکولیٹر","bn":"ব্যান্ড স্কোর ক্যালকুলেটর"},
  "format & scoring guide": {"es":"Guía de formato y puntuación","fr":"Guide du format et de la notation","de":"Leitfaden zu Format und Bewertung","zh":"考试全科题型结构与评分指南","ar":"دليل بنية الامتحان ونظام الدرجات","hi":"प्रारूप एवं स्कोरिंग गाइड","pt":"Guia de formato e pontuação","ru":"Руководство по формату и оцениванию","ja":"試験形式と採点ガイド","ur":"امتحانی فارمیٹ اور اسکورنگ گائیڈ","bn":"ফরম্যাট ও স্কোরিং গাইড"},
  // Examiner Speaking Prompts & Dialogue
  "good afternoon. my name is dr. sarah collins. can you tell me your full name, please?": {
    es: "Buenas tardes. Mi nombre es Dra. Sarah Collins. ¿Puede decirme su nombre completo, por favor?",
    fr: "Bonjour. Je m'appelle Dr. Sarah Collins. Pouvez-vous me donner votre nom complet, s'il vous plaît ?",
    de: "Guten Tag. Mein Name ist Dr. Sarah Collins. Können Sie mir bitte Ihren vollständigen Namen nennen?",
    zh: "下午好。我是考官 Sarah Collins 博士。请问能告诉我您的全名吗？",
    ar: "مساء الخير. اسمي الدكتورة سارة كولينز. هل يمكنك إخباري باسمك الكامل من فضلك؟",
    hi: "शुभ दोपहर। मेरा नाम डॉ. सारा कोलिन्स है। क्या आप मुझे अपना पूरा नाम बता सकते हैं?",
    pt: "Boa tarde. Meu nome é Dra. Sarah Collins. Você poderia me dizer seu nome completo, por favor?",
    ru: "Добрый день. Меня зовут доктор Сара Коллинз. Не могли бы вы назвать ваше полное имя, пожалуйста?",
    ja: "こんにちは。試験官のサラ・コリンズ博士です。フルネームを教えていただけますか？",
    ur: "دوپہر بخیر۔ میرا نام ڈاکٹر سارہ کولنز ہے۔ کیا آپ مجھے اپنا پورا نام بتا سکتے ہیں؟",
    bn: "শুভ অপরাহ্ন। আমার নাম ড. সারাহ কলিন্স। দয়া করে আপনার পূর্ণ নাম বলবেন কি?"
  },
  "examiner is speaking question": {
    es: "El examinador está haciendo la pregunta",
    fr: "L'examinateur pose la question",
    de: "Der Prüfer stellt die Frage",
    zh: "考官正在提问第",
    ar: "الممتحن يلقي السؤال",
    hi: "परीक्षक प्रश्न पूछ रहे हैं",
    pt: "O examinador está fazendo a pergunta",
    ru: "Экзаменатор задает вопрос",
    ja: "試験官が質問しています：第",
    ur: "ممتحن سوال پوچھ رہے ہیں",
    bn: "পরীক্ষক প্রশ্নটি বলছেন"
  },
  "please answer now. recording starting for 30 seconds...": {
    es: "Por favor responda ahora. La grabación comienza durante 30 segundos...",
    fr: "Veuillez répondre maintenant. Enregistrement en cours pendant 30 secondes...",
    de: "Bitte antworten Sie jetzt. Die Aufnahme startet für 30 Sekunden...",
    zh: "请现在回答。正在录音（30秒计时）...",
    ar: "يرجى الإجابة الآن. يبدأ التسجيل لمدة 30 ثانية...",
    hi: "कृपया अब उत्तर दें। 30 सेकंड के लिए रिकॉर्डिंग शुरू हो रही है...",
    pt: "Por favor responda agora. Gravação iniciando por 30 segundos...",
    ru: "Пожалуйста, отвечайте сейчас. Запись на 30 секунд началась...",
    ja: "今すぐお答えください。30秒間の録音が開始されます...",
    ur: "براہ کرم اب جواب دیں۔ 30 سیکنڈ کے لیے ریکارڈنگ شروع ہو رہی ہے...",
    bn: "অনুগ্রহ করে এখন উত্তর দিন। ৩০ সেকেন্ডের রেকর্ডিং শুরু হচ্ছে..."
  },
  "evaluating your spoken response...": {
    es: "Evaluando su respuesta oral con IA...",
    fr: "Évaluation de votre réponse orale par IA...",
    de: "Ihre gesprochene Antwort wird ausgewertet...",
    zh: "AI 正在评估您的口语表现...",
    ar: "جاري تقييم إجابتك الشفوية بواسطة الذكاء الاصطناعي...",
    hi: "आपकी मौखिक प्रतिक्रिया का मूल्यांकन किया जा रहा है...",
    pt: "Avaliando sua resposta oral com IA...",
    ru: "Оценка вашего ответа с помощью ИИ...",
    ja: "スピーチ回答をAIが評価しています...",
    ur: "آپ کے زبانی جواب کا AI کے ذریعے جائزہ لیا جا رہا ہے...",
    bn: "আপনার মৌখিক উত্তর মূল্যায়ন করা হচ্ছে..."
  },
  "you have 1 minute to take notes and prepare. then speak for 1 to 2 minutes.": {
    es: "Tiene 1 minuto para tomar notas y prepararse. Luego hable durante 1 a 2 minutos.",
    fr: "Vous avez 1 minute pour prendre des notes et vous préparer. Parlez ensuite pendant 1 à 2 minutes.",
    de: "Sie haben 1 Minute Zeit, um sich Notizen zu machen. Sprechen Sie dann 1 bis 2 Minuten.",
    zh: "您有 1 分钟时间做笔记并准备。然后请陈述 1 到 2 分钟。",
    ar: "لديك دقيقة واحدة لتدوين الملاحظات والتحضير. ثم تحدث لمدة دقيقة إلى دقيقتين.",
    hi: "आपके पास नोट्स लेने और तैयारी करने के लिए 1 मिनट है। फिर 1 से 2 मिनट तक बोलें।",
    pt: "Você tem 1 minuto para fazer anotações e se preparar. Depois fale por 1 a 2 minutos.",
    ru: "У вас есть 1 минута на подготовку. Затем говорите от 1 до 2 минут.",
    ja: "メモを取り準備する時間が1分間あります。その後、1〜2分間お話しください。",
    ur: "آپ کے پاس نوٹس لینے اور تیاری کرنے کے لیے 1 منٹ ہے۔ پھر 1 سے 2 منٹ بولیں۔",
    bn: "নোট নেওয়ার ও প্রস্তুতি নেওয়ার জন্য আপনার ১ মিনিট সময় আছে। এরপর ১ থেকে ২ মিনিট কথা বলুন।"
  },
  "mock exams & skills practice": {
    es: "Exámenes de Práctica y Habilidades",
    fr: "Examens Blancs & Entraînement",
    de: "Probeprüfungen & Kompetenztraining",
    zh: "全真模拟考试与专项练习",
    ar: "الامتحانات التجريبية والتدريب على المهارات",
    hi: "मॉक परीक्षाएं एवं कौशल अभ्यास",
    pt: "Exames Simulados e Prática de Habilidades",
    ru: "Пробные экзамены и тренировка навыков",
    ja: "模擬試験とスキル別演習",
    ur: "ماک امتحانات اور مہارتوں کی مشق",
    bn: "মক পরীক্ষা ও দক্ষতা অনুশীলন"
  },
  "catalog & test tracker": {
    es: "Catálogo y Seguimiento de Exámenes",
    fr: "Catalogue et Suivi des Tests",
    de: "Katalog & Testfortschritt",
    zh: "题库目录与考试进度追踪",
    ar: "دليل الاختبارات ومتابعة التقدم",
    hi: "कैटलॉग एवं टेस्ट ट्रैकर",
    pt: "Catálogo e Monitoramento de Testes",
    ru: "Каталог и отслеживание тестов",
    ja: "カタログおよびテスト進捗管理",
    ur: "کیٹلاگ اور ٹیسٹ ٹریکر",
    bn: "ক্যাটালগ ও টেস্ট ট্র্যাকার"
  },
  "timed mock battery": {
    es: "Batería de Exámenes Cronometrados",
    fr: "Batterie d'Examens Chronométrés",
    de: "Zeitgesteuerte Prüfungsreihe",
    zh: "全真限时模考组",
    ar: "بطارية امتحانات تجريبية موقوتة",
    hi: "समयबद्ध मॉक बैटरी",
    pt: "Bateria de Testes Cronometrados",
    ru: "Серия тестов с ограничением времени",
    ja: "時間制限付き模擬試験セット",
    ur: "مکمل وقتی ماک بیٹری",
    bn: "সময় নির্ধারিত মক ব্যাটারি"
  },
  "20 full academic tests": {
    es: "20 Exámenes Académicos Completos",
    fr: "20 Tests Académiques Complets",
    de: "20 Vollständige Akademische Tests",
    zh: "20 套完整学术类大模考",
    ar: "20 امتحاناً أكاديمياً كاملاً",
    hi: "20 पूर्ण अकादमिक टेस्ट",
    pt: "20 Testes Acadêmicos Completos",
    ru: "20 полных академических тестов",
    ja: "20の完全アカデミックテスト",
    ur: "20 مکمل اکیڈمک ٹیسٹ",
    bn: "২০টি পূর্ণাঙ্গ একাডেমিক পরীক্ষা"
  },
  "20 tests • 60 mins each": {
    es: "20 Exámenes • 60 min cada uno",
    fr: "20 Tests • 60 min chacun",
    de: "20 Prüfungen • je 60 Min.",
    zh: "20 套测试 • 每套 60 分钟",
    ar: "20 اختباراً • 60 دقيقة لكل منها",
    hi: "20 टेस्ट • प्रत्येक 60 मिनट",
    pt: "20 Testes • 60 min cada",
    ru: "20 тестов • по 60 мин каждый",
    ja: "20テスト • 各60分",
    ur: "20 ٹیسٹ • ہر ایک 60 منٹ",
    bn: "২০টি পরীক্ষা • প্রতিটিতে ৬০ মিনিট"
  },
  "20 audio tests • 40 mins": {
    es: "20 Exámenes con Audio • 40 min",
    fr: "20 Tests Audio • 40 min",
    de: "20 Hörprüfungen • 40 Min.",
    zh: "20 套原声听力 • 40 分钟",
    ar: "20 اختباراً صوتياً • 40 دقيقة",
    hi: "20 ऑडियो टेस्ट • 40 मिनट",
    pt: "20 Testes de Áudio • 40 min",
    ru: "20 аудиотестов • 40 мин",
    ja: "20の音声テスト • 40分",
    ur: "20 آڈیو ٹیسٹ • 40 منٹ",
    bn: "২০টি অডিও পরীক্ষা • ৪০ মিনিট"
  },
  "tasks 1 & 2 • 60 mins": {
    es: "Tareas 1 y 2 • 60 min",
    fr: "Tâches 1 & 2 • 60 min",
    de: "Aufgaben 1 & 2 • 60 Min.",
    zh: "Task 1 与 Task 2 • 60 分钟",
    ar: "المهمتان 1 و 2 • 60 دقيقة",
    hi: "टास्क 1 और 2 • 60 मिनट",
    pt: "Tarefas 1 e 2 • 60 min",
    ru: "Задания 1 и 2 • 60 мин",
    ja: "タスク 1 & 2 • 60分",
    ur: "ٹاسک 1 اور 2 • 60 منٹ",
    bn: "টাস্ক ১ ও ২ • ৬০ মিনিট"
  },
  "part 1, 2, 3 • live audio": {
    es: "Partes 1, 2, 3 • Audio en Vivo",
    fr: "Parties 1, 2, 3 • Audio en Direct",
    de: "Teile 1, 2, 3 • Live-Audio",
    zh: "第一、二、三部分 • 实时原声对话",
    ar: "الأجزاء 1، 2، 3 • صوت مباشر",
    hi: "भाग 1, 2, 3 • लाइव ऑडियो",
    pt: "Partes 1, 2, 3 • Áudio ao Vivo",
    ru: "Части 1, 2, 3 • Живое аудио",
    ja: "パート 1, 2, 3 • リアルタイム音声",
    ur: "حصہ 1، 2، 3 • لائیو آڈیو",
    bn: "পার্ট ১, ২, ৩ • লাইভ অডিও"
  },
  "full screen portal": {
    es: "Portal de Pantalla Completa",
    fr: "Portail Plein Écran",
    de: "Vollbild-Portal",
    zh: "全屏导航门户",
    ar: "بوابة الشاشة الكاملة",
    hi: "पूर्ण स्क्रीन पोर्टल",
    pt: "Portal em Tela Cheia",
    ru: "Полноэкранный портал",
    ja: "フルスクリーンポータル",
    ur: "فل اسکرین پورٹل",
    bn: "ফুল স্ক্রিন পোর্টাল"
  },
  "candidate stories, band 9 breakthroughs & examiner deconstructions": {
    es: "Historias de Candidatos, Éxitos de Banda 9 y Análisis de Examinadores",
    fr: "Témoignages de Candidats, Réussites Bande 9 et Analyses des Examinateurs",
    de: "Kandidatengeschichten, Band 9 Durchbrüche & Prüfer-Analysen",
    zh: "考生经验、9分通关秘籍与考官深度解析",
    ar: "قصص المرشحين، إنجازات الدرجة 9 وتحليلات الممتحنين",
    hi: "अभ्यर्थियों की कहानियां, बैंड 9 की सफलता और परीक्षकों का विश्लेषण",
    pt: "Histórias de Candidatos, Conquistas de Banda 9 e Análises de Examinadores",
    ru: "Истории кандидатов, прорывы на 9 баллов и разборы экзаменаторов",
    ja: "合格体験談、バンド9獲得の秘訣、試験官の徹底分析",
    ur: "امیدواروں کی کہانیاں، بینڈ 9 کی کامیابیاں اور ممتحن کے تجزیے",
    bn: "পরীক্ষার্থীদের গল্প, ব্যান্ড ৯ সাফল্য ও পরীক্ষকদের বিশ্লেষণ"
  },
  "watch official ielts video lessons & search any youtube topic": {
    es: "Vea Lecciones en Video Oficiales de IELTS y Busque en YouTube",
    fr: "Regardez les Leçons Vidéo Officielles et Recherchez sur YouTube",
    de: "Offizielle IELTS-Videolektionen ansehen & jedes Thema suchen",
    zh: "观看官方雅思视频课程并即时搜索 YouTube 考点",
    ar: "شاهد دروس الفيديو الرسمية لآيلتس وابحث عن أي موضوع على يوتيوب",
    hi: "आधिकारिक आईईएलटीएस वीडियो पाठ देखें और यूट्यूब पर खोजें",
    pt: "Assista às Aulas Oficiais em Vídeo e Pesquise no YouTube",
    ru: "Смотрите официальные видеоуроки IELTS и ищите темы на YouTube",
    ja: "公式 IELTS ビデオレッスンを視聴＆任意のトピックを検索",
    ur: "آفیشل آئی ایل ٹی ایس ویڈیو اسباق دیکھیں اور یوٹیوب پر کوئی بھی موضوع تلاش کریں",
    bn: "অফিসিয়াল আইইএলটিএস ভিডিও পাঠ দেখুন ও ইউটিউব বিষয় অনুসন্ধান করুন"
  },
  "read masterclasses": {
    es: "Leer Clases Magistrales",
    fr: "Lire les Masterclasses",
    de: "Meisterklassen lesen",
    zh: "阅读高分大师课",
    ar: "قراءة الدروس المتقدمة",
    hi: "मास्टरक्लास पढ़ें",
    pt: "Ler Masterclasses",
    ru: "Читать мастер-классы",
    ja: "マスタークラスを読む",
    ur: "ماسٹر کلاسز پڑھیں",
    bn: "মাস্টারক্লাস পড়ুন"
  },
  "open video hub": {
    es: "Abrir Centro de Videos",
    fr: "Ouvrir l'Espace Vidéo",
    de: "Video-Hub öffnen",
    zh: "打开视频中心",
    ar: "فتح مركز الفيديو",
    hi: "वीडियो हब खोलें",
    pt: "Abrir Hub de Vídeos",
    ru: "Открыть видеоцентр",
    ja: "ビデオハブを開く",
    ur: "ویڈیو حب کھولیں",
    bn: "ভিডিও হাব খুলুন"
  },
  "start full examination": {
    es: "Comenzar Examen Completo",
    fr: "Commencer l'Examen Complet",
    de: "Vollständige Prüfung starten",
    zh: "开始全套模考",
    ar: "بدء الامتحان الكامل",
    hi: "पूर्ण परीक्षा शुरू करें",
    pt: "Iniciar Exame Completo",
    ru: "Начать полный экзамен",
    ja: "全試験を開始する",
    ur: "مکمل امتحان شروع کریں",
    bn: "পূর্ণাঙ্গ পরীক্ষা শুরু করুন"
  },
  "retake full examination": {
    es: "Repetir Examen Completo",
    fr: "Reprendre l'Examen Complet",
    de: "Vollprüfung wiederholen",
    zh: "重新进行全套模考",
    ar: "إعادة الامتحان الكامل",
    hi: "पूर्ण परीक्षा दोबारा दें",
    pt: "Refazer Exame Completo",
    ru: "Пересдать полный экзамен",
    ja: "全試験を再受験する",
    ur: "مکمل امتحان دوبارہ دیں",
    bn: "পুনরায় পূর্ণাঙ্গ পরীক্ষা দিন"
  },
  "view official trf certificate": {
    es: "Ver Certificado Oficial TRF",
    fr: "Voir le Certificat TRF Officiel",
    de: "Offizielles TRF-Zertifikat anzeigen",
    zh: "查看官方 TRF 成绩单",
    ar: "عرض شهادة تقرير الاختبار (TRF)",
    hi: "आधिकारिक टीआरएफ प्रमाणपत्र देखें",
    pt: "Ver Certificado Oficial TRF",
    ru: "Посмотреть сертификат TRF",
    ja: "公式 TRF 証明書を表示",
    ur: "آفیشل ٹی آر ایف سرٹیفکیٹ دیکھیں",
    bn: "অফিসিয়াল টিআরএফ সনদপত্র দেখুন"
  },
  "view test report form (trf)": {
    es: "Ver Formulario de Informe del Test (TRF)",
    fr: "Voir le Formulaire de Rapport de Test (TRF)",
    de: "Test Report Form (TRF) ansehen",
    zh: "查看雅思成绩报告单 (TRF)",
    ar: "عرض استمارة تقرير الاختبار (TRF)",
    hi: "टेस्ट रिपोर्ट फॉर्म (टीआरएफ) देखें",
    pt: "Ver Formulário de Relatório de Teste (TRF)",
    ru: "Посмотреть отчет о тестировании (TRF)",
    ja: "テストレポートフォーム (TRF) を表示",
    ur: "ٹیسٹ رپورٹ فارم (ٹی آر ایف) دیکھیں",
    bn: "টেস্ট রিপোর্ট ফর্ম (টিআরএফ) দেখুন"
  },
  "reading test complete": {
    es: "Prueba de Lectura Completada",
    fr: "Test de Lecture Terminé",
    de: "Lesetest abgeschlossen",
    zh: "阅读测试已完成",
    ar: "اكتمل اختبار القراءة",
    hi: "पठन परीक्षा पूरी हुई",
    pt: "Teste de Leitura Concluído",
    ru: "Тест по чтению завершен",
    ja: "リーディングテスト完了",
    ur: "ریڈنگ ٹیسٹ مکمل ہو گیا",
    bn: "পঠন পরীক্ষা সম্পন্ন"
  },
  "listening test evaluated": {
    es: "Prueba de Escucha Evaluada",
    fr: "Test d'Écoute Évalué",
    de: "Hörtest ausgewertet",
    zh: "听力考试已完成评估",
    ar: "تم تقييم اختبار الاستماع",
    hi: "श्रवण परीक्षण का मूल्यांकन किया गया",
    pt: "Teste de Audição Avaliado",
    ru: "Аудиотест проверен",
    ja: "リスニングテスト評価完了",
    ur: "لسننگ ٹیسٹ کا نتیجہ تیار ہے",
    bn: "শ্রবণ পরীক্ষা মূল্যায়ন সম্পন্ন"
  },
  "official result:": {
    es: "Resultado Oficial:",
    fr: "Résultat Officiel :",
    de: "Offizielles Ergebnis:",
    zh: "官方评测成绩：",
    ar: "النتيجة الرسمية:",
    hi: "आधिकारिक परिणाम:",
    pt: "Resultado Oficial:",
    ru: "Официальный результат:",
    ja: "公式結果：",
    ur: "سرکاری نتیجہ:",
    bn: "অফিসিয়াল ফলাফল:"
  },
  "estimated band": {
    es: "Banda Estimada",
    fr: "Bande Estimée",
    de: "Geschätzter Band",
    zh: "预估总分",
    ar: "الدرجة التقديرية",
    hi: "अनुमानित बैंड",
    pt: "Banda Estimada",
    ru: "Расчетный балл",
    ja: "推定バンド",
    ur: "تخمینہ شدہ بینڈ",
    bn: "আনুমানিক ব্যান্ড"
  },
  "review your answers below. correct items are marked in green, while errors highlight the expected answer.": {
    es: "Revise sus respuestas abajo. Las respuestas correctas están en verde y los errores resaltan la respuesta esperada.",
    fr: "Consultez vos réponses ci-dessous. Les éléments corrects sont en vert, et les erreurs indiquent la réponse attendue.",
    de: "Überprüfen Sie Ihre Antworten unten. Richtige Antworten sind grün markiert, Fehler zeigen die erwartete Lösung.",
    zh: "请在下方查看您的答案解析。正确项标为绿色，错误项会显示官方标准参考答案。",
    ar: "راجع إجاباتك أدناه. تم تمييز الإجابات الصحيحة باللون الأخضر، بينما توضح الأخطاء الإجابة المتوقعة.",
    hi: "नीचे अपने उत्तरों की समीक्षा करें। सही उत्तर हरे रंग में हैं, जबकि गलतियों में सही उत्तर दिखाया गया है।",
    pt: "Revise suas respostas abaixo. Os itens corretos estão em verde, e os erros destacam a resposta esperada.",
    ru: "Проверьте свои ответы ниже. Правильные отмечены зеленым, а в ошибках указан верный ответ.",
    ja: "以下の回答を確認してください。正解は緑色で表示され、誤答には模範解答が示されます。",
    ur: "نیچے اپنے جوابات کا جائزہ لیں۔ درست جوابات سبز نشان زد ہیں جبکہ غلطیوں میں متوقع درست جواب نمایاں کیا گیا ہے۔",
    bn: "নিচে আপনার উত্তরগুলো পর্যালোচনা করুন। সঠিক উত্তরগুলো সবুজে চিহ্নিত এবং ভুলের ক্ষেত্রে প্রত্যাশিত উত্তর প্রদর্শিত হয়েছে।"
  },
  "back to test list": {
    es: "Volver a la Lista de Exámenes",
    fr: "Retour à la Liste des Tests",
    de: "Zurück zur Testübersicht",
    zh: "返回考试列表",
    ar: "العودة إلى قائمة الاختبارات",
    hi: "टेस्ट सूची पर वापस जाएं",
    pt: "Voltar para a Lista de Testes",
    ru: "Вернуться к списку тестов",
    ja: "テスト一覧に戻る",
    ur: "امتحانات کی فہرست پر واپس جائیں",
    bn: "পরীক্ষার তালিকায় ফিরে যান"
  }
};

// Merge all comprehensive modular translations (Director's Office, Creator info, TRF, Blog, Descriptors, Examiner, Tests, Academic Vocab, Labels)
Object.assign(EXACT_DICTIONARY, ALL_NEW_UI_TRANSLATIONS);

// Merge all TRANSLATIONS from translations.ts
for (const [key, enText] of Object.entries(TRANSLATIONS.en)) {
  if (typeof enText !== "string" || !enText.trim()) continue;
  const lower = enText.toLowerCase().trim();
  if (!EXACT_DICTIONARY[lower]) {
    EXACT_DICTIONARY[lower] = {};
  }
  for (const lang of Object.keys(TRANSLATIONS) as SupportedLanguage[]) {
    const val = (TRANSLATIONS[lang] as any)?.[key];
    if (val && typeof val === "string") {
      EXACT_DICTIONARY[lower][lang] = val;
    }
  }
}

// Add remaining scanned UI elements
const ADDITIONAL_UI_EXACT: Record<string, Partial<Record<SupportedLanguage, string>>> = {
  "cancel": { es: "Cancelar", fr: "Annuler", de: "Abbrechen", zh: "取消", ar: "إلغاء", hi: "रद्द करें", pt: "Cancelar", ru: "Отмена", ja: "キャンセル", ur: "منسوخ کریں", bn: "বাতিল" },
  "correct": { es: "Correcto", fr: "Correct", de: "Richtig", zh: "正确", ar: "صحيح", hi: "सही", pt: "Correto", ru: "Верно", ja: "正解", ur: "درست", bn: "সঠিক" },
  "incorrect": { es: "Incorrecto", fr: "Incorrect", de: "Falsch", zh: "错误", ar: "غير صحيح", hi: "गलत", pt: "Incorreto", ru: "Неверно", ja: "不正解", ur: "غلط", bn: "ভুল" },
  "total": { es: "Total", fr: "Total", de: "Gesamt", zh: "总计", ar: "المجموع", hi: "कुल", pt: "Total", ru: "Всего", ja: "合計", ur: "کل", bn: "মোট" },
  "status:": { es: "Estado:", fr: "Statut:", de: "Status:", zh: "状态：", ar: "الحالة:", hi: "स्थिति:", pt: "Status:", ru: "Статус:", ja: "ステータス:", ur: "حیثیت:", bn: "স্থিতি:" },
  "status": { es: "Estado", fr: "Statut", de: "Status", zh: "状态", ar: "الحالة", hi: "स्थिति", pt: "Status", ru: "Статус", ja: "ステータス", ur: "حیثیت", bn: "স্থিতি" },
  "conversation": { es: "Conversación", fr: "Conversation", de: "Gespräch", zh: "对话", ar: "محادثة", hi: "बातचीत", pt: "Conversa", ru: "Разговор", ja: "会話", ur: "گفتگو", bn: "কথোপকথন" },
  "questions": { es: "Preguntas", fr: "Questions", de: "Fragen", zh: "问题", ar: "أسئلة", hi: "प्रश्न", pt: "Perguntas", ru: "Вопросы", ja: "設問", ur: "سوالات", bn: "প্রশ্নাবলী" },
  "pause": { es: "Pausa", fr: "Pause", de: "Pause", zh: "暂停", ar: "إيقاف مؤقت", hi: "रोकें", pt: "Pausa", ru: "Пауза", ja: "一時停止", ur: "وقفہ", bn: "বিরতি" },
  "test": { es: "Prueba", fr: "Test", de: "Test", zh: "测试", ar: "اختبار", hi: "परीक्षा", pt: "Teste", ru: "Тест", ja: "テスト", ur: "ٹیسٹ", bn: "পরীক্ষা" },
  "spatial": { es: "Espacial", fr: "Spatial", de: "Räumlich", zh: "空间感知", ar: "مكاني", hi: "स्थानिक", pt: "Espacial", ru: "Пространственное", ja: "空間的", ur: "مکانی", bn: "স্থানিক" },
  "student portrait": { es: "Retrato del estudiante", fr: "Portrait de l'étudiant", de: "Studentenporträt", zh: "考生免冠照", ar: "صورة الطالب", hi: "छात्र का चित्र", pt: "Retrato do estudante", ru: "Портрет студента", ja: "受験生ポートレート", ur: "طالب علم کا پورٹریٹ", bn: "শিক্ষার্থীর প্রতিকৃতি" },
  "dr. a. sterling, ph.d.": { es: "Dr. A. Sterling, Ph.D.", fr: "Dr. A. Sterling, Ph.D.", de: "Dr. A. Sterling, Ph.D.", zh: "斯特林博士（Ph.D.）", ar: "د. مجلس LingoFi الأكاديمي، دكتوراه", hi: "डॉ. लिंगोफाई एकेडेमिक बोर्ड, पीएच.डी.", pt: "Dr. A. Sterling, Ph.D.", ru: "Д-р Академический совет LingoFi, доктор наук", ja: "LingoFi 学術評議会博士（Ph.D.）", ur: "ڈاکٹر LingoFi اکیڈمک بورڈ، پی ایچ ڈی", bn: "ড. লিঙ্গোফাই একাডেমিক বোর্ড, পিএইচ.ডি." },
  "lingofi academic board": { es: "LingoFi Academic Board", fr: "LingoFi Academic Board", de: "LingoFi Academic Board", zh: "LingoFi 学术委员会", ar: "مجلس LingoFi الأكاديمي", hi: "लिंगोफाई एकेडेमिक बोर्ड", pt: "LingoFi Academic Board", ru: "Академический совет LingoFi", ja: "LingoFi 学術評議会", ur: "LingoFi اکیڈمک بورڈ", bn: "লিঙ্গোফাই একাডেমিক বোর্ড" },
  "islamabad / rawalpindi, pakistan": { es: "Islamabad / Rawalpindi, Pakistán", fr: "Islamabad / Rawalpindi, Pakistan", de: "Islamabad / Rawalpindi, Pakistan", zh: "巴基斯坦 伊斯兰堡/拉瓦尔品第", ar: "إسلام آباد / راولبندي، باكستان", hi: "इस्लामाबाद / रावलपिंडी, पाकिस्तान", pt: "Islamabad / Rawalpindi, Paquistão", ru: "Исламабад / Равалпинди, Пакистан", ja: "パキスタン、イスラマバード／ラーワルピンディ", ur: "اسلام آباد / راولپنڈی، پاکستان", bn: "ইসলামাবাদ / রাওয়ালপিন্ডি, পাকিস্তান" },
  "islamabad / rawalpindi": { es: "Islamabad / Rawalpindi", fr: "Islamabad / Rawalpindi", de: "Islamabad / Rawalpindi", zh: "伊斯兰堡 / 拉瓦尔品第", ar: "إسلام آباد / راولبندي", hi: "इस्लामाबाद / रावलपिंडी", pt: "Islamabad / Rawalpindi", ru: "Исламабад / Равалпинди", ja: "イスラマバード／ラーワルピンディ", ur: "اسلام آباد / راولپنڈی", bn: "ইসলামাবাদ / রাওয়ালপিন্ডি" },
  "iiui islamabad, pakistan": { es: "IIUI Islamabad, Pakistán", fr: "IIUI Islamabad, Pakistan", de: "IIUI Islamabad, Pakistan", zh: "IIUI 巴基斯坦伊斯兰堡", ar: "الجامعة الإسلامية العالمية بإسلام آباد، باكستان", hi: "आईआईयूआई इस्लामाबाद, पाकिस्तान", pt: "IIUI Islamabad, Paquistão", ru: "IIUI Исламабад, Пакистан", ja: "IIUI イスラマバード、パキスタン", ur: "بین الاقوامی اسلامی یونیورسٹی اسلام آباد، پاکستان", bn: "আইআইইউআই ইসলামাবাদ, পাকিস্তান" },
  "iiui pakistan": { es: "IIUI Pakistán", fr: "IIUI Pakistan", de: "IIUI Pakistan", zh: "IIUI 巴基斯坦", ar: "الجامعة الإسلامية العالمية باكستان", hi: "आईआईयूआई पाकिस्तान", pt: "IIUI Paquistão", ru: "IIUI Пакистан", ja: "IIUI パキスタン", ur: "بین الاقوامی اسلامی یونیورسٹی پاکستان", bn: "আইআইইউআই পাকিস্তান" },
  "sections 1–4": { es: "Secciones 1–4", fr: "Sections 1–4", de: "Abschnitte 1–4", zh: "第1至第4部分", ar: "الأقسام 1-4", hi: "खंड 1–4", pt: "Seções 1–4", ru: "Разделы 1–4", ja: "セクション1〜4", ur: "حصص 1 تا 4", bn: "বিভাগ ১–৪" },
  "ai": { es: "IA", fr: "IA", de: "KI", zh: "人工智能", ar: "الذكاء الاصطناعي", hi: "एआई", pt: "IA", ru: "ИИ", ja: "人工知能 (AI)", ur: "مصنوعی ذہانت", bn: "এআই" },
  "cc": { es: "Coherencia y Cohesión (CC)", fr: "Cohérence et Cohésion (CC)", de: "Kohärenz und Kohäsion (CC)", zh: "连贯与衔接 (CC)", ar: "التماسك والترابط (CC)", hi: "सुसंगतता और संयोजन (CC)", pt: "Coerência e Coesão (CC)", ru: "Связность и согласованность (CC)", ja: "一貫性と結束性 (CC)", ur: "ربط اور تسلسل (CC)", bn: "সঙ্গতি ও সমন্বয় (CC)" },
  "lr": { es: "Recurso Léxico (LR)", fr: "Ressource Lexicale (LR)", de: "Lexikalische Ressourcen (LR)", zh: "词汇多样性 (LR)", ar: "الموارد المعجمية (LR)", hi: "शब्दावली संसाधन (LR)", pt: "Recurso Léxico (LR)", ru: "Лексический запас (LR)", ja: "語彙力 (LR)", ur: "ذخیرہ الفاظ (LR)", bn: "শব্দভাণ্ডার (LR)" },
  "tr / ta": { es: "Respuesta / Logro de la Tarea (TR/TA)", fr: "Réponse / Réalisation de la Tâche (TR/TA)", de: "Aufgabenerfüllung (TR/TA)", zh: "任务回应/完成度 (TR/TA)", ar: "الاستجابة للمهمة / الإنجاز (TR/TA)", hi: "कार्य प्रतिक्रिया / उपलब्धि (TR/TA)", pt: "Resposta / Cumprimento da Tarefa (TR/TA)", ru: "Выполнение задания (TR/TA)", ja: "課題への回答/達成度 (TR/TA)", ur: "ٹاسک رسپانس / کامیابی (TR/TA)", bn: "টাস্ক প্রতিক্রিয়া / অর্জন (TR/TA)" },
  "test mismatched score": { es: "Puntaje discrepante de prueba", fr: "Score discordant de test", de: "Abweichende Testpunktzahl", zh: "测试不匹配分数", ar: "درجة اختبار غير متطابقة", hi: "परीक्षण बेमेल स्कोर", pt: "Pontuação divergente de teste", ru: "Несоответствующий балл теста", ja: "不一致テストスコア", ur: "ٹیسٹ کا غیر مطابقت پذیر اسکور", bn: "অমিল টেস্ট স্কোর" },
  "e.g. 7.5": { es: "ej. 7.5", fr: "ex. 7.5", de: "z.B. 7.5", zh: "例：7.5", ar: "مثال: 7.5", hi: "उदा. 7.5", pt: "ex: 7.5", ru: "напр., 7.5", ja: "例：7.5", ur: "مثلاً 7.5", bn: "যেমন ৭.৫" },
  "e.g. 8.5": { es: "ej. 8.5", fr: "ex. 8.5", de: "z.B. 8.5", zh: "例：8.5", ar: "مثال: 8.5", hi: "उदा. 8.5", pt: "ex: 8.5", ru: "напр., 8.5", ja: "例：8.5", ur: "مثلاً 8.5", bn: "যেমন ৮.৫" },
  "e.g. p98421049b": { es: "ej. P98421049B", fr: "ex. P98421049B", de: "z.B. P98421049B", zh: "例：P98421049B", ar: "مثال: P98421049B", hi: "उदा. P98421049B", pt: "ex: P98421049B", ru: "напр., P98421049B", ja: "例：P98421049B", ur: "مثلاً P98421049B", bn: "যেমন P98421049B" },
  "esc": { es: "Esc (Escape)", fr: "Échap", de: "Esc (Abbrechen)", zh: "Esc 键", ar: "مفتاح الخروج (Esc)", hi: "Esc (रद्द करें)", pt: "Esc (Sair)", ru: "Esc (Выход)", ja: "Esc キー", ur: "Esc (باہر نکلیں)", bn: "Esc কী" },
  "top 4": { es: "Los 4 mejores", fr: "Top 4", de: "Beste 4", zh: "前4项", ar: "أفضل 4", hi: "शीर्ष 4", pt: "Os 4 melhores", ru: "Топ-4", ja: "トップ4", ur: "ٹاپ 4", bn: "শীর্ষ ৪" },
  "top 6": { es: "Los 6 mejores", fr: "Top 6", de: "Beste 6", zh: "前6项", ar: "أفضل 6", hi: "शीर्ष 6", pt: "Os 6 melhores", ru: "Топ-6", ja: "トップ6", ur: "ٹاپ 6", bn: "শীর্ষ ৬" },
  "band 8.0+": { es: "Banda 8.0+", fr: "Bande 8.0+", de: "Band 8.0+", zh: "8.0+ 分", ar: "النطاق 8.0+", hi: "बैंड 8.0+", pt: "Banda 8.0+", ru: "Балл 8.0+", ja: "バンド 8.0+", ur: "بینڈ 8.0+", bn: "ব্যান্ড ৮.০+" },
  "band 8.5": { es: "Banda 8.5", fr: "Bande 8.5", de: "Band 8.5", zh: "8.5 分", ar: "النطاق 8.5", hi: "बैंड 8.5", pt: "Banda 8.5", ru: "Балл 8.5", ja: "バンド 8.5", ur: "بینڈ 8.5", bn: "ব্যান্ড ৮.৫" },
  "band 8.5–9.0": { es: "Banda 8.5–9.0", fr: "Bande 8.5–9.0", de: "Band 8.5–9.0", zh: "8.5–9.0 分", ar: "النطاق 8.5–9.0", hi: "बैंड 8.5–9.0", pt: "Banda 8.5–9.0", ru: "Балл 8.5–9.0", ja: "バンド 8.5〜9.0", ur: "بینڈ 8.5–9.0", bn: "ব্যান্ড ৮.৫–৯.০" },
  "band 9.0": { es: "Banda 9.0", fr: "Bande 9.0", de: "Band 9.0", zh: "9.0 分", ar: "النطاق 9.0", hi: "बैंड 9.0", pt: "Banda 9.0", ru: "Балл 9.0", ja: "バンド 9.0", ur: "بینڈ 9.0", bn: "ব্যান্ড ৯.০" },
  "lingofi": { es: "LingoFi", fr: "LingoFi", de: "LingoFi", zh: "LingoFi", ar: "LingoFi", hi: "LingoFi", pt: "LingoFi", ru: "LingoFi", ja: "LingoFi", ur: "LingoFi", bn: "LingoFi" },
  "sophia l.": { es: "Sophia L.", fr: "Sophia L.", de: "Sophia L.", zh: "索菲亚·L", ar: "صوفيا ل.", hi: "सोफिया एल.", pt: "Sophia L.", ru: "София Л.", ja: "ソフィア・L", ur: "صوفیہ ایل.", bn: "সোফিয়া এল." },
  "lf": { es: "LF", fr: "LF", de: "LF", zh: "灵", ar: "ل.ف", hi: "एल.एफ.", pt: "LF", ru: "ЛФ", ja: "リンゴ", ur: "ایل.ایف", bn: "এল.এফ." },
  "ielts": { es: "IELTS", fr: "IELTS", de: "IELTS", zh: "雅思 (IELTS)", ar: "آيلتس (IELTS)", hi: "आईईएलटीएस", pt: "IELTS", ru: "ИЕЛТС (IELTS)", ja: "アイエルツ (IELTS)", ur: "آئیلٹس (IELTS)", bn: "আইইএলটিএস" }
};
Object.assign(EXACT_DICTIONARY, ADDITIONAL_UI_EXACT);

// Global Bidirectional Reverse Translation Map for cross-language translation
export const REVERSE_TRANSLATION_MAP = new Map<string, string>();
for (const [enKey, transMap] of Object.entries(EXACT_DICTIONARY)) {
  for (const transText of Object.values(transMap)) {
    if (typeof transText === "string" && transText.trim()) {
      REVERSE_TRANSLATION_MAP.set(transText.toLowerCase().trim(), enKey);
    }
  }
}

// Universal Word Dictionary for falling back when translating any remaining words or sentences
export const VOCABULARY_DICT: Record<string, Partial<Record<SupportedLanguage, string>>> = {
  // Common IELTS vocabulary
  "question": { es: "pregunta", fr: "question", de: "Frage", zh: "问题", ar: "سؤال", hi: "प्रश्न", pt: "pergunta", ru: "вопрос", ja: "質問", ur: "سوال", bn: "প্রশ্ন" },
  "questions": { es: "preguntas", fr: "questions", de: "Fragen", zh: "问题", ar: "أسئلة", hi: "प्रश्न", pt: "perguntas", ru: "вопросы", ja: "設問", ur: "سوالات", bn: "প্রশ্নাবলী" },
  "passage": { es: "pasaje", fr: "passage", de: "Abschnitt", zh: "文章", ar: "فقرة", hi: "गद्यांश", pt: "passagem", ru: "текст", ja: "パッセージ", ur: "عبارت", bn: "অনুচ্ছেদ" },
  "section": { es: "sección", fr: "section", de: "Abschnitt", zh: "部分", ar: "قسم", hi: "अनुभाग", pt: "seção", ru: "раздел", ja: "セクション", ur: "سیکشن", bn: "বিভাগ" },
  "part": { es: "parte", fr: "partie", de: "Teil", zh: "部分", ar: "جزء", hi: "भाग", pt: "parte", ru: "часть", ja: "パート", ur: "حصہ", bn: "অংশ" },
  "task": { es: "tarea", fr: "tâche", de: "Aufgabe", zh: "任务", ar: "مهمة", hi: "कार्य", pt: "tarefa", ru: "задание", ja: "タスク", ur: "ٹاسک", bn: "টাস্ক" },
  "minutes": { es: "minutos", fr: "minutes", de: "Minuten", zh: "分钟", ar: "دقائق", hi: "मिनट", pt: "minutos", ru: "минут", ja: "分", ur: "منٹ", bn: "মিনিট" },
  "mins": { es: "min", fr: "min", de: "Min.", zh: "分", ar: "دقائق", hi: "मिनट", pt: "min", ru: "мин", ja: "分", ur: "منٹ", bn: "মিনিট" },
  "seconds": { es: "segundos", fr: "secondes", de: "Sekunden", zh: "秒", ar: "ثوانٍ", hi: "सेकंड", pt: "segundos", ru: "секунд", ja: "秒", ur: "سیکنڈ", bn: "সেকেন্ড" },
  "words": { es: "palabras", fr: "mots", de: "Wörter", zh: "字词", ar: "كلمات", hi: "शब्द", pt: "palavras", ru: "слов", ja: "単語", ur: "الفاظ", bn: "শব্দাবলী" },
  "answer": { es: "respuesta", fr: "réponse", de: "Antwort", zh: "答案", ar: "إجابة", hi: "उत्तर", pt: "resposta", ru: "ответ", ja: "回答", ur: "جواب", bn: "উত্তর" },
  "answers": { es: "respuestas", fr: "réponses", de: "Antworten", zh: "答案", ar: "إجابات", hi: "उत्तर", pt: "respostas", ru: "ответы", ja: "回答", ur: "جوابات", bn: "উত্তরসমূহ" },
  "correct": { es: "correcto", fr: "correct", de: "richtig", zh: "正确", ar: "صحيح", hi: "सही", pt: "correto", ru: "правильно", ja: "正解", ur: "درست", bn: "সঠিক" },
  "incorrect": { es: "incorrecto", fr: "incorrect", de: "falsch", zh: "错误", ar: "غير صحيح", hi: "गलत", pt: "incorreto", ru: "неправильно", ja: "不正解", ur: "غلط", bn: "ভুল" },
  "time": { es: "tiempo", fr: "temps", de: "Zeit", zh: "时间", ar: "الوقت", hi: "समय", pt: "tempo", ru: "время", ja: "時間", ur: "وقت", bn: "সময়" },
  "start": { es: "comenzar", fr: "commencer", de: "starten", zh: "开始", ar: "ابدأ", hi: "शुरू करें", pt: "iniciar", ru: "начать", ja: "開始", ur: "شروع کریں", bn: "শুরু" },
  "submit": { es: "enviar", fr: "soumettre", de: "einreichen", zh: "提交", ar: "إرسال", hi: "सबमिट", pt: "enviar", ru: "отправить", ja: "提出", ur: "جمع کریں", bn: "জমা দিন" },
  "next": { es: "siguiente", fr: "suivant", de: "weiter", zh: "下一项", ar: "التالي", hi: "अगला", pt: "próximo", ru: "далее", ja: "次へ", ur: "اگلا", bn: "পরবর্তী" },
  "previous": { es: "anterior", fr: "précédent", de: "zurück", zh: "上一项", ar: "السابق", hi: "पिछला", pt: "anterior", ru: "назад", ja: "前へ", ur: "پچھلا", bn: "পূর্ববর্তী" },
  "finish": { es: "finalizar", fr: "terminer", de: "beenden", zh: "结束", ar: "إنهاء", hi: "समाप्त करें", pt: "finalizar", ru: "завершить", ja: "完了", ur: "ختم کریں", bn: "সমাপ্তি" },
  "recording": { es: "grabando", fr: "enregistrement", de: "Aufnahme", zh: "录音中", ar: "تسجيل", hi: "रिकॉर्डिंग", pt: "gravando", ru: "запись", ja: "録音中", ur: "ریکارڈنگ", bn: "রেকর্ডিং" },
  "speaking": { es: "hablando", fr: "parle", de: "spricht", zh: "说话中", ar: "يتحدث", hi: "बोलना", pt: "falando", ru: "говорит", ja: "発話中", ur: "بول رہے ہیں", bn: "কথোপকথন (স্পিকিং)" },
  "listening": { es: "escuchando", fr: "écoute", de: "hören", zh: "聆听中", ar: "استماع", hi: "सुनना", pt: "ouvindo", ru: "прослушивание", ja: "リスニング", ur: "سننا", bn: "শ্রবণ (লিসেনিং)" },
  "reading": { es: "leyendo", fr: "lecture", de: "lesen", zh: "阅读", ar: "قراءة", hi: "पठन", pt: "lendo", ru: "чтение", ja: "読解", ur: "پڑھনা", bn: "পঠন (রিডিং)" },
  "writing": { es: "escribiendo", fr: "écriture", de: "schreiben", zh: "写作", ar: "كتابة", hi: "लेखन", pt: "escrevendo", ru: "письмо", ja: "作文", ur: "لکھنا", bn: "লিখন (রাইটিং)" },
  "save": { es: "guardar", fr: "sauvegarder", de: "speichern", zh: "保存", ar: "حفظ", hi: "सहेजें", pt: "salvar", ru: "сохранить", ja: "保存", ur: "محفوظ کریں", bn: "সংরক্ষণ" },
  "saved": { es: "guardado", fr: "enregistré", de: "gespeichert", zh: "已保存", ar: "تم الحفظ", hi: "सहेजा गया", pt: "salvo", ru: "сохранено", ja: "保存済み", ur: "محفوظ ہو گیا", bn: "সংরক্ষিত" },
  "certificate": { es: "certificado", fr: "certificat", de: "Zertifikat", zh: "证书", ar: "شهادة", hi: "प्रमाणपत्र", pt: "certificado", ru: "сертификат", ja: "証明書", ur: "سرٹیفکیٹ", bn: "সনদপত্র" },
  "verification": { es: "verificación", fr: "vérification", de: "Verifizierung", zh: "验证", ar: "تحقق", hi: "सत्यापन", pt: "verificação", ru: "верификация", ja: "検証", ur: "تصدیق", bn: "যাচাইকরণ" },
  "official": { es: "oficial", fr: "officiel", de: "offiziell", zh: "官方", ar: "رسمي", hi: "आधिकारिक", pt: "oficial", ru: "официальный", ja: "公式", ur: "سرکاری", bn: "অফিসিয়াল" },
  "candidate": { es: "candidato", fr: "candidat", de: "Kandidat", zh: "考生", ar: "المرشح", hi: "अभ्यर्थी", pt: "candidato", ru: "кандидат", ja: "受験者", ur: "امیدوار", bn: "পরীক্ষার্থী" },
  "examiner": { es: "examinador", fr: "examinateur", de: "Prüfer", zh: "考官", ar: "الممتحن", hi: "परीक्षक", pt: "examinador", ru: "экзаменатор", ja: "試験官", ur: "ممتحن", bn: "পরীক্ষক" },
  "band": { es: "banda", fr: "bande", de: "Band", zh: "分数", ar: "نطاق", hi: "बैंड", pt: "banda", ru: "балл", ja: "バンド", ur: "بینڈ", bn: "ব্যান্ড" },
  "overall": { es: "general", fr: "global", de: "gesamt", zh: "总分", ar: "إجمالي", hi: "समग्र", pt: "geral", ru: "общий", ja: "総合", ur: "مجموعی", bn: "সার্বিক" },
  "academic": { es: "académico", fr: "académique", de: "akademisch", zh: "学术类", ar: "أكاديمي", hi: "अकादमिक", pt: "acadêmico", ru: "академический", ja: "アカデミック", ur: "اکیڈمک", bn: "একাডেমিক" }
};

// Pre-sorted phrases by length (descending) so longer specific phrases replace before shorter individual words
let SORTED_PHRASE_LIST: Array<[string, Partial<Record<SupportedLanguage, string>>]> | null = null;
function getSortedPhraseList() {
  if (!SORTED_PHRASE_LIST) {
    const combined = new Map<string, Partial<Record<SupportedLanguage, string>>>();
    for (const [k, v] of Object.entries(PHRASE_MAPPINGS)) {
      combined.set(k.toLowerCase(), v);
    }
    for (const [k, v] of Object.entries(EXACT_DICTIONARY)) {
      if (!combined.has(k.toLowerCase())) {
        combined.set(k.toLowerCase(), v);
      }
    }
    SORTED_PHRASE_LIST = Array.from(combined.entries()).sort((a, b) => b[0].length - a[0].length);
  }
  return SORTED_PHRASE_LIST;
}

// Fast translation memoization cache to prevent redundant regex operations and DOM lag
const TRANSLATION_CACHE = new Map<string, string>();

let isCurrentlyTranslatingDom = false;
export function isTranslatingDom(): boolean {
  return isCurrentlyTranslatingDom;
}

// Helper: Translate a string to the specified language (supporting bidirectional & cross-language translation)
export function translateTextToLanguage(text: string, lang: SupportedLanguage): string {
  if (!text) return text;
  const trimmed = text.trim();
  if (!trimmed) return text;

  // Preserve original leading and trailing whitespace
  const leadingWs = text.match(/^\s*/)?.[0] || "";
  const trailingWs = text.match(/\s*$/)?.[0] || "";

  const lower = trimmed.toLowerCase();

  // If target language is English:
  if (lang === "en") {
    // Check if input is a non-English phrase recognized in REVERSE_TRANSLATION_MAP
    if (REVERSE_TRANSLATION_MAP.has(lower)) {
      const enCanonical = REVERSE_TRANSLATION_MAP.get(lower)!;
      const capitalized = trimmed[0] === trimmed[0].toUpperCase() && trimmed[0] !== trimmed[0].toLowerCase()
        ? enCanonical.charAt(0).toUpperCase() + enCanonical.slice(1)
        : enCanonical;
      return leadingWs + capitalized + trailingWs;
    }
    // Check without trailing punctuation
    const strippedEnd = lower.replace(/[.:,;!?]+$/, "");
    if (strippedEnd !== lower && REVERSE_TRANSLATION_MAP.has(strippedEnd)) {
      const trailingPunc = trimmed.slice(strippedEnd.length);
      const enCanonical = REVERSE_TRANSLATION_MAP.get(strippedEnd)!;
      const capitalized = trimmed[0] === trimmed[0].toUpperCase() && trimmed[0] !== trimmed[0].toLowerCase()
        ? enCanonical.charAt(0).toUpperCase() + enCanonical.slice(1)
        : enCanonical;
      return leadingWs + capitalized + trailingPunc + trailingWs;
    }
    return text;
  }

  const cacheKey = `${lang}::${trimmed}`;
  const cached = TRANSLATION_CACHE.get(cacheKey);
  if (cached !== undefined) {
    return leadingWs + cached + trailingWs;
  }

  // 0. Primary Multilingual Translation Engine (IELTS tests, cue cards, examiner lines, dialogues)
  const engineTranslation = lookupMultilingualTranslation(trimmed, lang);
  if (engineTranslation) {
    TRANSLATION_CACHE.set(cacheKey, engineTranslation);
    return leadingWs + engineTranslation + trailingWs;
  }

  // 1. Direct exact dictionary match (English -> target language)
  if (EXACT_DICTIONARY[lower]?.[lang]) {
    const res = EXACT_DICTIONARY[lower]![lang]!;
    TRANSLATION_CACHE.set(cacheKey, res);
    return leadingWs + res + trailingWs;
  }

  // 2. Cross-language reverse resolution: if input was already translated into another language
  // (e.g. Spanish, French, Urdu, Arabic), map back to its canonical English phrase and translate to target language
  if (REVERSE_TRANSLATION_MAP.has(lower)) {
    const enCanonical = REVERSE_TRANSLATION_MAP.get(lower)!;
    if (EXACT_DICTIONARY[enCanonical]?.[lang]) {
      const res = EXACT_DICTIONARY[enCanonical]![lang]!;
      TRANSLATION_CACHE.set(cacheKey, res);
      return leadingWs + res + trailingWs;
    }
  }

  // 3. Trailing punctuation handling (":", ".", "!", "?", ",")
  const strippedEnd = lower.replace(/[.:,;!?]+$/, "");
  if (strippedEnd !== lower) {
    const trailingPunc = trimmed.slice(strippedEnd.length);
    if (EXACT_DICTIONARY[strippedEnd]?.[lang]) {
      const res = EXACT_DICTIONARY[strippedEnd]![lang]! + trailingPunc;
      TRANSLATION_CACHE.set(cacheKey, res);
      return leadingWs + res + trailingWs;
    }
    if (REVERSE_TRANSLATION_MAP.has(strippedEnd)) {
      const enCanonical = REVERSE_TRANSLATION_MAP.get(strippedEnd)!;
      if (EXACT_DICTIONARY[enCanonical]?.[lang]) {
        const res = EXACT_DICTIONARY[enCanonical]![lang]! + trailingPunc;
        TRANSLATION_CACHE.set(cacheKey, res);
        return leadingWs + res + trailingWs;
      }
    }
  }

  // 4. Leading bullets / dashes / whitespace handling ("•", "-", "*")
  const strippedStart = lower.replace(/^[•\-\*\s]+/, "");
  if (strippedStart !== lower) {
    const leadingPunc = trimmed.slice(0, trimmed.length - strippedStart.length);
    if (EXACT_DICTIONARY[strippedStart]?.[lang]) {
      const res = leadingPunc + EXACT_DICTIONARY[strippedStart]![lang]!;
      TRANSLATION_CACHE.set(cacheKey, res);
      return leadingWs + res + trailingWs;
    }
    if (REVERSE_TRANSLATION_MAP.has(strippedStart)) {
      const enCanonical = REVERSE_TRANSLATION_MAP.get(strippedStart)!;
      if (EXACT_DICTIONARY[enCanonical]?.[lang]) {
        const res = leadingPunc + EXACT_DICTIONARY[enCanonical]![lang]!;
        TRANSLATION_CACHE.set(cacheKey, res);
        return leadingWs + res + trailingWs;
      }
    }
  }

  // 5. Check phrase mappings
  if (PHRASE_MAPPINGS[lower]?.[lang]) {
    const res = PHRASE_MAPPINGS[lower]![lang]!;
    TRANSLATION_CACHE.set(cacheKey, res);
    return leadingWs + res + trailingWs;
  }

  // If text has no Latin letters and wasn't found in dictionaries/reverse map,
  // it is already a target non-Latin script or foreign text
  if (!/[a-zA-Z]/.test(trimmed)) {
    return text;
  }

  // 6. If multi-line script or multi-sentence paragraph, process line-by-line
  if (trimmed.includes("\n")) {
    const res = trimmed
      .split("\n")
      .map((line) => {
        if (!line.trim()) return line;
        return translateTextToLanguage(line, lang);
      })
      .join("\n");
    TRANSLATION_CACHE.set(cacheKey, res);
    return leadingWs + res + trailingWs;
  }

  // 7. Multi-phrase replacement in larger paragraph or sentence (longest phrases first)
  let result = trimmed;
  const sortedPhrases = getSortedPhraseList();
  for (const [englishPhrase, transRecord] of sortedPhrases) {
    if (transRecord[lang]) {
      const startBoundary = /^\w/.test(englishPhrase) ? "\\b" : "";
      const endBoundary = /\w$/.test(englishPhrase) ? "\\b" : "";
      const regex = new RegExp(`${startBoundary}${escapeRegExp(englishPhrase)}${endBoundary}`, "gi");
      if (regex.test(result)) {
        result = result.replace(regex, transRecord[lang]!);
      }
    }
  }

  // 8. Word-by-word replacement for lingering common terms
  for (const [word, transRecord] of Object.entries(VOCABULARY_DICT)) {
    if (transRecord[lang]) {
      const regex = new RegExp(`\\b${escapeRegExp(word)}\\b`, "gi");
      result = result.replace(regex, (match) => {
        const replacement = transRecord[lang]!;
        if (match[0] === match[0].toUpperCase() && match[0] !== match[0].toLowerCase()) {
          return replacement.charAt(0).toUpperCase() + replacement.slice(1);
        }
        return replacement;
      });
    }
  }

  // 9. Deep Lexicon & Lemmatized token-level replacement with Zero-Residual Guarantee
  result = result.replace(/(?<!\p{L})([a-zA-Z]+(?:'[a-zA-Z]+)?)(?!\p{L})/gu, (_fullMatch, token) => {
    return translateWordTokenWithLemmatization(token, lang, VOCABULARY_DICT);
  });

  // Post-processing for CJK scripts (Chinese and Japanese) to eliminate unnatural spacing
  if (lang === "zh" || lang === "ja") {
    result = result.replace(/([\u4e00-\u9fa5\u3040-\u30ff])\s+([\u4e00-\u9fa5\u3040-\u30ff])/g, "$1$2");
    result = result.replace(/([\u4e00-\u9fa5\u3040-\u30ff])\s+([\u4e00-\u9fa5\u3040-\u30ff])/g, "$1$2");
  }

  // Normalize multi-spaces
  result = result.replace(/[ \t]{2,}/g, " ");

  TRANSLATION_CACHE.set(cacheKey, result);
  return leadingWs + result + trailingWs;
}

/**
 * High-performance DOM Tree Walker to translate all text nodes and attributes under a root element
 * Avoids touching text inputs, textareas, contenteditable elements, and scripts/styles.
 */
const STANDARD_ENGLISH_TERMS: Array<[RegExp, string]> = [
  [/\bielts\b/gi, "IELTS"],
  [/\bpte\b/gi, "PTE"],
  [/\bgre\b/gi, "GRE"],
  [/\bgmat\b/gi, "GMAT"],
  [/\btoefl\b/gi, "TOEFL"],
  [/\bsat\b/gi, "SAT"],
  [/\bact\b/gi, "ACT"],
  [/\blingofi\b/gi, "LingoFi"],
];

function enforceStandardEnglishCasing(text: string): string {
  let out = text;
  for (const [pattern, replacement] of STANDARD_ENGLISH_TERMS) out = out.replace(pattern, replacement);
  return out;
}

export function translateDomTree(root: Node, lang: SupportedLanguage): void {
  if (!root || typeof window === "undefined") return;
  if (isCurrentlyTranslatingDom) return;

  isCurrentlyTranslatingDom = true;
  try {
    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          const tag = parent.tagName.toLowerCase();
          // Never touch scripts, styles, user input fields, or code
          if (
            tag === "script" ||
            tag === "style" ||
            tag === "noscript" ||
            tag === "textarea" ||
            tag === "input" ||
            tag === "code" ||
            tag === "pre"
          ) {
            return NodeFilter.FILTER_REJECT;
          }
          if (
            parent.isContentEditable ||
            parent.closest("[contenteditable='true']") ||
            parent.closest("[data-no-translate], [data-test-content]")
          ) {
            return NodeFilter.FILTER_REJECT;
          }
          if (!node.nodeValue || !node.nodeValue.trim()) {
            return NodeFilter.FILTER_SKIP;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    let currentNode: Node | null = walker.nextNode();
    while (currentNode) {
      const textNode = currentNode as Text;
      const rawVal = textNode.nodeValue || "";
      const trimmedVal = rawVal.trim();
      
      if (trimmedVal) {
        if ((textNode as any).__origText === undefined) {
          // Capture the exact rendered English source. Never infer canonical English
          // from lowercase reverse-translation keys: that corrupts IELTS/PTE/TOEFL
          // and title/sentence capitalization. Language switching restores this exact value.
          (textNode as any).__origText = rawVal;
        }

        const orig = (textNode as any).__origText;
        if (lang === "en") {
          // English is the source-of-truth display language. NEVER rebuild English
          // from lowercase dictionary keys: that destroys intentional casing such
          // as IELTS, TOEFL, PTE, LingoFi, proper names, and sentence/title case.
          // __origText is captured before any translation mutation and therefore
          // preserves the exact rendered English capitalization.
          const canonicalEnglish = enforceStandardEnglishCasing(orig);
          if (textNode.nodeValue !== canonicalEnglish) {
            textNode.nodeValue = canonicalEnglish;
          }
        } else {
          const translated = translateTextToLanguage(orig, lang);
          if (textNode.nodeValue !== translated) {
            textNode.nodeValue = translated;
          }
        }
      }

      currentNode = walker.nextNode();
    }

    // Also translate button titles, aria-labels, and safe input placeholders
    const element = root as HTMLElement;
    if (element.querySelectorAll) {
      const queryElements = element.querySelectorAll<HTMLElement>("[title], [aria-label], input[placeholder], textarea[placeholder]");
      queryElements.forEach((el) => {
        if (
          el.closest("[data-no-translate], [data-test-content]") ||
          el.getAttribute("type") === "password" ||
          el.getAttribute("type") === "email"
        ) {
          return;
        }

        const placeholder = el.getAttribute("placeholder");
        if (placeholder) {
          if ((el as any).__origPlaceholder === undefined) {
            (el as any).__origPlaceholder = placeholder;
          }
          const orig = (el as any).__origPlaceholder;
          // English placeholders must return to their exact original casing.
          const target = lang === "en" ? enforceStandardEnglishCasing(orig) : translateTextToLanguage(orig, lang);
          if (el.getAttribute("placeholder") !== target) {
            el.setAttribute("placeholder", target);
          }
        }

        const title = el.getAttribute("title");
        if (title) {
          if ((el as any).__origTitle === undefined) {
            (el as any).__origTitle = title;
          }
          const orig = (el as any).__origTitle;
          // English titles/tooltips must preserve their exact original casing.
          const target = lang === "en" ? enforceStandardEnglishCasing(orig) : translateTextToLanguage(orig, lang);
          if (el.getAttribute("title") !== target) {
            el.setAttribute("title", target);
          }
        }

        const ariaLabel = el.getAttribute("aria-label");
        if (ariaLabel) {
          if ((el as any).__origAriaLabel === undefined) {
            (el as any).__origAriaLabel = ariaLabel;
          }
          const orig = (el as any).__origAriaLabel;
          // English accessibility labels must preserve their exact original casing.
          const target = lang === "en" ? enforceStandardEnglishCasing(orig) : translateTextToLanguage(orig, lang);
          if (el.getAttribute("aria-label") !== target) {
            el.setAttribute("aria-label", target);
          }
        }
      });
    }
  } catch (err) {
    // Fail-safe
  } finally {
    isCurrentlyTranslatingDom = false;
  }
}

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
