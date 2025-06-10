export interface Field {
    name: string;
    type?: string;
    placeholder?: string;
}

export interface FormRendererProps {
    title: string;
    description?: string;
    fields: Field[];
}