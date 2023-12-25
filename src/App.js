import './App.css';
import AudiCard from './components/AudiCard';
import  BmwCard from './components/BMW';
import Mercedes from './components/Mercedes';

function App(){
  return(
    <div>
    <div className='App'>
    <div className='upage'>
      <img className='img' src='https://img.freepik.com/vecteurs-libre/creation-logo-service-voiture_23-2149750702.jpg?size=626&ext=jpg&ga=GA1.2.754863420.1703535885&semt=ais' alt='logocar' />
      <h1 className='title '>les meilleurs voiture 2023</h1>
      </div>
    <div className='cardsContainer'>
    <AudiCard/>
      <BmwCard/>
      <Mercedes/>
    </div>
     
     
    </div>
 </div> 
 )
}
export default App;