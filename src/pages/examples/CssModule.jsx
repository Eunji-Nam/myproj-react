import './CssModule.scss';
// import Styles from './CssModule.module.css';

function CssModule() {
  return (
    <div className="css-module">
      {/* <div className={Styles.cssmodule}> */}
      <h2>Css Module</h2>
      <div className="content">내용 내용</div>
      <div className="date">2022.01.11</div>
    </div>
  );
}

export default CssModule;
