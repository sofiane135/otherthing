let handler = m => m; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^كت$/i.test(m.text)) { 
     responses = [ 
       '『 جيرايا 』  ',  
       '『 ناروتو 』',  
             '『 تسونادي 』',  
      '『 اينيوشا - فاي』',
      '『 رايزل - جورج 』 ',
      '『 ساتاشي - امورو』 ',
      '『 موكومو - شيبوسا』',
'『 سورا - كوتا』',
'『 كايتو - هيسوكا』',
'『 كيلوا - رينغوكو』',
'『 تانجيرو - نيزوكو』',
'『 زينيتسو - ارمين』',
'『 اينوسكي - يوجي』',
'『 ايتادوري - نوبارا』',
'『 كاغورا - هيناتا』',
'『 جورا - جوتارو』',
'『 آني - ساكوراكو』',
'『 كوهاكو - سينكو』',
'『 ميزوكي - هيوري』',
'『 ميامورا - افيليو』',
'『 انجيلو - ريمي』',
'『 ايميليا - فايوليت』',
'『 جينجر - ماكيما』',
'『 ميدوريا - اوراراكا』',
'『 شوتو - باكوغو』',
'『 تودوروكي - اول مايت』',
'『 اكيرا - هيرو』',
'『 كونان - ران』',
'『 جين - غراي』',
'『 جوفيا - ناتسو』',
'『 يوميكو - روكيا』',
'『 زاراكي - كيسكي』',
'『 ايتشيغو - اوزوماكي』',
'『 باين - كازيكاجي』',
'『 هوكاجي - ايرين』',
'『 ليفاي - ايروين』',
'『 زيك - ارثر』',
'『 لولوش - صوفيا』',
'『 برولي - فيجيتا』',
'『 غوكو - بلاك』',
'『 سانجي - كانيتشي』',
'『 مايكي - تاكيميتشي』',
'『 شويو - جوكر』',
'『 تاداشي - هوتارو』',
'『 هوكورو - كون』',
'『 كينتا - راديتز』',
'『 شيينوبو - ايكا』',
'『 ايما - نورمان』',
'『 كين - سوسومو』',
'『 شيهارو - نوري』',
'『 ميراجين - ايرزا』',
'『 جيلال - زيريف』',
'『 اكنولوجيا - بيير』',
'『 سيبر - هيدن』',
'『 بيل - ترين』',
'『 ماسايوكا - يو』',
'『 ريزي - كانيكي』',
'『 ساترو - ايسا』',
'『 ناتسومي - ليوناردو』',
'『 ريتسو - اينا』',
'『 انيا - سايتاما』',
'『 ساتان - سوزو』',
'『 ويندي - روميو』',
'『 فوميو - استا』',
'『 نويل - يامي』',
'『 يونو - فانجاس』',
'『 ويليام - ناخت』',
'『 ليخت - لاك』',
'『 ماغنا - غاتس』',
'『 موساشي - هوكس』',
'『 شيغاراكي - هانجي』',
'『 البيدو - بينمارو』',
'『 ايشيكي - كوما』',
'『 يور - يورو』',
'『 تيا - يوريتشي』',
'『 غيومي - ميتسوري』',
'『 بيروس - ويس』',
'『 زينو - موب』',
'『 ديكو - اوبا』',
'『 ميدوريا - فيغابانك』',
'『 روب - لوتشي』',
'『 دراكين - هانما』',
'『 تشيفويو - كيساكي』',
'『 ناوتو - تاكاشي』',
'『 ريوغاكي - اكاشي』',
'『 اكاي - مايفيس』',
'『 كيكيو - رينجي』',
'『 ايتشيمارو - ايزن』',
'『 شادو - اينوي』',
'『 اباري - ايشيدا』',
'『 بياكويا - توشيرو』',
'『 بازارد - زاهارد』',
'『 لويد - بيكاتشو』',
'『 ماتسودا - تاكوجو』',
'『 اماري - شينيتشي』',
'『 هايبارا - مارلين』',
'『 ايسكانور - بان』',
'『 ايليزابيث - ميليوداس』',
'『 زيلدريس - ثورفين』',
'『 ثوركيل - الفونس』',
'『 ارين - ايدوارد』',
'『 ناروتو - ارمين』',
'『 ناروتو - باكيرا』',
'『 باسكال - ايزوكو』',
'『 بيجيتا - بيكولا』',
'『 بيكو - بولما』',
'『 ترانكس - جوزيف』',
'『 راينر - زيف』',
'『 زاماسو - سوزاكو』',
'『 غيندو - جارو』',
'『 فيتان - كرولو』',
'『 غون - فريكس』',
'『 فانكوك - موزان』',
'『 ميرلين - موجين』',
    ]; 
     } else if (/^صراحه$/i.test(m.text)) { 
     responses = [ 
     'صراحه  |  صوتك حلوة؟',
     'صراحه  |  التقيت الناس مع وجوهين؟',
     'صراحه  |  شيء وكنت تحقق اللسان؟',
     'صراحه  |  أنا شخص ضعيف عندما؟',
     'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
     'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
     'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
     'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
     'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
     'صراحه  |  أشجع شيء حلو في حياتك؟',
     'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
     'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
     'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
     'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
     'صراحه  |  نظرة و يفسد الصداقة؟',
     'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
     'صراحه  |  شخص معك بالحلوه والمُره؟',
     'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
     'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
     'صراحه  |  وش تتمنى الناس تعرف عليك؟',
     'صراحه  |  ابيع المجرة عشان؟',
     'صراحه  |  أحيانا احس ان الناس ، كمل؟',
     'صراحه  |  مع مين ودك تنام اليوم؟',
     'صراحه  |  صدفة العمر الحلوة هي اني؟',
     'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
     'صراحه  |  صفة تحبها في نفسك؟',
     'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
     'صراحه  |  تصلي صلواتك الخمس كلها؟',
     'صراحه  |  تجامل أحد على راحتك؟',
     'صراحه  |  اشجع شيء سويتة بحياتك؟',
     'صراحه  |  وش ناوي تسوي اليوم؟',
     'صراحه  |  وش شعورك لما تشوف المطر؟',
     'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
     'صراحه  |  ما اكثر شي ندمن عليه؟',
     'صراحه  |  اي الدول تتمنى ان تزورها؟',
     'صراحه  |  متى اخر مره بكيت؟',
     'صراحه  |  تقيم حظك ؟ من عشره؟',
     'صراحه  |  هل تعتقد ان حظك سيئ؟',
     'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
     'صراحه  |  كلمة تود سماعها كل يوم؟',
     'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
     'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
     'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
     'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
     '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
     'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
     '‏صراحه | هل تحب عائلتك ام تكرههم؟',
     '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
     '‏صراحه  |  هل خجلت من نفسك من قبل؟',
     '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
     '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
     '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
	  '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
     '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
     '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
     '‏صراحه  |  ما هو عمرك الحقيقي؟',
     '‏صراحه  |  ما اكثر شي ندمن عليه؟',
	 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',

     ]; 
      } else if (/^تحدي$/i.test(m.text)) { 
     responses = [
    '*صورة وجهك او رجلك او خشمك او يدك*.ط',
    "*اصدر اي صوت يطلبه منك الاعبين*.",
    "*سكر خشمك و قول كلمة من اختيار الاعبين الي معك*.",
    "*روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل*.",
    "*قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية*.",
    "*سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك*.",
    "*ذي المرة لك لا تعيدها*.",
    "*ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام*.",
    "*صور اي شيء يطلبه منك الاعبين*.",
    "*اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....*.",
    "*سكر خشمك و قول كلمة من اختيار الاعبين الي معك*.",
    "*سو مشهد تمثيلي عن مصرية بتولد*.",
    "*اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف*.",
    "*ذي المرة لك لا تعيدها*.",
    "*ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام*.",
    "*روح عند اي احد بالخاص و قول له انك تحبه و الخ*.",
    "*اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص*.",
    "*قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية*.",
    "*سامحتك خلاص مافيه عقاب لك :slight_smile:*.",
    "*اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك*.",
    "*غير اسمك الى اسم من اختيار الاعبين الي معك*.",
    "*اتصل على امك و قول لها انك تحبها ❤️*.",
    "*لا يوجد سؤال لك سامحتك :slight_smile:*.",
    "*قل لواحد ماتعرفه عطني كف*.",
    "*منشن الجميع وقل انا اكرهكم*.",
    "*اتصل لاخوك و قول له انك سويت حادث و الخ....*.",
    "*روح المطبخ و اكسر صحن او كوب*.",
    "*اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف*.",
    "*قول لاي بنت موجود في الروم كلمة حلوه*.",
    "*تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني*.",
    "*لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر*.",
    "*قول قصيدة *.",
    "*تكلم باللهجة السودانية الين يجي دورك مرة ثانية*.",
    "*اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك*.",
    "*اول واحد تشوفه عطه كف*.",
    "*سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين*.",
    "*سامحتك خلاص مافيه عقاب لك :slight_smile:*.",
    "*اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....*.",
    "*روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك*.",
    "*تاخذ عقابين*.",
    "*قول اسم امك افتخر بأسم امك*.",
    "*ارمي اي شيء قدامك على اي احد موجود او على نفسك*.",
    "*اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك*.",
    "*اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه*.",
    "*تتصل على الوالده  و تقول لها خطفت شخص*.",
    "* تتصل على الوالده  و تقول لها تزوجت با سر*.",
    "*����تصل على الوالده  و تقول لها  احب وحده*.",
      "*تتصل على شرطي تقول له عندكم مطافي*.",
      "*خلاص سامحتك*.",
      "* تصيح في الشارع انا  مجنوون*.",
      "* تروح عند شخص تقول له احبك*.",
];
   }  
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;
