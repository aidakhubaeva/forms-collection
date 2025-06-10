export interface FormsProps {
    onSelect: (key: string) => void;
    activeForm: string | null;
    children: React.ReactNode;
}