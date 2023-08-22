import { PropsWithChildren, Children } from "react";
import { Board, OrdersContainer } from "../styles";

export type OrderProps = {
    title: string;
    icon: string;
} & PropsWithChildren;

export function Order({ title, icon, children }: OrderProps) {
    return (
        <Board>
            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>({Children.toArray(children).length})</span>
            </header>

            <OrdersContainer>{children}</OrdersContainer>
        </Board>
    );
}