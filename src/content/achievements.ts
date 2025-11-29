export type ChartPoint = {
  month: string;
  success: number;
  industry: number;
};

export type FailureItem = {
  title: string;
  description: string;
};

export const chartData: ChartPoint[] = [
  { month: "0ヶ月", success: 0, industry: 0 },
  { month: "3ヶ月", success: 45, industry: 20 },
  { month: "6ヶ月", success: 78, industry: 32 },
  { month: "9ヶ月", success: 88, industry: 41 },
  { month: "12ヶ月", success: 90, industry: 47 },
];

export const failures: FailureItem[] = [
  {
    title: "融資否認 2%",
    description:
      "資料の作り込み不足・面談での根拠提示ができなかったケースをすべて公開し、改善策を共有。",
  },
  {
    title: "黒字化未達成 10%",
    description:
      "市場選定ミス、採用遅延による稼働率ダウンなど、失敗パターン別のリカバリープランを提示。",
  },
];


