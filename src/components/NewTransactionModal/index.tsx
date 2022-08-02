import { useState } from "react";
import Modal from "react-modal";
import closeImage from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
type NewTransactionModalProps = {
	isOpen: boolean;
	onRequestClose: () => void;
};
export function NewTransactionModal({
	isOpen,
	onRequestClose,
}: NewTransactionModalProps) {
	const [typeTransaction, setTypeTransaction] = useState("deposit");
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<button
				type="button"
				onClick={onRequestClose}
				className="react-modal-close"
			>
				<img src={closeImage} alt="Fechar modal" />
			</button>
			<Container>
				<h2>Cadastrar Transação</h2>
				<input placeholder="Titulo" />
				<input placeholder="Valor" type="number" />
				<TransactionTypeContainer>
					<RadioBox
						type="button"
						isActive={typeTransaction === "deposit"}
						onClick={() => {
							setTypeTransaction("deposit");
						}}
					>
						<img src={incomeImg} alt="Entrada" />
						<span>Entrada</span>
					</RadioBox>
					<RadioBox
						type="button"
						isActive={typeTransaction === "withdraw"}
						onClick={() => {
							setTypeTransaction("withdraw");
						}}
					>
						<img src={outcome} alt="Saida" />
						<span>Saida</span>
					</RadioBox>
				</TransactionTypeContainer>
				<input placeholder="Categoria" />
				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	);
}
