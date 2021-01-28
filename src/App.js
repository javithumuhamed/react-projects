import './App.css';
import Header from '.\\components\\Header.js';
import Accesories from './assets/Desktop-Accessories.jpg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'
import Item from './components/Item.js';



function App() {
  return (
    <div className="App">

    <Header/>

    <div className="app__itemsContainer">


    <Item
  title='ModelS'
  desc="Order Online for Touchless Delivery"
  descLink=''
  backgroundImage ={ModelS}
  LeftBtnTxt='CUSTOM ORDER'
  LeftBtnLink=''
  righBtnTxt='EXISTING INVENTORY'
  twoButtons='true'
  righBtnLink=''
  first
/>
<Item
  title='Model3'

  desc="Order Online for Touchless Delivery"
  descLink=''
  backgroundImage ={Model3}
  LeftBtnTxt='CUSTOM ORDER'
  LeftBtnLink=''
  righBtnTxt='EXISTING INVENTORY'
  righBtnLink=''
  twoButtons='true'

/>
<Item
  title='ModelX'

  desc="Order Online for Touchless Delivery"
  descLink=''
  backgroundImage ={ModelX}
  LeftBtnTxt='CUSTOM ORDER'
  LeftBtnLink=''
  righBtnTxt='EXISTING INVENTORY'
  righBtnLink=''
  twoButtons='true'

/>
<Item
  title='ModelY'
  desc="Order Online for Touchless Delivery"

  descLink=''
  backgroundImage ={ModelY}
  LeftBtnTxt='CUSTOM ORDER'
  LeftBtnLink=''
  righBtnTxt='EXISTING INVENTORY'
  righBtnLink=''
  twoButtons='true'


/>
<Item
  title='Lowest Cost Solar Panels in America'
  desc="Money-back Guarantee"

  descLink=''
  backgroundImage ={SolarPanels}
  LeftBtnTxt='ORDER NOW'
  LeftBtnLink=''
  righBtnTxt='LEARN MORE'
  righBtnLink=''
  twoButtons='true'

/>
<Item
  title='Solar for New Roofs'

  desc="Solar Roof Cost Less Than a New Roof Plus Solar Panels"
  descLink=''
  backgroundImage ={SolarRoof}
  LeftBtnTxt='CUSTOM ORDER'
  LeftBtnLink=''
  righBtnTxt='EXISTING INVENTORY'
  righBtnLink=''
  twoButtons='true'

/>


<Item
  title='Accesories'
  desc="The accessories page of the Tesla LOL i cant copy every text"
  descLink=''
  backgroundImage ={Accesories}

  LeftBtnTxt='SHOP NOW'
  LeftBtnLink=''
  
  
/>



    </div>

    
    </div>
  );
}

export default App;
