import { Link } from "react-router-dom";

const ConverterPage = () => {
  return (
    <nav>
      <h1>Converter Page</h1>
      <Link to="/">
        <div>Конверер</div>
      </Link>
      <Link to="/currencys">
        <div>Курсы валют</div>
      </Link>
      <Link to="/cripto">
        <div>Курсы криптовалют</div>
      </Link>
    </nav>
  );
};

export default ConverterPage;