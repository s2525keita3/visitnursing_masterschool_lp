import { FormEvent, useState } from "react";
import { Bot } from "lucide-react";
import Section from "./Section";
import CTAButton from "./CTAButton";
import Pill from "./Pill";

type Message = { role: "user" | "assistant"; content: string };

const AiAdvisor = () => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const handleAsk = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!question.trim()) return;
    const userMessage: Message = { role: "user", content: question };
    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");

    if (!apiKey) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "APIキーが設定されていません。環境変数 VITE_GEMINI_API_KEY を設定してください。" },
      ]);
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: `訪問看護ステーション開業に関する質問です。簡潔に答えてください: ${question}` }] }],
          }),
        }
      );
      const json = await response.json();
      const text = json?.candidates?.[0]?.content?.parts?.[0]?.text ?? "回答を取得できませんでした。";
      setMessages((prev) => [...prev, { role: "assistant", content: text }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "assistant", content: `エラーが発生しました: ${(error as Error).message}` }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section>
      <div className="text-center space-y-4 animate-fade-up">
        <Pill icon={Bot}>AI Advisor</Pill>
        <h2 className="text-4xl font-serif leading-tight">
          <span className="text-brand-dark">AIアドバイザーでその場で</span>
          <span className="text-brand-orange">疑問を解決</span>
        </h2>
        <p className="text-brand-muted max-w-3xl mx-auto">
          Gemini APIを使ったAIが、訪問看護の事業計画・採用・集客の質問にリアルタイムで回答します。
        </p>
      </div>
      <form onSubmit={handleAsk} className="rounded-3xl border border-brand-dark/10 bg-white shadow-card hover-lift p-8 space-y-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        <textarea
          rows={3}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full rounded-2xl border border-brand-dark/15 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 transition-all"
          placeholder="例: 採用コストを抑えるために今すぐできる施策は？"
        />
        <div className="flex justify-end">
          <CTAButton type="submit" isLoading={loading}>
            AIに質問する
          </CTAButton>
        </div>
      </form>
      <div className="space-y-4">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`rounded-2xl border px-6 py-4 hover-lift animate-fade-up ${
              message.role === "assistant" ? "border-brand-gold bg-brand-light/50" : "border-brand-dark/10 bg-white"
            }`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <p className="text-sm font-semibold text-brand-muted mb-1">{message.role === "assistant" ? "AI" : "あなた"}</p>
            <p className="text-brand-dark leading-relaxed whitespace-pre-line">{message.content}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default AiAdvisor;


