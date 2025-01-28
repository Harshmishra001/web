
// we will get data from backed server but there is a problem in this approach as it flashes the data first to 0 then to its value



import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  // Use Recoil state to manage notification counts
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // Fetch data from backend when the component is mounted
  useEffect(() => {
    axios.get("http://localhost:3007/notification")
      .then(res => {
        // Update the Recoil state with the fetched data
        setNetworkCount(res.data);
      })
      .catch((err) => {
        console.error("Error fetching notification data:", err);
      });
  }, []);

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App;


