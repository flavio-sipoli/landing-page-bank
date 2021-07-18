import "./styles.css"

export function Footer() {
    return (
        <footer className="footer">
            <div className="coluna">
                <a href=""><img src="icon-facebook.svg" alt="" /></a>
                <a href=""><img src="icon-instagram.svg" alt="" /></a>
                <a href=""><img src="icon-youtube.svg" alt="" /></a>
            </div>
            <p>
                &copy; Created by Flávio Sipoli
            </p>
        </footer>
    )
}