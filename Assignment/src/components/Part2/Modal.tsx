
type ModalProps = {
    modal: () => void;
    name: string;
    onChangeName: any;
}


const Modal = ({modal, name, onChangeName}: ModalProps) => {

  return (
    <div className="absolute inset-0  bg-black/80 flex justify-center items-center">
        <div className="bg-white p-6 rounded shadow-md min-w-[300px]  ">
            <section className="flex flex-col gap-3">
                <h1 className="text-xl mb-4">This is a Modal. blabla</h1>
                <label>Name:</label>
                <input 
                    type="text" 
                    placeholder="Jhon Doe"
                    value={name}
                    onChange={onChangeName}
                    className="border-2"
                    />
            </section>
                    <div className="flex justify-between mt-3">
                        <button 
                            onClick={modal}
                            className="bg-red-300 p-2 rounded-xl"
                            > Close </button>

                        <button 
                            className="bg-green-400 rounded-xl p-2"
                            onClick={modal}> Submit</button>
                    </div>
        </div>
    </div>
  )
}

export default Modal
