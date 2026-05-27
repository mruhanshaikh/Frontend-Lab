import style from "./Count.module.css"

const Count = () => {
  return (
    <div className={style.Count}>
        <div className={style.CountDesign}>
        <span>12000 +</span>
        <span>Total Play in Hr's</span>
        </div>
        <div className={style.CountDesign}>
        <span>89 %</span>
        <span>Player Retantion Rate</span>
        </div>
        <div className={style.CountDesign}>
        <span>1000 +</span>
        <span>Active Members</span>
        </div>
        <div className={style.CountDesign}>
        <span>125 +</span>
        <span>Annual Tournaments</span>
        </div>
    </div>
  )
}

export default Count