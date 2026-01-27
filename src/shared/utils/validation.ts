import type { ContactFormData, FormErrors } from "../types";

export const validateContactForm = (values: ContactFormData): FormErrors => {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "縺雁錐蜑阪ｒ蜈･蜉帙＠縺ｦ縺上□縺輔＞";
  } else if (values.name.trim().length < 2) {
    errors.name = "縺雁錐蜑阪・2譁・ｭ嶺ｻ･荳翫〒蜈･蜉帙＠縺ｦ縺上□縺輔＞";
  }

  if (!values.email.trim()) {
    errors.email = "繝｡繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ繧貞・蜉帙＠縺ｦ縺上□縺輔＞";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "豁｣縺励＞繝｡繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ繧貞・蜉帙＠縺ｦ縺上□縺輔＞";
  }

  if (!values.preferredSchedule.trim()) {
    errors.preferredSchedule = "縺泌ｸ梧悍縺ｮ逶ｸ隲・律遞九ｒ蜈･蜉帙＠縺ｦ縺上□縺輔＞";
  }

  return errors;
};
