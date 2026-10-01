# Part 3 translations (items 190 to 284)
PART3 = {}

def a(k, es, fr, de, zh, ar, hi, pt, ru, ja, ur, bn):
    PART3[k.strip().lower()] = {
        "es": es, "fr": fr, "de": de, "zh": zh, "ar": ar,
        "hi": hi, "pt": pt, "ru": ru, "ja": ja, "ur": ur, "bn": bn
    }

a('Invalid score format',
  'Formato de puntuación no válido', 'Format de score invalide', 'Ungültiges Punkteformat',
  '分数格式无效', 'صيغة الدرجة غير صحيحة', 'अमान्य स्कोर प्रारूप',
  'Formato de pontuação inválido', 'Неверный формат балла', '無効なスコア形式です',
  'اسکور کا فارمیٹ غلط ہے', 'অকার্যকর স্কোর ফরম্যাট')

a('Islamabad / Rawalpindi, Pakistan',
  'Islamabad / Rawalpindi, Pakistán', 'Islamabad / Rawalpindi, Pakistan', 'Islamabad / Rawalpindi, Pakistan',
  '巴基斯坦 伊斯兰堡 / 拉瓦尔品第', 'إسلام آباد / روالبندي، باكستان', 'इस्लामाबाद / रावलपिंडी, पाकिस्तान',
  'Islamabad / Rawalpindi, Paquistão', 'Исламабад / Равалпинди, Пакистан', 'パキスタン・イスラマバード / ラワルピンディ',
  'اسلام آباد / راولپنڈی، پاکستان', 'ইসলামাবাদ / রাওয়ালপিন্ডি, পাকিস্তান')

a('JPG or PNG (max 8MB)',
  'JPG o PNG (máx. 8 MB)', 'JPG ou PNG (8 Mo max)', 'JPG oder PNG (max. 8 MB)',
  'JPG 或 PNG 格式（文件大小不超过 8MB）', 'JPG أو PNG (بحد أقصى 8 ميجابايت)', 'JPG या PNG (अधिकतम 8MB)',
  'JPG ou PNG (máx. 8 MB)', 'JPG или PNG (макс. 8 МБ)', 'JPG または PNG（最大8MB）',
  'JPG یا PNG (زیادہ سے زیادہ 8MB)', 'JPG বা PNG (সর্বোচ্চ ৮ মেগাবাইট)')

a('LF',
  'LF (Fluidez)', 'LF (Fluidité)', 'LF (Flüssigkeit)', 'LF (流利度)',
  'الطلاقة اللغوية', 'LF (प्रवाह)', 'LF (Fluência)', 'LF (Беглость)', 'LF（流暢さ）', 'LF (روانی)', 'LF (সাবলীলতা)')

a('LF-YYMM-PERS-BAND-PART',
  'LF-AAMM-PERS-BANDA-PARTE', 'LF-AAMM-PERS-SCORE-PART', 'LF-JJMM-PERS-BAND-TEIL',
  'LF-年月-个人-分数-部分', 'LF-السنةالشهر-الشخص-الدرجة-الجزء', 'LF-YYMM-PERS-BAND-PART',
  'LF-AAMM-PERS-BANDA-PARTE', 'LF-ГГММ-ПЕРС-БАЛЛ-ЧАСТЬ', 'LF-YYMM-PERS-BAND-PART',
  'LF-سال_ماہ-امیدوار-بینڈ-حصہ', 'LF-YYMM-PERS-BAND-PART')

a('LR',
  'LR (Recurso Léxico)', 'LR (Ressource Lexicale)', 'LR (Wortschatz)', 'LR (词汇丰富度)',
  'المفردات اللغوية', 'LR (शब्दावली संसाधन)', 'LR (Recurso Lexical)', 'LR (Лексика)', 'LR（語彙力）', 'LR (ذخیرہ الفاظ)', 'LR (শব্দভাণ্ডার)')

a('Layout After Redevelopment',
  'Distribución Tras la Remodelación', 'Aménagement Après Réaménagement', 'Lageplan nach dem Umbau',
  '重新规划建设后的总体布局图', 'المخطط بعد إعادة التطوير', 'पुनर्विकास के बाद का लेआउट',
  'Layout Após a Reformulação', 'План после реконструкции', '再開発後の配置計画図',
  'تعمیر نو کے بعد کا نقشہ', 'পুনর্বিকাশের পরবর্তী লেআউট')

a('Layout Before Development',
  'Distribución Previa al Desarrollo', 'Aménagement Avant Travaux', 'Lageplan vor der Entwicklung',
  '开发建设前的原始总体布局图', 'المخطط قبل التطوير', 'विकास से पहले का लेआउट',
  'Layout Antes do Desenvolvimento', 'План до начала строительства', '開発前の初期配置図',
  'ترقیاتی کام سے پہلے کا نقشہ', 'উন্নয়নের পূর্ববর্তী লেআউট')

a('Learning & Search Trends',
  'Tendencias de Aprendizaje y Búsqueda', 'Tendances d\'Apprentissage et de Recherche',
  'Lern- & Suchtrends', '全球雅思学习与搜索前沿趋势',
  'اتجاهات التعلم والبحث', 'सीखने और खोज के रुझान',
  'Tendências de Aprendizagem e Busca', 'Тренды обучения и поисковых запросов',
  '学習・検索トレンド', 'سیکھنے اور تلاش کے رجحانات', 'শেখা ও অনুসন্ধানের ট্রেন্ড')

a('Level:',
  'Nivel:', 'Niveau :', 'Stufe:', '能力等级：', 'المستوى:', 'स्तर:', 'Nível:', 'Уровень:', 'レベル：', 'سطح:', 'স্তর:')

a('Lexical Resource',
  'Recursos Léxicos', 'Richesse Lexicale', 'Lexikalische Ressourcen', '词汇丰富程度与准确性',
  'الموارد اللغوية والمعجمية', 'शब्दावली संसाधन', 'Recursos Lexicais',
  'Словарный запас (Lexical Resource)', '語彙の豊富さ', 'ذخیرہ الفاظ کے وسائل', 'শব্দভাণ্ডার সম্পদ')

a('Liked',
  'Me Gusta', 'Aimé', 'Gefällt mir', '已点赞收藏', 'أعجبني', 'पसंद किया', 'Curtido', 'Понравилось', '高評価', 'پسندیدہ', 'পছন্দ হয়েছে')

a('Lingofi Speaking Examiner Assessment',
  'Evaluación del Examinador de Expresión Oral Lingofi',
  'Évaluation de l\'Examinateur d\'Expression Orale Lingofi',
  'Lingofi Prüferbewertung für Speaking',
  'Lingofi 口语考官官方标准智能测评',
  'تقييم ممتحن محادثة لينغوفي',
  'लिंगोफी स्पीकिंग परीक्षक मूल्यांकन',
  'Avaliação do Examinador de Fala Lingofi',
  'Оценка экзаменатора разговорной части Lingofi',
  'Lingofi スピーキング試験官公式AI評価',
  'لنگوفی اسپیکنگ ممتحن کی تشخیص',
  'লিঙ্গোফি স্পিকিং পরীক্ষক মূল্যায়ন')

