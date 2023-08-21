import "./App.css";
import { Header } from "./Header";
import { BelowNav } from "./BelowNav";
const contentList = [
  {
    poster : "	https://img.freepik.com/premium-photo/abstract-modern-tech-programming-code-screen-developer-c-programming-language-computer-script-technology-background-software_505353-472.jpg",
    description : "Best Ways to Learn Full Stack Development in 2023"
  },
  {
    poster : "https://img.freepik.com/premium-photo/abstract-modern-tech-programming-code-screen-developer-c-programming-language-computer-script-technology-background-software_505353-472.jpg",
    description : "The Ultimate Guide to Real-World Full Stack Development Applications"
  },
  {
    poster : "https://img.freepik.com/premium-photo/abstract-modern-tech-programming-code-screen-developer-c-programming-language-computer-script-technology-background-software_505353-472.jpg",
    description : "The Top 10 Tools Every Full Stack Developer Should Master in 2023"
  }
 ]

function App() {
  return (
    <div className="App">
      <Header />
      <BelowNav />
      <ContentCards/>
    </div>
  );
  
}
function ContentCards(){
  const content = contentList
  return(
   <div className="content-mapping">
     {content.map((content,index)=>(
        <ContentDetails content ={content} id={index}/>
     ))}
   </div>
  )
}
function ContentDetails({content , id}){
  return(
    <div className="content-container">
      <div className="poster">
        <img className="content-poster" src={content.poster} alt={content.poster} />
        </div>
        <div className="content-description">
              <h3>{content.description}-{id}</h3>
        </div>
        <button>More</button>
    </div>
  )
}
export default App;
