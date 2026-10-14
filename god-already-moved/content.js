/* ============================================================
   GOD ALREADY MOVED — all the words of the app live in this file.
   Edit the text between the quotes; do not remove commas or brackets.
   These are DRAFTS: replace them with the book's real content.
   ============================================================ */

const SITE = {
  title: "God Already Moved",
  author: "Mia Luce",
  tagline: "One faithful action. Every day. Starting now.",
  // Paste the link to the book's review page here:
  reviewUrl: "https://www.amazon.com/",
  // Shown on every emergency letter:
  crisisText: "If tonight is more than a hard night, please reach a person now.",
  crisisLinkLabel: "Find a helpline in your country",
  crisisUrl: "https://findahelpline.com/"
};

/* 12 weeks. Each week: theme, verse, prayer, 7 daily actions. */
const WEEKS = [
  {
    theme: "The Ground",
    verse: "God is our refuge and strength, a very present help in trouble.",
    ref: "Psalm 46:1",
    prayer: "Lord, I don't know what is still standing. Show me one solid thing today, and let me put my weight on it. Amen.",
    actions: [
      "Make your bed. Nothing else. One corner of today is in order.",
      "Write down three things that are still true about your life this morning.",
      "Drink a full glass of water before you look at your phone.",
      "Open The Ground Inventory in the Toolkit and fill in the first column only.",
      "Stand outside for five minutes. No phone. Just notice where you are.",
      "Tell God one honest sentence about how this week really was.",
      "Go to bed thirty minutes earlier than last night."
    ]
  },
  {
    theme: "The Truth",
    verse: "You will know the truth, and the truth will make you free.",
    ref: "John 8:32",
    prayer: "Father, I am tired of the edited version. Give me the courage to say what is true, first to You, then to myself. Amen.",
    actions: [
      "Write one sentence that starts with \"The truth is...\" and finish it.",
      "Say out loud, alone, what actually happened. No softening.",
      "Delete or mute one thing on your phone that pulls you backward.",
      "Tell one safe person: \"I'm not okay yet.\" That's the whole message.",
      "Write down one lie you have been telling yourself, and cross it out.",
      "Read Psalm 13 slowly. Underline the line that sounds like you.",
      "Answer \"How are you?\" honestly once today."
    ]
  },
  {
    theme: "Who You Are",
    verse: "Don't be afraid, for I have redeemed you. I have called you by your name. You are mine.",
    ref: "Isaiah 43:1",
    prayer: "God, I lost track of who I was. Remind me of my name the way You say it. Amen.",
    actions: [
      "Write your full name at the top of a page. Under it, three things you are that have nothing to do with him.",
      "Find a photo of yourself from before this story. Look at her kindly.",
      "Call one person who knew you before this story. Not to talk about him. To remember who you were.",
      "Open The Identity Inventory in the Toolkit and fill in \"Who I was\".",
      "Do one small thing you used to love and stopped doing.",
      "Wear something today that feels like you.",
      "Read Isaiah 43:1 out loud with your own name in it."
    ]
  },
  {
    theme: "Rest",
    verse: "Come to me, all you who labor and are heavily burdened, and I will give you rest.",
    ref: "Matthew 11:28",
    prayer: "Jesus, I have been carrying this as if it were my job. I am setting it down for today. Amen.",
    actions: [
      "Sit down for ten minutes and do nothing useful.",
      "Say no to one thing this week that you only agreed to out of guilt.",
      "Put your phone in another room for the first hour of the day.",
      "Take a slow shower or bath. Let it take as long as it takes.",
      "Write down what you are carrying that was never yours to carry.",
      "Go to bed without solving anything.",
      "Take a real Sabbath hour: no chores, no scrolling, no planning."
    ]
  },
  {
    theme: "The Body",
    verse: "Arise and eat, because the journey is too great for you.",
    ref: "1 Kings 19:7",
    prayer: "Lord, You fed Elijah before You spoke to him. Help me care for this body as something You care about. Amen.",
    actions: [
      "Eat a real breakfast, sitting down.",
      "Walk for ten minutes. If you cry, keep walking.",
      "Stretch for five minutes before bed.",
      "Cook one simple meal from scratch.",
      "Make the appointment you have been putting off.",
      "Step outside and get ten minutes of daylight before noon.",
      "Thank God for one thing your body did for you this week."
    ]
  },
  {
    theme: "Your People",
    verse: "Two are better than one, because they have a good reward for their labor.",
    ref: "Ecclesiastes 4:9",
    prayer: "Father, I have been hiding. Show me who is safe, and give me the nerve to knock. Amen.",
    actions: [
      "Text one friend: \"Thinking of you. No need to reply.\"",
      "Accept one invitation, or make one.",
      "Ask someone for a small, specific help.",
      "Sit in a place where there are other people: a café, a library, a church.",
      "Thank one person who stayed.",
      "Use one of the conversation scripts in the Toolkit today.",
      "Pray for one other person by name."
    ]
  },
  {
    theme: "Forgiveness",
    verse: "Be kind to one another, tender hearted, forgiving each other, just as God also in Christ forgave you.",
    ref: "Ephesians 4:32",
    prayer: "God, I am not ready to feel forgiving. I am willing to be made willing. Start there. Amen.",
    actions: [
      "Write down what you are angry about. All of it. Don't tidy it.",
      "Tell God exactly what you have not forgiven. He already knows.",
      "Forgive yourself for one specific thing. Name it.",
      "Write \"I release...\" and finish the sentence once.",
      "Do one kind thing for someone who cannot repay you.",
      "Throw away or put out of sight one object that keeps the wound open.",
      "Pray one sentence for the person who hurt you. One is enough."
    ]
  },
  {
    theme: "Leaving Egypt",
    verse: "Behold, I will do a new thing. It springs out now. Don't you know it?",
    ref: "Isaiah 43:19",
    prayer: "Lord, I miss what hurt me. Don't let me walk back to it. Keep me facing forward one more day. Amen.",
    actions: [
      "Write down three things you honestly miss.",
      "Next to each one, write what it cost you.",
      "Do not check on him today. Not his profile, not his friends'.",
      "Open The Egypt List in the Toolkit and complete it.",
      "Change one small routine that belonged to the old life.",
      "Tell one person about something new you are noticing in yourself.",
      "Read Exodus 16:1-4 and notice what God sent in the wilderness."
    ]
  },
  {
    theme: "Purpose",
    verse: "He who is faithful in a very little is faithful also in much.",
    ref: "Luke 16:10",
    prayer: "Father, I don't need the whole plan. Give me today's small faithful thing, and let it be enough. Amen.",
    actions: [
      "Do one task you have been avoiding for more than a week.",
      "Help one person today without telling anyone.",
      "Write down one thing you are good at. Don't argue with it.",
      "Spend twenty minutes on something that matters to you and to nobody's opinion of you.",
      "Ask God: \"What is in my hand right now?\" Write the first answer.",
      "Finish something small that you started.",
      "Serve somewhere for one hour this week. Book it today."
    ]
  },
  {
    theme: "Joy",
    verse: "The joy of the Lord is your strength.",
    ref: "Nehemiah 8:10",
    prayer: "God, I feel guilty when I laugh. Give me permission to enjoy what You are giving me today. Amen.",
    actions: [
      "Notice one beautiful thing and stop for ten seconds to look at it.",
      "Play a song you love, loudly, all the way through.",
      "Do something with your hands: bake, plant, draw, fix.",
      "Laugh with someone today. Go and find the someone.",
      "Write down five good things from this week, however small.",
      "Buy or pick yourself flowers.",
      "Thank God out loud for one thing you did not expect."
    ]
  },
  {
    theme: "Building",
    verse: "Unless the Lord builds the house, they labor in vain who build it.",
    ref: "Psalm 127:1",
    prayer: "Lord, I am ready to build again, and I don't want to build alone. Lay the first stone with me. Amen.",
    actions: [
      "Write one sentence about the life you want a year from now.",
      "Choose one area (home, work, money, friendships, faith) and take one concrete step.",
      "Set up one small habit you want to keep after these twelve weeks.",
      "Open The Building Inventory in the Toolkit and complete it.",
      "Put one good thing on the calendar for next month.",
      "Clear one drawer, one shelf, or one inbox.",
      "Tell someone one thing you are building."
    ]
  },
  {
    theme: "Sent",
    verse: "He who began a good work in you will complete it until the day of Jesus Christ.",
    ref: "Philippians 1:6",
    prayer: "Father, You moved before I asked. Keep going. I will keep doing the next faithful thing. Amen.",
    actions: [
      "Read your whole journal in My Path, from Day 1.",
      "Write a short letter to the woman you were on Day 1.",
      "Thank one person who walked this with you.",
      "Choose the one action from these weeks you will keep doing.",
      "Encourage one woman who is where you were twelve weeks ago.",
      "Write down what God did that you did not ask for.",
      "Rest today. You did it. You did it anyway."
    ]
  }
];

