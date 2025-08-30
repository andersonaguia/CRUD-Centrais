export interface FeedbackProps {
  message: string;
  onConfirm?: () => void;
  isError?: boolean;
}