import { SupportedLanguage } from "../types/language";

export type LanguageMap = Partial<Record<SupportedLanguage, string>>;
import { SPEAKING_PART_1_TRANSLATIONS, SPEAKING_PART_3_TRANSLATIONS, EXAMINER_PHRASES } from "./speakingAndWritingTranslations";

/**
 * Standard IELTS Listening Section Announcements in all 11 languages
 */
export const LISTENING_ANNOUNCEMENTS: Record<string, LanguageMap> = {
  "now we shall begin. you should answer the questions as you listen because you will not hear the recording a second time. listen carefully and answer questions 1 to 5.": {
    en: "Now we shall begin. You should answer the questions as you listen because you will not hear the recording a second time. Listen carefully and answer questions 1 to 5.",
    es: "Ahora comenzaremos. Debe responder a las preguntas mientras escucha, ya que no volverá a oír la grabación. Escuche con atención y responda a las preguntas 1 a 5.",
    fr: "Nous allons maintenant commencer. Répondez aux questions au fur et à mesure de l'écoute, car l'enregistrement ne sera diffusé qu'une seule fois. Écoutez attentivement et répondez aux questions 1 à 5.",
    de: "Wir beginnen jetzt. Sie sollten die Fragen beim Hören beantworten, da Sie die Aufnahme kein zweites Mal hören werden. Hören Sie aufmerksam zu und beantworten Sie die Fragen 1 bis 5.",
    zh: "考试现在开始。请在听的同时作答，因为录音只播放一遍。请仔细听，并回答第1至第5题。",
    ar: "سنبدأ الآن. يجب عليك الإجابة على الأسئلة أثناء الاستماع لأنك لن تستمع إلى التسجيل مرة ثانية. استمع بعناية وأجب عن الأسئلة من 1 إلى 5.",
    hi: "अब हम शुरू करेंगे। सुनते समय ही आपको प्रश्नों के उत्तर देने चाहिए क्योंकि आप रिकॉर्डिंग दूसरी बार नहीं सुनेंगे। ध्यान से सुनें और प्रश्न 1 से 5 के उत्तर दें।",
    pt: "Agora vamos começar. Você deve responder às perguntas enquanto ouve, pois não ouvirá a gravação uma segunda vez. Ouça com atenção e responda às perguntas de 1 a 5.",
    ru: "Теперь мы начинаем. Отвечайте на вопросы по ходу прослушивания, так как запись звучит только один раз. Слушайте внимательно и отвечайте на вопросы с 1 по 5.",
    ja: "それでは始めます。録音は一度しか再生されませんので、聞きながら質問に答えてください。注意して聞き、質問1から5に答えてください。",
    ur: "اب ہم شروع کرتے ہیں۔ سنتے وقت ہی سوالات کے جوابات دیں کیونکہ آپ ریکارڈنگ دوبارہ نہیں سنیں گے۔ غور سے سنیں اور سوالات 1 تا 5 کے جوابات دیں۔",
    bn: "এখন আমরা শুরু করব। শোনার সাথে সাথে আপনাকে প্রশ্নগুলির উত্তর দিতে হবে কারণ আপনি রেকর্ডিংটি দ্বিতীয়বার শুনতে পাবেন না। মনোযোগ দিয়ে শুনুন এবং ১ থেকে ৫ নম্বর প্রশ্নের উত্তর দিন।"
  },
  "first, you have some time to look at questions 1 to 5.": {
    en: "First, you have some time to look at questions 1 to 5.",
    es: "Primero, tiene tiempo para leer las preguntas 1 a 5.",
    fr: "Tout d'abord, vous disposez d'un moment pour regarder les questions 1 à 5.",
    de: "Zuerst haben Sie Zeit, sich die Fragen 1 bis 5 anzusehen.",
    zh: "首先，您有时间审阅第1至第5题。",
    ar: "أولاً، لديك بعض الوقت للاطلاع على الأسئلة من 1 إلى 5.",
    hi: "पहले, आपके पास प्रश्न 1 से 5 देखने के लिए कुछ समय है।",
    pt: "Primeiro, você tem algum tempo para ler as perguntas de 1 a 5.",
    ru: "Сначала у вас есть немного времени, чтобы просмотреть вопросы с 1 по 5.",
    ja: "まず、質問1から5を見る時間があります。",
    ur: "پہلے، آپ کے پاس سوالات 1 تا 5 دیکھنے کے لیے کچھ وقت ہے۔",
    bn: "প্রথমে, ১ থেকে ৫ নম্বর প্রশ্নগুলো দেখার জন্য আপনার কিছু সময় রয়েছে।"
  },
  "now you have some time to look at questions 6 to 10.": {
    en: "Now you have some time to look at questions 6 to 10.",
    es: "Ahora tiene algún tiempo para revisar las preguntas 6 a 10.",
    fr: "Vous disposez maintenant d'un moment pour examiner les questions 6 à 10.",
    de: "Nun haben Sie etwas Zeit, sich die Fragen 6 bis 10 anzusehen.",
    zh: "现在您有时间审阅第6至第10题。",
    ar: "الآن لديك بعض الوقت للاطلاع على الأسئلة من 6 إلى 10.",
    hi: "अब आपके पास प्रश्न 6 से 10 देखने के लिए कुछ समय है।",
    pt: "Agora você tem algum tempo para ler as perguntas de 6 a 10.",
    ru: "Теперь у вас есть время ознакомиться с вопросами с 6 по 10.",
    ja: "次に、質問6から10を見る時間があります。",
    ur: "اب آپ کے پاس سوالات 6 تا 10 دیکھنے کے لیے کچھ وقت ہے۔",
    bn: "এখন ৬ থেকে ১০ নম্বর প্রশ্নগুলো দেখার জন্য আপনার কিছু সময় রয়েছে।"
  },
  "first, you have some time to look at questions 11 to 20.": {
    en: "First, you have some time to look at questions 11 to 20.",
    es: "Primero, tiene tiempo para consultar las preguntas 11 a 20.",
    fr: "Tout d'abord, vous avez le temps de lire les questions 11 à 20.",
    de: "Zuerst haben Sie Zeit, die Fragen 11 bis 20 durchzulesen.",
    zh: "首先，您有时间审阅第11至第20题。",
    ar: "أولاً، لديك بعض الوقت للاطلاع على الأسئلة من 11 إلى 20.",
    hi: "पहले, आपके पास प्रश्न 11 से 20 देखने का समय है।",
    pt: "Primeiro, você tem tempo para analisar as perguntas de 11 a 20.",
    ru: "Сначала у вас есть время прочитать вопросы с 11 по 20.",
    ja: "まず、質問11から20を見る時間があります。",
    ur: "پہلے، آپ کے پاس سوالات 11 تا 20 دیکھنے کے لیے وقت ہے۔",
    bn: "প্রথমে, ১১ থেকে ২০ নম্বর প্রশ্নগুলো দেখার জন্য আপনার কিছু সময় রয়েছে।"
  },
  "first, you have some time to look at questions 21 to 30.": {
    en: "First, you have some time to look at questions 21 to 30.",
    es: "Primero, dispone de tiempo para examinar las preguntas 21 a 30.",
    fr: "Tout d'abord, vous disposez d'un moment pour prendre connaissance des questions 21 à 30.",
    de: "Zunächst haben Sie Zeit, sich die Fragen 21 bis 30 anzusehen.",
    zh: "首先，您有时间阅读第21至第30题。",
    ar: "أولاً، لديك بعض الوقت لقراءة الأسئلة من 21 إلى 30.",
    hi: "पहले, आपके पास प्रश्न 21 से 30 पढ़ने का समय है।",
    pt: "Primeiro, você tem algum tempo para olhar as questões de 21 a 30.",
    ru: "Сначала у вас есть время, чтобы прочитать вопросы с 21 по 30.",
    ja: "まず、質問21から30を見る時間があります。",
    ur: "پہلے، آپ کے پاس سوالات 21 تا 30 دیکھنے کا وقت ہے۔",
    bn: "প্রথমে, ২১ থেকে ৩০ নম্বর প্রশ্নগুলো দেখার জন্য আপনার কিছু সময় রয়েছে।"
  },
  "first, you have some time to look at questions 31 to 40.": {
    en: "First, you have some time to look at questions 31 to 40.",
    es: "Primero, tiene algo de tiempo para leer las preguntas 31 a 40.",
    fr: "Tout d'abord, vous avez un moment pour lire les questions 31 à 40.",
    de: "Zuerst haben Sie Zeit, sich die Fragen 31 bis 40 anzusehen.",
    zh: "首先，您有时间审阅第31至第40题。",
    ar: "أولاً، لديك بعض الوقت للاطلاع على الأسئلة من 31 إلى 40.",
    hi: "पहले, आपके पास प्रश्न 31 से 40 देखने का समय है।",
    pt: "Primeiro, você tem algum tempo para examinar as perguntas de 31 a 40.",
    ru: "Сначала у вас есть время ознакомиться с вопросами с 31 по 40.",
    ja: "まず、質問31から40を見る時間があります。",
    ur: "پہلے، آپ کے پاس سوالات 31 تا 40 پڑھنے کا وقت ہے۔",
    bn: "প্রথমে, ৩১ থেকে ৪০ নম্বর প্রশ্নগুলো দেখার জন্য আপনার কিছু সময় রয়েছে।"
  },
  "that is the end of part 1. you now have half a minute to check your answers.": {
    en: "That is the end of Part 1. You now have half a minute to check your answers.",
    es: "Ese es el final de la Parte 1. Ahora tiene medio minuto para revisar sus respuestas.",
    fr: "C'est la fin de la Partie 1. Vous avez maintenant une demi-minute pour vérifier vos réponses.",
    de: "Das ist das Ende von Teil 1. Sie haben nun eine halbe Minute Zeit, um Ihre Antworten zu überprüfen.",
    zh: "第一部分结束。您现在有半分钟时间检查您的答案。",
    ar: "هذه نهاية الجزء الأول. لديك الآن نصف دقيقة لمراجعة إجاباتك.",
    hi: "यह भाग 1 का अंत है। अब आपके पास अपने उत्तरों की जांच करने के लिए आधा मिनट है।",
    pt: "Este é o fim da Parte 1. Você tem agora meio minuto para conferir suas respostas.",
    ru: "Это конец Части 1. У вас есть полминуты, чтобы проверить свои ответы.",
    ja: "これでパート1は終了です。答えを確認する時間が30秒間あります。",
    ur: "یہ حصہ 1 کا اختتام ہے۔ اب آپ کے پاس اپنے جوابات چیک کرنے کے لیے آدھا منٹ ہے۔",
    bn: "পার্ট ১ সমাপ্ত হলো। আপনার উত্তরগুলো পরীক্ষা করার জন্য এখন আধা মিনিট সময় রয়েছে।"
  },
  "that is the end of part 2. you now have half a minute to check your answers.": {
    en: "That is the end of Part 2. You now have half a minute to check your answers.",
    es: "Ese es el final de la Parte 2. Ahora dispone de medio minuto para comprobar sus respuestas.",
    fr: "C'est la fin de la Partie 2. Vous avez une demi-minute pour vérifier vos réponses.",
    de: "Das ist das Ende von Teil 2. Sie haben nun eine halbe Minute Zeit, Ihre Antworten zu überprüfen.",
    zh: "第二部分结束。您现在有半分钟时间检查您的答案。",
    ar: "هذه نهاية الجزء الثاني. لديك الآن نصف دقيقة لمراجعة إجاباتك.",
    hi: "यह भाग 2 का अंत है। अब आपके पास अपने उत्तरों की जांच करने के लिए आधा मिनट है।",
    pt: "Este é o fim da Parte 2. Você tem agora meio minuto para conferir suas respostas.",
    ru: "Это конец Части 2. У вас есть полминуты, чтобы проверить свои ответы.",
    ja: "これでパート2は終了です。答えを確認する時間が30秒間あります。",
    ur: "یہ حصہ 2 کا اختتام ہے۔ اب آپ کے پاس اپنے جوابات چیک کرنے کے لیے آدھا منٹ ہے۔",
    bn: "পার্ট ২ সমাপ্ত হলো। আপনার উত্তরগুলো পরীক্ষা করার জন্য এখন আধা মিনিট সময় রয়েছে।"
  },
  "that is the end of part 3. you now have half a minute to check your answers.": {
    en: "That is the end of Part 3. You now have half a minute to check your answers.",
    es: "Ese es el final de la Parte 3. Ahora tiene medio minuto para revisar sus respuestas.",
    fr: "C'est la fin de la Partie 3. Vous disposez d'une demi-minute pour vérifier vos réponses.",
    de: "Das ist das Ende von Teil 3. Sie haben nun eine halbe Minute Zeit, um Ihre Antworten zu prüfen.",
    zh: "第三部分结束。您现在有半分钟时间检查您的答案。",
    ar: "هذه نهاية الجزء الثالث. لديك الآن نصف دقيقة لمراجعة إجاباتك.",
    hi: "यह भाग 3 का अंत है। अब आपके पास अपने उत्तरों की जांच करने के लिए आधा मिनट है।",
    pt: "Este é o fim da Parte 3. Você tem agora meio minuto para conferir suas respostas.",
    ru: "Это конец Части 3. У вас есть полминуты, чтобы проверить свои ответы.",
    ja: "これでパート3は終了です。答えを確認する時間が30秒間あります。",
    ur: "یہ حصہ 3 کا اختتام ہے۔ اب آپ کے پاس اپنے جوابات چیک کرنے کے لیے آدھا منٹ ہے۔",
    bn: "পার্ট ৩ সমাপ্ত হলো। আপনার উত্তরগুলো পরীক্ষা করার জন্য এখন আধা মিনিট সময় রয়েছে।"
  },
  "that is the end of part 4. you now have half a minute to check your answers.": {
    en: "That is the end of Part 4. You now have half a minute to check your answers.",
    es: "Ese es el final de la Parte 4. Ahora tiene medio minuto para revisar sus respuestas.",
    fr: "C'est la fin de la Partie 4. Vous avez une demi-minute pour vérifier vos réponses.",
    de: "Das ist das Ende von Teil 4. Sie haben nun eine halbe Minute Zeit, um Ihre Antworten zu überprüfen.",
    zh: "第四部分结束。您现在有半分钟时间检查您的答案。",
    ar: "هذه نهاية الجزء الرابع. لديك الآن نصف دقيقة لمراجعة إجاباتك.",
    hi: "यह भाग 4 का अंत है। अब आपके पास अपने उत्तरों की जांच करने के लिए आधा मिनट है।",
    pt: "Este é o fim da Parte 4. Você tem agora meio minuto para conferir suas respostas.",
    ru: "Это конец Части 4. У вас есть полминуты, чтобы проверить свои ответы.",
    ja: "これでパート4は終了です。答えを確認する時間が30秒間あります。",
    ur: "یہ حصہ 4 کا اختتام ہے۔ اب آپ کے پاس اپنے جوابات چیک کرنے کے لیے آدھا منٹ ہے۔",
    bn: "পার্ট ৪ সমাপ্ত হলো। আপনার উত্তরগুলো পরীক্ষা করার জন্য এখন আধা মিনিট সময় রয়েছে।"
  },
  "that is the end of the listening test.": {
    en: "That is the end of the listening test.",
    es: "Ese es el final de la prueba de comprensión auditiva.",
    fr: "C'est la fin de l'épreuve d'écoute.",
    de: "Das ist das Ende des Hörverständnistests.",
    zh: "听力测试到此结束。",
    ar: "هذه نهاية اختبار الاستماع.",
    hi: "यह सुनने के परीक्षण का अंत है।",
    pt: "Este é o fim do teste de audição.",
    ru: "Это конец теста по аудированию.",
    ja: "これでリスニングテストは終了です。",
    ur: "یہ سننے کے ٹیسٹ کا اختتام ہے۔",
    bn: "লিসেনিং টেস্ট এখানেই সমাপ্ত।"
  }
};