a('Listen',
  'Escuchar', 'Écouter', 'Anhören', '听力音频', 'استماع', 'सुनें', 'Ouvir', 'Слушать', '聴く', 'سنیں', 'শুনুন')

a('Listen UK Audio',
  'Escuchar Audio en Inglés Británico', 'Écouter l\'Audio Anglais (UK)', 'Britisches Audio anhören',
  '试听标准英音发音', 'الاستماع للصوت البريطاني', 'ब्रिटिश ऑडियो सुनें',
  'Ouvir Áudio Britânico', 'Слушать британское произношение', '英国英語の音声を聴く',
  'برطانوی آڈیو سنیں', 'ব্রিটিশ অডিও শুনুন')

a('Listen to native British pronunciation',
  'Escuchar la pronunciación británica nativa', 'Écouter la prononciation britannique native',
  'Muttersprachliche britische Aussprache anhören', '聆听地道纯正英式母语发音',
  'الاستماع إلى النطق البريطاني الأصلي', 'देशी ब्रिटिश उच्चारण सुनें',
  'Ouvir pronúncia britânica nativa', 'Прослушать аутентичное британское произношение',
  'ネイティブのイギリス英語の発音を聴く', 'مستند برطانوی تلفظ سنیں', 'নেটিভ ব্রিটিশ উচ্চারণ শুনুন')

a('Listen to native British pronunciation and sentence',
  'Escuchar la pronunciación británica nativa y la frase de ejemplo',
  'Écouter la prononciation britannique et la phrase d\'exemple',
  'Muttersprachliche britische Aussprache und Mustersatz anhören',
  '聆听地道英式发音与情境例句朗读',
  'الاستماع إلى النطق البريطاني الأصلي والجملة النموذجية',
  'देशी ब्रिटिश उच्चारण और वाक्य सुनें',
  'Ouvir pronúncia britânica nativa e frase de exemplo',
  'Прослушать британское произношение слова и примера в предложении',
  'ネイティブのイギリス英語発音と例文を聴く',
  'مستند برطانوی تلفظ اور جملہ سنیں',
  'নেটিভ ব্রিটিশ উচ্চারণ এবং বাক্য শুনুন')

a('Listening',
  'Comprensión Auditiva', 'Compréhension Orale', 'Hörverstehen', '听力测试',
  'الاستماع', 'श्रवण (Listening)', 'Compreensão Auditiva', 'Аудирование', 'リスニング', 'سننا (Listening)', 'শ্রবণ')

a('Listening 9.0 • Reading 8.5',
  'Escucha 9.0 • Lectura 8.5', 'Compréhension Orale 9.0 • Compréhension Écrite 8.5',
  'Hören 9.0 • Lesen 8.5', '听力 9.0 满分 • 阅读 8.5',
  'الاستماع 9.0 • القراءة 8.5', 'श्रवण 9.0 • पठन 8.5',
  'Audição 9.0 • Leitura 8.5', 'Аудирование 9.0 • Чтение 8.5',
  'リスニング 9.0 • リーディング 8.5', 'لسننگ 9.0 • ریڈنگ 8.5', 'শ্রবণ ৯.০ • পঠন ৮.৫')

a('Listening → Reading → Writing → Speaking → TRF',
  'Escucha → Lectura → Escritura → Expresión Oral → TRF',
  'Compréhension Orale → Écrite → Expression Écrite → Orale → TRF',
  'Hören → Lesen → Schreiben → Sprechen → TRF',
  '听力 → 阅读 → 写作 → 口语 → 官方成绩单 (TRF)',
  'الاستماع ← القراءة ← الكتابة ← المحادثة ← شهادة TRF',
  'श्रवण → पठन → लेखन → मौखिक → TRF',
  'Audição → Leitura → Escrita → Fala → TRF',
  'Аудирование → Чтение → Письмо → Говорение → TRF',
  'リスニング → リーディング → ライティング → スピーキング → 成績証明書',
  'سننا ← پڑھنا ← لکھنا ← بولنا ← ٹیسٹ رپورٹ فارم',
  'শ্রবণ → পঠন → লিখন → কথন → টিআরএফ')

a('Logic',
  'Lógica', 'Logique', 'Logik', '逻辑思维推理', 'المنطق', 'तर्क', 'Lógica', 'Логика', '論理', 'منطق', 'যুক্তি')

a('Logical Progression',
  'Progresión Lógica', 'Progression Logique', 'Logische Gedankenführung', '严谨层进的逻辑论证',
  'تسلسل منطقي للأفكار', 'तार्किक प्रगति', 'Progressão Lógica', 'Логическая последовательность', '論理的展開',
  'منطقی تسلسل', 'যৌক্তিক অগ্রগতি')

a('Logical paragraph flow and sophisticated thematic referencing',
  'Flujo lógico de párrafos y referencias temáticas sofisticadas',
  'Enchaînement fluide des paragraphes et références thématiques avancées',
  'Logischer Absatzfluss und anspruchsvolle thematische Verweise',
  '行文段落衔接流畅自然，具备高阶母语级指代照应能力',
  'تدفق منطقي للفقرات وربط موضوعي متقدم ومتماسك',
  'तार्किक पैराग्राफ प्रवाह और परिष्कृत विषयगत संदर्भ',
  'Fluxo lógico de parágrafos e referências temáticas sofisticadas',
  'Логичный переход между абзацами и искусные тематические связки',
  '段落間の論理的な流れと洗練された主題の指示・照応',
  'پیراگراف کا منطقی تسلسل اور جدید موضوعاتی حوالہ جات',
  'যৌক্তিক অনুচ্ছেদ প্রবাহ এবং উন্নত বিষয়গত রেফারেন্স')

a('Male (M)',
  'Masculino (M)', 'Masculin (M)', 'Männlich (M)', '男性 (M)',
  'ذكر (M)', 'पुरुष (M)', 'Masculino (M)', 'Мужской (М)', '男性 (M)', 'مرد (M)', 'পুরুষ (M)')

