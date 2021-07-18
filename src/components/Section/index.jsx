
import "./styles.css"

export function Section() {
    return (
        <section className="section-info">
            <div className="section-box">
                <img src="icon-online.svg" alt="" />
                <h3>Online Banking</h3>
                <p>Apps web e mobile permitem que você controle suas finanças de qualquer lugar do mundo.</p>
            </div>

            <div className="section-box">
                <img src="icon-budgeting.svg" alt="" />
                <h3>Simple Budgeting</h3>
                <p>Receba notificações quando estiver próximo de atingir seus limites de crédito.</p>

            </div>
            <div className="section-box">
                <img src="icon-onboarding.svg" alt="" />
                <h3>Fast Onboarding</h3>
                <p>Abra sua conta em minutos online e começe a controlar o seu dinheiro.</p>

            </div>

            <div className="section-box">
                <img src="icon-api.svg" alt="" />
                <h3>Open API</h3>
                <p>Gerencie suas economias. Rastrear seu dinheiro nunca foi tão fácil.</p>

            </div>
        </section>
    )
}