/* Emergency letters. {time} is replaced with the current time. */
const LETTERS = [
  {
    state: "I want to text him",
    draft: true,
    body: [
      "It's {time} and you want to text him.",
      "I know.",
      "I won't tell you not to because you're strong. I'll tell you not to because tomorrow morning you will need that strength to get up and take your kids to school. That is the most faithful thing you can do tonight: protect your tomorrow morning.",
      "Put the phone down. Not forever. For tonight.",
      "Do this one thing: write the message you want to send him, right here. All of it. No filters. Then don't send it. Keep it here. It's yours."
    ],
    closing: "When you have finished writing, close this screen. You did the right thing tonight."
  },
  {
    state: "I can't stop thinking",
    body: [
      "It's {time} and your mind will not stop.",
      "You are not going to think your way out of this tonight. Nobody solves their life at this hour. The questions are real, and they will still be there in daylight, when you can actually do something about them.",
      "Do this one thing: get up, turn on one small light, and write the three loudest thoughts on paper. Paper holds them so you don't have to.",
      "Then say this, out loud if you can: \"God, You take the night shift.\""
    ],
    closing: "You don't need an answer tonight. You need to rest."
  },
  {
    state: "I had a relapse",
    body: [
      "It's {time} and you went back to something you had left.",
      "You have not erased the days before this one. They happened. They still count. A relapse is a place on the path, and you are still on it.",
      "Peter denied Jesus three times in one night, and the next thing Jesus made him was breakfast.",
      "Do this one thing: say what happened in one plain sentence, to God. No explaining. Then go to sleep. Tomorrow the same action is waiting for you. Continue from here."
    ],
    closing: "Don't start over. Continue from here."
  },
  {
    state: "I'm angry at God",
    body: [
      "It's {time} and you are angry at God.",
      "Good. That means you are still talking to Him.",
      "A third of the Psalms are complaints. David said \"How long, Lord? Will you forget me forever?\" and it ended up in the Bible. God can take the real version of you.",
      "Do this one thing: tell Him exactly what you are angry about. Use the words you would actually use. Don't finish with something polite."
    ],
    closing: "You don't have to resolve it tonight. Staying in the room is enough."
  },
  {
    state: "I can't sleep",
    body: [
      "It's {time} and you are still awake.",
      "Stop trying to sleep. Trying is what is keeping you up. Lying still in the dark is rest too, and it counts.",
      "Do this one thing: put your hand on your chest and breathe in slowly for four counts, out for six. Ten times. On each breath out, one word: \"Yours.\"",
      "If you are still awake after that, get up, drink some water, and read Psalm 4. It ends with: \"In peace I will both lay myself down and sleep.\""
    ],
    closing: "You are not falling behind by being tired tomorrow. Be gentle with the morning."
  },
  {
    state: "I feel completely alone",
    body: [
      "It's {time} and the house is very quiet.",
      "Feeling alone at this hour is a true feeling. It is also a poor measure of how loved you are. The night shrinks everything to the size of your room.",
      "Hagar was alone in a desert when she gave God a name: \"The God who sees me.\" He had found her before she had found any words.",
      "Do this one thing: write the name of one person you could text tomorrow morning. Only the name. You don't have to send anything tonight."
    ],
    closing: "You are seen right now, at exactly this hour."
  },
  {
    state: "I'm crying and I don't know why",
    body: [
      "It's {time} and you are crying, and you can't say why.",
      "You don't need a reason. Your body is finishing something your mind hasn't caught up with. Let it.",
      "Jesus wept at a grave He was about to empty. Tears are not a lack of faith.",
      "Do this one thing: don't stop it and don't analyze it. Get a glass of water, sit somewhere soft, and let it run its course."
    ],
    closing: "When it passes, sleep. Nothing needs to be understood tonight."
  }
];