a('Manual score editing is strictly disabled. Scores are securely recorded from your highest-scoring test attempts.',
  'La edición manual de puntuaciones está estrictamente desactivada. Las puntuaciones se registran de forma segura a partir de sus mejores intentos en las pruebas.',
  'La modification manuelle des scores est strictement désactivée. Les scores sont enregistrés de manière sécurisée à partir de vos meilleures tentatives.',
  'Die manuelle Bearbeitung von Prüfungsergebnissen ist strengstens untersagt. Die Ergebnisse werden manipulationssicher aus Ihren besten Testversuchen übernommen.',
  '系统严格禁止手动修改测试成绩。所有成绩均通过考生历史模考中的最高分自动加密归档。',
  'تعديل الدرجات يدوياً معطل تماماً. تُسجل الدرجات بأمان فائق من أعلى محاولاتك في الاختبارات.',
  'स्कोर का मैन्युअल संपादन पूरी तरह से अक्षम है। आपके उच्चतम स्कोर वाले टेस्ट प्रयासों से स्कोर सुरक्षित रूप से दर्ज किए जाते हैं।',
  'A edição manual de notas está estritamente desativada. As pontuações são gravadas com segurança a partir de suas melhores tentativas de teste.',
  'Ручное редактирование баллов строго запрещено. Баллы надежно фиксируются на основе ваших лучших попыток сдачи тестов.',
  'スコアの手動編集は厳格に禁止されています。成績は受験した最高得点のテスト結果から安全に自動記録されます。',
  'اسکورز میں دستی ترمیم کی قطعی اجازت نہیں ہے۔ اسکورز آپ کے سب سے زیادہ نمبروں والے ٹیسٹ سے خودکار اور محفوظ طریقے سے درج کیے جاتے ہیں۔',
  'ম্যানুয়াল স্কোর সম্পাদনা কঠোরভাবে নিষ্ক্রিয়। স্কোরগুলি আপনার সর্বোচ্চ স্কোরিং পরীক্ষার প্রচেষ্টা থেকে নিরাপদে রেকর্ড করা হয়।')

a('Mathematical Parity Checksum',
  'Suma de Comprobación de Paridad Matemática', 'Somme de Contrôle Mathématique',
  'Mathematische Paritätsprüfsumme', '数学算法奇偶校验和',
  'المجموع الاختباري للمطابقة الرياضية', 'गणितीय समता चेकसम',
  'Checksum de Paridade Matemática', 'Математическая контрольная сумма четности',
  '数学的パリティチェックサム', 'ریاضیاتی پیریٹی چیک سم', 'গাণিতিক প্যারিটি চেকসাম')

a('Matrix',
  'Matriz', 'Matrice', 'Matrix', '评分矩阵体系', 'المصفوفة', 'मैट्रिक्स', 'Matriz', 'Матрица', 'マトリクス', 'میٹرکس', 'ম্যাট্রিক্স')

a('Mechanical Linkers',
  'Conectores Mecánicos o Repetitivos', 'Connecteurs Mécaniques', 'Mechanische Verbindungswörter',
  '生硬呆板的机械化连接词', 'روابط لغوية رتيبة وميكانيكية', 'यांत्रिक लिंकर्स',
  'Conectores Mecânicos', 'Механические слова-связки', '型通りの形式的な接続詞',
  'مشینی جوڑنے والے الفاظ', 'যান্ত্রিক সংযোগকারী শব্দ')

a('Mensa Scale Norms',
  'Normas de la Escala Mensa', 'Normes de l\'Échelle Mensa', 'Mensa-Skalennormen', '门萨智商标准常模',
  'معايير مقياس منسا العالمي', 'मेंसा स्केल मानक', 'Normas da Escala Mensa',
  'Нормы шкалы Менса', 'メンサ基準規格', 'مینسا اسکیل کے معیارات', 'মেনসা স্কেল মান')

a('Mic Level:',
  'Nivel de Micrófono:', 'Niveau du Micro :', 'Mikrofonpegel:', '麦克风音量：',
  'مستوى الميكروفون:', 'माइक स्तर:', 'Nível do Microfone:', 'Уровень микрофона:', 'マイク音量：',
  'مائیکروفون کی سطح:', 'মাইক স্তর:')

a('Microphone / Speech Notice:',
  'Aviso sobre Micrófono / Voz:', 'Avis sur le Microphone / Enregistrement :',
  'Hinweis zum Mikrofon / zur Spracheingabe:', '麦克风录音与语音测评注意事项：',
  'إشعار الميكروفون والصوت:', 'माइक्रोफ़ोन / भाषण सूचना:',
  'Aviso de Microfone / Fala:', 'Уведомление о микрофоне и речи:', 'マイク・音声に関する注意事項：',
  'مائیکروفون / آواز کی تنبیہ:', 'মাইক্রোফোন / ভয়েস সংক্রান্ত বিজ্ঞপ্তি:')

a('Mix of Simple & Complex',
  'Mezcla de Estructuras Simples y Complejas', 'Mélange de Structures Simples et Complexes',
  'Mischung einfacher und komplexer Sätze', '长短句结合与丰富句法复合结构',
  'مزيج متوازن من الجمل البسيطة والمعقدة', 'सरल और जटिल वाक्यों का मिश्रण',
  'Mistura de Estruturas Simples e Complexas', 'Сочетание простых и сложных предложений',
  '単文と複文の巧みな組み合わせ', 'سادہ اور پیچیدہ جملوں کا متوازن امتزاج', 'সহজ ও জটিল বাক্যের সংমিশ্রণ')

a('Mock Exams & Skills Practice',
  'Exámenes de Simulacro y Práctica de Habilidades', 'Examens Blancs et Entraînement Ciblé',
  'Probeprüfungen & Fertigkeitstraining', '全科模考与单项技能专项训练',
  'الامتحانات التجريبية والتدريب على المهارات', 'मॉक परीक्षा और कौशल अभ्यास',
  'Simulados e Prática de Habilidades', 'Пробные экзамены и отработка навыков',
  '模擬試験とスキル別実践演習', 'ماک امتحانات اور مہارتوں کی مشق', 'মক পরীক্ষা ও দক্ষতা অনুশীলন')

a('Monthly Searches',
  'Búsquedas Mensuales', 'Recherches Mensuelles', 'Monatliche Suchanfragen', '每月全球搜索指数',
  'عمليات البحث الشهرية', 'मासिक खोजें', 'Buscas Mensais', 'Ежемесячных поисков', '月間検索ボリューム',
  'ماہانہ تلاش', 'মাসিক অনুসন্ধান')

a('Most Popular',
  'Más Popular', 'Le Plus Populaire', 'Am beliebtesten', '最受欢迎高频考点',
  'الأكثر شعبية وإقبالاً', 'सर्वाधिक लोकप्रिय', 'Mais Popular', 'Самое популярное', '最も人気',
  'سب سے زیادہ مقبول', 'সবচেয়ে জনপ্রিয়')