/**
 * Common Dialogue Conversational Patterns
 */
export const CONVERSATIONAL_PATTERNS: Array<{
  pattern: RegExp;
  translate: (match: RegExpMatchArray, lang: SupportedLanguage) => string;
}> = [
  // "Good morning, River Valley Kayak Tours. How can I help you today?"
  {
    pattern: /Good morning[,\s]+([^.]+)\.\s*How can I help you(?:\s+today)?\?/i,
    translate: (match, lang) => {
      const company = match[1].trim();
      const map: LanguageMap = {
        en: `Good morning, ${company}. How can I help you today?`,
        es: `Buenos días, ${company}. ¿En qué puedo ayudarle hoy?`,
        fr: `Bonjour, ${company}. Comment puis-je vous aider aujourd'hui ?`,
        de: `Guten Morgen, ${company}. Wie kann ich Ihnen heute helfen?`,
        zh: `早上好，这里是${company}。今天我能为您做些什么？`,
        ar: `صباح الخير، ${company}. كيف يمكنني مساعدتك اليوم؟`,
        hi: `शुभ प्रभात, ${company}। आज मैं आपकी क्या सहायता कर सकता हूँ?`,
        pt: `Bom dia, ${company}. Como posso ajudar você hoje?`,
        ru: `Доброе утро, ${company}. Чем я могу помочь вам сегодня?`,
        ja: `おはようございます、${company}です。本日はどのようなご用件でしょうか？`,
        ur: `صبح بخیر، ${company}۔ آج میں آپ کی کیا مدد کر سکتا ہوں؟`
      };
      return map[lang] || null as any;
    }
  },
  // "Hello! I'm calling to inquire about..."
  {
    pattern: /Hello[!,.]?\s*I(?:'m| am) calling to inquire about\s+([^.]+)\./i,
    translate: (match, lang) => {
      const topic = match[1].trim();
      const map: LanguageMap = {
        en: `Hello! I'm calling to inquire about ${topic}.`,
        es: `¡Hola! Llamo para solicitar información sobre ${topic}.`,
        fr: `Bonjour ! J'appelle pour me renseigner au sujet de ${topic}.`,
        de: `Hallo! Ich rufe an, um mich über ${topic} zu erkundigen.`,
        zh: `您好！我打电话是想咨询关于${topic}的情况。`,
        ar: `مرحباً! أتصل للاستفسار عن ${topic}.`,
        hi: `नमस्ते! मैं ${topic} के बारे में जानकारी लेने के लिए कॉल कर रहा हूँ।`,
        pt: `Olá! Estou ligando para obter informações sobre ${topic}.`,
        ru: `Здравствуйте! Я звоню, чтобы узнать подробнее про ${topic}.`,
        ja: `こんにちは！${topic}についてお尋ねしたくお電話いたしました。`,
        ur: `ہیلو! میں ${topic} کے بارے میں معلومات حاصل کرنے کے لیے کال کر رہا ہوں۔`
      };
      return map[lang] || null as any;
    }
  },
  // "Certainly. We run several different tours. How many people will be in your group?"
  {
    pattern: /Certainly\.\s*We run several different tours\.\s*How many people will be in your group\?/i,
    translate: (_match, lang) => {
      const map: LanguageMap = {
        en: "Certainly. We run several different tours. How many people will be in your group?",
        es: "Por supuesto. Realizamos varios recorridos diferentes. ¿Cuántas personas formarán su grupo?",
        fr: "Certainement. Nous proposons plusieurs excursions différentes. Combien de personnes comptera votre groupe ?",
        de: "Gewiss. Wir bieten verschiedene Touren an. Wie viele Personen umfasst Ihre Gruppe?",
        zh: "当然可以。我们提供多条不同的游览路线。请问您们团组一共有多少人？",
        ar: "بالتأكيد. ننظم عدة جولات مختلفة. كم عدد الأشخاص في مجموعتك؟",
        hi: "ज़रूर। हम कई अलग-अलग दौरे संचालित करते हैं। आपके समूह में कितने लोग होंगे?",
        pt: "Com certeza. Realizamos vários passeios diferentes. Quantas pessoas haverá no seu grupo?",
        ru: "Конечно. Мы проводим несколько различных туров. Сколько человек будет в вашей группе?",
        ja: "承知いたしました。いくつか異なるツアーをご用意しております。グループは何名様でしょうか？",
        ur: "یقیناً۔ ہم مختلف دورے پیش کرتے ہیں۔ آپ کے گروپ میں کتنے افراد ہوں گے؟"
      };
      return map[lang] || null as any;
    }
  },
  // "Describe something you have learned or experienced related to [TOPIC]. You should say what it was, when you experienced it, what you learned, and explain why it was useful or memorable."
  {
    pattern: /Describe something you have learned or experienced related to\s+([^.]+)\.\s*You should say what it was,\s*when you experienced it,\s*what you learned,\s*and explain why it was useful or memorable\./i,
    translate: (match, lang) => {
      const topic = match[1].trim();
      const map: LanguageMap = {
        en: `Describe something you have learned or experienced related to ${topic}. You should say what it was, when you experienced it, what you learned, and explain why it was useful or memorable.`,
        es: `Describa algo que haya aprendido o experimentado relacionado con ${topic}. Debe decir de qué se trataba, cuándo lo experimentó, qué aprendió y explicar por qué fue útil o memorable.`,
        fr: `Décrivez quelque chose que vous avez appris ou vécu en rapport avec ${topic}. Vous devez préciser ce dont il s'agissait, quand vous l'avez vécu, ce que vous avez appris et expliquer pourquoi cela a été utile ou mémorable.`,
        de: `Beschreiben Sie etwas, das Sie im Zusammenhang mit ${topic} gelernt oder erlebt haben. Sie sollten angeben, worum es sich handelte, wann Sie es erlebt haben, was Sie gelernt haben, und erklären, warum es nützlich oder unvergesslich war.`,
        zh: `请描述一件与${topic}相关的学习或亲身经历。您应该说明它是什么、何时经历的、学到了什么，并解释为什么它十分有益或令人难忘。`,
        ar: `صف شيئاً تعلمته أو جربته يتعلق بـ ${topic}. يجب أن توضح ما كان، ومتى مررت به، وماذا تعلمت، وتشرح سبب كونه مفيداً أو لا يُنسى.`,
        hi: `वर्णन करें कि आपने ${topic} से संबंधित क्या सीखा या अनुभव किया है। आपको बताना चाहिए कि यह क्या था, आपने इसे कब अनुभव किया, आपने क्या सीखा, और समझाएं कि यह उपयोगी या यादगार क्यों था।`,
        pt: `Descreva algo que você aprendeu ou vivenciou relacionado a ${topic}. Você deve dizer o que foi, quando vivenciou, o que aprendeu e explicar por que foi útil ou memorável.`,
        ru: `Опишите то, что вы узнали или испытали в связи с ${topic}. Скажите, что это было, когда вы с этим столкнулись, чему научились и объясните, почему это было полезно или памятно.`,
        ja: `${topic}に関連して学んだこと、または体験したことについて説明してください。それが何であったか、いつ体験したか、何を学んだかを述べ、なぜそれが役に立ったか、あるいは印象的だったかを説明してください。`,
        ur: `کسی ایسی چیز کا ذکر کریں جو آپ نے ${topic} سے متعلق سیکھی یا تجربہ کی۔ آپ کو بتانا چاہیے کہ وہ کیا تھی، آپ نے کب اس کا تجربہ کیا، آپ نے کیا سیکھا، اور بتائیں کہ وہ کیوں مفید یا یادگار تھی۔`,
        bn: `${topic} সম্পর্কিত আপনি যে বিষয়টি শিখেছেন বা অভিজ্ঞতা অর্জন করেছেন তা বর্ণনা করুন। এটি কী ছিল, আপনি কখন এটি অভিজ্ঞতা করেছিলেন, কী শিখেছিলেন এবং ব্যাখ্যা করুন কেন এটি কার্যকর বা স্মরণীয় ছিল।`
      };
      return map[lang] || null as any;
    }
  },
  // "You will hear a conversation between... inquiring about..."
  {
    pattern: /(?:Official IELTS Listening Practice\.\s*)?Part 1\.\s*You will hear a conversation between\s+([^.]+)\s+inquiring about\s+([^.]+)\.\s*First, you have some time to look at questions 1 to 5\./i,
    translate: (match, lang) => {
      const parties = match[1].trim();
      const topic = match[2].trim();
      const map: LanguageMap = {
        en: `Official IELTS Listening Practice. Part 1. You will hear a conversation between ${parties} inquiring about ${topic}. First, you have some time to look at questions 1 to 5.`,
        es: `Práctica Oficial de IELTS Listening. Parte 1. Escuchará una conversación entre ${parties} solicitando información sobre ${topic}. Primero, dispone de tiempo para revisar las preguntas 1 a 5.`,
        fr: `Pratique officielle de l'écoute IELTS. Partie 1. Vous allez entendre une conversation entre ${parties} au sujet de ${topic}. Tout d'abord, vous disposez d'un moment pour examiner les questions 1 à 5.`,
        de: `Offizielle IELTS Hörverstehensübung. Teil 1. Sie hören ein Gespräch zwischen ${parties} mit einer Anfrage zu ${topic}. Zuerst haben Sie Zeit, sich die Fragen 1 bis 5 anzusehen.`,
        zh: `官方雅思听力模拟测试。第一部分。您将听到一段在${parties}之间关于${topic}的咨询对话。首先，您有时间审阅第1至第5题。`,
        ar: `ممارسة الاستماع الرسمية للآيلتس. الجزء 1. ستستمع إلى محادثة بين ${parties} للاستفسار عن ${topic}. أولاً، لديك بعض الوقت للاطلاع على الأسئلة من 1 إلى 5.`,
        hi: `आधिकारिक आईईएलटीएस लिसनिंग अभ्यास। भाग 1। आप ${topic} के बारे में पूछताछ करते हुए ${parties} के बीच बातचीत सुनेंगे। पहले, आपके पास प्रश्न 1 से 5 देखने के लिए कुछ समय है।`,
        pt: `Prática Oficial do IELTS Listening. Parte 1. Você ouvirá uma conversa entre ${parties} solicitando informações sobre ${topic}. Primeiro, você tem algum tempo para ler as perguntas de 1 a 5.`,
        ru: `Официальная практика аудирования IELTS. Часть 1. Вы услышите разговор между ${parties} с запросом по теме ${topic}. Сначала у вас есть время ознакомиться с вопросами с 1 по 5.`,
        ja: `公式IELTSリスニング演習。パート1。${topic}について問い合わせる${parties}の会話を聞きます。まず、質問1から5を見る時間があります。`,
        ur: `آفیشل آئی ایل ٹی ایس لسننگ پریکٹس۔ حصہ 1۔ آپ ${topic} کے بارے میں معلومات حاصل کرتے ہوئے ${parties} کے درمیان گفتگو سنیں گے۔ پہلے، آپ کے پاس سوالات 1 تا 5 دیکھنے کے لیے وقت ہے۔`,
        bn: `অফিসিয়াল আইইএলটিএস লিসেনিং অনুশীলন। পার্ট ১। আপনি ${topic} সম্পর্কে খোঁজখবর নিতে ${parties}-এর মধ্যে একটি কথোপকথন শুনতে পাবেন। প্রথমে, প্রশ্ন ১ থেকে ৫ দেখার জন্য আপনার কিছু সময় রয়েছে।`
      };
      return map[lang] || null as any;
    }
  },
  // "Part 2. You will hear an orientation talk given by... regarding... First, you have some time to look at questions 11 to 20."
  {
    pattern: /Part 2\.\s*You will hear an orientation talk given by\s+([^.]+)\s+regarding\s+([^.]+)\.\s*First, you have some time to look at questions 11 to 20\./i,
    translate: (match, lang) => {
      const speaker = match[1].trim();
      const topic = match[2].trim();
      const map: LanguageMap = {
        en: `Part 2. You will hear an orientation talk given by ${speaker} regarding ${topic}. First, you have some time to look at questions 11 to 20.`,
        es: `Parte 2. Escuchará una charla de orientación a cargo de ${speaker} sobre ${topic}. Primero, tiene tiempo para leer las preguntas 11 a 20.`,
        fr: `Partie 2. Vous allez entendre une présentation d'orientation donnée par ${speaker} concernant ${topic}. Tout d'abord, vous avez le temps de lire les questions 11 à 20.`,
        de: `Teil 2. Sie hören einen Orientierungsvortrag von ${speaker} über ${topic}. Zuerst haben Sie Zeit, die Fragen 11 bis 20 anzusehen.`,
        zh: `第二部分。您将听到由${speaker}主讲的关于${topic}的说明讲座。首先，您有时间审阅第11至第20题。`,
        ar: `الجزء 2. ستستمع إلى حديث تعريفي يقدمه ${speaker} بخصوص ${topic}. أولاً، لديك بعض الوقت للاطلاع على الأسئلة من 11 إلى 20.`,
        hi: `भाग 2। आप ${speaker} द्वारा ${topic} के संबंध में दिया गया एक परिचयात्मक भाषण सुनेंगे। पहले, आपके पास प्रश्न 11 से 20 देखने का समय है।`,
        pt: `Parte 2. Você ouvirá uma palestra de orientação ministrada por ${speaker} sobre ${topic}. Primeiro, você tem tempo para analisar as perguntas de 11 a 20.`,
        ru: `Часть 2. Вы услышите вводную лекцию, которую проводит ${speaker} относительно ${topic}. Сначала у вас есть время прочитать вопросы с 11 по 20.`,
        ja: `パート2。${speaker}による${topic}に関するオリエンテーションを聞きます。まず、質問11から20を見る時間があります。`,
        ur: `حصہ 2۔ آپ ${speaker} کی طرف سے ${topic} کے بارے میں تعارفی گفتگو سنیں گے۔ پہلے، آپ کے پاس سوالات 11 تا 20 دیکھنے کے لیے وقت ہے۔`,
        bn: `পার্ট ২। আপনি ${topic} সম্পর্কে ${speaker} কর্তৃক প্রদত্ত একটি ওরিয়েন্টেশন বক্তব্য শুনতে পাবেন। প্রথমে, প্রশ্ন ১১ থেকে ২০ দেখার জন্য আপনার কিছু সময় রয়েছে।`
      };
      return map[lang] || null as any;
    }
  },
  // "Part 3. You will hear two university students... discussing... with their tutor... First, you have some time to look at questions 21 to 30."
  {
    pattern: /Part 3\.\s*You will hear two university students,\s*([^,]+)\s*and\s*([^,]+),\s*discussing their research coursework on\s+([^.]+)\s+with their tutor,\s*([^.]+)\.\s*First, you have some time to look at questions 21 to 30\./i,
    translate: (match, lang) => {
      const s1 = match[1].trim();
      const s2 = match[2].trim();
      const topic = match[3].trim();
      const tutor = match[4].trim();
      const map: LanguageMap = {
        en: `Part 3. You will hear two university students, ${s1} and ${s2}, discussing their research coursework on ${topic} with their tutor, ${tutor}. First, you have some time to look at questions 21 to 30.`,
        es: `Parte 3. Escuchará a dos estudiantes universitarios, ${s1} y ${s2}, debatiendo su trabajo de investigación sobre ${topic} con su tutor, ${tutor}. Primero, dispone de tiempo para examinar las preguntas 21 a 30.`,
        fr: `Partie 3. Vous allez entendre deux étudiants universitaires, ${s1} et ${s2}, discuter de leur travail de recherche sur ${topic} avec leur tuteur, ${tutor}. Tout d'abord, vous avez un moment pour lire les questions 21 à 30.`,
        de: `Teil 3. Sie hören zwei Universitätsstudierende, ${s1} und ${s2}, die ihre Forschungsarbeit über ${topic} mit ihrem Betreuer, ${tutor}, besprechen. Zunächst haben Sie Zeit, sich die Fragen 21 bis 30 anzusehen.`,
        zh: `第三部分。您将听到两位大学生${s1}和${s2}与其导师${tutor}讨论关于${topic}的研究课题。首先，您有时间阅读第21至第30题。`,
        ar: `الجزء 3. ستستمع إلى طالبين جامعيين، ${s1} و${s2}، يناقشان بحثهما الدراسي حول ${topic} مع مشرفهما، ${tutor}. أولاً، لديك بعض الوقت لقراءة الأسئلة من 21 إلى 30.`,
        hi: `भाग 3। आप दो विश्वविद्यालय के छात्रों, ${s1} और ${s2} को अपने ट्यूटर, ${tutor} के साथ ${topic} पर अपने शोध कार्य पर चर्चा करते हुए सुनेंगे। पहले, आपके पास प्रश्न 21 से 30 देखने का समय है।`,
        pt: `Parte 3. Você ouvirá dois estudantes universitários, ${s1} e ${s2}, discutindo seu trabalho de pesquisa sobre ${topic} com seu orientador, ${tutor}. Primeiro, você tem algum tempo para olhar as questões de 21 a 30.`,
        ru: `Часть 3. Вы услышите, как двое студентов университета, ${s1} и ${s2}, обсуждают свою исследовательскую работу по теме ${topic} со своим научным руководителем, ${tutor}. Сначала ознакомьтесь с вопросами с 21 по 30.`,
        ja: `パート3。大学生の${s1}と${s2}が、指導教官の${tutor}と${topic}に関する研究課題について話し合っているのを聞きます。まず、質問21から30を見る時間があります。`,
        ur: `حصہ 3۔ آپ یونیورسٹی کے دو طلباء، ${s1} اور ${s2}، کو اپنے ٹیوٹر، ${tutor}، کے ساتھ ${topic} پر اپنے تحقیقی کام پر گفتگو کرتے ہوئے سنیں گے۔ پہلے، آپ کے پاس سوالات 21 تا 30 دیکھنے کا وقت ہے۔`,
        bn: `পার্ট ৩। আপনি বিশ্ববিদ্যালয়ের দুজন শিক্ষার্থী, ${s1} এবং ${s2}-কে তাদের টিউটর ${tutor}-এর সাথে ${topic} বিষয়ক গবেষণা কোর্সওয়ার্ক নিয়ে আলোচনা করতে শুনবেন। প্রথমে, প্রশ্ন ২১ থেকে ৩০ দেখার জন্য আপনার কিছু সময় রয়েছে।`
      };
      return map[lang] || null as any;
    }
  },
  // "Listen carefully and answer questions X to Y."
  {
    pattern: /Listen carefully and answer questions\s+(\d+)\s+to\s+(\d+)\./i,
    translate: (match, lang) => {
      const start = match[1];
      const end = match[2];
      const map: LanguageMap = {
        en: `Listen carefully and answer questions ${start} to ${end}.`,
        es: `Escuche con atención y responda a las preguntas ${start} a ${end}.`,
        fr: `Écoutez attentivement et répondez aux questions ${start} à ${end}.`,
        de: `Hören Sie aufmerksam zu und beantworten Sie die Fragen ${start} bis ${end}.`,
        zh: `请仔细听，并回答第${start}至第${end}题。`,
        ar: `استمع بعناية وأجب عن الأسئلة من ${start} إلى ${end}.`,
        hi: `ध्यान से सुनें और प्रश्न ${start} से ${end} के उत्तर दें।`,
        pt: `Ouça com atenção e responda às perguntas de ${start} a ${end}.`,
        ru: `Слушайте внимательно и отвечайте на вопросы с ${start} по ${end}.`,
        ja: `注意深く聞き、質問${start}から${end}に答えてください。`,
        ur: `غور سے سنیں اور سوالات ${start} تا ${end} کے جوابات دیں۔`,
        bn: `মনোযোগ দিয়ে শুনুন এবং প্রশ্ন ${start} থেকে ${end}-এর উত্তর দিন।`
      };
      return map[lang] || null as any;
    }
  },
  // IELTS Writing Task 2 - Universal argumentative essay prompt pattern
  {
    pattern: /Some people believe that governments should spend more money on\s+([^,]+),\s*while others think individuals and private organisations should take greater responsibility\.\s*Discuss both views and give your own opinion\./i,
    translate: (match, lang) => {
      const topicRaw = match[1].trim();
      const topicLookup: Record<string, LanguageMap> = {
        "urban green spaces": {
          bn: "শহুরে সবুজ স্থান ও পার্কের উন্নয়নে",
          zh: "城市绿化与公园建设",
          ar: "المساحات الخضراء الحضرية والحدائق",
          ur: "شہری سرسبز مقامات اور پارکوں کی ترقی",
          es: "los espacios verdes urbanos",
          fr: "les espaces verts urbains",
          de: "städtische Grünflächen",
          hi: "शहरी हरित स्थानों",
          pt: "os espaços verdes urbanos",
          ru: "городские зеленые зоны",
          ja: "都市の緑地空間"
        },
        "renewable energy storage": {
          bn: "নবায়নযোগ্য শক্তি সঞ্চয় প্রযুক্তিতে",
          zh: "可再生能源储存技术",
          ar: "تخزين الطاقة المتجددة",
          ur: "قابل تجدید توانائی کے ذخیرے",
          es: "el almacenamiento de energía renovable",
          fr: "le stockage de l'énergie renouvelable",
          de: "die Speicherung erneuerbarer Energien",
          hi: "नवीकरणीय ऊर्जा भंडारण",
          pt: "o armazenamento de energia renovável",
          ru: "хранение возобновляемой энергии",
          ja: "再生可能エネルギーの貯蔵"
        },
        "language change": {
          bn: "ভাষার পরিবর্তন ও সংরক্ষণে",
          zh: "语言变迁与语言保护",
          ar: "تغير اللغة وحمايتها",
          ur: "زبان کی تبدیلی اور تحفظ",
          es: "la preservación y cambio lingüístico",
          fr: "la préservation de la langue",
          de: "Sprachwandel und Sprachpflege",
          hi: "भाषा संरक्षण और परिवर्तन",
          pt: "a preservação linguística",
          ru: "сохранение языка и языковые изменения",
          ja: "言語の変化と保存"
        },
        "public libraries": {
          bn: "পাবলিক লাইব্রেরি আধুনিকীকরণে",
          zh: "公共图书馆建设",
          ar: "المكتبات العامة الحديثة",
          ur: "عوامی کتب خانوں کی جدید کاری",
          es: "las bibliotecas públicas",
          fr: "les bibliothèques publiques",
          de: "öffentliche Bibliotheken",
          hi: "सार्वजनिक पुस्तकालयों",
          pt: "as bibliotecas públicas",
          ru: "публичные библиотеки",
          ja: "公共図書館"
        },
        "sleep and learning": {
          bn: "ঘুম ও শিক্ষার গবেষণায়",
          zh: "睡眠与学习科研",
          ar: "أبحاث النوم والتعلم",
          ur: "نیند اور تعلیم پر تحقیق",
          es: "la investigación sobre el sueño y el aprendizaje",
          fr: "la recherche sur le sommeil et l'apprentissage",
          de: "die Erforschung von Schlaf und Lernen",
          hi: "नींद और सीखने पर शोध",
          pt: "a pesquisa sobre sono e aprendizagem",
          ru: "исследования сна и обучения",
          ja: "睡眠と学習の研究"
        },
        "volcanic landscapes": {
          bn: "আগ্নেয়গিরির প্রাকৃতিক দৃশ্য সংরক্ষণে",
          zh: "火山地貌保护与研究",
          ar: "حماية ودراسة المناظر البركانية",
          ur: "آتش فشاں مناظر کے تحفظ اور تحقیق",
          es: "la conservación de paisajes volcánicos",
          fr: "la préservation des paysages volcaniques",
          de: "den Schutz von Vulkanlandschaften",
          hi: "ज्वालामुखीय परिदृश्यों के संरक्षण",
          pt: "a conservação de paisagens vulcânicas",
          ru: "сохранение вулканических ландшафтов",
          ja: "火山景観の保護"
        },
        "ancient trade routes": {
          bn: "প্রাচীন বাণিজ্য পথ ও ঐতিহ্যে",
          zh: "古代贸易路线遗产保护",
          ar: "طرق التجارة القديمة والتراث التاريخي",
          ur: "قدیم تجارتی راستوں اور تاریخی ورثے",
          es: "las antiguas rutas comerciales",
          fr: "les anciennes routes commerciales",
          de: "antike Handelsrouten",
          hi: "प्राचीन व्यापार मार्गों",
          pt: "as antigas rotas comerciais",
          ru: "древние торговые пути",
          ja: "古代の貿易ルート"
        },
        "the science of bees": {
          bn: "মৌমাছি বিজ্ঞান ও জীববৈচিত্র্যে",
          zh: "蜜蜂科学研究与生态保护",
          ar: "علوم النحل والتنوع الحيوي",
          ur: "شہد کی مکھیوں کی سائنس اور تحفظ",
          es: "la investigación científica sobre las abejas",
          fr: "la recherche sur les abeilles",
          de: "die Bienenforschung",
          hi: "मधुमक्खी विज्ञान और संरक्षण",
          pt: "a pesquisa científica sobre abelhas",
          ru: "исследования пчел и защиту экосистем",
          ja: "ミツバチの科学と生態保護"
        },
        "museums in the digital age": {
          bn: "ডিজিটাল যুগের আধুনিক জাদুঘরে",
          zh: "数字化时代的博物馆创新",
          ar: "المتاحف في العصر الرقمي",
          ur: "ڈیجیٹل دور کے عجائب گھروں",
          es: "los museos en la era digital",
          fr: "les musées à l'ère numérique",
          de: "Museen im digitalen Zeitalter",
          hi: "डिजिटल युग में संग्रहालयों",
          pt: "os museus na era digital",
          ru: "музеи в цифровую эпоху",
          ja: "デジタル時代の博物館"
        },
        "water in agriculture": {
          bn: "কৃষিকাজে পানি ব্যবস্থাপনা ও সেচে",
          zh: "农业用水与灌溉系统",
          ar: "إدارة المياه في الزراعة والري",
          ur: "زراعت میں پانی کے انتظام اور آبپاشی",
          es: "la gestión del agua en la agricultura",
          fr: "la gestion de l'eau dans l'agriculture",
          de: "Wassermanagement in der Landwirtschaft",
          hi: "कृषि में जल प्रबंधन",
          pt: "a gestão hídrica na agricultura",
          ru: "управление водными ресурсами в сельском хозяйстве",
          ja: "農業における水管理と灌漑"
        }
      };

      const localizedTopic = topicLookup[topicRaw]?.[lang] || topicRaw;

      const map: LanguageMap = {
        en: `Some people believe that governments should spend more money on ${topicRaw}, while others think individuals and private organisations should take greater responsibility. Discuss both views and give your own opinion.`,
        bn: `কিছু মানুষ মনে করেন যে সরকারের উচিত ${localizedTopic}-এর পেছনে আরও অর্থ ব্যয় করা, অন্যদিকে অন্যরা মনে করেন ব্যক্তি ও বেসরকারি সংস্থাগুলির আরও বেশি দায়িত্ব নেওয়া উচিত। উভয় দৃষ্টিভঙ্গি আলোচনা করুন এবং আপনার নিজস্ব মতামত দিন।`,
        zh: `有些人认为政府应该在${localizedTopic}上投入更多资金，而另一些人则认为个人和私营机构应当承担更大的责任。请讨论这两种观点并给出您自己的看法。`,
        ar: `يعتقد بعض الناس أن الحكومات يجب أن تنفق المزيد من الأموال على ${localizedTopic}، بينما يرى آخرون أنه ينبغي للأفراد والمؤسسات الخاصة تحمل مسؤولية أكبر. ناقش وجهتي النظر وأعطِ رأيك الخاص.`,
        ur: `کچھ لوگوں کا خیال ہے کہ حکومتوں کو ${localizedTopic} پر زیادہ رقم خرچ کرنی چاہیے، جبکہ دوسرے سمجھتے ہیں کہ افراد اور نجی تنظیموں کو زیادہ ذمہ داری لینی چاہیے۔ دونوں نقطہ نظر پر بحث کریں اور اپنی رائے دیں۔`,
        es: `Algunas personas creen que los gobiernos deberían destinar más fondos a ${localizedTopic}, mientras que otras opinan que los individuos y organizaciones privadas deberían asumir mayor responsabilidad. Analice ambas posturas y dé su propia opinión.`,
        fr: `Certaines personnes pensent que les gouvernements devraient consacrer davantage de fonds à ${localizedTopic}, tandis que d'autres estiment que les particuliers et les organisations privées devraient assumer une plus grande responsabilité. Discutez des deux points de vue et donnez votre propre avis.`,
        de: `Einige Menschen sind der Ansicht, dass Regierungen mehr Geld für ${localizedTopic} ausgeben sollten, während andere meinen, dass Einzelpersonen und private Organisationen mehr Verantwortung übernehmen sollten. Diskutieren Sie beide Ansichten und geben Sie Ihre eigene Meinung an.`,
        hi: `कुछ लोगों का मानना है कि सरकारों को ${localizedTopic} पर अधिक धन खर्च करना चाहिए, जबकि अन्य का मानना है कि व्यक्तियों और निजी संगठनों को अधिक जिम्मेदारी लेनी चाहिए। दोनों दृष्टिकोणों पर चर्चा करें और अपनी राय दें।`,
        pt: `Algumas pessoas acreditam que os governos deveriam investir mais recursos em ${localizedTopic}, enquanto outras acham que indivíduos e organizações privadas deveriam assumir maior responsabilidade. Discuta ambos os pontos de vista e dê sua própria opinião.`,
        ru: `Некоторые считают, что государства должны выделять больше средств на ${localizedTopic}, в то время как другие полагают, что частные лица и организации должны взять на себя больше ответственности. Обсудите обе точки зрения и выскажите свое мнение.`,
        ja: `政府は${localizedTopic}により多くの予算を費やすべきだと考える人がいる一方で、個人や民間団体がより大きな責任を負うべきだと考える人もいます。両方の見解を論じ、あなた自身の意見を述べてください。`
      };
      return map[lang] || null as any;
    }
  },
  // IELTS Writing Task 1 Instructions
  {
    pattern: /Summarise the information by selecting and reporting the main features,\s*and make comparisons where relevant\./i,
    translate: (_match, lang) => {
      const map: LanguageMap = {
        en: "Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
        bn: "প্রধান বৈশিষ্ট্যগুলি নির্বাচন এবং রিপোর্ট করার মাধ্যমে তথ্যের সারসংক্ষেপ তৈরি করুন এবং যেখানে প্রাসঙ্গিক তুলনা করুন।",
        zh: "通过选取并汇报主要特征来总结信息，并在相关之处进行对比。",
        ar: "لخص المعلومات عن طريق تحديد وتوضيح السمات الرئيسية، وإجراء مقارنات حيثما كان ذلك مناسباً.",
        ur: "اہم خصوصیات کو منتخب اور بیان کر کے معلومات کا خلاصہ تیار کریں، اور جہاں مناسب ہو موازنہ کریں۔",
        es: "Resuma la información seleccionando e informando sobre las características principales y haga comparaciones cuando sea relevante.",
        fr: "Résumez les informations en sélectionnant et en signalant les principales caractéristiques, et faites des comparaisons le cas échéant.",
        de: "Fassen Sie die Informationen zusammen, indem Sie die Hauptmerkmale auswählen und beschreiben, und stellen Sie Vergleiche an, wo dies relevant ist.",
        hi: "मुख्य विशेषताओं का चयन और रिपोर्ट करके जानकारी का सारांश प्रस्तुत करें, और जहाँ प्रासंगिक हो तुलना करें।",
        pt: "Resuma as informações selecionando e relatando os principais aspectos, e faça comparações onde for relevante.",
        ru: "Обобщите информацию, выделив и описав основные характеристики, и проведите сравнения там, где это уместно.",
        ja: "主な特徴を選択して報告することで情報を要約し、関連する箇所で比較を行ってください。"
      };
      return map[lang] || null as any;
    }
  },
  // IELTS Writing Task 2 Instructions
  {
    pattern: /Give reasons for your answer and include any relevant examples from your own knowledge or experience\.\s*Write at least 250 words\./i,
    translate: (_match, lang) => {
      const map: LanguageMap = {
        en: "Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
        bn: "আপনার উত্তরের পক্ষে যুক্তি দিন এবং আপনার নিজস্ব জ্ঞান বা অভিজ্ঞতা থেকে যেকোনো প্রাসঙ্গিক উদাহরণ অন্তর্ভুক্ত করুন। কমপক্ষে ২৫০ শব্দ লিখুন।",
        zh: "为您的答案阐明理由，并从您自身的知识或经验中列举相关实例。请写不少于250词。",
        ar: "قدّم أسباباً لإجابتك وتضمّن أي أمثلة ذات صلة من معرفتك أو خبرتك الشخصية. اكتب 250 كلمة على الأقل.",
        ur: "اپنے جواب کے لیے دلائل دیں اور اپنے علم یا ذاتی تجربے سے متعلقہ مثالیں شامل کریں۔ کم از کم 250 الفاظ لکھیں۔",
        es: "Dé razones para su respuesta e incluya ejemplos relevantes basados en su propio conocimiento o experiencia. Escriba al menos 250 palabras.",
        fr: "Donnez les raisons de votre réponse et incluez des exemples pertinents tirés de vos propres connaissances ou de votre expérience. Rédigez au moins 250 mots.",
        de: "Begründen Sie Ihre Antwort und nennen Sie relevante Beispiele aus Ihrem eigenen Wissen oder Ihrer Erfahrung. Schreiben Sie mindestens 250 Wörter.",
        hi: "अपने उत्तर के कारण बताएं और अपने ज्ञान या अनुभव से कोई भी प्रासंगिक उदाहरण शामिल करें। कम से कम 250 शब्द लिखें।",
        pt: "Apresente razões para a sua resposta e inclua quaisquer exemplos relevantes do seu próprio conhecimento ou experiência. Escreva pelo menos 250 palavras.",
        ru: "Обоснуйте свой ответ и приведите соответствующие примеры из собственных знаний или опыта. Напишите не менее 250 слов.",
        ja: "自分の知識や経験から関連する例を含めて回答の理由を述べてください。250語以上で書いてください。"
      };
      return map[lang] || null as any;
    }
  },
  // IELTS Writing Task 1 - Transport Line Graph
  {
    pattern: /The graph below shows changes in the percentage of households using four forms of transport between 1980 and 2020\./i,
    translate: (_match, lang) => {
      const map: LanguageMap = {
        en: "The graph below shows changes in the percentage of households using four forms of transport between 1980 and 2020.",
        bn: "নিচের গ্রাফটিতে ১৯৮০ থেকে ২০২০ সালের মধ্যে চারটি পরিবহন মাধ্যম ব্যবহারকারী পরিবারের শতাংশের পরিবর্তন দেখানো হয়েছে।",
        zh: "下图展示了1980年至2020年期间使用四种交通工具的家庭百分比变化情况。",
        ar: "يوضح الرسم البياني أدناه التغيرات في النسبة المئوية للأسر التي استخدمت أربعة أشكال من وسائل النقل بين عامي 1980 و2020.",
        ur: "نیچے دیا گیا گراف 1980 اور 2020 کے درمیان نقل و حمل کی چار اقسام استعمال کرنے والے گھرانوں کے فیصد میں تبدیلیوں کو ظاہر کرتا ہے۔",
        es: "El siguiente gráfico muestra los cambios en el porcentaje de hogares que utilizaron cuatro medios de transporte entre 1980 y 2020.",
        fr: "Le graphique ci-dessous montre l'évolution du pourcentage de ménages utilisant quatre modes de transport entre 1980 et 2020.",
        de: "Die folgende Grafik zeigt Veränderungen beim Prozentsatz der Haushalte, die zwischen 1980 und 2020 vier Verkehrsarten nutzten.",
        hi: "नीचे दिया गया ग्राफ 1980 और 2020 के बीच परिवहन के चार साधनों का उपयोग करने वाले परिवारों के प्रतिशत में परिवर्तन दिखाता है।",
        pt: "O gráfico a seguir mostra as mudanças na porcentagem de famílias que usaram quatro formas de transporte entre 1980 e 2020.",
        ru: "На приведенном ниже графике показаны изменения доли домохозяйств, использовавших четыре вида транспорта в период с 1980 по 2020 год.",
        ja: "下のグラフは、1980年から2020年の間に4つの交通手段を利用した世帯の割合の変化を示しています。"
      };
      return map[lang] || null as any;
    }
  },
  // IELTS Writing Task 1 - International Students Bar Chart
  {
    pattern: /The chart below compares the number of international students at four universities in 2010 and 2025\./i,
    translate: (_match, lang) => {
      const map: LanguageMap = {
        en: "The chart below compares the number of international students at four universities in 2010 and 2025.",
        bn: "নিচের চার্টটিতে ২০১০ এবং ২০২৫ সালে চারটি বিশ্ববিদ্যালয়ে আন্তর্জাতিক শিক্ষার্থীর সংখ্যার তুলনা করা হয়েছে।",
        zh: "下图对比了2010年和2025年四所大学的国际留学生人数。",
        ar: "يقارن المخطط أدناه عدد الطلاب الدوليين في أربع جامعات في عامي 2010 و2025.",
        ur: "نیچے دیا گیا چارٹ 2010 اور 2025 میں چار یونیورسٹیوں میں بین الاقوامی طلباء کی تعداد کا موازنہ کرتا ہے۔",
        es: "El gráfico a continuación compara el número de estudiantes internacionales en cuatro universidades en 2010 y 2025.",
        fr: "Le graphique ci-dessous compare le nombre d'étudiants internationaux dans quatre universités en 2010 et 2025.",
        de: "Das folgende Diagramm vergleicht die Anzahl internationaler Studierender an vier Universitäten in den Jahren 2010 und 2025.",
        hi: "नीचे दिया गया चार्ट 2010 और 2025 में चार विश्वविद्यालयों में अंतर्राष्ट्रीय छात्रों की संख्या की तुलना करता है।",
        pt: "O gráfico abaixo compara o número de estudantes internacionais em quatro universidades em 2010 e 2025.",
        ru: "На диаграмме ниже сравнивается количество иностранных студентов в четырех университетах в 2010 и 2025 годах.",
        ja: "下のグラフは、2010年と2025年における4つの大学の留学生数を比較したものです。"
      };
      return map[lang] || null as any;
    }
  },
  // IELTS Writing Task 1 - Table: Average weekly spending
  {
    pattern: /The table below gives information about average weekly spending in five categories in three countries in 2024\./i,
    translate: (_match, lang) => {
      const map: LanguageMap = {
        en: "The table below gives information about average weekly spending in five categories in three countries in 2024.",
        bn: "নিচের সারণীতে ২০২৪ সালে তিনটি দেশে পাঁচটি বিভাগে গড় সাপ্তাহিক ব্যয়ের তথ্য দেওয়া হয়েছে।",
        zh: "下表列出了2024年三个国家在五个类别的平均每周支出信息。",
        ar: "يوضح الجدول أدناه معلومات عن متوسط الإنفاق الأسبوعي في خمس فئات في ثلاثة بلدان في عام 2024.",
        ur: "نیچے دیا گیا جدول 2024 میں تین ممالک میں پانچ زمروں میں اوسط ہفتہ وار اخراجات کے بارے میں معلومات فراہم کرتا ہے۔",
        es: "La siguiente tabla proporciona información sobre el gasto semanal promedio en cinco categorías en tres países en 2024.",
        fr: "Le tableau ci-dessous donne des informations sur les dépenses hebdomadaires moyennes dans cinq catégories dans trois pays en 2024.",
        de: "Die nachstehende Tabelle gibt Auskunft über die durchschnittlichen wöchentlichen Ausgaben in fünf Kategorien in drei Ländern im Jahr 2024.",
        hi: "नीचे दी गई तालिका 2024 में तीन देशों में पाँच श्रेणियों में औसत साप्ताहिक खर्च के बारे में जानकारी देती है।",
        pt: "A tabela a seguir fornece informações sobre os gastos médios semanais em cinco categorias em três países em 2024.",
        ru: "В таблице ниже приведены данные о средних еженедельных расходах по пяти категориям в трех странах в 2024 году.",
        ja: "下の表は、2024年における3か国の5つのカテゴリーでの平均週間支出に関する情報を示しています。"
      };
      return map[lang] || null as any;
    }
  },
  // IELTS Writing Task 1 - Pie Charts: University Budget
  {
    pattern: /The charts below show how a university allocated its annual budget in 2005 and 2025\./i,
    translate: (_match, lang) => {
      const map: LanguageMap = {
        en: "The charts below show how a university allocated its annual budget in 2005 and 2025.",
        bn: "নিচের চার্টগুলিতে ২০০৫ এবং ২০২৫ সালে একটি বিশ্ববিদ্যালয় কীভাবে তার বার্ষিক বাজেট বরাদ্দ করেছিল তা দেখানো হয়েছে।",
        zh: "下图展示了一所大学在2005年和2025年如何分配其年度预算。",
        ar: "توضح المخططات أدناه كيف خصصت إحدى الجامعات ميزانيتها السنوية في عامي 2005 و2025.",
        ur: "نیچے دیئے گئے چارٹ ظاہر کرتے ہیں کہ ایک یونیورسٹی نے 2005 اور 2025 میں اپنا سالانہ بجٹ کیسے مختص کیا۔",
        es: "Los siguientes gráficos muestran cómo una universidad asignó su presupuesto anual en 2005 y 2025.",
        fr: "Les graphiques ci-dessous montrent comment une université a alloué son budget annuel en 2005 et 2025.",
        de: "Die folgenden Diagramme zeigen, wie eine Universität ihr Jahresbudget in den Jahren 2005 und 2025 zugewiesen hat.",
        hi: "नीचे दिए गए चार्ट दिखाते हैं कि एक विश्वविद्यालय ने 2005 और 2025 में अपने वार्षिक बजट का आवंटन कैसे किया।",
        pt: "Os gráficos a seguir mostram como uma universidade alocou seu orçamento anual em 2005 e 2025.",
        ru: "На круговых диаграммах ниже показано, как университет распределял свой годовой бюджет в 2005 и 2025 годах.",
        ja: "下の円グラフは、ある大学が2005年と2025年に年次予算をどのように配分したかを示しています。"
      };
      return map[lang] || null as any;
    }
  },
  // IELTS Writing Task 1 - Diagram: Plastic Recycling
  {
    pattern: /The diagram below shows the stages involved in recycling household plastic\./i,
    translate: (_match, lang) => {
      const map: LanguageMap = {
        en: "The diagram below shows the stages involved in recycling household plastic.",
        bn: "নিচের চিত্রে গৃহস্থালির প্লাস্টিক পুনর্ব্যবহারের সাথে জড়িত ধাপগুলি দেখানো হয়েছে।",
        zh: "下图展示了家庭废旧塑料回收所涉及的各个阶段。",
        ar: "يوضح الرسم البياني أدناه المراحل المتضمنة في إعادة تدوير البلاستيك المنزلي.",
        ur: "نیچے دیا گیا خاکہ گھریلو پلاسٹک کو ری سائیکل کرنے میں شامل مراحل کو ظاہر کرتا ہے۔",
        es: "El siguiente diagrama muestra las etapas que intervienen en el reciclaje del plástico doméstico.",
        fr: "Le schéma ci-dessous montre les étapes nécessaires au recyclage du plastique ménager.",
        de: "Das nachstehende Diagramm zeigt die Schritte beim Recycling von Haushaltskunststoffen.",
        hi: "नीचे दिया गया आरेख घरेलू प्लास्टिक के पुनर्चक्रण में शामिल चरणों को दर्शाता है।",
        pt: "O diagrama a seguir mostra os estágios envolvidos na reciclagem de plástico doméstico.",
        ru: "На схеме ниже показаны этапы переработки бытового пластика.",
        ja: "下の図は、家庭用プラスチックのリサイクルに含まれる段階を示しています。"
      };
      return map[lang] || null as any;
    }
  },
  // IELTS Writing Task 1 - Maps: Town Centre Changes
  {
    pattern: /The maps below show changes to a town centre between 2000 and 2025\./i,
    translate: (_match, lang) => {
      const map: LanguageMap = {
        en: "The maps below show changes to a town centre between 2000 and 2025.",
        bn: "নিচের মানচিত্রে ২০০০ থেকে ২০২৫ সালের মধ্যে একটি শহরের কেন্দ্রে পরিবর্তনগুলি দেখানো হয়েছে।",
        zh: "下图展示了2000年至2025年期间某市中心的变化情况。",
        ar: "توضح الخرائط أدناه التغيرات التي طرأت على مركز إحدى المدن بين عامي 2000 و2025.",
        ur: "نیچے دیے گئے نقشے 2000 اور 2025 کے درمیان ایک ٹاؤن سینٹر میں تبدیلیوں کو ظاہر کرتے ہیں۔",
        es: "Los siguientes mapas muestran los cambios en el centro de una ciudad entre 2000 y 2025.",
        fr: "Les cartes ci-dessous montrent les changements survenus dans le centre d'une ville entre 2000 et 2025.",
        de: "Die folgenden Karten zeigen Veränderungen in einem Stadtzentrum zwischen 2000 und 2025.",
        hi: "नीचे दिए गए नक्शे 2000 और 2025 کے درمیان ایک ٹاؤن سینٹر میں تبدیلیوں کو ظاہر کرتے ہیں۔",
        pt: "Os mapas a seguir mostram as mudanças no centro de uma cidade entre 2000 e 2025.",
        ru: "На картах ниже показаны изменения в центре города в период с 2000 по 2025 год.",
        ja: "下の地図は、2000年から2025年の間の町の中心部の変化を示しています。"
      };
      return map[lang] || null as any;
    }
  },
  // "Good morning! Welcome to the inquiry office. How can I assist you today?"
  {
    pattern: /Good morning!\s*Welcome to the inquiry office\.\s*How can I assist you today\?/i,
    translate: (_match, lang) => {
      const map: LanguageMap = {
        en: "Good morning! Welcome to the inquiry office. How can I assist you today?",
        es: "¡Buenos días! Bienvenido a la oficina de información. ¿En qué puedo ayudarle hoy?",
        fr: "Bonjour ! Bienvenue au bureau d'information. Comment puis-je vous aider aujourd'hui ?",
        de: "Guten Morgen! Willkommen im Auskunftsbüro. Wie kann ich Ihnen heute behilflich sein?",
        zh: "早上好！欢迎来到咨询处。今天有什么可以为您效劳的吗？",
        ar: "صباح الخير! مرحباً بكم في مكتب الاستعلامات. كيف يمكنني مساعدتك اليوم؟",
        hi: "शुभ प्रभात! पूछताछ कार्यालय में आपका स्वागत है। आज मैं आपकी क्या सहायता कर सकता हूँ?",
        pt: "Bom dia! Bem-vindo ao balcão de informações. Como posso ajudá-lo hoje?",
        ru: "Доброе утро! Добро пожаловать в справочное бюро. Чем я могу помочь вам сегодня?",
        ja: "おはようございます！案内所へようこそ。本日はどのようなご用件でしょうか？",
        ur: "صبح بخیر! انکوائری دفتر میں خوش آمدید۔ آج میں آپ کی کس طرح مدد کر سکتا ہوں؟"
      };
      return map[lang] || null as any;
    }
  },
  // "Certainly! Before we look at availability, may I take your full name, please?"
  {
    pattern: /Certainly!\s*Before we look at availability,\s*may I take your full name,\s*please\?/i,
    translate: (_match, lang) => {
      const map: LanguageMap = {
        en: "Certainly! Before we look at availability, may I take your full name, please?",
        es: "¡Por supuesto! Antes de consultar la disponibilidad, ¿podría darme su nombre completo, por favor?",
        fr: "Certainement ! Avant de vérifier les disponibilités, puis-je avoir votre nom complet, s'il vous plaît ?",
        de: "Natürlich! Bevor wir die Verfügbarkeit prüfen, darf ich Ihren vollständigen Namen erfahren?",
        zh: "当然可以！在查询名额之前，请问能先提供一下您的全名吗？",
        ar: "بالتأكيد! قبل أن نتحقق من التوفر، هل يمكنني معرفة اسمك الكامل من فضلك؟",
        hi: "ज़रूर! उपलब्धता देखने से पहले, क्या मुझे आपका पूरा नाम मिल सकता है, कृपया?",
        pt: "Com certeza! Antes de verificarmos a disponibilidade, poderia me dizer seu nome completo, por favor?",
        ru: "Конечно! Прежде чем мы проверим наличие мест, не могли бы вы назвать ваше полное имя?",
        ja: "かしこまりました！空き状況を確認する前に、フルネームをお伺いできますでしょうか？",
        ur: "ضرور! دستیابی دیکھنے سے پہلے، کیا میں آپ کا پورا نام جان سکتا ہوں، برائے مہربانی؟"
      };
      return map[lang] || null as any;
    }
  },
  // "And what is the most reliable telephone contact number for you?"
  {
    pattern: /And what is the most reliable telephone contact number for you\?/i,
    translate: (_match, lang) => {
      const map: LanguageMap = {
        en: "And what is the most reliable telephone contact number for you?",
        es: "¿Y cuál es el número de teléfono de contacto más conveniente para comunicarnos?",
        fr: "Et quel est le meilleur numéro de téléphone pour vous joindre ?",
        de: "Und unter welcher Telefonnummer sind Sie am besten erreichbar?",
        zh: "请问您最常联系的电话号码是多少？",
        ar: "وما هو رقم الهاتف الأنسب للتواصل معك؟",
        hi: "और आपके संपर्क का सबसे विश्वसनीय टेलीफोन नंबर क्या है?",
        pt: "E qual é o melhor número de telefone para contato com você?",
        ru: "И по какому номеру телефона с вами надежнее всего связаться?",
        ja: "また、ご連絡先として最も都合の良いお電話番号は何番でしょうか？",
        ur: "اور آپ سے رابطے کے لیے سب سے موزوں فون نمبر کیا ہے؟"
      };
      return map[lang] || null as any;
    }
  },
  // "And how many people will be included in this booking?"
  {
    pattern: /And how many people will be included in this booking\?/i,
    translate: (_match, lang) => {
      const map: LanguageMap = {
        en: "And how many people will be included in this booking?",
        es: "¿Y cuántas personas estarán incluidas en esta reserva?",
        fr: "Et combien de personnes comprendra cette réservation ?",
        de: "Und wie viele Personen umfasst diese Buchung?",
        zh: "本次预订一共有多少人参加？",
        ar: "وكم عدد الأشخاص المشمولين في هذا الحجز؟",
        hi: "और इस बुकिंग में कितने लोग शामिल होंगे?",
        pt: "E quantas pessoas serão incluídas nesta reserva?",
        ru: "И сколько человек будет включено в это бронирование?",
        ja: "また、このご予約には何名様が含まれますでしょうか？",
        ur: "اور اس بکنگ میں کتنے افراد شامل ہوں گے؟"
      };
      return map[lang] || null as any;
    }
  },
  // "And where is the main assembly point?"
  {
    pattern: /And where is the main assembly point\?/i,
    translate: (_match, lang) => {
      const map: LanguageMap = {
        en: "And where is the main assembly point?",
        es: "¿Y dónde se encuentra el punto de encuentro principal?",
        fr: "Et où se situe le point de rendez-vous principal ?",
        de: "Und wo befindet sich der Haupttreffpunkt?",
        zh: "请问主要的集合地点在哪里？",
        ar: "وأين تقع نقطة التجمع الرئيسية؟",
        hi: "और मुख्य एकत्र होने का स्थान कहाँ है?",
        pt: "E onde fica o ponto de encontro principal?",
        ru: "И где находится основной пункт сбора?",
        ja: "そして、主な集合場所はどちらになりますか？",
        ur: "اور مرکزی اجتماع کی جگہ کہاں ہے؟"
      };
      return map[lang] || null as any;
    }
  },
  // "And what is the fee per person?"
  {
    pattern: /And what is the fee per person\?/i,
    translate: (_match, lang) => {
      const map: LanguageMap = {
        en: "And what is the fee per person?",
        es: "¿Y cuál es la tarifa por persona?",
        fr: "Et quel est le tarif par personne ?",
        de: "Und wie hoch ist die Gebühr pro Person?",
        zh: "每位参与者的费用是多少？",
        ar: "وما هي الرسوم للشخص الواحد؟",
        hi: "और प्रति व्यक्ति शुल्क कितना है?",
        pt: "E qual é o valor por pessoa?",
        ru: "И какова стоимость на одного человека?",
        ja: "そして、お一人様あたりの料金はおいくらですか？",
        ur: "اور فی کس فیس کتنی ہے؟"
      };
      return map[lang] || null as any;
    }
  },
  // "What payment method do you take for the deposit?"
  {
    pattern: /What payment method do you take for the deposit\?/i,
    translate: (_match, lang) => {
      const map: LanguageMap = {
        en: "What payment method do you take for the deposit?",
        es: "¿Qué método de pago aceptan para el depósito?",
        fr: "Quel moyen de paiement acceptez-vous pour l'acompte ?",
        de: "Welche Zahlungsmethode akzeptieren Sie für die Anzahlung?",
        zh: "押金定金接受哪种付款方式？",
        ar: "ما هي طريقة الدفع المقبولة للإيداع؟",
        hi: "जमा राशि के लिए आप कौन सी भुगतान विधि स्वीकार करते हैं?",
        pt: "Qual forma de pagamento vocês aceitam para o sinal?",
        ru: "Каким способом оплаты можно внести депозит?",
        ja: "デポジット（手付金）のお支払い方法は何が利用可能ですか？",
        ur: "ڈپازٹ کے لیے آپ ادائیگی کا کون سا طریقہ قبول کرتے ہیں؟"
      };
      return map[lang] || null as any;
    }
  },
  // "We process the initial deposit via credit card."
  {
    pattern: /We process the initial deposit via credit card\./i,
    translate: (_match, lang) => {
      const map: LanguageMap = {
        en: "We process the initial deposit via credit card.",
        es: "Procesamos el depósito inicial mediante tarjeta de crédito.",
        fr: "Nous traitons l'acompte initial par carte bancaire.",
        de: "Wir wickeln die Anzahlung per Kreditkarte ab.",
        zh: "我们通过信用卡收取初始定金。",
        ar: "نقوم بمعالجة الإيداع الأولي عبر بطاقة الائتمان.",
        hi: "हम क्रेडिट कार्ड के माध्यम से प्रारंभिक जमा की प्रक्रिया करते हैं।",
        pt: "Processamos o sinal inicial por meio de cartão de crédito.",
        ru: "Мы списываем первоначальный депозит с кредитной карты.",
        ja: "初期手付金はクレジットカードでのお支払いとなります。",
        ur: "ہم کریڈٹ کارڈ کے ذریعے ابتدائی ڈپازٹ وصول کرتے ہیں۔"
      };
      return map[lang] || null as any;
    }
  },
  // "Is there any essential item we are expected to bring along ourselves?"
  {
    pattern: /Is there any essential item we are expected to bring along ourselves\?/i,
    translate: (_match, lang) => {
      const map: LanguageMap = {
        en: "Is there any essential item we are expected to bring along ourselves?",
        es: "¿Hay algún artículo esencial que debamos traer nosotros mismos?",
        fr: "Y a-t-il des articles indispensables que nous devons apporter nous-mêmes ?",
        de: "Gibt es wesentliche Gegenstände, die wir selbst mitbringen sollten?",
        zh: "有什么需要我们自己携带的必需物品吗？",
        ar: "هل هناك أي غرض أساسي يُتوقع منا إحضاره بأنفسنا؟",
        hi: "क्या कोई ऐसी आवश्यक वस्तु है जो हमें स्वयं साथ लानी चाहिए?",
        pt: "Há algum item essencial que nós mesmos devemos levar?",
        ru: "Есть ли какие-то обязательные вещи, которые нам нужно взять с собой?",
        ja: "自分たちで持参すべき必需品は何かありますでしょうか？",
        ur: "کیا کوئی ایسی ضروری چیز ہے جو ہمیں خود ساتھ لانی چاہیے؟"
      };
      return map[lang] || null as any;
    }
  },
  // "Write at least X words."
  {
    pattern: /Write at least\s+(\d+)\s+words\.?/i,
    translate: (match, lang) => {
      const count = match[1];
      const map: LanguageMap = {
        en: `Write at least ${count} words.`,
        es: `Escriba al menos ${count} palabras.`,
        fr: `Rédigez au moins ${count} mots.`,
        de: `Schreiben Sie mindestens ${count} Wörter.`,
        zh: `至少写 ${count} 个单词。`,
        ar: `اكتب ما لا يقل عن ${count} كلمة.`,
        hi: `कम से कम ${count} शब्द लिखें।`,
        pt: `Escreva pelo menos ${count} palavras.`,
        ru: `Напишите не менее ${count} слов.`,
        ja: `最低 ${count} 語以上で記述してください。`,
        ur: `کم از کم ${count} الفاظ لکھیں۔`
      };
      return map[lang] || null as any;
    }
  },
  // "You should spend about X minutes on this task."
  {
    pattern: /You should spend about\s+(\d+)\s+minutes on this task\.?/i,
    translate: (match, lang) => {
      const mins = match[1];
      const map: LanguageMap = {
        en: `You should spend about ${mins} minutes on this task.`,
        es: `Debe dedicar unos ${mins} minutos a esta tarea.`,
        fr: `Vous devriez consacrer environ ${mins} minutes à cette tâche.`,
        de: `Sie sollten etwa ${mins} Minuten für diese Aufgabe aufwenden.`,
        zh: `您应该在本次任务上花费约 ${mins} 分钟。`,
        ar: `ينبغي عليك قضاء حوالي ${mins} دقيقة في هذه المهمة.`,
        hi: `आपको इस कार्य पर लगभग ${mins} मिनट बिताने चाहिए।`,
        pt: `Você deve dedicar cerca de ${mins} minutos a esta tarefa.`,
        ru: `Вам следует потратить около ${mins} минут на это задание.`,
        ja: `このタスクには約 ${mins} 分をかける必要があります。`,
        ur: `آپ کو اس ٹاسک پر تقریباً ${mins} منٹ خرچ کرنے چاہئیں۔`
      };
      return map[lang] || null as any;
    }
  },
  // "Target: ~20 mins, at least 150 words" or variations
  {
    pattern: /Target:\s*~(\d+)\s*mins,\s*at\s*least\s*(\d+)\s*words(?:\s*\(([^)]+)\))?/i,
    translate: (match, lang) => {
      const mins = match[1];
      const words = match[2];
      const extra = match[3] ? ` (${match[3]})` : "";
      const map: LanguageMap = {
        en: `Target: ~${mins} mins, at least ${words} words${extra}`,
        es: `Objetivo: ~${mins} min, al menos ${words} palabras${extra}`,
        fr: `Objectif : ~${mins} min, au moins ${words} mots${extra}`,
        de: `Ziel: ~${mins} Min., mindestens ${words} Wörter${extra}`,
        zh: `目标：约 ${mins} 分钟，至少 ${words} 词${extra}`,
        ar: `الهدف: حوالي ${mins} دقيقة، ما لا يقل عن ${words} كلمة${extra}`,
        hi: `लक्ष्य: ~${mins} मिनट, कम से कम ${words} शब्द${extra}`,
        pt: `Meta: ~${mins} min, pelo menos ${words} palavras${extra}`,
        ru: `Цель: ~${mins} мин, не менее ${words} слов${extra}`,
        ja: `目標: 約 ${mins} 分、最低 ${words} 語${extra}`,
        ur: `ہدف: تقریباً ${mins} منٹ، کم از کم ${words} الفاظ${extra}`
      };
      return map[lang] || null as any;
    }
  },
  // "Questions X to Y" / "Questions X-Y"
  {
    pattern: /^Questions?\s+(\d+)\s*[-–to]+\s*(\d+)$/i,
    translate: (match, lang) => {
      const start = match[1];
      const end = match[2];
      const map: LanguageMap = {
        en: `Questions ${start}-${end}`,
        es: `Preguntas ${start}-${end}`,
        fr: `Questions ${start}-${end}`,
        de: `Fragen ${start}-${end}`,
        zh: `第 ${start}-${end} 题`,
        ar: `الأسئلة ${start}-${end}`,
        hi: `प्रश्न ${start}-${end}`,
        pt: `Perguntas ${start}-${end}`,
        ru: `Вопросы ${start}-${end}`,
        ja: `設問 ${start}-${end}`,
        ur: `سوالات ${start}-${end}`
      };
      return map[lang] || null as any;
    }
  },
  // "Passage 1", "Passage 2", "Passage 3"
  {
    pattern: /^Passage\s+(\d+)$/i,
    translate: (match, lang) => {
      const num = match[1];
      const map: LanguageMap = {
        en: `Passage ${num}`,
        es: `Pasaje ${num}`,
        fr: `Texte ${num}`,
        de: `Textabschnitt ${num}`,
        zh: `文章 ${num}`,
        ar: `النص ${num}`,
        hi: `गद्यांश ${num}`,
        pt: `Texto ${num}`,
        ru: `Текст ${num}`,
        ja: `パッセージ ${num}`,
        ur: `پیراگراف ${num}`
      };
      return map[lang] || null as any;
    }
  },
  // "Choose the correct letter, A, B, or C."
  {
    pattern: /Choose the correct letter,?\s*([A-Za-z,\s]+or\s+[A-Za-z]+)\.?/i,
    translate: (match, lang) => {
      const letters = match[1].trim();
      const map: LanguageMap = {
        en: `Choose the correct letter, ${letters}.`,
        es: `Elija la letra correcta, ${letters}.`,
        fr: `Choisissez la bonne lettre, ${letters}.`,
        de: `Wählen Sie den richtigen Buchstaben, ${letters}.`,
        zh: `选择正确选项字母（${letters}）。`,
        ar: `اختر الحرف الصحيح، ${letters}.`,
        hi: `सही अक्षर चुनें, ${letters}।`,
        pt: `Escolha a letra correta, ${letters}.`,
        ru: `Выберите правильную букву, ${letters}.`,
        ja: `正しい文字（${letters}）を選択してください。`,
        ur: `صحیح حرف منتخب کریں، ${letters}۔`
      };
      return map[lang] || null as any;
    }
  },
  // "Summarise the information by selecting and reporting the main features..."
  {
    pattern: /Summarise the information by selecting and reporting the main features,\s*and make comparisons where relevant\.?/i,
    translate: (_match, lang) => {
      const map: LanguageMap = {
        en: "Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
        es: "Resuma la información seleccionando e informando sobre las características principales y haga comparaciones donde corresponda.",
        fr: "Résumez les informations en sélectionnant et en décrivant les caractéristiques principales, et établissez des comparaisons si pertinent.",
        de: "Fassen Sie die Informationen zusammen, indem Sie die Hauptmerkmale auswählen und beschreiben, und stellen Sie Vergleiche an, wo zutreffend.",
        zh: "通过选择并报告主要特征来总结信息，并在相关处进行比较。",
        ar: "لخّص المعلومات من خلال تحديد الخصائص الرئيسية والإبلاغ عنها، وأجرِ مقارنات حيثما كان ذلك مناسباً.",
        hi: "मुख्य विशेषताओं का चयन और रिपोर्ट करके जानकारी का सारांश प्रस्तुत करें, और जहाँ प्रासंगिक हो तुलना करें।",
        pt: "Resuma as informações selecionando e relatando as características principais e faça comparações onde for relevante.",
        ru: "Обобщите информацию, выделив и описав основные особенности, и проведите сравнения, где это уместно.",
        ja: "主な特徴を選択して報告することにより情報を要約し、関連する箇所で比較を行ってください。",
        ur: "بنیادی خصوصیات کا انتخاب اور رپورٹ کرتے ہوئے معلومات کا خلاصہ بیان کریں، اور جہاں مناسب ہو موازنہ کریں۔"
      };
      return map[lang] || null as any;
    }
  },
  // "Give reasons for your answer and include any relevant examples from your own knowledge or experience..."
  {
    pattern: /Give reasons for your answer and include any relevant examples from your own knowledge or experience(?:\.?\s*Write at least\s+(\d+)\s+words\.?)?/i,
    translate: (match, lang) => {
      const minW = match[1] || "250";
      const map: LanguageMap = {
        en: `Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least ${minW} words.`,
        es: `Dé razones para su respuesta e incluya ejemplos relevantes de sus propios conocimientos o experiencia. Escriba al menos ${minW} palabras.`,
        fr: `Justifiez votre réponse et donnez des exemples pertinents tirés de vos propres connaissances ou de votre expérience. Rédigez au moins ${minW} mots.`,
        de: `Begründen Sie Ihre Antwort und nennen Sie relevante Beispiele aus Ihrem Wissen oder Ihrer Erfahrung. Schreiben Sie mindestens ${minW} Wörter.`,
        zh: `说明您的理由，并结合您自身的知识或经验列举相关例证。至少写 ${minW} 个词。`,
        ar: `قدم أسباباً لإجابتك وتضمين أي أمثلة ذات صلة من معرفتك أو خبرتك الخاصة. اكتب ما لا يقل عن ${minW} كلمة.`,
        hi: `अपने उत्तर के कारण बताएं और अपने ज्ञान या अनुभव से प्रासंगिक उदाहरण शामिल करें। कम से कम ${minW} शब्द लिखें।`,
        pt: `Dê razões para sua resposta e inclua exemplos relevantes de seu próprio conhecimento ou experiência. Escreva pelo menos ${minW} palavras.`,
        ru: `Обоснуйте свой ответ и приведите соответствующие примеры из собственных знаний или опыта. Напишите не менее ${minW} слов.`,
        ja: `回答の理由を説明し、自身の知識や経験から関連する具体例を挙げてください。最低 ${minW} 語以上で記述してください。`,
        ur: `اپنے جواب کی وجوہات بیان کریں اور اپنے ذاتی علم یا تجربے سے متعلقہ مثالیں شامل کریں۔ کم از کم ${minW} الفاظ لکھیں۔`
      };
      return map[lang] || null as any;
    }
  },
  // "Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer."
  {
    pattern: /Write NO MORE THAN TWO WORDS AND\/OR A NUMBER for each answer\.?/i,
    translate: (_match, lang) => {
      const map: LanguageMap = {
        en: "Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        es: "Escriba NO MÁS DE DOS PALABRAS Y/O UN NÚMERO para cada respuesta.",
        fr: "Écrivez PAS PLUS DE DEUX MOTS ET/OU UN CHIFFRE pour chaque réponse.",
        de: "Schreiben Sie NICHT MEHR ALS ZWEI WÖRTER UND/ODER EINE ZAHL für jede Antwort.",
        zh: "每个答案写不超过两个单词和/或一个数字。",
        ar: "اكتب ما لا يزيد عن كلمتين و/أو رقم واحد لكل إجابة.",
        hi: "प्रत्येक उत्तर के लिए दो से अधिक शब्द और/या एक संख्या न लिखें।",
        pt: "Escreva NO MÁXIMO DUAS PALAVRAS E/OU UM NÚMERO para cada resposta.",
        ru: "Напишите НЕ БОЛЕЕ ДВУХ СЛОВ И/ИЛИ ЦИФРЫ для каждого ответа.",
        ja: "各解答につき、2語以内かつ/または数字1つで記入してください。",
        ur: "ہر جواب کے لیے دو سے زیادہ الفاظ اور/یا ایک نمبر نہ لکھیں۔"
      };
      return map[lang] || null as any;
    }
  },
  // "Complete the notes below."
  {
    pattern: /Complete the notes below\.?/i,
    translate: (_match, lang) => {
      const map: LanguageMap = {
        en: "Complete the notes below.",
        es: "Complete las notas a continuación.",
        fr: "Complétez les notes ci-dessous.",
        de: "Vervollständigen Sie die folgenden Notizen.",
        zh: "完成以下笔记。",
        ar: "أكمل الملاحظات أدناه.",
        hi: "नीचे दिए गए नोट्स को पूरा करें।",
        pt: "Complete as anotações abaixo.",
        ru: "Заполните пропуски в заметках ниже.",
        ja: "以下のメモを完成させてください。",
        ur: "نیچے دیے گئے نوٹس مکمل کریں۔"
      };
      return map[lang] || null as any;
    }
  },
  // "TRUE if the statement agrees with the information"
  {
    pattern: /TRUE\s+if the statement agrees with the information/i,
    translate: (_match, lang) => {
      const map: LanguageMap = {
        en: "TRUE if the statement agrees with the information",
        es: "TRUE si la afirmación concuerda con la información",
        fr: "TRUE si l'affirmation concorde avec les informations",
        de: "TRUE, wenn die Aussage mit den Informationen übereinstimmt",
        zh: "TRUE：陈述与文中信息相符",
        ar: "TRUE إذا كانت العبارة تتفق مع المعلومات",
        hi: "TRUE यदि कथन जानकारी से सहमत है",
        pt: "TRUE se a afirmação concorda com a informação",
        ru: "TRUE, если утверждение согласуется с информацией",
        ja: "TRUE：記述が本文の情報と一致している場合",
        ur: "TRUE اگر بیان معلومات کے مطابق ہے"
      };
      return map[lang] || null as any;
    }
  },
  // "FALSE if the statement contradicts the information"
  {
    pattern: /FALSE\s+if the statement contradicts the information/i,
    translate: (_match, lang) => {
      const map: LanguageMap = {
        en: "FALSE if the statement contradicts the information",
        es: "FALSE si la afirmación contradice la información",
        fr: "FALSE si l'affirmation contredit les informations",
        de: "FALSE, wenn die Aussage den Informationen widerspricht",
        zh: "FALSE：陈述与文中信息相抵触",
        ar: "FALSE إذا كانت العبارة تتعارض مع المعلومات",
        hi: "FALSE यदि कथन जानकारी का खंडन करता है",
        pt: "FALSE se a afirmação contradiz a informação",
        ru: "FALSE, если утверждение противоречит информации",
        ja: "FALSE：記述が本文の情報と矛盾している場合",
        ur: "FALSE اگر بیان معلومات کے متضاد ہے"
      };
      return map[lang] || null as any;
    }
  },
  // "NOT GIVEN if there is no information on this"
  {
    pattern: /NOT GIVEN\s+if there is no information on this/i,
    translate: (_match, lang) => {
      const map: LanguageMap = {
        en: "NOT GIVEN if there is no information on this",
        es: "NOT GIVEN si no hay información al respecto",
        fr: "NOT GIVEN s'il n'y a aucune information à ce sujet",
        de: "NOT GIVEN, wenn dazu keine Informationen vorliegen",
        zh: "NOT GIVEN：文中未提及相关信息",
        ar: "NOT GIVEN إذا لم تكن هناك معلومات حول ذلك",
        hi: "NOT GIVEN यदि इस पर कोई जानकारी नहीं है",
        pt: "NOT GIVEN se não houver informação sobre isso",
        ru: "NOT GIVEN, если информации по этому вопросу нет",
        ja: "NOT GIVEN：本文にその情報がない場合",
        ur: "NOT GIVEN اگر اس بارے میں کوئی معلومات موجود نہیں ہیں"
      };
      return map[lang] || null as any;
    }
  },
  // "Part 4. You will hear an academic lecture given by a university professor specializing in... First, you have some time to look at questions 31 to 40."
  {
    pattern: /Part 4\.\s*You will hear an academic lecture given by a university professor specializing in\s+([^.]+)\.\s*First, you have some time to look at questions 31 to 40\./i,
    translate: (match, lang) => {
      const topic = match[1].trim();
      const map: LanguageMap = {
        en: `Part 4. You will hear an academic lecture given by a university professor specializing in ${topic}. First, you have some time to look at questions 31 to 40.`,
        es: `Parte 4. Escuchará una conferencia académica a cargo de un profesor universitario especializado en ${topic}. Primero, tiene algo de tiempo para leer las preguntas 31 a 40.`,
        fr: `Partie 4. Vous allez entendre une conférence académique donnée par un professeur d'université spécialisé dans ${topic}. Tout d'abord, vous avez un moment pour lire les questions 31 à 40.`,
        de: `Teil 4. Sie hören eine akademische Vorlesung eines Universitätsprofessors mit Schwerpunkt auf ${topic}. Zuerst haben Sie Zeit, sich die Fragen 31 bis 40 anzusehen.`,
        zh: `第四部分。您将听到一位专攻${topic}的大学教授所作的学术讲座。首先，您有时间审阅第31至第40题。`,
        ar: `الجزء 4. ستستمع إلى محاضرة أكاديمية يلقيها أستاذ جامعي متخصص في ${topic}. أولاً، لديك بعض الوقت للاطلاع على الأسئلة من 31 إلى 40.`,
        hi: `भाग 4। आप ${topic} में विशेषज्ञता रखने वाले एक विश्वविद्यालय के प्रोफेसर द्वारा दिया गया एक अकादमिक व्याख्यान सुनेंगे। पहले, आपके पास प्रश्न 31 से 40 देखने का समय है।`,
        pt: `Parte 4. Você ouvirá uma palestra acadêmica proferida por um professor universitário especialista em ${topic}. Primeiro, você tem algum tempo para examinar as perguntas de 31 a 40.`,
        ru: `Часть 4. Вы услышите академическую лекцию университетского профессора, специализирующегося в области ${topic}. Сначала у вас есть время ознакомиться с вопросами с 31 по 40.`,
        ja: `パート4。${topic}を専門とする大学教授による学術講義を聞きます。まず、質問31から40を見る時間があります。`,
        ur: `حصہ 4۔ آپ ${topic} کے ماہر یونیورسٹی پروفیسر کا تعلیمی لیکچر سنیں گے۔ پہلے، آپ کے پاس سوالات 31 تا 40 پڑھنے کا وقت ہے۔`
      };
      return map[lang] || null as any;
    }
  }
];

