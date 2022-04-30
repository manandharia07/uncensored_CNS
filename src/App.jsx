import AboutUS from './Componets/AboutUS';
import NavBar from './Componets/Navbar'
import MainSection from './Componets/mainSection'
import LogoutButton from './Componets/Logoout'
import SearchUser from './Componets/SearchUser';
function App() {
  return (
    <>
      <NavBar />
      <SearchUser/>
      {/* <MainSection /> */}
      <AboutUS />
      {/* <LogoutButton /> */}
    </>
  );
}

export default App;
