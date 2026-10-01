# Part 2 translations (items 95 to 189)
PART2 = {}

def a(k, es, fr, de, zh, ar, hi, pt, ru, ja, ur, bn):
    PART2[k.strip().lower()] = {
        "es": es, "fr": fr, "de": de, "zh": zh, "ar": ar,
        "hi": hi, "pt": pt, "ru": ru, "ja": ja, "ur": ur, "bn": bn
    }

a('Complete Syntactic Mastery',
  'Dominio Sintáctico Completo', 'Maîtrise Syntaxique Complète', 'Vollständige syntaktische Beherrschung',
  '完美熟练的复杂句式驾驭能力', 'إتقان تركيبي ونحوي كامل', 'पूर्ण वाक्य-रचना दक्षता',
  'Domínio Sintático Completo', 'Полное синтаксическое мастерство', '完全な構文運用能力',
  'مکمل نحوی مہارت', 'সম্পূর্ণ বাক্যগঠন দক্ষতা')

a('Conversation',
  'Conversación', 'Conversation', 'Konversation', '日常对话',
  'محادثة', 'बातचीत', 'Conversação', 'Диалог', '会話', 'گفتگو', 'কথোপকথন')

a('Country / Region',
  'País / Región', 'Pays / Région', 'Land / Region', '国家 / 地区',
  'البلد / المنطقة', 'देश / क्षेत्र', 'País / Região', 'Страна / Регион', '国・地域', 'ملک / خطہ', 'দেশ / অঞ্চল')

a('Country of Origin',
  'País de Origen', 'Pays d\'Origine', 'Herkunftsland', '国籍所在国',
  'بلد المنشأ', 'मूल देश', 'País de Origem', 'Страна происхождения', '出身国', 'آبائی ملک', 'আদি দেশ')

a('Creator & Developer',
  'Creador y Desarrollador', 'Créateur et Développeur', 'Gründer & Entwickler', '创始人兼开发者',
  'المنشئ والمطور', 'निर्माता और डेवलपर', 'Criador e Desenvolvedor', 'Создатель и разработчик',
  '創設者兼開発者', 'بانی اور ڈویلپر', 'নির্মাতা ও ডেভেলপার')

a('Creator & Platform Owner',
  'Creador y Propietario de la Plataforma', 'Créateur et Propriétaire de la Plateforme',
  'Gründer & Plattforminhaber', '创始人兼平台独资所有者',
  'المنشئ ومالك المنصة', 'निर्माता और प्लेटफ़ॉर्म स्वामी',
  'Criador e Proprietário da Plataforma', 'Создатель и владелец платформы',
  '創設者兼プラットフォーム所有者', 'بانی اور پلیٹ فارم کے مالک', 'নির্মাতা ও প্ল্যাটফর্ম মালিক')

a('Creator & Sole Owner',
  'Creador y Único Propietario', 'Créateur et Seul Propriétaire', 'Gründer & Alleineigentümer', '创始人兼唯一所有者',
  'المنشئ والمالك الوحيد', 'निर्माता और एकमात्र स्वामी',
  'Criador e Proprietário Único', 'Создатель и единоличный владелец',
  '創設者兼単独所有者', 'بانی اور واحد مالک', 'নির্মাতা ও একমাত্র মালিক')

a('Cryptographic Sequence Structure',
  'Estructura de Secuencia Criptográfica', 'Structure de Séquence Cryptographique',
  'Kryptografische Sequenzstruktur', '加密哈希序列架构',
  'هيكل التسلسل التشفيري', 'क्रिप्टोग्राफिक अनुक्रम संरचना',
  'Estrutura de Sequência Criptográfica', 'Криптографическая структура последовательности',
  '暗号化シーケンス構造', 'خفیہ انکرپٹڈ ساخت', 'ক্রিপ্টোগ্রাফিক সিকোয়েন্স কাঠামো')

a('Cryptographic TRF',
  'TRF Criptográfico', 'TRF Cryptographique', 'Kryptografischer TRF', '加密防伪电子成绩单 (TRF)',
  'شهادة TRF المشفرة', 'क्रिप्टोग्राफिक TRF', 'TRF Criptográfico',
  'Криптографический TRF', '暗号化TRF証明書', 'انکرپٹڈ TRF', 'ক্রিপ্টোগ্রাফিক টিআরএফ')

a('Cryptographic TRF Verification',
  'Verificación Criptográfica del TRF', 'Vérification Cryptographique du TRF',
  'Kryptografische TRF-Verifizierung', 'TRF成绩单官方加密真伪核验',
  'التحقق التشفيري من شهادة TRF', 'क्रिप्टोग्राफिक TRF सत्यापन',
  'Verificação Criptográfica de TRF', 'Криптографическая верификация TRF',
  '暗号化TRF認証システム', 'انکرپٹڈ TRF تصدیق', 'ক্রিপ্টোগ্রাফিক টিআরএফ যাচাইকরণ')

a('Curated Topics',
  'Temas Seleccionados', 'Sujets Sélectionnés', 'Ausgewählte Themen', '精选热点专题',
  'مواضيع مختارة بعناية', 'क्यूरेटेड विषय', 'Tópicos Selecionados',
  'Подобранные темы', '厳選されたトピック', 'منتخب کردہ موضوعات', 'বাছাইকৃত বিষয়সমূহ')

a('Current Residence:',
  'Residencia Actual:', 'Résidence Actuelle :', 'Aktueller Wohnort:', '现居住地：',
  'محل الإقامة الحالي:', 'वर्तमान निवास:', 'Residência Atual:', 'Текущее место жительства:',
  '現住所：', 'موجودہ رہائش:', 'বর্তমান বাসস্থান:')

a('Date of Birth',
  'Fecha de Nacimiento', 'Date de Naissance', 'Geburtsdatum', '出生日期',
  'تاريخ الميلاد', 'जन्म तिथि', 'Data de Nascimento', 'Дата рождения', '生年月日', 'تاریخ پیدائش', 'জন্ম তারিখ')

a('Date of Birth (DD/MM/YYYY)',
  'Fecha de Nacimiento (DD/MM/AAAA)', 'Date de Naissance (JJ/MM/AAAA)', 'Geburtsdatum (TT/MM/JJJJ)',
  '出生日期（日/月/年）', 'تاريخ الميلاد (يوم/شهر/سنة)', 'जन्म तिथि (दिन/माह/वर्ष)',
  'Data de Nascimento (DD/MM/AAAA)', 'Дата рождения (ДД/ММ/ГГГГ)', '生年月日 (日/月/年)',
  'تاریخ پیدائش (دن/مہینہ/سال)', 'জন্ম তারিখ (দিন/মাস/বছর)')

a('Date of Examination',
  'Fecha del Examen', 'Date de l\'Examen', 'Prüfungsdatum', '考试日期',
  'تاريخ الاختبار', 'परीक्षा की तिथि', 'Data do Exame', 'Дата экзамена', '受験日', 'امتحان کی تاریخ', 'পরীক্ষার তারিখ')

