import React, { Component } from "react"
import Slider from "./Slider"
import "../style/SliderRecomentadion.css"

// img
import img1 from "../img/imgRecomendation/opinion3.png"
import img2 from "../img/imgRecomendation/opinion6.jpg"

const properties =
    [
        {
            img: `${img1}`,
            index: 0,
            h3Txt: "Tomasz Sokołowski ESANOK.L WILKI SANOK – EKSTRAKLASA UNHOKEJA",
            pTxt: "Three weeks before an away game, I injured my knee ligaments. I took advantage of rehabilitation with Tomek. As promised, I could play in these important matches for our team. I heartily recommend"
        },
        {
            img: `${img2}`,
            index: 1,
            h3Txt: "Jakub Zmarz TSV MANSARD SANOK – 1 LIGA SIATKÓWKI",
            pTxt: "In December, I asked Tomek to write down an individual diet to lose a few kilos without losing sports results. The goal has been achieved. I recommend working with Tomek."
        },
        {
            img: `${img1}`,
            index: 2,
            h3Txt: "Piotr Michalski MISTRZ POLSKI W WIELOBOJU SPTRINTERSKIM, UCZESTNIK OLIMPIADY W PJONGCZANG ",
            pTxt: "The life of an athlete is a constant struggle with injuries and fatigue, then it is worth taking care of good regeneration. I recommend JASIK SPORTS REHABILITATION AND DIETETIC office."
        },
        {
            img: `${img2}`,
            index: 3,
            h3Txt: "Jakub Sujkowski ESANOK.PL WILKI SANOK – EKSTRAKLASA UNIHOKEJA",
            pTxt: "I was haunted by multiple ankle injuries. Each time I was afraid that I wouldn't be able to play in the next match. Fortunately, TOMASZ JAKSIK SPORTS REHABILITATION came to the rescue. I recommend!"
        },
        {
            img: `${img1}`,
            index: 4,
            h3Txt: "Jakub Sujkowski ESANOK.PL WILKI SANOK – EKSTRAKLASA UNIHOKEJA",
            pTxt: "I was haunted by multiple ankle injuries. Each time I was afraid that I wouldn't be able to play in the next match. Fortunately, TOMASZ JAKSIK SPORTS REHABILITATION came to the rescue. I recommend!"
        },
        {
            img: `${img2}`,
            index: 5,
            h3Txt: "Jakub Sujkowski ESANOK.PL WILKI SANOK – EKSTRAKLASA UNIHOKEJA",
            pTxt: "I was haunted by multiple ankle injuries. Each time I was afraid that I wouldn't be able to play in the next match. Fortunately, TOMASZ JAKSIK SPORTS REHABILITATION came to the rescue. I recommend!"
        },
        {
            img: `${img2}`,
            index: 6,
            h3Txt: "Jakub Sujkowski ESANOK.PL WILKI SANOK – EKSTRAKLASA UNIHOKEJA",
            pTxt: "I was haunted by multiple ankle injuries. Each time I was afraid that I wouldn't be able to play in the next match. Fortunately, TOMASZ JAKSIK SPORTS REHABILITATION came to the rescue. I recommend!"
        },
        {
            img: `${img1}`,
            index: 7,
            h3Txt: "Jakub Sujkowski ESANOK.PL WILKI SANOK – EKSTRAKLASA UNIHOKEJA",
            pTxt: "I was haunted by multiple ankle injuries. Each time I was afraid that I wouldn't be able to play in the next match. Fortunately, TOMASZ JAKSIK SPORTS REHABILITATION came to the rescue. I recommend!"
        }
    ]


class SliderRecomendation extends Component {

    state = {
        properties: properties,
        property: properties[0]
    }

    componentDidMount() {
        this.nextSlide = setInterval(() => {
            const nextIndex = this.state.property.index + 1
            this.setState({
                property: properties[nextIndex]
            })
            if (this.state.property.index >= this.state.properties.length - 1) {
                this.setState({
                    property: properties[0]
                })
            }
        }, 5000)
    }
    componentWillUnmount() {
        clearInterval(this.nextSlide)
    }

    render() {
        const { properties, property } = this.state
        return (
            <>
                <div className="slider-recomendation">
                    <div className="card-slider-wrapper-recomendation" style={{
                        transform: `translateX(-${property.index * (100 / properties.length)}%)`
                    }}>
                        {properties.map(property => <Slider key={property.index} property={property} />)}
                    </div>
                </div>
            </>
        )
    }
}

export default SliderRecomendation
