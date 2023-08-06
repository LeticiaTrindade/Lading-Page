import "./style.css";
import woman from "../../images/woman.png";

function Banner() {
  return (
    <div class="banner d-flex justify-content-around align-items-end">

      <div class="woman position-relative">
        <img src={woman} />
        <div class=" text d-flex flex-wrap position-absolute">
          <mark>Frase de</mark>
          <mark>efeito</mark>
          <mark>para impactar</mark>
          <mark>e fazer a</mark>
          <mark>pessoa</mark>
          <mark>querer</mark>
          <mark>estudar</mark>
        </div>

      </div>

      <div>
        <form>
          <div class="d-flex flex-column  ">
            <label for="name"><b>Nome*</b></label>
            <input ></input>
          </div>
          <div class="d-flex flex-column">
            <label for="email"><b>Email*</b></label>
            <input></input>
          </div>
          <div class="d-flex flex-column">
            <label for="state"><b>Estado*</b></label>
            <input></input>
          </div>
          <div class="d-flex flex-column">
            <label for="city"><b>Cidade*</b></label>
            <input></input>
          </div>
          <div class="d-flex flex-column">
            <label for="school"><b>Escola*</b></label>
            <input></input>
          </div>
          <div class="button">
            <button type="submit"><b>Cadastre-se</b></button>
            <p>Teremos cuidado com suas informações</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Banner;
