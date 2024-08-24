import { Link } from "react-router-dom";
import styles from "./MyRout.module.css"
export function MyRout(){
    return(
        <div className={styles.div_div} >
            <div className={styles.block_div}>
                <div className={styles.main_block_link}>
                    <Link className={styles.block_link} to="/create_qr"><div className={styles.link_block}>create your qr-code</div></Link>
                </div>
                <div className={styles.main_block_link}>
                    <Link className={styles.block_link} to="/get_qr"><div className={styles.link_block}>get your qr-code</div></Link>
                </div>
                <div className={styles.main_block_link}>
                    <Link className={styles.block_link} to="/page"><div className={styles.link_block}>example qr-code</div></Link>
                </div>
                <div className={styles.main_block_link}>
                    <Link className={styles.block_link} to="/delete_qr"><div className={styles.link_block}>delete your qr-code</div></Link>
                </div>
            </div>
            <hr style={{marginBottom: "200px"}}></hr>
            <div className={styles.block_img}>
                <img src="src\assets\qr_code.png" style={{width:" 400px",height: "400px"}}></img>
            </div>
            <div className={styles.block_text}>
                <p className={styles.text}>Добро пожаловать на наш сервис по созданию QR-кодов. Здесь вы можете легко и быстро создать персонализированный QR-код, который приведёт ваших пользователей на специально разработанную для них страницу. Воспользуйтесь всеми преимуществами цифрового мира для вашего бизнеса, маркетинга или личных целей!</p>
            </div>
        </div>
    )
}