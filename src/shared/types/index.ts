/**
 * 共通型定義
 * プロジェクト全体で使用する型を一元管理
 */

// お問い合わせフォーム関連
export type ContactType = "seminar" | "consultation";

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  contactType: ContactType;
  seminarDate: string;
};

// フォーム送信状態
export type FormStatus = "idle" | "validating" | "submitting" | "success" | "error";

// バリデーションエラー
export type FormErrors = Partial<Record<keyof ContactFormData | "_form", string>>;

