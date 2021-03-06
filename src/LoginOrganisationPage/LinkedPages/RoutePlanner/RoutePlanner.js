import "./RoutePlanner.css";
import OrgHeader from "../../components/OrgHeader/OrgHeader";
import DirectionsComponent from "../../../DirectionsComponent/DirectionsComponent";
import { useEffect, useState } from "react";
import { getAllApplications, getApplicationByID } from "../../../API.js";

const RoutePlanner = () => {

    const [applications, setApplications] = useState([]);
    const [application, setApplication] = useState({});
    const [applicationID, setApplicationID] = useState(-1);

    useEffect( () => {
        getAllApplications(setApplications)

    }, []);

    const getApplication = async () => {
        await getApplicationByID(applicationID, setApplication)
        returnApplicationBar()
    }

    const returnApplicationBar = () => {
        try {
            return <section className="applicationBar">
                
            <section className="rp__applicationInfo">
                <h3>Application Ref. ID: {application.id}</h3>
                <section className="rp__adopteeInfo">
                    <h3>Customer Info.</h3>
                    <span>Application number: {application?.id}</span>
                    <span>Adoptee: {application?.customer.firstName} {application?.customer.lastName}</span>
                    <span>Location: {application?.customer.location}</span>
                    <span>Previously adopted? {application?.customer.previousAdoptions.toString()}</span>
                    <span>App. Status: {application?.customer.application[0].applicationStatus}</span>
                </section>

                <section className="rp__animalInfo">
                    <h3>Animal Info.</h3>
                    <span>Name: {application?.customer.application[0].animal.name}</span>
                    <span>Sex: {application?.customer.application[0].animal.sex}</span>
                    <span>DOB: {application?.customer.application[0].animal.dateOfBirth}</span>
                    <span>Location: {application?.customer.application[0].animal.location}</span>
                    <span>Organisation: {application?.customer.application[0].animal.organisation.name}</span>
                </section>

                <section className="rp__animalImg">
                    <img src={application?.customer.application[0].animal.photoUrl} alt=""/>
                </section>
                <span></span> 
            </section>
            
        </section> 
        } catch (e) {
            return <></>
        }
    }


  return (
    <>
        <OrgHeader />

        <header className="rp__header">
            <h2>Route Planner</h2>
            <div>
                <h3>Application Required: </h3>
                <form>
                    <select defaultValue="value" onChange={(e) => setApplicationID(e.target.value)}>
                        <option value="value" disabled hidden>Application ID</option>
                        {
                            applications?.map( (app, index) => {
                                return <option key={index}>{app.id}</option>
                            })
                        }
                    </select>
                    <button type="button" onClick={getApplication}>Get Application</button>

                    <button>Reset</button>
                </form>
            </div>
        </header>

        <main className="rp__main">
            <DirectionsComponent />

            {
                returnApplicationBar()
            }

        </main>
    </>
  )
}

export default RoutePlanner