a('Multiple choice, True/False/Not Given, Yes/No/Not Given, Matching headings, Sentence completion.',
  'Opción múltiple, Verdadero/Falso/No Mencionado, Sí/No/No Mencionado, Emparejamiento de títulos, Completar oraciones.',
  'Choix multiples, Vrai/Faux/Non Mentionné, Oui/Non/Non Mentionné, Correspondance de titres, Phrases à compléter.',
  'Multiple-Choice, Richtig/Falsch/Nicht gegeben, Ja/Nein/Nicht gegeben, Überschriften zuordnen, Lückentext.',
  '单项/多项选择题、判断题（True/False/Not Given 或 Yes/No/Not Given）、标题匹配题、句子填空题。',
  'الاختيار من متعدد، صح/خطأ/غير مذكور، نعم/لا/غير مذكور، مطابقة العناوين، إكمال الجمل.',
  'बहुविकल्पीय, सत्य/असत्य/दिया नहीं गया, हाँ/नहीं/दिया नहीं गया, शीर्षकों का मिलान, वाक्य पूर्ण करना।',
  'Múltipla escolha, Verdadeiro/Falso/Não Dado, Sim/Não/Não Dado, Correspondência de títulos, Conclusão de frases.',
  'Множественный выбор, Верно/Неверно/Не указано, Да/Нет/Не указано, Подбор заголовков, Завершение предложений.',
  '多肢選択問題、正誤問題（True/False/Not Given、Yes/No/Not Given）、見出し一致問題、文完成問題。',
  'کثیر الانتخابی سوالات، درست/غلط/معلومات نہیں، ہاں/نہیں/معلومات نہیں، عنوانات کا ملاپ، جملے کی تکمیل۔',
  'বহুনির্বাচনী, সত্য/মিথ্যা/উল্লেখ নেই, হ্যাঁ/না/উল্লেখ নেই, শিরোনাম মিলকরণ, বাক্য সমাপ্তিকরণ।')

a('NOTE:',
  'NOTA:', 'REMARQUE :', 'HINWEIS:', '注意事项：', 'ملاحظة هامة:', 'ध्यान दें:', 'NOTA:', 'ПРИМЕЧАНИЕ:', '注記：', 'اہم نوٹ:', 'বিশেষ দ্রষ্টব্য:')

a('Nationality',
  'Nacionalidad', 'Nationalité', 'Nationalität', '国籍',
  'الجنسية', 'राष्ट्रीयता', 'Nacionalidade', 'Гражданство', '国籍', 'قومیت', 'জাতীয়তা')

a('Native TTS Voice',
  'Voz Nativa de Síntesis (TTS)', 'Voix Native de Synthèse Vocale (TTS)',
  'Muttersprachliche TTS-Stimme', '地道英式母语音频朗读（TTS）',
  'صوت أصلي فائق النقاء (TTS)', 'देशी टीटीएस आवाज',
  'Voz Nativa de Síntese (TTS)', 'Аутентичный голос озвучивания (TTS)',
  'ネイティブ音声読み上げ（TTS）', 'قدرتی برطانوی آواز (TTS)', 'স্বাভাবিক ব্রিটিশ টিটিএস কণ্ঠ')

a('Next Line',
  'Siguiente Línea', 'Ligne Suivante', 'Nächste Zeile', '下一行',
  'السطر التالي', 'अगली पंक्ति', 'Próxima Linha', 'Следующая строка', '次の行', 'اگلی سطر', 'পরবর্তী লাইন')

a('Next Part',
  'Siguiente Parte', 'Partie Suivante', 'Nächster Teil', '下一部分',
  'الجزء التالي', 'अगला भाग', 'Próxima Parte', 'Следующая часть', '次のパートへ', 'اگلا حصہ', 'পরবর্তী অংশ')

a('No Photo',
  'Sin Foto', 'Sans Photo', 'Kein Foto', '暂无相片', 'لا توجد صورة', 'कोई फ़ोटो नहीं', 'Sem Foto', 'Нет фото', '写真なし', 'کوئی تصویر نہیں', 'কোন ছবি নেই')

a('No QR Scanning Needed',
  'No se Requiere Escaneo de Código QR', 'Aucun Scan QR Nécessaire', 'Kein QR-Scan erforderlich',
  '无需扫描QR二维码，直接输入核验代码即可查询', 'لا حاجة لمسح رمز الاستجابة السريعة (QR)',
  'क्यूआर स्कैनिंग की आवश्यकता नहीं है', 'Não é Necessário Escanear QR Code',
  'QR-код сканировать не требуется', 'QRコードのスキャンは不要です',
  'کیو آر کوڈ اسکین کرنے کی ضرورت نہیں', 'কোনো কিউআর কোড স্ক্যান করার প্রয়োজন নেই')

a('No extra transfer time is allowed in computer-delivered IELTS.',
  'No se concede tiempo adicional de transferencia en el examen IELTS por computadora.',
  'Aucun temps de transfert supplémentaire n\'est accordé pour le test IELTS sur ordinateur.',
  'Beim computerbasierten IELTS gibt es keine zusätzliche Übertragungszeit.',
  '机考雅思听力结束时仅有2分钟检查时间，不提供纸笔模式额外的10分钟转抄答案时间。',
  'لا يُمنح وقت إضافي لنقل الإجابات في اختبار الآيلتس المحوسب.',
  'कंप्यूटर-आधारित आईईएलटीएस में कोई अतिरिक्त उत्तर स्थानांतरण समय नहीं दिया जाता है।',
  'Nenhum tempo extra de transferência é permitido no IELTS feito por computador.',
  'В компьютерном формате IELTS дополнительное время на перенос ответов не предоставляется.',
  'コンピューター受験型IELTSでは、回答転記のための追加時間は付与されません。',
  'کمپیوٹر والے آئیلٹس میں جوابات نقل کرنے کے لیے اضافی وقت نہیں دیا جاتا۔',
  'কম্পিউটার-ভিত্তিক আইইএলটিএসে কোনো অতিরিক্ত উত্তর স্থানান্তর সময় দেওয়া হয় না।')

a('No matching articles found',
  'No se encontraron artículos que coincidan', 'Aucun article correspondant trouvé', 'Keine passenden Artikel gefunden',
  '未找到符合搜索条件的文章', 'لم يتم العثور على مقالات مطابقة', 'कोई मेल खाते लेख नहीं मिले',
  'Nenhum artigo correspondente encontrado', 'Совпадающих статей не найдено', '一致する記事は見つかりませんでした',
  'کوئی متعلقہ مضمون نہیں ملا', 'কোনো সম্পর্কিত নিবন্ধ পাওয়া যায়নি')

a('No matching trending topics',
  'No hay temas en tendencia que coincidan', 'Aucun sujet tendance correspondant', 'Keine passenden Trendthemen',
  '没有符合条件的备考热门话题', 'لا توجد مواضيع شائعة مطابقة', 'कोई मेल खाते ट्रेंडिंग विषय नहीं हैं',
  'Nenhum tópico em alta correspondente', 'Нет совпадающих популярных тем', '一致するトレンドトピックは見つかりませんでした',
  'کوئی ملتا جلتا رجحان ساز موضوع نہیں ملا', 'কোনো সম্পর্কিত ট্রেন্ডিং বিষয় পাওয়া যায়নি')

a('No physical signature required.',
  'No se requiere firma física.', 'Aucune signature physique requise.', 'Keine handschriftliche Unterschrift erforderlich.',
  '本证书采用电子加密防伪技术，无需纸质手写签名。', 'لا يلزم التوقيع الفعلي.', 'भौतिक हस्ताक्षर की आवश्यकता नहीं है।',
  'Não é necessária assinatura física.', 'Физическая подпись не требуется.', '本証明書に手書きの署名は不要です。',
  'دستی دستخط کی ضرورت نہیں ہے۔', 'কাগজে স্বাক্ষরের কোনো প্রয়োজন নেই।')

