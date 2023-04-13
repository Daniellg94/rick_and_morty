import { useLocation } from "react-router-dom"; 
const About = () => {

    const location=useLocation();
     console.log(location)       
    return (
//userParams userNavigate
        <nav>
            <h1>Este es el componente About</h1>
            <p>estamos aprendiendo routeing</p>
        </nav>
    )
}
export default About;