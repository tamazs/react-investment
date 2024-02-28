import logo from '../assets/investment-calculator-logo.png'

export default function Header() {
    return (
        <header id="header">
            <img src={logo} alt="Logo of a bag of money" />
            <h1>Invesment calculator</h1>
        </header>
    )
}