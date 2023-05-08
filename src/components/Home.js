import React from "react"
import "../style/Home.css"
import Toggle from "../components/Toggle"
import SliderRecomendation from "./SliderRecomendation"

const whatTake = [
    {
        h3Txt: "I will find the source of the problem"
    },
    {
        pTxt: "In order to perform effective and lasting therapy, the source of the problem must be found. It is not enough to perform the procedure in the place that hurts, you need to find out why the pain arose so that the therapy is permanent and the pain never comes back."
    },
    {
        h3Txt: "Methods tailored to you"
    },
    {
        pTxt: "Different health problems require different interventions. Not every problem can be solved with massage and sometimes other techniques have to be used, such as manual therapy, dry needling, fascial therapy."
    },
    {
        h3Txt: "Many disciplines"
    },
    {
        pTxt: "Knowledge in the field of rehabilitation is supplemented with information in the field of dietetics and sports training."
    }
]
const dataWhyWorth = [
    {
        h3Txt: "Experience",
        pTxt: "I have worked in various sports."
    },
    {
        h3Txt: "Knowledge",
        pTxt: "Continuous updating of knowledge and training"
    },
    {
        h3Txt: "Practice",
        pTxt: "I play sports myself"
    }
]

const Home = () => {
    return (
        <>
            <div className="panel-group">
                <Toggle title="Why is it worth it?">
                    {dataWhyWorth.map((txt, id) => (
                        <div key={id} >
                            <h3>{txt.h3Txt}</h3>
                            <p>{txt.pTxt}</p>
                        </div>
                    ))}
                </Toggle>
                <h3 className="lastH3">I combine many disciplines</h3>
                <p className="lastP">Rehabilitation, training programming and selection of appropriate supplementation</p>
            </div>

            <SliderRecomendation />

            <div className="panel-group">
                <Toggle title="WHAT DO YOU GET?">
                    {whatTake.map((txt, id) => (
                        <div key={id}>
                            <h3>{txt.h3Txt}</h3>
                            <p>{txt.pTxt}</p>
                        </div>
                    ))}
                </Toggle>
                <h3 className="lastH3" >Accurate diagnosis</h3>
                <p className="lastP" >During the first examination, I will conduct a thorough interview, follow the history of the disease and previous treatment. We will talk about past injuries, because they are often the source of the problem. Before I go to therapy, I will perform muscle tests, check whether the ligaments are damaged, and examine the range of motion.</p>
            </div>

        </>
    );
}

export default Home
