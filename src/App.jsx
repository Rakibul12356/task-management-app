import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Hero from "./hero/Hero";
import TaskBoard from "./Task/TaskBoard";

export default function App() {
  return (
    <div >
      <Header/>
     <div className="flex flex-col justify-center items-center">
       <Hero/>
      <TaskBoard/>
     </div>
      <Footer/>
    </div>
  )
}


