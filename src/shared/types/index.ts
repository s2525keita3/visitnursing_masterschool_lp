export type ContactType = "seminar" | "consultation";

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  contactType: ContactType;
  seminarDate: string;
  preferredSchedule: string;
};

export type FormStatus = "idle" | "validating" | "submitting" | "success" | "error";

export type FormErrors = Partial<Record<keyof ContactFormData | "_form", string>>;
