const PORT = 3000;
const DB_USER = "aysenuruser"; // yeni kullanıcı adın
const DB_PASS = "Aysenur123";  // yeni basit şifren
const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.isy1wdn.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0`;

module.exports = { PORT, DB_USER, DB_PASS, DB_URL };
