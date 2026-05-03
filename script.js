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
        q: "4. DOKU: Senin karakterinin dokusu hangisi?",
        options: ["Noir: Derin ve mistik.", "Zest: Keskin ve enerjik.", "Silk: Yumuşak ve ipeksi.", "Velvet: Dolgun ve kadifemsi."],
        types: ["A", "B", "C", "D"]
    },
    {
        q: "5. GÖRSEL: Gözlerini kapat ve bir renk seç.",
        options: ["Koyu kırmızı-siyah geçişler.", "Canlı kavuniçi ve güneş sarısı.", "Mat altın ve şeftali tonları.", "Mor ve sofistike fuşya."],
        types: ["A", "B", "C", "D"]
    },
    {
        q: "6. RİTM: Elixir senin ritminle nasıl buluşmalı?",
        options: ["Yavaş yavaş, analiz yaparak.", "Hızlı, ferahlatıcı ve buz gibi.", "Pürüzsüz bir akışla, ana eşlik ederek.", "Damakta uzun süre kalan yoğun bir hisle."],
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
        "A": { name: "Elixir Noir", desc: "Orman meyvelerinin derinliği ve mistik aroması tam senin karakterin." },
        "B": { name: "Elixir Zest", desc: "Narenciye ve mangonun enerjisi senin yüksek temponu tamamlıyor." },
        "C": { name: "Elixir Silk", desc: "Şeftali ve kayısının yumuşak geçişleri senin dingin ruhun için tasarlandı." },
        "D": { name: "Elixir Velvet", desc: "Mürdüm eriği ve narın dolgun dokusu, sofistike zevklerine hitap ediyor." }
    };

    document.getElementById("product-name").innerText = products[winner].name;
    document.getElementById("product-desc").innerText = products[winner].desc;
}

showQuestion();