a('Describe, summarise, or explain visual data (graphs, tables, charts, diagrams).',
  'Describir, resumir o explicar datos visuales (gráficos, tablas, diagramas).',
  'Décrire, résumer ou expliquer des données visuelles (graphiques, tableaux, schémas).',
  'Visuelle Daten (Diagramme, Tabellen, Schaubilder) beschreiben, zusammenfassen oder erklären.',
  '描述、总结或解释所给的图表数据（折线图、柱状图、饼图、数据表格或流程图）。',
  'وصف أو تلخيص أو شرح البيانات المرئية (الرسوم البيانية، الجداول، المخططات).',
  'दृश्य डेटा (ग्राफ़, तालिकाओं, चार्ट, आरेखों) का वर्णन, सारांश या व्याख्या करें।',
  'Descrever, resumir ou explicar dados visuais (gráficos, tabelas, diagramas).',
  'Описать, обобщить или объяснить визуальные данные (графики, таблицы, диаграммы).',
  '視覚的データ（グラフ、表、チャート、図表）を描写・要約・解説する。',
  'بصری ڈیٹا (گراف، جدول، چارٹ، ڈایاگرام) کو بیان، خلاصہ یا واضح کریں۔',
  'ভিজ্যুয়াল ডেটা (গ্রাফ, টেবিল, চার্ট, ডায়াগ্রাম) বর্ণনা, সংক্ষিপ্ত বা ব্যাখ্যা করুন।')

a('Diagnostic: Why 68% of Candidates Get Stuck at Band 6.5',
  'Diagnóstico: Por qué el 68% de los candidatos se queda estancado en Banda 6.5',
  'Diagnostic : Pourquoi 68% des candidats restent bloqués au Score 6.5',
  'Diagnose: Warum 68% der Kandidaten bei Band 6.5 scheitern',
  '深度考情诊断：为什么68%的雅思考生长期卡在6.5分瓶颈？',
  'تشخيص: لماذا يتعثر 68% من المرشحين عند الدرجة 6.5؟',
  'निदान: 68% उम्मीदवार बैंड 6.5 पर क्यों अटक जाते हैं',
  'Diagnóstico: Por que 68% dos candidatos ficam travados na Banda 6.5',
  'Диагностика: Почему 68% кандидатов застревают на балле 6.5',
  '診断分析：なぜ受験者の68%がバンド6.5で伸び悩むのか',
  'تشخیص: 68 فیصد امیدوار بینڈ 6.5 پر کیوں رک جاتے ہیں',
  'ডায়াগনস্টিক: কেন ৬৮% পরীক্ষার্থী ব্যান্ড ৬.৫-এ আটকে যায়')

a('Did you find this candidate story helpful?',
  '¿Te resultó útil esta historia de candidato?', 'Avez-vous trouvé l\'histoire de ce candidat utile ?',
  'Fanden Sie diese Kandidatengeschichte hilfreich?', '这篇高分备考经验对您有启发吗？',
  'هل وجدت قصة هذا المرشح مفيدة؟', 'क्या आपको इस उम्मीदवार की कहानी उपयोगी लगी?',
  'Você achou a história deste candidato útil?', 'Показалась ли вам эта история полезной?',
  'この受験者の体験記は役に立ちましたか？', 'کیا آپ کو اس امیدوار کی کہانی مفید لگی؟',
  'আপনি কি এই পরীক্ষার্থীর গল্পটি সহায়ক মনে করেছেন?')

a('Direct Institutional Protocol',
  'Protocolo Institucional Directo', 'Protocole Institutionnel Direct', 'Direktes institutionelles Protokoll',
  '直连大学与官方机构免验证协议', 'بروتوكول المؤسسات المباشر', 'प्रत्यक्ष संस्थागत प्रोटोकॉल',
  'Protocolo Institucional Direto', 'Прямой протокол для организаций', '教育機関直接照会プロトコル',
  'براہ راست ادارہ جاتی پروٹوکول', 'সরাসরি প্রাতিষ্ঠানিক প্রোটোকল')

a('Direct Search',
  'Búsqueda Directa', 'Recherche Directe', 'Direktsuche', '精准直达搜索',
  'بحث مباشر', 'सीधी खोज', 'Busca Direta', 'Прямой поиск', 'ダイレクト検索', 'براہ راست تلاش', 'সরাসরি অনুসন্ধান')

a('Draft your bullet notes here (keywords, idiomatic vocabulary, key story points)...',
  'Escriba aquí sus notas (palabras clave, vocabulario idiomático, ideas clave)...',
  'Rédigez vos notes ici (mots-clés, vocabulaire idiomatique, points clés)...',
  'Notieren Sie hier Ihre Stichpunkte (Schlüsselwörter, idiomatische Ausdrücke)...',
  '在此快速列出作答要点大纲（核心关键词、高级地道搭配、核心论据）...',
  'دوّن ملاحظاتك هنا (الكلمات المفتاحية، العبارات الاصطلاحية، النقاط الرئيسية)...',
  'अपने मुख्य बिंदु यहाँ लिखें (कीवर्ड, मुहावरेदार शब्दावली, मुख्य बिंदु)...',
  'Faça o rascunho de suas notas aqui (palavras-chave, vocabulário idiomático)...',
  'Запишите тезисы здесь (ключевые слова, идиоматические выражения, сюжет)...',
  'ここにメモの下書きを入力（キーワード、イディオム、要点）...',
  'اپنے اہم نکات یہاں لکھیں (کلیدی الفاظ، محاوراتی زبان، اہم نکات)...',
  'এখানে আপনার নোট খসড়া করুন (কীওয়ার্ড, বাগধারা, মূল বিষয়)...')

a('Dynamic Cryptographic TRF ID assigned automatically',
  'ID criptográfico dinámico de TRF asignado automáticamente',
  'ID cryptographique TRF dynamique attribué automatiquement',
  'Dynamische kryptografische TRF-ID automatisch zugewiesen',
  '系统已自动分配唯一的动态加密防伪TRF成绩单编码',
  'تم تعيين معرف TRF تشفيري ديناميكي تلقائياً',
  'गतिशील क्रिप्टोग्राफिक TRF आईडी स्वचालित रूप से सौंपी गई',
  'ID criptográfico dinâmico de TRF atribuído automaticamente',
  'Динамический криптографический ID TRF присвоен автоматически',
  '動的暗号化TRF番号が自動発行されました',
  'متحرک انکرپٹڈ TRF شناخت خودکار طور پر تفویض کی گئی',
  'স্বয়ংক্রিয়ভাবে বরাদ্দকৃত গতিশীল ক্রিপ্টোগ্রাফিক টিআরএফ আইডি')

a('Educational Engineering',
  'Ingeniería Educativa', 'Ingénierie Pédagogique', 'Bildungsingenieurwesen',
  '教育工程与技术架构', 'الهندسة التعليمية', 'शैक्षिक इंजीनियरिंग',
  'Engenharia Educacional', 'Образовательная инженерия', '教育工学',
  'تعلیمی انجینئرنگ', 'শিক্ষামূলক ইঞ্জিনিয়ারিং')

a('Effortless Referencing',
  'Cohesión y Referencia Fluida', 'Référencement Fluide et Naturel', 'Mühelose Referenzierung',
  '行云流水的照应与代词指代衔接', 'إحالة نصية سلسة ومترابطة', 'सहज संदर्भ',
  'Referenciação Natural e Fluida', 'Естественные связки и отсылки', '無理のない指示・照応表現',
  'بغیر کوشش کے روانی سے حوالہ جات کا استعمال', 'স্বতঃস্ফূর্ত রেফারেন্সিং')

a('Embedded Personal Token',
  'Token Personal Integrado', 'Jeton Personnel Intégré', 'Eingebettetes persönliches Token',
  '内嵌专属个人防伪数字令牌', 'رمز شخصي مدمج', 'एम्बेडेड व्यक्तिगत टोकन',
  'Token Pessoal Incorporado', 'Встроенный персональный токен', '内蔵個人認証トークン',
  'شامل کردہ ذاتی ٹوکن', 'এম্বেডেড ব্যক্তিগত টোকেন')