a('No valid band scores could be decoded from this pattern code. The document is invalid.',
  'No se pudieron decodificar puntuaciones de banda válidas a partir de este código de patrón. El documento no es válido.',
  'Aucun score valide n\'a pu être décodé à partir de ce code de motif. Le document est invalide.',
  'Aus diesem Mustercode konnten keine gültigen Band-Scores dekodiert werden. Das Dokument ist ungültig.',
  '系统无法从此防伪核验码中解密出合法的雅思分数，该成绩证明文件无效。',
  'تعذر فك تشفير درجات صالحة من رمز التحقق هذا. الوثيقة غير صالحة.',
  'इस पैटर्न कोड से कोई वैध बैंड स्कोर डिकोड नहीं किया जा सका। दस्तावेज़ अमान्य है।',
  'Nenhuma pontuação de banda válida pôde ser decodificada deste código de padrão. O documento é inválido.',
  'Не удалось расшифровать действительные баллы из этого кода. Документ недействителен.',
  'この暗号化パターンコードから有効なバンドスコアを照合できませんでした。証明書は無効です。',
  'اس کوڈ سے درست بینڈ اسکور حاصل نہیں ہو سکا۔ یہ دستاویز جعلی یا کالعدم ہے۔',
  'এই প্যাটার্ন কোড থেকে কোনো বৈধ ব্যান্ড স্কোর ডিকোড করা যায়নি। নথিটি অবৈধ।')

a('Non-Editable Highest Score Ledger',
  'Registro Oficial de Puntuaciones Máximas (No Editable)',
  'Grand Livre des Meilleurs Scores (Non Modifiable)',
  'Offizielles Hauptbuch der Höchstpunktzahlen (Nicht editierbar)',
  '历史官方最高成绩防篡改不可变总账本',
  'سجل أعلى الدرجات المعتمد (غير قابل للتعديل)',
  'असंपादनीय उच्चतम स्कोर लेज़र',
  'Livro-Razão Oficial de Pontuações Máximas (Não Editável)',
  'Неизменяемый реестр высших баллов',
  '公式最高得点台帳（改ざん防止・編集不可）',
  'ناقابلِ ترمیم بلند ترین اسکورز کا سرکاری کھاتہ',
  'অপরিবর্তনযোগ্য সর্বোচ্চ স্কোরের লেজার')

a('Non-Editable Highest Scores',
  'Puntuaciones Más Altas Inalterables', 'Meilleurs Scores Non Modifiables',
  'Unveränderliche Höchstergebnisse', '防篡改历史最高成绩记录',
  'أعلى درجات غير قابلة للتعديل', 'असंपादनीय उच्चतम अंक',
  'Pontuações Mais Altas Inalteráveis', 'Неизменяемые высшие баллы',
  '編集不可・最高記録スコア', 'ناقابلِ ترمیم ریکارڈ شدہ بلند ترین اسکورز', 'অপরিবর্তনযোগ্য সর্বোচ্চ স্কোর')

a('Notable Works & Publications',
  'Obras Destacadas y Publicaciones', 'Œuvres Majeures et Publications', 'Bedeutende Werke & Publikationen',
  '代表性文学著作与学术专著', 'أبرز المؤلفات والمنشورات', 'उल्लेखनीय कृतियाँ और प्रकाशन',
  'Obras Notáveis e Publicações', 'Известные труды и публикации', '主要著作および刊行物',
  'نمایاں تصانیف اور مطبوعات', 'উল্লেখযোগ্য কাজ ও প্রকাশনা')

a('Note:',
  'Nota:', 'Remarque :', 'Hinweis:', '提示：', 'ملاحظة:', 'नोट:', 'Nota:', 'Примечание:', '注：', 'نوٹ:', 'নোট:')

a('Nuanced Mastery',
  'Dominio con Matices', 'Maîtrise Nuancée', 'Nuancierte Beherrschung', '游刃有余的精妙学术语言驾驭能力',
  'إتقان لغوي رفيع ودقيق', 'बारीक महारत', 'Domínio com Nuances',
  'Тонкое мастерство', 'ニュアンスを汲み取った卓越した表現力', 'حساس اور باریک بین مہارت', 'সূক্ষ্ম দক্ষতা')

a('Numerical',
  'Numérico', 'Numérique', 'Numerisch', '数字推理', 'رقمي', 'संख्यात्मक', 'Numérico', 'Числовой', '数的・計算', 'عددی', 'সংখ্যাগত')

a('Official British Council & IDP Assessment Rubric',
  'Rúbrica de Evaluación Oficial de British Council e IDP',
  'Grille d\'Évaluation Officielle du British Council et de l\'IDP',
  'Offizieller Bewertungsmaßstab von British Council & IDP',
  '英国文化协会 (British Council) 与 IDP 官方全维度评分细则',
  'معايير التقييم الرسمية للمجلس الثقافي البريطاني وIDP',
  'ब्रिटिश काउंसिल और आईडीपी आधिकारिक मूल्यांकन रूब्रिक',
  'Rúbrica de Avaliação Oficial do British Council e IDP',
  'Официальная шкала оценивания British Council и IDP',
  'ブリティッシュ・カウンシル＆IDP公式評価ルーブリック',
  'برٹش کونسل اور IDP کا سرکاری اسسمنٹ معیار',
  'ব্রিটিশ কাউন্সিল ও আইডিপি অফিশিয়াল মূল্যায়ন রুব্রিক')

a('Official Cambridge / IDP Assessment Standard',
  'Estándar Oficial de Evaluación de Cambridge / IDP',
  'Norme Officielle d\'Évaluation Cambridge / IDP',
  'Offizieller Cambridge / IDP Bewertungsstandard',
  '剑桥大学考试委员会与 IDP 官方考评标准',
  'معيار التقييم الرسمي لكامبريدج وIDP',
  'आधिकारिक कैम्ब्रिज / आईडीपी मूल्यांकन मानक',
  'Padrão Oficial de Avaliação Cambridge / IDP',
  'Официальный стандарт оценивания Cambridge / IDP',
  'ケンブリッジ・IDP公式評価基準',
  'کیمبرج / IDP کا سرکاری تشخیصی معیار',
  'অফিশিয়াল কেমব্রিজ / আইডিপি মূল্যায়ন মানদণ্ড')

a('Official Candidate',
  'Candidato Oficial', 'Candidat Officiel', 'Offizieller Kandidat', '官方注册考生',
  'مرشح رسمي', 'आधिकारिक उम्मीदवार', 'Candidato Oficial', 'Официальный кандидат', '公式登録受験者', 'سرکاری امیدوار', 'অফিশিয়াল পরীক্ষার্থী')

