const verb = document.getElementById("verb")
const result = document.getElementById("result")
const sendButton =  document.getElementById("sendButton")
const answerInput = document.getElementById("answer")
const recordDisplay = document.getElementById("record")
const verbs = ["be", "beat", "become", "begin", "bet", "blow", "break", "bring", "build", "buy", "catch", "choose", "come", "cut", "deal", "do", "draw", "dream", "drink", "drive", "eat", "fall", "feel", "fight", "find", "fit", "flee", "forget", "get", "give", "go", "grow", "have", "hear", "hide", "hold", "keep", "know", "lay", "lead", "learn", "leave", "let", "lose", "make", "mean", "meet", "misunderstand", "overcome", "pay", "put", "read", "rise", "run", "say", "see", "seek", "send", "set", "shake", "shine", "show", "sing", "sit", "sleep", "speak", "spend", "spread", "stand", "steal", "strive", "swim", "take", "teach", "tell", "think", "throw", "understand", "wear", "win", "write"]
const answers = ["was", "beat", "became", "began", "bet", "blew", "broke", "brought", "built", "bought", "caught", "chose", "came", "cut", "dealt", "did", "drew", "dreamt", "drank", "drove", "ate", "fell", "felt", "fought", "found", "fit", "fled", "forgot", "got", "gave", "went", "grew", "had", "heard", "hid", "held", "kept", "knew", "laid", "led", "learnt", "left", "let", "lost", "made", "meant", "met", "misunderstood", "overcame", "paid", "put", "read", "rose", "ran", "said", "saw", "sought", "sent", "set", "shook", "shone", "showed", "sang", "sat", "slept", "spoke", "spent", "spread", "stood", "stole", "strove", "swam", "took", "taught", "told", "thought", "threw", "understood", "wore", "won", "wrote"]
let selectedVerb = 0
let hits = 0

if (localStorage.getItem("record") == null) {
    localStorage.setItem("record",0)
} else {
    recordDisplay.innerHTML = `<img src="trophy-icon.png"> ${localStorage.getItem("record")}`
}
function sendVerb () {
    answerInput.value = "";
    selectedVerb = Math.floor(Math.random() * verbs.length);
    verb.innerHTML = verbs[selectedVerb][0].toUpperCase() + verbs[selectedVerb].substring(1);
}
sendButton.addEventListener("click", function(ev){
    ev.preventDefault()
    verifyAnswer()
})
function verifyAnswer () {
    if (answerInput.value.toLowerCase() == answers[selectedVerb]) {
        hits++
        result.innerHTML = `<h2>Acertou</h2>x${hits}`
    } else {
        result.innerHTML = `<h2>Errou</h2>O passado simples de <b>${verbs[selectedVerb]}</b> é <b>${answers[selectedVerb]}</b>.`
        if (localStorage.getItem("record") < hits) {
            localStorage.setItem("record", hits)
        }
        recordDisplay.innerHTML = `<img src="trophy-icon.png"> ${localStorage.getItem("record")}`    
        hits = 0
    }
    sendVerb()
}
sendVerb();
