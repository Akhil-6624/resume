import Resume from "./components/resume";
import Header from "./components/header";
import Education from "./components/education"
import Skills from "./components/skills"
import Exp from "./components/experience";
import Hobbies from "./components/hobbies";
import Award from "./components/awards";
import Declar from "./components/declaration";
function App() {
return (
<div className="App">
<div className="container p-5" >
<Resume/>
<Header Name="V.Akhil Reddy" Email="Vyduyulaakhilreddy2004@gamil.com" Phone="9390660752"
Address="parkal ,vill .dist ,warangal" />
<hr style={{height:'10px',backgroundColor:'lightblue'}}></hr>
<Education degree="B.Tech" University="MallaReddy University " year="2025-26"
City="Hyderabad"/>
<hr style={{height:'10px',backgroundColor:'lightblue'}}></hr>
<Skills skills="JAVASCRIPT , REACT ,JAVA , SQl ,Python , Html "/>
<hr style={{height:'10px',backgroundColor:'lightblue'}}></hr>
<Exp skills="Sparkler Solutions" />
<hr style={{height:'10px',backgroundColor:'lightblue'}}></hr>
<Hobbies hobbie1="1.playing cricket" hobbie2 ="2.reading books"/>
<hr style={{height:'10px',backgroundColor:'lightblue'}}></hr>
<Award sports="Our Cricket Team has Won the trophy during clg sports fest . which
i was also part of it" club="I was also a part of a culb which i had contributed a
lot" />
<hr style={{height:'10px',backgroundColor:'lightblue'}}></hr>
<Declar/>
</div>
</div>
);
}
export default App;