/* Printable templates (the visitor prints them or saves them as PDF). */
const TEMPLATES = [
  { title: "The Ground Inventory", where: "Week 1 · Day 4", columns: ["What held", "What collapsed", "What remains"], rows: 7 },
  { title: "The Identity Inventory", where: "Week 3 · Day 4", columns: ["Who I was", "Who I am", "Who I am becoming"], rows: 7 },
  { title: "The Egypt List", where: "Week 8 · Day 4", columns: ["What I miss", "What it cost", "What remains"], rows: 7 },
  { title: "The Building Inventory", where: "Week 11 · Day 4", columns: ["Area of life", "What I am building", "My next step"], rows: 7 },
  { title: "The Full 12-Week Tracker", where: "General", columns: ["Week", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], rows: 12, numbered: true }
];

/* Scripts for hard conversations. */
const SCRIPTS = [
  {
    title: "How to tell a friend you are not okay without having to explain everything",
    lines: [
      "\"I'm going through something hard. I don't want to go into the details yet, but I didn't want to keep pretending with you.\"",
      "\"What would help most is company. You don't need to fix anything.\"",
      "If she asks questions: \"I'll tell you more when I can. Today I just needed you to know.\""
    ]
  },
  {
    title: "How to answer \"How are you?\" when you don't want to lie",
    lines: [
      "With someone close: \"Honestly, it's a hard season. Thank you for asking.\"",
      "With an acquaintance: \"Some days are better than others. Today is a getting-through-it day.\"",
      "When you can't talk: \"Not great, and I can't get into it right now. Ask me again next week?\""
    ]
  },
  {
    title: "How to explain to your children that mom is going through a hard time",
    lines: [
      "\"Mom is feeling sad lately. It is not because of anything you did.\"",
      "\"Grown-ups have big feelings too. I am taking care of mine, and I have people helping me.\"",
      "\"You might see me cry sometimes. I am still okay, and I am still your mom, and that is never going to change.\""
    ]
  },
  {
    title: "How to say no to a date when you are not ready yet",
    lines: [
      "\"Thank you for asking. I'm not dating right now.\"",
      "To a friend who is setting you up: \"I know you mean well. I'll tell you when I'm ready, and it isn't yet.\"",
      "You don't owe a reason. \"Not right now\" is a complete answer."
    ]
  },
  {
    title: "How to ask your pastor for help without feeling judged",
    lines: [
      "\"Could I have thirty minutes with you this week? I'm struggling and I need someone to talk to.\"",
      "\"I'm not looking for a verdict. I need help taking the next step.\"",
      "\"Could you point me to someone who has walked through something similar?\""
    ]
  }
];

