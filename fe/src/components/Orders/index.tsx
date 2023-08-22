import { Order } from "./components/Order";
import { Table } from "./components/Table";
import { Container } from "./styles";

export function Orders() {
    return (
        <Container>
            <Order icon="⏰" title="Fila de Espera">
                <Table id={1}>
                    <span />
                    <span />
                </Table>
                <Table id={2}>
                    <span />
                    <span />
                </Table>
            </Order>
            <Order icon="🔄" title="Em Andamento">
                <Table id={3}>
                    <span />
                    <span />
                </Table>
                <Table id={4}>
                    <span />
                    <span />
                </Table>
                <Table id={5}>
                    <span />
                    <span />
                </Table>
            </Order>
            <Order icon="✅" title="Concluído">
                <Table id={6}>
                    <span />
                    <span />
                </Table>
            </Order>
        </Container>
    );
}