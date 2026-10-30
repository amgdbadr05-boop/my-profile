const translations = {
  en: {
    navAbout:"About",navSkills:"Skills",navEducation:"Education",navContact:"Contact",
    available:"CURIOUS MIND. CREATIVE BUILDER.",hello:"Hello, I'm",role:"Software Engineer",
    heroDescription:"I explore technology and build practical digital solutions through code, curiosity, and creative problem-solving.",
    contactMe:"Contact me",discover:"Discover more",location:"Aden, Yemen",field:"Software Engineering",
    creativeMind:"Creative mind",buildingIdeas:"Building ideas",scroll:"SCROLL TO EXPLORE",
    whoIAm:"WHO I AM",aboutTitle:'A little about <span class="gradient-text">me</span>',
    aboutHeading:"Technology enthusiast. Problem solver. Lifelong learner.",
    aboutText1:"I am a Software Engineer with an interest in technology, software development, and medical equipment systems. I enjoy learning new technologies, solving technical problems, and developing practical solutions that make a difference.",
    aboutText2:"My interests include web development, programming, networking, and medical technology. I am always looking for opportunities to improve my technical skills, work on meaningful projects, and expand my knowledge.",
    aboutText3:"My goal is to combine technical knowledge, creativity, and problem-solving skills to build reliable and useful solutions.",
    whatIUse:"WHAT I WORK WITH",skillsTitle:'Technical <span class="gradient-text">skills</span>',
    skillsIntro:"Technologies and tools I am learning and using to bring ideas to life.",
    webTitle:"Web development",backendTitle:"Backend development",frontendTitle:"Frontend frameworks",pythonTitle:"Python development",
    learningPath:"LEARNING PATH",educationTitle:'Education & <span class="gradient-text">growth</span>',university:"UNIVERSITY",
    educationNote:"Building knowledge and developing a foundation in software engineering.",
    getInTouch:"GET IN TOUCH",contactTitle:'Have an idea? <span class="gradient-text">Let\'s connect.</span>',
    contactDescription:"I'm always interested in learning, exchanging ideas, and exploring meaningful opportunities.",
    sendEmail:"Send me an email",footerText:"Designed & built with curiosity."
  },
  ar: {
    navAbout:"نبذة عني",navSkills:"المهارات",navEducation:"التعليم",navContact:"تواصل معي",
    available:"عقل فضولي. ومبدع في البناء.",hello:"مرحباً، أنا",role:"مهندس برمجيات",
    heroDescription:"أستكشف التكنولوجيا وأبني حلولاً رقمية عملية من خلال البرمجة والفضول والتفكير الإبداعي لحل المشكلات.",
    contactMe:"تواصل معي",discover:"اكتشف المزيد",location:"عدن، اليمن",field:"هندسة البرمجيات",
    creativeMind:"عقل مبدع",buildingIdeas:"تحويل الأفكار إلى واقع",scroll:"مرر للاستكشاف",
    whoIAm:"من أنا",aboutTitle:'نبذة <span class="gradient-text">عني</span>',
    aboutHeading:"شغوف بالتكنولوجيا، وحل المشكلات، والتعلم المستمر.",
    aboutText1:"أنا مهندس برمجيات مهتم بالتكنولوجيا وتطوير البرمجيات وأنظمة الأجهزة الطبية. أستمتع بتعلم التقنيات الحديثة وحل المشكلات التقنية وتطوير حلول عملية تُحدث فرقاً.",
    aboutText2:"تشمل اهتماماتي تطوير الويب والبرمجة والشبكات والتكنولوجيا الطبية. أسعى دائماً إلى تطوير مهاراتي التقنية والعمل على مشاريع هادفة وتوسيع معرفتي.",
    aboutText3:"هدفي هو الجمع بين المعرفة التقنية والإبداع ومهارات حل المشكلات لبناء حلول موثوقة ومفيدة.",
    whatIUse:"التقنيات التي أعمل بها",skillsTitle:'المهارات <span class="gradient-text">التقنية</span>',
    skillsIntro:"تقنيات وأدوات أتعلمها وأستخدمها لتحويل الأفكار إلى واقع.",
    webTitle:"تطوير الويب",backendTitle:"تطوير الواجهات الخلفية",frontendTitle:"أطر الواجهات الأمامية",pythonTitle:"تطوير بايثون",
    learningPath:"مسيرتي التعليمية",educationTitle:'التعليم و<span class="gradient-text">التطور</span>',university:"الجامعة",
    educationNote:"بناء المعرفة وتطوير أساس قوي في هندسة البرمجيات.",
    getInTouch:"ابقَ على تواصل",contactTitle:'لديك فكرة؟ <span class="gradient-text">لنتواصل.</span>',
    contactDescription:"يسعدني دائماً التعلم وتبادل الأفكار واستكشاف الفرص الهادفة.",
    sendEmail:"أرسل لي بريداً إلكترونياً",footerText:"صُمم وطُوّر بشغف وفضول."
  }
};

const languageToggle = document.getElementById("languageToggle");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const profilePhoto = document.getElementById("profilePhoto");
const photoFallback = document.getElementById("photoFallback");

let currentLanguage = localStorage.getItem("portfolio-language") || "en";

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.body.dir = language === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) element.innerHTML = translations[language][key];
  });
  languageToggle.textContent = language === "en" ? "العربية" : "English";
  languageToggle.setAttribute("aria-label", language === "en" ? "Switch to Arabic" : "Switch to English");
  localStorage.setItem("portfolio-language", language);
}
languageToggle.addEventListener("click", () => setLanguage(currentLanguage === "en" ? "ar" : "en"));

function setTheme(theme) {
  document.body.classList.toggle("light", theme === "light");
  themeIcon.textContent = theme === "light" ? "☾" : "☼";
  themeToggle.setAttribute("aria-label", theme === "light" ? "Switch to dark mode" : "Switch to light mode");
  localStorage.setItem("portfolio-theme", theme);
}
themeToggle.addEventListener("click", () => {
  setTheme(document.body.classList.contains("light") ? "dark" : "light");
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

profilePhoto.addEventListener("load", () => {
  profilePhoto.style.display = "block";
  photoFallback.style.display = "none";
});
profilePhoto.addEventListener("error", () => {
  profilePhoto.style.display = "none";
  photoFallback.style.display = "grid";
});

document.getElementById("year").textContent = new Date().getFullYear();

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
}

setLanguage(currentLanguage);
setTheme(localStorage.getItem("portfolio-theme") || "dark");