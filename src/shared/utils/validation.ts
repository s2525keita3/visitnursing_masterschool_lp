import type { ContactFormData, FormErrors } from "../types";

/**
 * フォームバリデーション関数
 * 型安全なバリデーションルールを定義
 */
export const validateContactForm = (
  values: ContactFormData
): FormErrors => {
  const errors: FormErrors = {};

  // お名前のバリデーション
  if (!values.name.trim()) {
    errors.name = "お名前を入力してください";
  } else if (values.name.trim().length < 2) {
    errors.name = "お名前は2文字以上で入力してください";
  }

  // メールアドレスのバリデーション
  if (!values.email.trim()) {
    errors.email = "メールアドレスを入力してください";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "正しいメールアドレスを入力してください";
  }

  // 電話番号のバリデーション（削除：UIから電話番号フィールドを削除したため）

  // セミナー日程のバリデーション（セミナー申込の場合）
  if (values.contactType === "seminar" && !values.seminarDate) {
    errors.seminarDate = "希望セミナー日程を選択してください";
  }

  // 法的同意のバリデーション（必須）
  if (!values.agreedToTokushoho) {
    errors.agreedToTokushoho = "特定商取引法の表記に同意してください";
  }
  if (!values.agreedToPrivacy) {
    errors.agreedToPrivacy = "プライバシーポリシーに同意してください";
  }

  return errors;
};