a('Official Certification & Verification',
  'Certificación y Verificación Oficial', 'Certification et Vérification Officielles',
  'Offizielle Zertifizierung & Verifizierung', '官方证书颁发与真伪核验',
  'الشهادة والتحقق الرسمي', 'आधिकारिक प्रमाणन और सत्यापन',
  'Certificação e Verificação Oficial', 'Официальная сертификация и проверка',
  '公式認定書発行と照会', 'سرکاری سرٹیفیکیشن اور تصدیق', 'অফিশিয়াল সার্টিফিকেশন ও যাচাইকরণ')

a('Official Exam Ledger: Highest Test Score Recorded',
  'Registro Oficial de Examen: Puntuación Máxima Registrada',
  'Grand Livre Officiel d\'Examen : Meilleur Score Enregistré',
  'Offizielles Prüfungsbuch: Höchstes Prüfungsergebnis aufgezeichnet',
  '官方全真模考总账：历史取得的最高分权威备案',
  'سجل الاختبار الرسمي: أعلى درجات اختبار مسجلة',
  'आधिकारिक परीक्षा खाता: उच्चतम परीक्षण स्कोर दर्ज किया गया',
  'Livro Oficial de Exames: Maior Nota Registrada',
  'Официальный экзаменационный реестр: Высший зафиксированный балл',
  '公式試験元帳：記録された最高スコア',
  'سرکاری امتحانی رجسٹر: ریکارڈ شدہ بلند ترین اسکور',
  'অফিশিয়াল পরীক্ষার লেজার: সর্বোচ্চ রেকর্ডকৃত টেস্ট স্কোর')

a('Official IELTS Part 2 Speech Lab • 1:30–2:00 min target',
  'Laboratorio Oficial de Oratoria de IELTS Parte 2 • Objetivo: 1:30–2:00 min',
  'Laboratoire Officiel d\'Expression Orale IELTS Partie 2 • Objectif : 1:30–2:00 min',
  'Offizielles IELTS-Sprachlabor Teil 2 • Ziel: 1:30–2:00 Min.',
  '雅思口语Part 2官方实战语音实验室 • 目标时长：1分30秒至2分钟',
  'مختبر محادثة الآيلتس الرسمي الجزء 2 • المدة المستهدفة: 1:30–2:00 دقيقة',
  'आधिकारिक आईईएलटीएस भाग 2 स्पीच लैब • 1:30–2:00 मिनट का लक्ष्य',
  'Laboratório Oficial de Fala do IELTS Parte 2 • Alvo: 1:30–2:00 min',
  'Официальная речевая лаборатория IELTS Part 2 • Целевое время: 1:30–2:00 мин',
  '公式IELTSパート2スピーチ特訓ラボ • 目標発話時間：1分30秒〜2分間',
  'آئیلٹس پارٹ 2 سرکاری اسپیچ لیب • ہدف وقت: 1:30–2:00 منٹ',
  'অফিশিয়াল আইইএলটিএস পার্ট ২ স্পিচ ল্যাব • লক্ষ্য: ১:৩০–২:০০ মিনিট')

a('Official IELTS YouTube Search Directory',
  'Directorio Oficial de Búsqueda de IELTS en YouTube',
  'Annuaire Officiel de Recherche YouTube pour l\'IELTS',
  'Offizielles IELTS-YouTube-Suchverzeichnis',
  '雅思官方全球YouTube精选视频检索库',
  'دليل بحث يوتيوب الرسمي للآيلتس',
  'आधिकारिक आईईएलटीएस यूट्यूब खोज निर्देशिका',
  'Diretório Oficial de Busca do IELTS no YouTube',
  'Официальный каталог поиска видео по IELTS на YouTube',
  '公式IELTS YouTube検索ディレクトリ',
  'آئیلٹس کی یوٹیوب پر ویڈیوز تلاش کرنے کی سرکاری ڈائریکٹری',
  'অফিশিয়াল আইইএলটিএস ইউটিউব অনুসন্ধান ডিরেক্টরি')

a('Official Sequence:',
  'Secuencia Oficial:', 'Séquence Officielle :', 'Offizielle Reihenfolge:', '官方统一考试顺序：',
  'الترتيب والتسلسل الرسمي:', 'आधिकारिक क्रम:', 'Sequência Oficial:', 'Официальный порядок:',
  '公式試験順序：', 'سرکاری ترتیب:', 'অফিশিয়াল ক্রম:')

a('Overall',
  'Global', 'Global', 'Gesamt', '综合总分', 'الدرجة الكلية', 'समग्र', 'Geral', 'Общий', '総合', 'مجموعی', 'সামগ্রিক')

a('Overall Band:',
  'Banda General:', 'Score Global :', 'Gesamtnote (Band):', '雅思总分：',
  'الدرجة الكلية العامة:', 'समग्र बैंड:', 'Banda Geral:', 'Общий балл:', '総合バンドスコア：',
  'مجموعی بینڈ:', 'সামগ্রিক ব্যান্ড:')

a('PNG or JPG (standard passport ratio)',
  'PNG o JPG (proporción estándar de pasaporte)', 'PNG ou JPG (format passeport standard)',
  'PNG oder JPG (Standard-Passbildformat)', 'PNG 或 JPG 格式（标准二寸护照照片比例）',
  'PNG أو JPG (النسبة القياسية لصورة جواز السفر)', 'PNG या JPG (मानक पासपोर्ट अनुपात)',
  'PNG ou JPG (proporção padrão de passaporte)', 'PNG или JPG (стандартные пропорции паспорта)',
  'PNG または JPG（標準パスポート縦横比）', 'PNG یا JPG (پاسپورٹ سائز کا معیاری تناسب)',
  'PNG বা JPG (মানক পাসপোর্ট অনুপাত)')

a('Packaged in Codebase (src/assets/images/)',
  'Empaquetado en el Código Fuente (src/assets/images/)', 'Intégré dans le Code Source (src/assets/images/)',
  'Im Codebase gebündelt (src/assets/images/)', '已打包封装于项目源码资产库中 (src/assets/images/)',
  'مدمجة داخل الكود المصدري (src/assets/images/)', 'कोडबेस में संकलित (src/assets/images/)',
  'Empacotado no Código-Fonte (src/assets/images/)', 'Встроено в кодовую базу (src/assets/images/)',
  'コードベース内に同梱（src/assets/images/）', 'کوڈ بیس میں محفوظ (src/assets/images/)',
  'কোডবেসে প্যাকেজ করা (src/assets/images/)')

a('Pakistani',
  'Pakistaní', 'Pakistanais', 'Pakistanisch', '巴基斯坦籍',
  'باكستاني', 'पाकिस्तानी', 'Paquistanês', 'Пакистанец', 'パキスタン国籍', 'پاکستانی', 'পাকিস্তানি')

