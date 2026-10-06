export const projects = [
{
id: 1,
title: "TABVIAN",
featured: true,

description:
  "Plataforma web para analizar y procesar archivos Excel de forma sencilla, facilitando operaciones sobre datos sin depender de fórmulas complejas.",

technologies: [
  "Python",
  "Flask",
  "Pandas",
  "JavaScript",
  "HTML",
  "CSS"
],

demo: "https://excel-ai-rzy3.onrender.com",

github: "",

image: `${import.meta.env.BASE_URL}projects/tabvian.png`

},

{
id: 2,
title: "Lex & Asociados landing-page",
featured: false,

description:
  "Landing Page profesional para un bufete de abogados.",

technologies: [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Bootstrap 5",
  "FontAwesome"
],

demo: "https://alejandro-c-s.github.io/lex-asociados-landing-page/",

github: "https://github.com/Alejandro-C-S/lex-asociados-landing-page.git",

image: `${import.meta.env.BASE_URL}projects/Lex.png`

},

{
id: 3,
title: "Chat with PDF",
featured: false,

description:
  "Aplicación web que permite interactuar con documentos PDF mediante preguntas sobre su contenido.",

technologies: [
  "Python",
  "Flask",
  "LangChain",
  "FAISS",
  "Ollama"
],

demo: "",

github: "https://github.com/Alejandro-C-S/chat-with-pdf",

image: `${import.meta.env.BASE_URL}projects/Chat-ai.png`

},
{
id: 4,
title: "Transcriptor y analizador de audio",
featured: false,

description:
  "Aplicación web Full-Stack para grabar en vivo o subir archivos de audio, procesar transcripciones automáticamente con IA y generar minutas ejecutivas estructuradas, incluyendo resumen, tareas pendientes y temas clave.",

technologies: [
  "React",
  "Vite",
  "Lucide React",
  "HTML2PDF.js",
  "Node.js",
  "Express",
  "Multer",
  "CORS",
  "Dotenv",
  "whisper-large-v3-turbo",
  "openai/gpt-oss-20b"
],

demo: "",

github: "https://github.com/Alejandro-C-S/Transcriptor-audio.git",

image: `${import.meta.env.BASE_URL}projects/audio.png`

},
{
id: 5,
title: " IoT Fleet Simulator",
featured: false,

description:
  "El proyecto simula vehículos que generan datos de telemetría de forma continua, los transmite en tiempo real mediante el protocolo MQTT, los almacena en una base de datos optimizada para series temporales y los visualiza en un dashboard web interactivo con mapas y sincronización por WebSockets.",

technologies: [
  "React",
  "Vite",
  "FastAPI",
  "MQTT",
  "TimescaleDB",
  "Docker",
  "React-Leaflet",
  "Leaflet"
],

demo: "",

github: "https://github.com/Alejandro-C-S/-IoT-Fleet-Simulator.git",

image: `${import.meta.env.BASE_URL}projects/ IoT-Fleet.png`

},
{
id: 6,
title: "IoT Predictive Telemetry Simulator",
featured: false,

description:
  "Sistema de monitoreo predictivo de telemetría industrial desarrollado para simular, procesar y visualizar en tiempo real el comportamiento de motores industriales.",

technologies: [
  "React",
  "Vite",
  "javascript",
  "FastAPI",
  "Pydantic",
  "scikit-learn",
  "numpy",
  "paho-mqtt",
  "websockets",
  "isolation-forest",
  "anomaly-scoring",
  "MQTT",
  "Docker",
],

demo: "",

github: "https://github.com/Alejandro-C-S/Simulator-Predictive-Telemetry.git",

image: `${import.meta.env.BASE_URL}projects/predictive-telemetry.png`

}
];
