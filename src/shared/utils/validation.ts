import type { ContactFormData, FormErrors } from "../types";

export const validateContactForm = (values: ContactFormData): FormErrors => {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "お名前を入力してください";
  } else if (values.name.trim().length < 2) {
    errors.name = "お名前は2文字以上で入力してください";
  }

  if (!values.email.trim()) {
    errors.email = "メールアドレスを入力してください";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "正しいメールアドレスを入力してください";
  }

  if (!values.phone.trim()) {
    errors.phone = "電話番号を入力してください";
  }

  if (!values.preferredSchedule.trim()) {
    errors.preferredSchedule = "ご希望の相談日程を入力してください";
  }

  return errors;
};
