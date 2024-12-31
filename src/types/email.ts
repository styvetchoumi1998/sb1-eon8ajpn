export interface EmailRule {
  olderThan: number; // days
  fromAddress?: string;
  subject?: string;
  hasAttachment?: boolean;
}

export interface EmailConfig {
  rules: EmailRule[];
  enabled: boolean;
}