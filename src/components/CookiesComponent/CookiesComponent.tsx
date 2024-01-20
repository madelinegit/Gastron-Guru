import { useEffect, useState } from "react";
import "./CookiesComponent.scss";

function CookiesComponent() {
  const [popup, setPopup] = useState(false);

  function showPopup() {
    setPopup(!popup);
  }

  useEffect(() => {
    setTimeout(() => {
      setPopup(!popup);
    }, 3000);
  }, []);

  return (
    <>
      {popup && (
        <main className="modal">
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
              <p>confirm</p>
            </button>
          </section>
        </main>
      )}
    </>
  );
}

export default CookiesComponent;
