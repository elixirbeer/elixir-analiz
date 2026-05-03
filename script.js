const questions = [
    {
        q: "1. MOD: Şu anki enerjin hangisine daha yakın?",
        options: ["Gizemli ve derin bir gece", "Parlak ve yüksek enerjili bir öğlen", "Dingin ve akışta bir akşamüstü", "Renkli ve heyecan dolu bir akşam"],
        types: ["A", "B", "C", "D"]
    },
    {
        q: "2. TAT: Damak hafızanda hangisi daha baskın bir iz bırakır?",
        options: ["Karakterli ve hafif ekşimsi bir asalet.", "Canlandırıcı, keskin ve taze bir dokunuş.", "Kadifemsi, pürüzsüz ve tatlı bir uyum.", "Aromatik, yoğun ve meyvenin en saf hali."],
        types: ["A", "B", "C", "D"]
    },
    {
        q: "3. MEKAN: Elixir’ini nerede yudumlarken hayal ediyorsun?",
        options: ["Loş ışıklı, deri koltuklu bir barda", "Şehrin en hareketli caddesinde, yürürken", "Deniz kenarında, kumsalda", "Bir sanat galerisinde veya modern bir ev partisinde"],
        types: ["A", "B", "C", "D"]
    },
    {
        q: "4. DOKU: 'Meyve bizim için bir aroma değil, ana karakterdir.' Senin karakterinin dokusu hangisi?",
        options: ["Derin ve mistik.", "Keskin ve enerjik.", "Yumuşak ve ipeksi.", "Dolgun ve kadifemsi."],
        types: ["A", "B", "C", "D"]
    },
    {
        q: "5. GÖRSEL: Gözlerini kapat ve bir renk seç; hangisi gününü sıradanlıktan çıkarır?",
        options: ["Koyu kırmızı-siyah geçişler.", "Canlı kavuniçi ve güneş sarısı.", "Mat altın ve şeftali tonları.", "Mor ve sofistike fuşya."],
        types: ["A", "B", "C", "D"]
    },
    {
        q: "6. RİTM: Elixir'in %6.0 alkol oranıyla dengelenmiş meyve özleri, senin ritminle nasıl buluşmalı?",
        options: ["Yavaş yavaş, her yudumun analizini yaparak.", "Hızlı, ferahlatıcı ve buz gibi bir yudumla.", "Pürüzsüz bir akışla, ana eşlik ederek.", "Damakta uzun süre kalan yoğun bir hisle."],
        types: ["A", "B", "C", "D"]
    }
];

let currentQuestion = 0;
let scores = { A: 0, B: 0, C: 0, D: 0 };

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question-text").innerText = q.q;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => selectOption(q.types[index]);
        optionsDiv.appendChild(btn);
    });
}

function selectOption(type) {
    scores[type]++;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-content").classList.add("hidden");
    document.getElementById("result-area").classList.remove("hidden");

    // En yüksek puanı alan tipi bulma
    const winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    const products = {
        "A": { 
            name: "Ruby Noir (Vişne / Kriek)", 
            desc: "Derin, mistik ve asil. Vişnenin doğal ekşiliği ile biranın gövdesi arasında mükemmel bir denge sunar." 
        },
        "B": { 
            name: "Zest Bright (Narenciye)", 
            desc: "Enerjik, keskin ve ferah. Buğday birası bazlı, narenciye kabuklarından gelen uçucu yağlarla zenginleşmiş bir yapı." 
        },
        "C": { 
            name: "Golden Silk (Şeftali ve Kayısı)", 
            desc: "Yumuşak, kadifemsi ve ferahlatıcı. Özellikle yaz akşamları için tasarlanmış pürüzsüz bir içiş keyfi." 
        },
        "D": { 
            name: "Velvet Berry (Ahududu ve Böğürtlen)", 
            desc: "Modern, canlı ve oldukça aromatik. Yoğun meyve rengi ve damakta uzun süre kalan keskin bir lezzet profili." 
        }
    };

    document.getElementById("product-name").innerText = products[winner].name;
    document.getElementById("product-desc").innerText = products[winner].desc;
}

showQuestion();