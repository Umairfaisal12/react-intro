import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";


const BillingPage = () => {

//state
const [name, setname] = useState("");
const [address, setaddress] = useState("");
const [email, setemail] = useState("");
const [contact, setcontact] = useState("");
   
// page eka load weddima run wenna oni ewa
useEffect(() => {
    document.title = "BillingPage";
},
[])


return(
        <div>
          
           <NavBar/>
            <form>
                <div>Patient Name</div>
                <input placeholder="Patient Name" value={name} onChange={(e) => {setname(e.target.value)}}/>
                <br></br>
                <div>Patient Address</div>
                <input placeholder="Patient Address"value={address} onChange={(e) => {setaddress(e.target.value)}}/>
                <div>Patient Email</div>
                <input placeholder="Patient Email" value={email} onChange={(e) => {setemail(e.target.value)}}/>
                <br></br>
                <div>Patient Contact</div>
                <input placeholder="Patient Contact No" value={contact} onChange={(e) => {setcontact(e.target.value)}}/>
            </form>
            
        </div>
    );
}
export default BillingPage; 

