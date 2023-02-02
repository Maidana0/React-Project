import { ToastContainer } from 'react-toastify';
import { toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ToastContain = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable={false}
      theme="dark"
    />
  )
}


export const Toastify = () => {
  toast.success('Agregado al Carrito!', {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
    style: {
      color: "yellow",
      borderRadius: "18px",
      fontWeight: "600",
      fontSize: ".85em",
    }
  });
}






export const FavToastContainer = () =>
  <ToastContainer
    position="bottom-left"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover={false}
    theme="dark"
    transition={Flip}

  />

export const FavToastify = (mensaje) => {
    toast(`Producto ${mensaje} Favoritos!`, {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
      style: {
        color: "white",
        borderRadius: "18px",
        fontWeight: "600",
        fontSize: ".85em",
      }
      });
  }
   