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

  // 電話番号のバリデーション（任意だが、入力された場合は形式チェック）
  if (values.phone && !/^[\d-]+$/.test(values.phone.replace(/\s/g, ""))) {
    errors.phone = "正しい電話番号を入力してください";
  }

  // セミナー日程のバリデーション（セミナー申込の場合）
  if (values.contactType === "seminar" && !values.seminarDate) {
    errors.seminarDate = "希望セミナー日程を選択してください";
  }

  return errors;
};