/* Bonus unlocked after a review. */
const BONUS = {
  name: "The Morning After Kit",
  pitch: "A thank-you gift for readers who share an honest review.",
  prayerTitle: "The 5-Minute Morning Prayer",
  prayer: [
    "Lord, it is morning and I am here. That is already something.",
    "I don't ask for the whole day. I ask for the next hour, and the strength for the one faithful thing in front of me.",
    "Where I am tired, be my rest. Where I am afraid, go ahead of me. Where I am bitter, soften me.",
    "You moved before I woke up. Let me notice it today.",
    "Amen."
  ],
  letters: [
    {
      title: "Day 85 — The morning after",
      text: "The twelve weeks are over and today nobody is telling you what to do. That is the point. You already know how to do one faithful thing. Pick it yourself this morning."
    },
    {
      title: "Day 85 — When it comes back",
      text: "A hard day is coming, some time after this one. It will not mean the twelve weeks failed. Open your journal, read Day 1, and look at how far that woman walked."
    },
    {
      title: "Day 85 — What you carry out",
      text: "You are not leaving with a finished life. You are leaving with proof: on the days you felt nothing, you did it anyway. Nobody can take that record from you."
    }
  ],
  script: {
    title: "What to say when he texts first",
    lines: [
      "Wait one hour before you answer anything. Nothing is urgent.",
      "If it is about the children or logistics: answer only that. \"Yes, Saturday at 10 works.\"",
      "If it is personal: \"I'm not available for this conversation. Take care.\"",
      "If you are not ready to answer at all, silence is an answer."
    ]
  }
};
