export type SeminarTopic = {
  title: string;
  description: string;
};

export type ScheduleSlot = {
  date: string;
  time: string;
};

export const seminarTopics: SeminarTopic[] = [
  {
    title: "■ 融資獲得率90%超の「事業計画」とは",
    description:
      "銀行員がどこを見ているか知っていますか？「熱意」ではなく「根拠」で納得させる、満額融資獲得のためのロジックと資料作成の極意を公開します。",
  },
  {
    title: "■ 採用コスト0円を実現する「採用戦略」",
    description:
      "紹介会社頼みの経営から卒業。高橋様（兵庫）の事例をもとに、ミスマッチを防ぎながら欲しい人材だけを惹きつける自社採用の仕組みを解説します。",
  },
  {
    title: "■ 成功事例から紐解く「再現性のある経営」",
    description:
      "未経験から8ヶ月で月間500件訪問を達成した北山様（和歌山）など、成功者に共通する数字管理と行動量をデータで可視化して共有します。",
  },
  {
    title: "■ 質疑応答・個別相談コーナー",
    description:
      "「エリア選定は？」「自己資金はいくら必要？」など、検索には載っていないリアルな疑問に、実績ベースでその場でお答えします。",
  },
];

export const scheduleOptions: ScheduleSlot[] = [
  { date: "12月7日（日）", time: "11:00 - 12:00" },
  { date: "12月14日（日）", time: "11:00 - 12:00" },
  { date: "12月16日（火）", time: "20:30 - 21:30" },
  { date: "12月21日（日）", time: "11:00 - 12:00" },
];


