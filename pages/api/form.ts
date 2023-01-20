import { NextApiRequest, NextApiResponse } from "next";
import TelegramBot from "node-telegram-bot-api";
import config from "config";

const TOKEN: string = config.get("TOKEN");
const CHAT_ID: string = config.get("CHAT_ID");

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
    } catch (err) {
      res.status(500).json({ message: "Ошибка сервера", err });
    }
  } else {
    res.status(500).json({ message: "Неподходящий запрос" });
  }
};

export default handler;