a('Part 1 (4–5 mins):',
  'Parte 1 (4–5 min):', 'Partie 1 (4–5 min) :', 'Teil 1 (4–5 Min.):', '第一部分 Part 1（时长 4–5分钟）：',
  'الجزء 1 (4–5 دقائق):', 'भाग 1 (4–5 मिनट):', 'Parte 1 (4–5 min):', 'Часть 1 (4–5 мин):',
  'パート1（4〜5分）：', 'حصہ 1 (4–5 منٹ):', 'পার্ট ১ (৪–৫ মিনিট):')

a('Part 1 (social dialogue), Part 2 (social monologue), Part 3 (academic discussion), Part 4 (academic lecture).',
  'Parte 1 (diálogo social), Parte 2 (monólogo social), Parte 3 (discusión académica), Parte 4 (conferencia académica).',
  'Partie 1 (dialogue social), Partie 2 (monologue social), Partie 3 (discussion académique), Partie 4 (cours académique).',
  'Teil 1 (Alltagsdialog), Teil 2 (Alltagsmonolog), Teil 3 (akademische Diskussion), Teil 4 (akademische Vorlesung).',
  '第1部分（日常双人对话），第2部分（社会独白），第3部分（学术小组讨论），第4部分（学术专业讲座）。',
  'الجزء 1 (حوار اجتماعي)، الجزء 2 (حديث فردي اجتماعي)، الجزء 3 (نقاش أكاديمي)، الجزء 4 (محاضرة أكاديمية).',
  'भाग 1 (सामाजिक संवाद), भाग 2 (सामाजिक एकालाप), भाग 3 (अकादमिक चर्चा), भाग 4 (अकादमिक व्याख्यान)।',
  'Parte 1 (diálogo social), Parte 2 (monólogo social), Parte 3 (discussão acadêmica), Parte 4 (palestra acadêmica).',
  'Часть 1 (диалог на бытовую тему), Часть 2 (монолог), Часть 3 (академическая беседа), Часть 4 (лекция).',
  'パート1（日常会話）、パート2（社会的独白）、パート3（専門的な学術討議）、パート4（大学講義）。',
  'حصہ 1 (سماجی مکالمہ)، حصہ 2 (سماجی یک کلامی)، حصہ 3 (علمی بحث)، حصہ 4 (اکیڈمک لیکچر)۔',
  'পার্ট ১ (সামাজিক সংলাপ), পার্ট ২ (সামাজিক স্বগতোক্তি), পার্ট ৩ (একাডেমিক আলোচনা), পার্ট ৪ (একাডেমিক বক্তৃতা)।')

a('Part 2 (3–4 mins):',
  'Parte 2 (3–4 min):', 'Partie 2 (3–4 min) :', 'Teil 2 (3–4 Min.):', '第二部分 Part 2（时长 3–4分钟）：',
  'الجزء 2 (3–4 دقائق):', 'भाग 2 (3–4 मिनट):', 'Parte 2 (3–4 min):', 'Часть 2 (3–4 мин):',
  'パート2（3〜4分）：', 'حصہ 2 (3–4 منٹ):', 'পার্ট ২ (৩–৪ মিনিট):')

a('Part 3 (4–5 mins):',
  'Parte 3 (4–5 min):', 'Partie 3 (4–5 min) :', 'Teil 3 (4–5 Min.):', '第三部分 Part 3（时长 4–5分钟）：',
  'الجزء 3 (4–5 دقائق):', 'भाग 3 (4–5 मिनट):', 'Parte 3 (4–5 min):', 'Часть 3 (4–5 мин):',
  'パート3（4〜5分）：', 'حصہ 3 (4–5 منٹ):', 'পার্ট ৩ (৪–৫ মিনিট):')

a('Part 3 Success Strategy:',
  'Estrategia de Éxito para la Parte 3:', 'Stratégie de Réussite pour la Partie 3 :',
  'Erfolgsstrategie für Teil 3:', '口语第三部分深度破题高分策略：',
  'استراتيجية النجاح للجزء 3:', 'भाग 3 सफलता रणनीति:',
  'Estratégia de Sucesso para a Parte 3:', 'Стратегия успеха для Части 3:',
  'パート3高得点突破ストラテジー：', 'حصہ 3 کی کامیابی کی حکمت عملی:',
  'পার্ট ৩ সাফল্যের কৌশল:')

a('Parts 1–3',
  'Partes 1 a 3', 'Parties 1 à 3', 'Teile 1–3', '第1至第3部分',
  'الأجزاء 1 إلى 3', 'भाग 1–3', 'Partes 1–3', 'Части 1–3', 'パート1〜3', 'حصے 1 تا 3', '১–৩ অংশ')

a('Pause',
  'Pausar', 'Pause', 'Pause', '暂停', 'إيقاف مؤقت', 'रोकें', 'Pausar', 'Пауза', '一時停止', 'وقفہ', 'পজ')

a('Platform',
  'Plataforma', 'Plateforme', 'Plattform', '教学备考平台', 'المنصة', 'प्लेटफ़ॉर्म', 'Plataforma', 'Платформа', 'プラットフォーム', 'پلیٹ فارم', 'প্ল্যাটফর্ম')

a('Play Audio',
  'Reproducir Audio', 'Lire l\'Audio', 'Audio abspielen', '播放听力音频',
  'تشغيل الصوت', 'ऑडियो चलाएं', 'Reproduzir Áudio', 'Воспроизвести аудио', '音声を再生', 'آڈیو چلائیں', 'অডিও চালান')

a('Plus 2 minutes checking time at the end.',
  'Más 2 minutos de tiempo de revisión al final.',
  'Plus 2 minutes de relecture à la fin.',
  'Zuzüglich 2 Minuten Überprüfungszeit am Ende.',
  '考试最后配有2分钟额外时间供考生核对检查答案。',
  'بالإضافة إلى دقيقتين للمراجعة والتدقيق في النهاية.',
  'अंत में 2 मिनट का अतिरिक्त जांच समय।',
  'Mais 2 minutos de tempo de revisão no final.',
  'Плюс 2 минуты на проверку в конце теста.',
  '試験終了時に2分間の回答見直し時間が付与されます。',
  'آخر میں 2 منٹ کا تصدیقی اور چیکنگ کا وقت۔',
  'শেষে অতিরিক্ত ২ মিনিট পরীক্ষার উত্তর যাচাইয়ের সময়।')

a('Preparation materials',
  'Materiales de preparación', 'Matériel de préparation', 'Vorbereitungsmaterialien',
  '雅思官方权威备考复习资料', 'المواد التدريبية والتحضيرية', 'तैयारी सामग्री',
  'Materiais de preparação', 'Материалы для подготовки', '学習準備教材',
  'تیاری کا مواد', 'প্রস্তুতিমূলক সামগ্রী')

a('Prev Line',
  'Línea Anterior', 'Ligne Précédente', 'Vorherige Zeile', '上一行',
  'السطر السابق', 'पिछली पंक्ति', 'Linha Anterior', 'Предыдущая строка', '前の行', 'پچھلی سطر', 'পূর্ববর্তী লাইন')

