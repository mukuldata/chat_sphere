const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHAT_SPHERE_TOKEN = "chat-sphere-token";

const CHAT_SPHERE_ADMIN_TOKEN = "chat-sphere-admin-token";

export { corsOptions, CHAT_SPHERE_TOKEN,CHAT_SPHERE_ADMIN_TOKEN };
