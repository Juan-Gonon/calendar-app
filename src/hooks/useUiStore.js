import { useDispatch, useSelector } from "react-redux"
import { onCloseDateModal, onOpenDateModal } from "../store"


export function useUiStore() {
    const { isDateModalOpen } = useSelector((state) => state.ui)
    const dispatch = useDispatch()

    const openDateModal = () => {
        dispatch(onOpenDateModal())
    }
    const closeDateModal = () => {
        dispatch(onCloseDateModal())
    }
  return {
    // Propiedades
    isDateModalOpen,
    // métodos
    openDateModal,
    closeDateModal
  }
}
