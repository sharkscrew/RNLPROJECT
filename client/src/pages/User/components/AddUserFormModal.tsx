import FloatingLabelInput from "../../../components/input/FloatingLabelInput"
import Modal from "../../../components/Modal"

const AddUserFormModal = () => {
    return (
        <>
            <Modal>
                <form>
                    <h1 className="text-2xl border-b border-gray-100 p-4 font-semibold mb-4">
                        Add User Form
                    </h1>
                    <div className="grid grid-cols-2 gap-4 border-b border-gray-100 mb-4">
                        <div className="col-span-2 md:col-span-1">
                            <div className="mb-4">
                                <FloatingLabelInput label="First Name" type="text" name="first_name" required autoFocus />
                            </div>
                        </div>
                    </div>
                </form>
            </Modal>
        </>
    )
}
export default AddUserFormModal