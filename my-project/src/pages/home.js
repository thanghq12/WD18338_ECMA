import FooterComponent from "../components/footer"
import HeaderComponent from "../components/header"

const HomePage = function() {
    return `
        ${HeaderComponent()}
        <h1>Đây là trang home</h1>
        ${FooterComponent()}
    `
}

export default HomePage;