import { PropsWithChildren, Children } from "react";

export type TableProps = {
    id: number;
} & PropsWithChildren;

export function Table({ id, children }: TableProps) {
    return (
        <button type="button">
            <strong>Mesa {id}</strong>
            <span>{Children.toArray(children).length} itens</span>
        </button>
    );
}