a('Embedded YouTube Streaming & Search',
  'Búsqueda y Reproducción Integrada de YouTube', 'Recherche et Streaming YouTube Intégrés',
  'Eingebettetes YouTube-Streaming & Suche', '内置YouTube备考视频流与智能检索',
  'بحث وبث يوتيوب المدمج', 'एम्बेडेड यूट्यूब स्ट्रीमिंग और खोज',
  'Busca e Streaming Integrados do YouTube', 'Встроенный поиск и видеопоток YouTube',
  'YouTube動画ストリーミング・検索連携', 'یوٹیوب ویڈیو سرچ اور اسٹریمنگ کی سہولت',
  'এম্বেডেড ইউটিউব স্ট্রিমিং ও অনুসন্ধান')

a('Encrypted Band Code Integrity',
  'Integridad del Código de Banda Encriptado', 'Intégrité du Code de Score Crypté',
  'Integrität des verschlüsselten Band-Codes', '加密分数防篡改校验码验证',
  'سلامة رمز الدرجة المشفر', 'एन्क्रिप्टेड बैंड कोड अखंडता',
  'Integridade do Código de Banda Criptografado', 'Целостность зашифрованного кода балла',
  '暗号化スコアコードの完全性', 'انکرپٹڈ بینڈ کوڈ کی درستگی', 'এনক্রিপ্ট করা ব্যান্ড কোডের সততা')

a('English language linguistics, pedagogical assessment, world literature, and computer technology',
  'lingüística del idioma inglés, evaluación pedagógica, literatura universal y tecnología informática',
  'linguistique anglaise, évaluation pédagogique, littérature mondiale et technologies informatiques',
  'englische Sprachwissenschaft, pädagogische Diagnostik, Weltliteratur und Informationstechnologie',
  '英语语言学、教学评估学、世界文学以及现代计算机技术',
  'علم لغويات اللغة الإنجليزية، والتقييم التربوي، والأدب العالمي، وتكنولوجيا الحاسوب',
  'अंग्रेजी भाषा का भाषाविज्ञान, शैक्षणिक मूल्यांकन, विश्व साहित्य और कंप्यूटर प्रौद्योगिकी',
  'linguística da língua inglesa, avaliação pedagógica, literatura mundial e tecnologia da computação',
  'лингвистика английского языка, педагогическая оценка, мировая литература и компьютерные технологии',
  '英語言語学、教育測定・評価、世界文学、およびコンピューター技術',
  'انگریزی لسانیات، تدریسی تشخیص، عالمی ادب اور کمپیوٹر ٹیکنالوجی',
  'ইংরেজি ভাষাভাষাতত্ত্ব, শিক্ষাগত মূল্যায়ন, বিশ্ব সাহিত্য এবং কম্পিউটার প্রযুক্তি')

a('English language, education, literature and technology',
  'idioma inglés, educación, literatura y tecnología',
  'langue anglaise, éducation, littérature et technologie',
  'englische Sprache, Bildung, Literatur und Technologie',
  '英语语言、教育评估、文学创作与前沿科技',
  'اللغة الإنجليزية، والتعليم، والأدب، والتكنولوجيا',
  'अंग्रेजी भाषा, शिक्षा, साहित्य और प्रौद्योगिकी',
  'língua inglesa, educação, literatura e tecnologia',
  'английский язык, образование, литература и технологии',
  '英語、教育、文学、およびテクノロジー',
  'انگریزی زبان، تعلیم، ادب اور ٹیکنالوجی',
  'ইংরেজি ভাষা, শিক্ষা, সাহিত্য এবং প্রযুক্তি')

a('Estimated Band:',
  'Banda Estimada:', 'Score Estimé :', 'Geschätzter Band-Wert:', '预估综合总分：',
  'الدرجة التقديرية:', 'अनुमानित बैंड:', 'Banda Estimada:', 'Ориентировочный балл:', '推定バンド：',
  'تخمینی بینڈ:', 'আনুমানিক ব্যান্ড:')

a('Examiner Band 9 Advice:',
  'Consejo del Examinador para Banda 9:', 'Conseil de l\'Examinateur pour Score 9 :',
  'Prüfer-Empfehlung für Band 9:', '雅思考官9分满分进阶建议：',
  'نصيحة الممتحن للحصول على الدرجة 9:', 'परीक्षक बैंड 9 सलाह:',
  'Conselho do Examinador para Banda 9:', 'Совет экзаменатора для Band 9:',
  '試験官によるバンド9獲得アドバイス：', 'بینڈ 9 کے لیے ممتحن کا مشورہ:',
  'ব্যান্ড ৯ এর জন্য পরীক্ষকের পরামর্শ:')

a('Examiner Diagnostic: Band 6.5 Trap vs Band 9.0 Solution',
  'Diagnóstico del Examinador: Trampa de Banda 6.5 vs Solución de Banda 9.0',
  'Diagnostic de l\'Examinateur : Piège du Score 6.5 vs Solution du Score 9.0',
  'Prüfer-Diagnose: Band-6.5-Falle vs. Band-9.0-Lösung',
  '考官深度问诊：6.5分常见瓶颈失分点 vs 9分满分破局方案',
  'تشخيص الممتحن: فخ الدرجة 6.5 مقابل حل الدرجة 9.0',
  'परीक्षक निदान: बैंड 6.5 का जाल बनाम बैंड 9.0 का समाधान',
  'Diagnóstico do Examinador: Armadilha da Banda 6.5 vs Solução da Banda 9.0',
  'Диагностика экзаменатора: Ловушка балла 6.5 против решения на Band 9.0',
  '試験官の診断：バンド6.5の罠 vs バンド9.0の解答メソッド',
  'ممتحن کی تشخیص: بینڈ 6.5 کا جال بمقابلہ بینڈ 9.0 کا حل',
  'পরীক্ষক ডায়াগনস্টিক: ব্যান্ড ৬.৫ ফাঁদ বনাম ব্যান্ড ৯.০ সমাধান')

a('Examiner Evaluation Report',
  'Informe de Evaluación del Examinador', 'Rapport d\'Évaluation de l\'Examinateur',
  'Offizieller Prüfer-Bewertungsbericht', '雅思考官全科官方评估报告',
  'تقرير تقييم الممتحن', 'परीक्षक मूल्यांकन रिपोर्ट',
  'Relatório de Avaliação do Examinador', 'Официальный отчет экзаменатора',
  '試験官詳細評価レポート', 'ممتحن کی تفصیلی تشخیصی رپورٹ', 'পরীক্ষক মূল্যায়ন রিপোর্ট')

a('Examiner Intelligence Brain',
  'Cerebro de Inteligencia del Examinador', 'Intelligence Artificielle de l\'Examinateur',
  'Prüfer-Intelligenz-Engine', '考官权威测评算法中枢',
  'نظام ذكاء الممتحن', 'परीक्षक इंटेलिजेंस ब्रेन',
  'Cérebro de Inteligência do Examinador', 'Интеллектуальный движок экзаменатора',
  '試験官インテリジェンス・ブレイン', 'ممتحن کا ذہین تشخیصی نظام', 'পরীক্ষক ইন্টেলিজেন্স ব্রেন')

a('Examiner Scoring Matrix & Traps',
  'Matriz de Puntuación del Examinador y Trampas', 'Grille d\'Évaluation de l\'Examinateur et Pièges',
  'Prüfer-Bewertungsmatrix & Fallstricke', '考官评分矩阵与高频失分陷阱',
  'مصفوفة درجات الممتحن والفخاخ الشائعة', 'परीक्षक स्कोरिंग मैट्रिक्स और जाल',
  'Matriz de Pontuação do Examinador e Armadilhas', 'Матрица оценивания экзаменатора и ловушки',
  '試験官の採点マトリクスとよくある落とし穴', 'ممتحن کی اسکورنگ میٹرکس اور عام غلطیاں',
  'পরীক্ষক স্কোরিং ম্যাট্রিক্স ও সাধারণ ভুল')

