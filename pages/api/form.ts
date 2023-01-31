import { NextApiRequest, NextApiResponse } from "next";
const TelegramBot = require("node-telegram-bot-api");

const TOKEN = process.env.TOKEN;
const CHAT_ID = process.env.CHAT_ID;

const bot = new TelegramBot(TOKEN, { polling: true });

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const body = req.body;

      if (!body.name || !body.tel || !body.email || !body.website) {
        return res.status(400).json({ message: "Вы заполнили не все поля." });
      }

      const text = `
        Имя: ${body.name}
        Телефон: ${body.tel}
        Email: ${body.email}
        Website-ссылка: ${body.website}
      `;

      bot.sendMessage(CHAT_ID, text);

      res.status(200).json({ message: "Успешно" });
      bot.stopPulling();
    } catch (err) {
      res.status(500).json({ message: "Ошибка сервера", err });
    }
  } else {
    res.status(500).json({ message: "Неподходящий запрос" });
  }
};

export default handler;
