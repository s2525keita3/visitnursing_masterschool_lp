import { useCallback, useState } from "react";
import type { ContactFormData, FormErrors, FormStatus } from "../types";

type UseFormOptions<T> = {
  initialValues: T;
  validate?: (values: T) => FormErrors;
  onSubmit: (values: T) => Promise<void> | void;
};

/**
 * フォーム管理カスタムフック
 * バリデーション、エラーハンドリング、送信処理を統合
 */
export const useForm = <T extends ContactFormData>({
  initialValues,
  validate,
  onSubmit,
}: UseFormOptions<T>) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  // 汎用フィールド更新ハンドラー（DRY原則）
  // パフォーマンス最適化：errorsを依存配列から削除し、関数内で直接参照（無限ループ防止）
  const handleChange = useCallback(
    <K extends keyof T>(
      field: K,
      value: T[K] | ((prev: T[K]) => T[K])
    ) => {
      setValues((prev) => ({
        ...prev,
        [field]: typeof value === "function" ? value(prev[field]) : value,
      }));
      // エラーをクリア（errorsの現在値を参照）
      setErrors((prev) => {
        if (prev[field as keyof FormErrors]) {
          const newErrors = { ...prev };
          delete newErrors[field as keyof FormErrors];
          return newErrors;
        }
        return prev;
      });
    },
    [] // errorsを依存配列から削除してパフォーマンスを最適化
  );

  // 入力イベントハンドラー
  const handleInputChange = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
      handleChange(name as keyof T, value as T[keyof T]);
    },
    [handleChange]
  );

  // バリデーション実行
  const validateForm = useCallback((): boolean => {
    if (!validate) return true;

    const validationErrors = validate(values);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  }, [values, validate]);

  // フォーム送信
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // バリデーション
      setStatus("validating");
      if (!validateForm()) {
        setStatus("error");
        return;
      }

      // 送信処理
      try {
        setStatus("submitting");
        await onSubmit(values);
        setStatus("success");
        setValues(initialValues);
        setErrors({});
      } catch (error) {
        setStatus("error");
        setErrors({
          _form: error instanceof Error ? error.message : "送信に失敗しました。",
        });
      }
    },
    [values, validateForm, onSubmit, initialValues]
  );

  // リセット
  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setStatus("idle");
  }, [initialValues]);

  return {
    values,
    errors,
    status,
    handleChange,
    handleInputChange,
    handleSubmit,
    reset,
    setValues,
  };
};