a('Examiner Tip:',
  'Consejo del Examinador:', 'Conseil de l\'Examinateur :', 'Tipp des Prüfers:', '考官关键提示：',
  'نصيحة الممتحن:', 'परीक्षक की सलाह:', 'Dica do Examinador:', 'Совет экзаменатора:', '試験官のヒント：',
  'ممتحن کا اہم مشورہ:', 'পরীক্ষকের টিপ:')

a('Examiner asks question and opens 30-second recording automatically',
  'El examinador hace la pregunta y abre automáticamente la grabación de 30 segundos',
  'L\'examinateur pose la question et lance automatiquement l\'enregistrement de 30 secondes',
  'Der Prüfer stellt die Frage und startet automatisch die 30-Sekunden-Aufnahme',
  '考官朗读提问完毕后，系统将自动开启30秒答题录音并倒计时',
  'يطرح الممتحن السؤال ويبدأ التسجيل تلقائياً لمدة 30 ثانية',
  'परीक्षक प्रश्न पूछता है और स्वचालित रूप से 30-सेकंड की रिकॉर्डिंग खोलता है',
  'O examinador faz a pergunta e inicia automaticamente a gravação de 30 segundos',
  'Экзаменатор задает вопрос и автоматически включает запись на 30 секунд',
  '試験官が質問を読み上げ、自動的に30秒間のマイク録音が開始されます',
  'ممتحن سوال پوچھتا ہے اور خودکار طور پر 30 سیکنڈ کی ریکارڈنگ شروع ہوتی ہے',
  'পরীক্ষক প্রশ্ন করেন এবং স্বয়ংক্রিয়ভাবে ৩০ সেকেন্ডের রেকর্ডিং শুরু হয়')

a('Examiner is speaking:',
  'El examinador está hablando:', 'L\'examinateur parle :', 'Der Prüfer spricht:', '考官正在提问：',
  'الممتحن يتحدث الآن:', 'परीक्षक बोल रहे हैं:', 'O examinador está falando:', 'Экзаменатор говорит:',
  '面接官が発言中：', 'ممتحن بول رہے ہیں:', 'পরীক্ষক কথা বলছেন:')

a('Factual Shift to Adventures',
  'Giro Fáctico hacia las Aventuras', 'Virage Factuel vers les Aventures',
  'Faktischer Wandel zu Abenteuern', '《走向冒险的事实演进》（Factual Shift to Adventures）',
  'التحول الواقعي نحو المغامرات', 'फैक्चुअल शिफ्ट टू एडवेंचर्स',
  'Giro Factual para Aventuras', 'Фактический переход к приключениям',
  'ファクチュアル・シフト・トゥ・アドベンチャーズ', 'مہمات کی طرف حقیقی سفر', 'ফ্যাকচুয়াল শিফট টু অ্যাডভেঞ্চারস')

a('Family Name',
  'Apellido(s)', 'Nom de Famille', 'Nachname', '姓氏',
  'اسم العائلة / اللقب', 'उपनाम', 'Sobrenome', 'Фамилия', '姓', 'خاندانی نام / ذات', 'পারিবারিক পদবি')

a('Female (F)',
  'Femenino (F)', 'Féminin (F)', 'Weiblich (W)', '女性 (F)',
  'أنثى (F)', 'महिला (F)', 'Feminino (F)', 'Женский (Ж)', '女性 (F)', 'خاتون (F)', 'মহিলা (F)')

a('Finished your IELTS Speaking session?',
  '¿Has terminado tu sesión de IELTS Speaking?', 'Avez-vous terminé votre session d\'Expression Orale ?',
  'Haben Sie Ihre IELTS-Sprechprüfung beendet?', '您已完成雅思口语实战模拟测试了吗？',
  'هل أنهيت جلسة محادثة الآيلتس؟', 'क्या आपने अपना आईईएलटीएस स्पीकिंग सत्र पूरा कर लिया है?',
  'Terminou sua sessão de IELTS Speaking?', 'Вы завершили сессию IELTS Speaking?',
  'IELTSスピーキングセッションは完了しましたか？', 'کیا آپ نے اپنا آئیلٹس اسپیکنگ ٹیسٹ مکمل کر لیا ہے؟',
  'আপনার আইইএলটিএস স্পিকিং সেশন শেষ করেছেন?')

a('First Language',
  'Primera Lengua / Lengua Materna', 'Langue Maternelle', 'Muttersprache', '第一语言 / 母语',
  'اللغة الأولى / الأم', 'प्रथम भाषा / मातृभाषा', 'Primeira Língua / Materna',
  'Родной язык', '母国語', 'پہلی زبان / مادری زبان', 'প্রথম ভাষা / মাতৃভাষা')

a('First Name(s)',
  'Nombre(s)', 'Prénom(s)', 'Vorname(n)', '名字',
  'الاسم الأول', 'पहला नाम', 'Nome(s)', 'Имя', '名', 'پہلا نام', 'নাম')

a('Flag question for review',
  'Marcar pregunta para revisar', 'Marquer la question pour révision', 'Frage zur Überprüfung markieren',
  '标记题目以便后续复查', 'تمييز السؤال للمراجعة لاحقاً', 'समीक्षा के लिए प्रश्न को चिह्नित करें',
  'Marcar questão para revisão', 'Отметить вопрос для проверки', '見直しのためのフラグ設定',
  'نظرثانی کے لیے سوال پر نشان لگائیں', 'পুনর্বিবেচনার জন্য প্রশ্নটি ফ্ল্যাগ করুন')

a('Flashcard Mode',
  'Modo Fichas de Estudio', 'Mode Cartes Mémoire', 'Karteikarten-Modus', '抽认卡学习模式',
  'وضع البطاقات التعليمية', 'फ्लैशकार्ड मोड', 'Modo Flashcards', 'Режим флеш-карт', 'フラッシュカードモード',
  'فلیش کارڈ موڈ', 'ফ্ল্যাশকার্ড মোড')

a('Flawless Precision',
  'Precisión Impecable', 'Précision Impeccable', 'Makellose Präzision', '精妙准确、毫无瑕疵',
  'دقة متناهية لا تشوبها شائبة', 'त्रुटिहीन सटीकता', 'Precisão Impecável',
  'Безупречная точность', '完璧な正確さ', 'بے عیب درستگی', 'ত্রুটিহীন নির্ভুলতা')

a('Flexible Repertoire',
  'Repertorio Flexible', 'Répertoire Flexible', 'Flexibles Repertoire', '灵活丰富的词汇库',
  'حصيلة لغوية مرنة ومتنوعة', 'लचीला भंडार', 'Repertório Flexível',
  'Гибкий и богатый репертуар', '柔軟で多彩な語彙レパートリー', 'لچکدار اور وسیع ذخیرہ', 'নমনীয় শব্দভাণ্ডার')

a('Flow of Process Stages',
  'Flujo de Etapas del Proceso', 'Déroulement des Étapes du Processus', 'Ablauf der Prozessphasen',
  '生产与工艺流程阶段图', 'تسلسل مراحل العملية', 'प्रक्रिया चरणों का प्रवाह',
  'Fluxo das Etapas do Processo', 'Последовательность стадий процесса', 'プロセスの工程図',
  'مراحلی عمل کا بہاؤ', 'প্রক্রিয়ার ধাপসমূহের প্রবাহ')

a('Fluency & Coherence',
  'Fluidez y Coherencia', 'Fluidité et Cohérence', 'Flüssigkeit & Kohärenz', '流利度与连贯性',
  'الطلاقة اللغوية والتماسك', 'प्रवाह और सामंजस्य', 'Fluência e Coerência',
  'Беглость и связность речи', '流暢さと一貫性', 'روانی اور تسلسل', 'সাবলীলতা ও সংগতি')

