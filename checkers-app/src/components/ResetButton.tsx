import {
  CANCEL,
  RESET_GAME,
  RESET_MODAL_CONFIRMATION_PROMPT,
} from "../constants/gameConstants";
import useResetButton from "../hooks/useResetButton";
import "../styles/ResetButton.css";
import "../styles/ConfirmResetGameModal.css";
import Modal from "./Modal";

const ResetButton = (): JSX.Element => {
  const {
    isModalOpen,
    handleCancelReset,
    handleConfirmReset,
    handleResetClick,
  } = useResetButton();

  return (
    <>
      <button className="reset-button" onClick={handleResetClick}>
        {RESET_GAME}
      </button>

      {isModalOpen && (
        <Modal
          title={RESET_MODAL_CONFIRMATION_PROMPT}
          onConfirm={handleConfirmReset}
          onCancel={handleCancelReset}
          confirmText={RESET_GAME}
          cancelText={CANCEL}
        />
      )}
    </>
  );
};

export default ResetButton;
