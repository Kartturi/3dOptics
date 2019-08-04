import React from "react"

const Contact = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  const handleInputChange = e => {}

  return (
    <div className="contact">
      <div className="contact__top">
        <h3 className="contact__top_title">
          Kiinnostuitko? Ota yhteyttä niin jutellaan lisää
        </h3>
      </div>
      <div className="contact__lower">
        <div className="contact__left">
          <form onSubmit={handleSubmit}>
            <label>
              Nimi
              <input type="text" placeholder="Nimi" />
            </label>
            <label>
              Sähköposti
              <input type="email" placeholder="Sähköposti" />
            </label>
            <label>
              Puhelin
              <input type="phone" placeholder="Puhelin" />
            </label>
            <label>
              Viesti
              <textarea placeholder="Viesti"></textarea>
            </label>

            <button type="submit">Lähetä</button>
          </form>
        </div>
        <div className="contact__right">
          <p className="contact__right_item contact__right_item_top">
            Yhteystiedot:
          </p>
          <p className="contact__right_item">Niko Heikelä</p>
          <p className="contact__right_item">050640405</p>
          <p className="contact__right_item">Niko.heikelä@.kuumalinja@com</p>
          <p className="contact__right_item">Jonnentie 5</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