a('Format Structure',
  'Estructura del Formato', 'Structure du Format', 'Formatstruktur', '官方试卷格式结构',
  'هيكل وشكل الاختبار', 'प्रारूप संरचना', 'Estrutura do Formato',
  'Формат и структура экзамена', '試験の構成形式', 'فارمیٹ کا ڈھانچہ', 'ফরম্যাট কাঠামো')

a('Founder, Architect & Sole Owner',
  'Fundador, Arquitecto y Único Propietario', 'Fondateur, Architecte et Seul Propriétaire',
  'Gründer, Architekt & Alleineigentümer', '创始人、技术架构师兼唯一所有者',
  'المؤسس والمهندس المعماري والمالك الوحيد', 'संस्थापक, वास्तुकार और एकमात्र स्वामी',
  'Fundador, Arquiteto e Único Proprietário', 'Основатель, архитектор и единоличный владелец',
  '創設者・設計者・単独所有者', 'بانی، معمار اور واحد مالک', 'প্রতিষ্ঠাতা, স্থপতি ও একমাত্র মালিক')

a('Framework Standards',
  'Estándares del Marco Evaluativo', 'Normes du Cadre d\'Évaluation', 'Rahmenstandards', '国际语言标准框架规范',
  'معايير الإطار الدولي', 'ढांचागत मानक', 'Padrões do Quadro Avaliativo',
  'Стандарты международной системы', '評価枠組み基準', 'فریم ورک کے معیارات', 'ফ্রেমওয়ার্কের মানদণ্ড')

a('Frequent Error-Free Sentences',
  'Frecuentes Oraciones Libres de Errores', 'Phrases Fréquentes Sans Erreurs', 'Häufig fehlerfreie Sätze',
  '高频无错句与精准句法', 'جمل متكررة خالية من الأخطاء', 'लगातार त्रुटिहीन वाक्य',
  'Frases Frequentes Livres de Erros', 'Частые предложения без ошибок', '高い頻度での無誤文の構成',
  'اکثر و بیشتر غلطیوں سے پاک جملے', 'ঘন ঘন ত্রুটিহীন বাক্য')

a('Full Name:',
  'Nombre Completo:', 'Nom Complet :', 'Vollständiger Name:', '姓名全称：',
  'الاسم الكامل:', 'पूरा नाम:', 'Nome Completo:', 'Полное имя:', '氏名：', 'مکمل نام:', 'পূর্ণ নাম:')

a('Full Script',
  'Guion Completo', 'Transcription Complète', 'Vollständiges Skript', '听力完整录音原文',
  'النص الصوتي الكامل', 'पूर्ण प्रतिलेख', 'Roteiro Completo',
  'Полный текст скрипта', '完全スクリプト', 'مکمل اسکرپٹ', 'সম্পূর্ণ স্ক্রিপ্ট')

a('GRA',
  'GRA (Gramática)', 'GRA (Grammaire)', 'GRA (Grammatik)', 'GRA (语法范围与准确性)',
  'التنوع النحوي والدقة', 'GRA (व्याकरण)', 'GRA (Gramática)', 'GRA (Грамматика)', 'GRA（文法力）', 'GRA (گرامر)', 'GRA (ব্যাকরণ)')

a('General interview on familiar topics.',
  'Entrevista general sobre temas cotidianos y familiares.',
  'Entretien général sur des sujets familiers et du quotidien.',
  'Allgemeines Interview zu vertrauten Alltagsthemen.',
  '日常生活熟悉话题的个人基本情况问答。',
  'مقابلة عامة حول موضوعات مألوفة وشائعة.',
  'परिचित विषयों पर सामान्य साक्षात्कार।',
  'Entrevista geral sobre tópicos familiares do cotidiano.',
  'Общее интервью на знакомые повседневные темы.',
  '身近な日常の話題に関する一般的なインタビュー。',
  'جانی پہچانی باتوں پر عمومی انٹرویو۔',
  'পরিচিত বিষয়ে সাধারণ সাক্ষাৎকার।')

a('Genuine British Council Timers',
  'Temporizadores Oficiales del British Council', 'Chronomètres Authentiques du British Council',
  'Echte British-Council-Timer', '精准同步英国文化协会官方机考倒计时',
  'مؤقتات دقيقة مطابقة للمجلس الثقافي البريطاني', 'प्रामाणिक ब्रिटिश काउंसिल टाइमर',
  'Cronômetros Oficiais do British Council', 'Подлинные таймеры в стиле British Council',
  'ブリティッシュ・カウンシル公式仕様タイマー', 'برٹش کونسل کے عین مطابق ٹائمرز', 'আসল ব্রিটিশ কাউন্সিল টাইমার')

a('Grammar & Accuracy',
  'Gramática y Precisión', 'Grammaire et Précision', 'Grammatik & Genauigkeit', '语法广度与准确度',
  'القواعد والدقة النحوية', 'व्याकरण और सटीकता', 'Gramática e Precisão',
  'Грамматика и точность', '文法と正確性', 'گرامر اور درستی', 'ব্যাকরণ ও নির্ভুলতা')

a('Grammatical Range & Accuracy',
  'Rango Gramatical y Precisión', 'Étendue Grammaticale et Précision', 'Grammatische Vielfalt & Genauigkeit',
  '语法结构多样性与准确性', 'التنوع النحوي والدقة', 'व्याकरणिक सीमा और सटीकता',
  'Variedade Gramatical e Precisão', 'Грамматический диапазон и точность', '文法力と正確さ',
  'گرامر کی وسعت اور درستی', 'ব্যাকরণগত ব্যাপ্তি ও নির্ভুলতা')

a('Hamid Ali',
  'Hamid Ali', 'Hamid Ali', 'Hamid Ali', 'Hamid Ali（哈米德·阿里）',
  'حامد علي', 'हामिद अली', 'Hamid Ali', 'Хамид Али', 'ハミド・アリ', 'حامد علی', 'হামিদ আলী')

a('Hamid Ali - Campus & Evening Study, Islamabad',
  'Hamid Ali - Campus y Estudio Nocturno, Islamabad', 'Hamid Ali - Campus et Études en Soirée, Islamabad',
  'Hamid Ali - Campus & Abendstudium, Islamabad', 'Hamid Ali - 伊斯兰堡大学校园与学术研读',
  'حامد علي - الحرم الجامعي والدراسة المسائية، إسلام آباد', 'हामिद अली - परिसर और शाम का अध्ययन, इस्लामाबाद',
  'Hamid Ali - Campus e Estudo Noturno, Islamabad', 'Хамид Али - Кампус и вечерние занятия, Исламабад',
  'ハミド・アリ - イスラマバードのキャンパスと夜間研究', 'حامد علی - کیمپس اور رات کا مطالعہ، اسلام آباد',
  'হামিদ আলী - ক্যাম্পাস ও সান্ধ্যকালীন অধ্যয়ন, ইসলামাবাদ')

a('Hamid Ali - Founder & Academic Director, Vocabino',
  'Hamid Ali - Fundador y Director Académico, Vocabino', 'Hamid Ali - Fondateur et Directeur Académique, Vocabino',
  'Hamid Ali - Gründer & Akademischer Direktor, Vocabino', 'Hamid Ali - Vocabino 创始人兼学术总监',
  'حامد علي - المؤسس والمدير الأكاديمي، فوكابينو', 'हामिद अली - संस्थापक और शैक्षणिक निदेशक, वोकैबिनो',
  'Hamid Ali - Fundador e Diretor Acadêmico, Vocabino', 'Хамид Али - Основатель и академический директор Vocabino',
  'ハミド・アリ - Vocabino創設者兼学術ディレクター', 'حامد علی - بانی اور اکیڈمک ڈائریکٹر، ووکیبینو',
  'হামিদ আলী - প্রতিষ্ঠাতা ও একাডেমিক পরিচালক, ভোকাবিনো')

