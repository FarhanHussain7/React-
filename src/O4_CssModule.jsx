import style from './css/Css_profile.module.css';
function CssMod(){
    return(
        <div>
            <div className={style.cards}>
                <img className={style.img} src="/business-8308579.jpg" alt="" />
                <div className={style.cardtext}>
                    <h1>Farhan hussain</h1>
                    <p>Software developer</p>
                </div>
            </div>
        </div>
    )
}

export default CssMod;