/**
 * Universal Multilingual Translator for TTS and Screen Display
 * Checks structured dictionaries, conversational patterns, and linguistic maps.
 */
export function lookupMultilingualTranslation(text: string, lang: SupportedLanguage): string | null {
  if (!text || lang === "en") return text;

  const trimmed = text.trim();
  const lower = trimmed.toLowerCase();

  // 1. Direct match in Speaking Part 1
  if (SPEAKING_PART_1_TRANSLATIONS[lower]?.[lang]) {
    return SPEAKING_PART_1_TRANSLATIONS[lower][lang];
  }

  // 2. Direct match in Speaking Part 3
  if (SPEAKING_PART_3_TRANSLATIONS[lower]?.[lang]) {
    return SPEAKING_PART_3_TRANSLATIONS[lower][lang];
  }

  // 3. Direct match in Examiner Room phrases
  if (EXAMINER_PHRASES[lower]?.[lang]) {
    return EXAMINER_PHRASES[lower][lang];
  }

  // 4. Direct match in Listening Announcements
  if (LISTENING_ANNOUNCEMENTS[lower]?.[lang]) {
    return LISTENING_ANNOUNCEMENTS[lower][lang];
  }

  // 5. Pattern matching for dynamic IELTS prompts, introductions, and cue cards
  for (const item of CONVERSATIONAL_PATTERNS) {
    const m = trimmed.match(item.pattern);
    if (m) {
      const res = item.translate(m, lang);
      if (res) return res;
    }
  }

  return null;
}