a('Hamid Ali - Founder & Creator, Vocabino Institute',
  'Hamid Ali - Fundador y Creador, Instituto Vocabino', 'Hamid Ali - Fondateur et Créateur, Institut Vocabino',
  'Hamid Ali - Gründer & Entwickler, Vocabino-Institut', 'Hamid Ali - Vocabino 国际学院创始人兼技术架构师',
  'حامد علي - المؤسس والمبتكر، معهد فوكابينو', 'हामिद अली - संस्थापक और निर्माता, वोकैबिनो संस्थान',
  'Hamid Ali - Fundador e Criador, Instituto Vocabino', 'Хамид Али - Основатель и создатель Vocabino Institute',
  'ハミド・アリ - Vocabino Institute創設者', 'حامد علی - بانی اور تخلیق کار، ووکیبینو انسٹی ٹیوٹ',
  'হামিদ আলী - প্রতিষ্ঠাতা ও স্রষ্টা, ভোকাবিনো ইনস্টিটিউট')

a('Highest Test Scores Recorded (Non-Editable)',
  'Puntuaciones Más Altas Registradas (No Editables)', 'Meilleurs Scores Enregistrés (Non Modifiables)',
  'Höchste aufgezeichnete Prüfungsergebnisse (Nicht editierbar)', '历史最高成绩不可篡改官方归档记录',
  'أعلى درجات مسجلة في الاختبار (غير قابلة للتعديل)', 'दर्ज किए गए उच्चतम टेस्ट स्कोर (असंपादनीय)',
  'Pontuações Mais Altas Registradas (Não Editáveis)', 'Высшие зафиксированные баллы (не подлежат изменению)',
  '公式記録最高スコア（編集不可）', 'ریکارڈ شدہ بلند ترین ٹیسٹ اسکورز (ناقابلِ ترمیم)',
  'সর্বোচ্চ রেকর্ডকৃত টেস্ট স্কোর (অপরিবর্তনযোগ্য)')

a('Hot',
  'Tendencia', 'Tendance', 'Heiß', '近期大热', 'رائج جداً', 'हॉट', 'Em Alta', 'Популярное', '注目', 'گرم ترین', 'হট')

a('How Direct Verification Works for Organizations',
  'Cómo Funciona la Verificación Directa para Organizaciones',
  'Comment Fonctionne la Vérification Directe pour les Organisations',
  'So funktioniert die Direktverifizierung für Organisationen',
  '用人单位与全球院校成绩单一键极速核验指引',
  'كيف يعمل التحقق المباشر للمؤسسات والجامعات',
  'संगठनों के लिए प्रत्यक्ष सत्यापन कैसे काम करता है',
  'Como Funciona a Verificação Direta para Organizações',
  'Как работает прямая верификация для организаций',
  '教育機関・企業向け直接照会システムの仕組み',
  'اداروں کے لیے براہ راست تصدیق کا طریقہ کار',
  'প্রতিষ্ঠানসমূহের জন্য সরাসরি যাচাইকরণ কীভাবে কাজ করে')

a('How thoroughly you address prompt questions & support ideas',
  'Con qué profundidad abordas las preguntas y fundamentas tus ideas',
  'La pertinence avec laquelle vous traitez le sujet et étayez vos idées',
  'Wie gründlich Sie auf die Fragestellung eingehen und Argumente stützen',
  '论述切题深度、观点支撑充分性及各论点展开度',
  'مدى شمولية إجابتك على أسئلة الموضوع ودعم أفكارك بالأدلة',
  'आप विषय के प्रश्नों को कितनी गहराई से संबोधित करते हैं और विचारों का समर्थन करते हैं',
  'Com que profundidade você responde às perguntas do tema e sustenta as ideias',
  'Насколько полно вы отвечаете на поставленный вопрос и аргументируете мысли',
  '設問の要求に対してどれほど的確に答え、論拠を展開しているか',
  'آپ موضوع کے سوالات کو کتنی گہرائی سے حل کرتے ہیں اور دلائل دیتے ہیں',
  'আপনি প্রম্পটের প্রশ্নগুলো কতটা পুঙ্খানুপুঙ্খভাবে সম্বোধন এবং ধারণাকে সমর্থন করেন')

a('How to Use YouTube IELTS Trends for Preparation',
  'Cómo Usar las Tendencias de YouTube sobre IELTS para tu Preparación',
  'Comment Utiliser les Tendances YouTube sur l\'IELTS pour Réviser',
  'Wie Sie YouTube-IELTS-Trends zur gezielten Vorbereitung nutzen',
  '如何通过YouTube全球热搜趋势高效攻关雅思核心考点',
  'كيفية الاستفادة من اتجاهات يوتيوب للتحضير لاختبار الآيلتس',
  'तैयारी के लिए यूट्यूब आईईएलटीएस रुझानों का उपयोग कैसे करें',
  'Como Usar as Tendências do YouTube sobre o IELTS para Preparação',
  'Как использовать тренды YouTube по IELTS для эффективной подготовки',
  'YouTubeのIELTSトレンドを活用した効率的学習法',
  'تیاری کے لیے یوٹیوب کے آئیلٹس رجحانات کا استعمال کیسے کریں',
  'প্রস্তুতির জন্য ইউটিউব আইইএলটিএস ট্রেন্ড কীভাবে ব্যবহার করবেন')

a("I'm Ready • Continue Audio",
  "Estoy Listo • Continuar Audio", "Je Suis Prêt • Continuer l'Audio", "Ich bin bereit • Audio fortsetzen",
  "准备就绪 • 继续播放听力录音", "أنا مستعد • متابعة الصوت", "मैं तैयार हूँ • ऑडियो जारी रखें",
  "Estou Pronto • Continuar Áudio", "Я готов • Продолжить аудио", "準備完了 • 音声を再開",
  "میں تیار ہوں • آڈیو جاری رکھیں", "আমি প্রস্তুত • অডিও চালিয়ে যান")

a('IDP & British Council Aligned',
  'Alineado con IDP y British Council', 'Conforme aux Normes IDP et British Council',
  'IDP & British Council konform', '完全契合 IDP 与英国文化协会出题标准',
  'متوافق مع معايير IDP والمجلس الثقافي البريطاني', 'आईडीपी और ब्रिटिश काउंसिल के अनुरूप',
  'Alinhado com o IDP e British Council', 'Соответствует стандартам IDP и British Council',
  'IDPおよびブリティッシュ・カウンシル準拠', 'IDP اور برٹش کونسل کے عین مطابق',
  'আইডিপি ও ব্রিটিশ কাউন্সিলের মানদণ্ডে প্রস্তুত')

a('IELTS',
  'IELTS', 'IELTS', 'IELTS', '雅思 (IELTS)', 'آيلتس', 'आईईएलटीएस', 'IELTS', 'IELTS', 'IELTS', 'آئیلٹس', 'আইইএলটিএস')

a('IELTS Academic Assessment',
  'Evaluación Académica de IELTS', 'Évaluation IELTS Académique', 'IELTS Academic Bewertung',
  '雅思学术类（Academic）权威测评', 'تقييم الآيلتس الأكاديمي', 'आईईएलटीएस अकादमिक मूल्यांकन',
  'Avaliação Acadêmica do IELTS', 'Академическая оценка IELTS', 'IELTSアカデミック公式評価',
  'آئیلٹس اکیڈمک تشخیص', 'আইইএলটিএস একাডেমিক মূল্যায়ন')

