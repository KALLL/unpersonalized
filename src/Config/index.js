export default {
    endpoint: 'https://travelofino2-rnpcpe.core.ushaflow.io', // <- enter your gateway URL here
    muted: true, // <- mute microphone at start
    start_suggestions: ["Hello"], // <- array of suggestions, displayed at the start screen
    fallback_lang: 'en', // <- fallback language code, if history mode or network is unavailable
    voice: 'native' // <- voice of Text-To-Speech; for reference, see: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/voiceURI
}
//