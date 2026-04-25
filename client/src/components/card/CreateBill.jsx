import { Modal } from "antd";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      title="Fatura Oluştur"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
}

export default CreateBill



    