a('IELTS Academic Reading • 3 Passages • 40 Questions',
  'Lectura Académica de IELTS • 3 Pasajes • 40 Preguntas',
  'Compréhension Écrite IELTS Académique • 3 Passages • 40 Questions',
  'IELTS Academic Leseverstehen • 3 Texte • 40 Fragen',
  '雅思学术类阅读 • 3篇长文章 • 40道题目',
  'القراءة الأكاديمية في الآيلتس • 3 نصوص • 40 سؤالاً',
  'आईईएलटीएस अकादमिक पठन • 3 गद्यांश • 40 प्रश्न',
  'Leitura Acadêmica do IELTS • 3 Textos • 40 Questões',
  'Академическое чтение IELTS • 3 текста • 40 вопросов',
  'IELTSアカデミック・リーディング • 長文3篇 • 設問40問',
  'آئیلٹس اکیڈمک ریڈنگ • 3 پیراگراف • 40 سوالات',
  'আইইএলটিএস একাডেমিক পঠন • ৩টি অনুচ্ছেদ • ৪০টি প্রশ্ন')

a('IELTS Academic Writing • 60 minutes • Task 1 (150w) & Task 2 (250w)',
  'Escritura Académica de IELTS • 60 minutos • Tarea 1 (150 palabras) y Tarea 2 (250 palabras)',
  'Expression Écrite IELTS Académique • 60 minutes • Tâche 1 (150 mots) et Tâche 2 (250 mots)',
  'IELTS Academic Schreiben • 60 Minuten • Aufgabe 1 (150 W.) & Aufgabe 2 (250 W.)',
  '雅思学术类写作 • 60分钟 • 小作文Task 1 (150词) 与 大作文Task 2 (250词)',
  'الكتابة الأكاديمية في الآيلتس • 60 دقيقة • المهمة 1 (150 كلمة) والمهمة 2 (250 كلمة)',
  'आईईएलटीएस अकादमिक लेखन • 60 मिनट • कार्य 1 (150 शब्द) और कार्य 2 (250 शब्द)',
  'Escrita Acadêmica do IELTS • 60 minutos • Tarefa 1 (150 palavras) e Tarefa 2 (250 palavras)',
  'Академическое письмо IELTS • 60 минут • Задание 1 (150 сл.) и Задание 2 (250 сл.)',
  'IELTSアカデミック・ライティング • 60分 • タスク1（150語）＆タスク2（250語）',
  'آئیلٹس اکیڈمک رائٹنگ • 60 منٹ • ٹاسک 1 (150 الفاظ) اور ٹاسک 2 (250 الفاظ)',
  'আইইএলটিএস একাডেমিক লিখন • ৬০ মিনিট • টাস্ক ১ (১৫০ শব্দ) ও টাস্ক ২ (২৫০ শব্দ)')

a('IELTS Categories & Max Topics',
  'Categorías y Temas Principales de IELTS', 'Catégories et Sujets Majeurs de l\'IELTS',
  'IELTS-Kategorien & Wichtigste Themen', '雅思考试重点分类与高频核心话题',
  'فئات الآيلتس وأبرز المواضيع المتكررة', 'आईईएलटीएस श्रेणियां और अधिकतम विषय',
  'Categorias e Principais Tópicos do IELTS', 'Категории IELTS и ключевые темы',
  'IELTSカテゴリと主要テーマ', 'آئیلٹس کے زمرے اور اہم موضوعات', 'আইইএলটিএস বিভাগ ও প্রধান বিষয়সমূহ')

a('IELTS Listening • 4 Parts • 40 Questions',
  'Comprensión Auditiva de IELTS • 4 Partes • 40 Preguntas',
  'Compréhension Orale IELTS • 4 Parties • 40 Questions',
  'IELTS Hörverstehen • 4 Teile • 40 Fragen',
  '雅思听力考试 • 4个部分 • 40道题目',
  'الاستماع في الآيلتس • 4 أجزاء • 40 سؤالاً',
  'आईईएलटीएस श्रवण • 4 भाग • 40 प्रश्न',
  'Compreensão Auditiva do IELTS • 4 Partes • 40 Questões',
  'Аудирование IELTS • 4 части • 40 вопросов',
  'IELTSリスニング • 4つのパート • 設問40問',
  'آئیلٹس لسننگ • 4 حصے • 40 سوالات',
  'আইইএলটিএস শ্রবণ • ৪টি অংশ • ৪০টি প্রশ্ন')

a('IELTS Rounding Consistency',
  'Consistencia en el Redondeo Oficial de IELTS', 'Règles de Calcul et d\'Arrondi Officiel IELTS',
  'IELTS-Rundungskonsistenz', '雅思官方半进制四舍五入计算一致性',
  'اتساق قواعد جبر وتقريب درجات الآيلتس', 'आईईएलटीएस राउंडिंग निरंतरता',
  'Consistência de Arredondamento do IELTS', 'Правила округления баллов IELTS',
  'IELTS公式端数処理・四捨五入ルール', 'آئیلٹس میں راؤنڈنگ کے معیاری اصول', 'আইইএলটিএস রাউন্ডিং ধারাবাহিকতা')

a('IELTS Speaking • 11–14 minutes • Full Recording Across All Parts',
  'Expresión Oral de IELTS • 11–14 minutos • Grabación Completa en Todas las Partes',
  'Expression Orale IELTS • 11–14 minutes • Enregistrement Intégral de Toutes les Parties',
  'IELTS Sprechen • 11–14 Minuten • Vollständige Aufnahme aller Teile',
  '雅思口语考试 • 11–14分钟 • 全流程三大Part实时智能录音与AI测评',
  'المحادثة في الآيلتس • 11–14 دقيقة • تسجيل صوتي شامل لجميع الأجزاء',
  'आईईएलटीएस स्पीकिंग • 11–14 मिनट • सभी भागों में पूर्ण रिकॉर्डिंग',
  'Expressão Oral do IELTS • 11–14 minutos • Gravação Completa de Todas as Partes',
  'Говорение IELTS • 11–14 минут • Полная запись всех частей',
  'IELTSスピーキング • 11〜14分 • 全パート完全録音・AI採点',
  'آئیلٹس اسپیکنگ • 11–14 منٹ • تمام حصوں کی مکمل ریکارڈنگ',
  'আইইএলটিএস কথন • ১১–১৪ মিনিট • সব অংশের সম্পূর্ণ রেকর্ডিং')

a('IIUI Alumnus / Scholar',
  'Exalumno / Investigador de IIUI', 'Ancien Élève / Chercheur de l\'IIUI', 'IIUI-Alumnus / Wissenschaftler',
  'IIUI 校友 / 学术学者', 'خريج وباحث في الجامعة الإسلامية العالمية (IIUI)', 'आईआईयूआई पूर्व छात्र / विद्वान',
  'Ex-aluno / Pesquisador da IIUI', 'Выпускник и исследователь IIUI', 'IIUI卒業生・研究者',
  'IIUI کے سابق طالب علم / محقق', 'আইআইইউআই প্রাক্তন শিক্ষার্থী / গবেষক')

a('IIUI Islamabad, Pakistan',
  'IIUI Islamabad, Pakistán', 'IIUI Islamabad, Pakistan', 'IIUI Islamabad, Pakistan',
  '巴基斯坦伊斯兰堡 IIUI 大学', 'الجامعة الإسلامية العالمية بإسلام آباد، باكستان',
  'आईआईयूआई इस्लामाबाद, पाकिस्तान', 'IIUI Islamabad, Paquistão',
  'IIUI Исламабад, Пакистан', 'パキスタン・イスラマバード国際イスラム大学（IIUI）',
  'بین الاقوامی اسلامی یونیورسٹی اسلام آباد، پاکستان', 'আইআইইউআই ইসলামাবাদ, পাকিস্তান')

