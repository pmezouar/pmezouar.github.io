function Form() {
  return (
    <>
      <form
        action="https://formspree.io/f/mzzrbbod"
        autoComplete="off"
        method="POST"
      >
        <i className="bi bi-envelope"></i>
        <input type="text" required placeholder="Nom et prénom" name="name" />
        <input type="email" required placeholder="Email" name="email" />
        <input
          type="tel"
          required
          placeholder="Téléphone"
          name="phone_number"
        />
        <textarea
          required
          placeholder="Parlez-moi de votre projet..."
          name="message"
          rows="6"
        ></textarea>

        <button type="submit" className="btn btn-primary">
          Envoyer <i className="bi bi-send"></i>
        </button>
      </form>
    </>
  );
}

export default Form;