a('Prev Part',
  'Parte Anterior', 'Partie Précédente', 'Vorheriger Teil', '上一部分',
  'الجزء السابق', 'पिछला भाग', 'Parte Anterior', 'Предыдущая часть', '前のパートへ', 'پچھلا حصہ', 'পূর্ববর্তী অংশ')

a('Prev Passage',
  'Pasaje Anterior', 'Passage Précédent', 'Vorheriger Text', '上一篇阅读文章',
  'النص السابق', 'पिछला गद्यांश', 'Texto Anterior', 'Предыдущий текст', '前の文章へ', 'پچھلا پیراگراف', 'পূর্ববর্তী অনুচ্ছেদ')

a('Primary Roles:',
  'Funciones Principales:', 'Rôles Principaux :', 'Hauptrollen:', '主要学术与技术职务：',
  'الأدوار والمسؤوليات الرئيسية:', 'मुख्य भूमिकाएँ:', 'Funções Principais:', 'Основные обязанности:',
  '主な役職・担当：', 'بنیادی ذمہ داریاں:', 'প্রধান ভূমিকাসমূহ:')

a('Private Candidate Academic',
  'Candidato Académico Privado', 'Candidat Académique Individuel', 'Privater Kandidat (Academic)',
  '个人自修雅思学术类注册考生', 'مرشح أكاديمي مستقل', 'निजी उम्मीदवार अकादमिक',
  'Candidato Acadêmico Privado', 'Индивидуальный академический кандидат', '個人アカデミック受験者',
  'نجی تعلیمی امیدوار', 'ব্যক্তিগত একাডেমিক পরীক্ষার্থী')

a('Pronunciation & Rhythm',
  'Pronunciación y Ritmo', 'Prononciation et Rythme', 'Aussprache & Rhythmus', '语音语调与口语节奏感',
  'النطق والإيقاع الصوتي', 'उच्चारण और लय', 'Pronúncia e Ritmo',
  'Произношение и речевой ритм', '発音とリズム', 'تلفظ اور لہجے کا ردھم', 'উচ্চারণ ও ছন্দ')

a('Proportional Distribution (%)',
  'Distribución Proporcional (%)', 'Distribution Proportionnelle (%)', 'Proportionale Verteilung (%)',
  '各要素占比分布图 (%)', 'التوزيع النسبي (%)', 'आनुपातिक वितरण (%)',
  'Distribuição Proporcional (%)', 'Пропорциональное распределение (%)', '比率配分（％）',
  'تناسبی تقسیم (%)', 'আনুপাতিক বণ্টন (%)')

a('Provided Name',
  'Nombre Proporcionado', 'Nom Fourni', 'Angegebener Name', '已登记的姓名',
  'الاسم المقدم', 'प्रदान किया गया नाम', 'Nome Informado', 'Указанное имя', '登録氏名', 'فراہم کردہ نام', 'প্রদত্ত নাম')

a('Provided Passport/ID',
  'Pasaporte / ID Proporcionado', 'Passeport / ID Fourni', 'Angegebener Pass / Ausweis', '已登记的身份证件号',
  'رقم الجواز / الهوية المقدم', 'प्रदान किया गया पासपोर्ट/आईडी', 'Passaporte / ID Informado',
  'Указанный паспорт / ID', '登録パスポート/身分証番号', 'فراہم کردہ پاسپورٹ/شناختی کارڈ', 'প্রদত্ত পাসপোর্ট/আইডি')

a('Questions',
  'Preguntas', 'Questions', 'Fragen', '设问列表', 'الأسئلة', 'प्रश्न', 'Questões', 'Вопросы', '設問', 'سوالات', 'প্রশ্নাবলী')

a('Range, precision, style, and natural academic collocations',
  'Amplitud, precisión, estilo y colocaciones académicas naturales',
  'Étendue, précision, style et collocations académiques naturelles',
  'Umfang, Präzision, Stil und natürliche akademische Kollokationen',
  '词汇储备跨度、用词精准性、文风地道性以及自然学术搭配',
  'التنوع والدقة والأسلوب والتعبيرات الاصطلاحية الأكاديمية الطبيعية',
  'विस्तार, सटीकता, शैली और प्राकृतिक अकादमिक संयोजन',
  'Variedade, precisão, estilo e colocações acadêmicas naturais',
  'Диапазон, точность, стиль и естественные академические устойчивые сочетания',
  '語彙の幅、正確さ、文体、および自然な学術的コロケーション',
  'وسعت، درستگی، انداز اور قدرتی علمی الفاظ کا جوڑ',
  'ব্যাপ্তি, নির্ভুলতা, শৈলী এবং প্রাকৃতিক একাডেমিক শব্দগুচ্ছ')

a('Read Prompt',
  'Leer Enunciado', 'Lire le Sujet', 'Aufgabenstellung lesen', '阅读口语/写作题目提示',
  'قراءة نص السؤال', 'प्रॉम्प्ट पढ़ें', 'Ler o Tema', 'Читать тему', '設問を読む', 'سوال پڑھیں', 'প্রম্পট পড়ুন')

a('Reading',
  'Lectura', 'Compréhension Écrite', 'Leseverstehen', '阅读测试',
  'القراءة', 'पठन (Reading)', 'Leitura', 'Чтение', 'リーディング', 'پڑھنا (Reading)', 'পঠন')

a('Real Candidate Volume',
  'Volumen Real de Candidatos', 'Volume Réel de Candidats', 'Echtes Kandidatenaufkommen',
  '全球实战考生大数据样本', 'حجم المرشحين الفعلي', 'वास्तविक उम्मीदवार संख्या',
  'Volume Real de Candidatos', 'Реальный объем кандидатов', '受験者ビッグデータ規模',
  'امیدواروں کی حقیقی تعداد', 'প্রকৃত পরীক্ষার্থীর সংখ্যা')

a('Recent Releases',
  'Publicaciones Recientes', 'Parutions Récentes', 'Neuerscheinungen', '最新发布题库与研究',
  'الإصدارات الحديثة', 'हालिया रिलीज़', 'Lançamentos Recentes', 'Недавние выпуски', '新着トピック',
  'تازہ ترین مطبوعات', 'সাম্প্রতিক প্রকাশনা')

a('Recording complete!',
  '¡Grabación completada!', 'Enregistrement terminé !', 'Aufnahme abgeschlossen!', '录音作答已顺利完成！',
  'اكتمل التسجيل بنجاح!', 'रिकॉर्डिंग पूरी हुई!', 'Gravação concluída!', 'Запись завершена!', '録音完了！',
  'ریکارڈنگ مکمل ہو گئی!', 'রেকর্ডিং সম্পন্ন হয়েছে!')

a('Retake',
  'Repetir Prueba', 'Refaire le Test', 'Test wiederholen', '重新测试',
  'إعادة المحاولة', 'पुनः प्रयास करें', 'Refazer Teste', 'Пересдать', '再受験', 'دوبارہ ٹیسٹ دیں', 'পুনরায় পরীক্ষা দিন')

print("Part 3 defined:", len(PART3))
