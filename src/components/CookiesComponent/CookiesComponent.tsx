import { useEffect, useState } from "react";
import "./CookiesComponent.scss";
import useLocalStorage from "./useLocalStorage";

function CookiesComponent() {
  const [popup, setPopup] = useState(false);
  const [value, setValue] = useLocalStorage("cookies-agreement", false);

  function showPopup() {
    setPopup(!popup);
    setValue(!value);
  }

  useEffect(() => {
    setTimeout(() => {
      setPopup(!popup);
    }, 3000);
  }, []);

  return (
    <>
      {popup && !value && (
        <main className="modal">
          <div className="modal-container">
            <section className="modal-text">
              <h3>Cookies agreement</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium voluptatem a doloremque Inde omnis iste natus error
                sit voluptatem accusantium voluptatem a doloremque
              </p>
            </section>
            <section className="modal-confirm">
              <button onClick={showPopup} className="modal-btn">
                confirm
              </button>
            </section>
          </div>
        </main>
      )}
    </>
  );
}

export default CookiesComponent;