a('IIUI Pakistan',
  'IIUI Pakistán', 'IIUI Pakistan', 'IIUI Pakistan', '巴基斯坦 IIUI 大学',
  'الجامعة الإسلامية العالمية، باكستان', 'आईआईयूआई पाकिस्तान', 'IIUI Paquistão',
  'IIUI Пакистан', 'IIUI パキスタン', 'IIUI پاکستان', 'আইআইইউআই পাকিস্তান')

a('ISO/IEC 27001 Certified',
  'Certificado ISO/IEC 27001', 'Certifié ISO/IEC 27001', 'ISO/IEC 27001 zertifiziert',
  '通过 ISO/IEC 27001 信息安全权威认证', 'معتمد وفقاً لمعيار ISO/IEC 27001',
  'ISO/IEC 27001 प्रमाणित', 'Certificado ISO/IEC 27001', 'Сертифицировано по ISO/IEC 27001',
  'ISO/IEC 27001 認証取得', 'ISO/IEC 27001 تصدیق شدہ', 'ISO/IEC 27001 প্রত্যয়িত')

a('Individual long turn with cue card. 1 minute prep + up to 2 minutes speaking.',
  'Turno largo individual con tarjeta de temas. 1 minuto de preparación + hasta 2 minutos de intervención.',
  'Monologue individuel avec carte de sujet. 1 minute de préparation + jusqu\'à 2 minutes d\'expression.',
  'Individueller Vortrag mit Themenkarte. 1 Minute Vorbereitung + bis zu 2 Minuten freies Sprechen.',
  '个人独白陈述（Cue Card话题卡）。1分钟审题构思准备 + 最长2分钟独立口语陈述。',
  'حديث فردي مطول باستخدام بطاقة الموضوع. دقيقة واحدة للتحضير + ما يصل إلى دقيقتين للكلام.',
  'क्यू कार्ड के साथ व्यक्तिगत दीर्घ भाषण। 1 मिनट की तैयारी + 2 मिनट तक बोलना।',
  'Apresentação individual longa com cartão de tópicos. 1 minuto de preparação + até 2 minutos de fala.',
  'Индивидуальный развернутый ответ по карточке. 1 минута подготовки + до 2 минут непрерывной речи.',
  'トピックカード（Cue Card）によるスピーチ。1分間の準備時間＋最大2分間のスピーチ。',
  'کیو کارڈ کے ساتھ انفرادی طویل گفتگو۔ 1 منٹ کی تیاری + 2 منٹ تک بولنا۔',
  'কিউ কার্ড সহ দীর্ঘ বক্তব্য। ১ মিনিটের প্রস্তুতি + ২ মিনিট পর্যন্ত কথা বলা।')

a('Instant AI',
  'IA Instantánea', 'IA Instantanée', 'Sofortige KI', '智能AI秒级测评',
  'ذكاء اصطناعي فوري', 'तत्काल एआई', 'IA Instantânea', 'Мгновенный ИИ', '即時AI判定', 'فوری AI تجزیہ', 'তাৎক্ষণিক এআই')

a('Instant New Tab',
  'Abrir en Pestaña Nueva', 'Ouvrir dans un Nouvel Onglet', 'Sofort in neuem Tab', '新标签页即刻打开',
  'فتح فوري في علامة تبويب جديدة', 'तुरंत नया टैब', 'Abrir em Nova Guia', 'В новой вкладке', '新しいタブで開く',
  'فوری نئے ٹیب میں کھولیں', 'তাৎক্ষণিক নতুন ট্যাব')

a('Instant Topic Launcher',
  'Lanzador Rápido de Temas', 'Lanceur Rapide de Sujets', 'Sofortiger Themenstarter', '热门考题一键即练',
  'بدء الموضوع فوراً', 'त्वरित विषय लॉन्चर', 'Iniciador Rápido de Tópicos', 'Быстрый запуск темы',
  'トピック即時ランチャー', 'فوری موضوع شروع کرنے والا', 'তাৎক্ষণিক বিষয় প্রবর্তক')

a('Institute',
  'Instituto', 'Institut', 'Institut', '学院机构', 'المعهد', 'संस्थान', 'Instituto', 'Институт', '専門機関', 'ادارہ', 'ইনস্টিটিউট')

a('Institute:',
  'Instituto:', 'Institut :', 'Institut:', '发证机构：', 'المعهد:', 'संस्थान:', 'Instituto:', 'Институт:', '発行機関：', 'ادارہ:', 'ইনস্টিটিউট:')

a('Integration Mode',
  'Modo de Integración', 'Mode d\'Intégration', 'Integrationsmodus', '多维嵌入模式',
  'وضع التكامل المباشر', 'एकीकरण मोड', 'Modo de Integração', 'Режим интеграции', '連携モード', 'انضمام کا موڈ', 'ইন্টিগ্রেশন মোড')

a('Integrity Mandate',
  'Mandato de Integridad', 'Mandat d\'Intégrité', 'Integritätsmandat', '严格学术诚信与防作弊准则',
  'ميثاق النزاهة الأكاديمية', 'ईमानदारी जनादेश', 'Mandato de Integridade',
  'Мандат академической честности', '厳正な公正性規約', 'دیانتداری کا منشور', 'সততার নির্দেশিকা')

a('International Islamic University Islamabad (IIUI)',
  'Universidad Islámica Internacional de Islamabad (IIUI)',
  'Université Islamique Internationale d\'Islamabad (IIUI)',
  'Internationale Islamische Universität Islamabad (IIUI)',
  '伊斯兰堡国际伊斯兰大学 (IIUI)',
  'الجامعة الإسلامية العالمية بإسلام آباد (IIUI)',
  'अंतर्राष्ट्रीय इस्लामी विश्वविद्यालय इस्लामाबाद (IIUI)',
  'Universidade Islâmica Internacional de Islamabad (IIUI)',
  'Международный исламский университет в Исламабаде (IIUI)',
  'イスラマバード国際イスラム大学 (IIUI)',
  'بین الاقوامی اسلامی یونیورسٹی اسلام آباد (IIUI)',
  'আন্তর্জাতিক ইসলামী বিশ্ববিদ্যালয় ইসলামাবাদ (IIUI)')

a('International Psychometric Assessment Board',
  'Junta Internacional de Evaluación Psicométrica',
  'Commission Internationale d\'Évaluation Psychométrique',
  'Internationales Gremium für psychometrische Diagnostik',
  '国际心理测量与智商评估理事会',
  'المجلس الدولي للتقييم السيكومتري',
  'अंतर्राष्ट्रीय मनोमितीय मूल्यांकन बोर्ड',
  'Conselho Internacional de Avaliação Psicométrica',
  'Международный совет по психометрической оценке',
  '国際心理測定評価委員会',
  'بین الاقوامی سائیکومیٹرک اسسمنٹ بورڈ',
  'আন্তর্জাতিক সাইকোমেট্রিক মূল্যায়ন বোর্ড')

a('Interview Parts 1–3',
  'Partes 1 a 3 de la Entrevista', 'Parties 1 à 3 de l\'Entretien', 'Interview Teile 1–3',
  '口语面试第1至第3部分', 'أجزاء المقابلة 1 إلى 3', 'साक्षात्कार भाग 1-3',
  'Partes 1 a 3 da Entrevista', 'Части интервью 1–3', '面接 パート1〜3',
  'انٹرویو کے حصے 1 تا 3', 'সাক্ষাৎকারের ১–৩ অংশ')

print("Part 2 defined:", len(PART2))
