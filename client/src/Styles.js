import styled from 'styled-components'

export const Global = styled.div `

    background-image: radial-gradient(ellipse  100% 100% , #013440, #013440 25%, transparent 25%),
    radial-gradient(ellipse  50% 50%, #fff3 25%, #002635 25%);
    background-size: 1em 1em, 2em 2em;
    height: 100vh;
    text-align: center;

        h1 {
            padding: 2rem;
            font-size: 3rem;
        }

        button {
            padding: 8px;
            }
`



export const InsertArea = styled.div `

    text-align: center;
    font-size: 20px;
    
        label{
            margin: 15px;
        }

        input{
            margin-right: 40px;
            height: 30px;
        }
`

export const Cards = styled.div `
    border: solid;
    border-radius: 20px;
    margin: 20px;
    width: min-content;
    background-color: #181A1B;
    color: #fffa;

        input {
            height: 30px;
            margin: auto;
        }
`

export const CardTop = styled.div `

    display: flex;
    margin: 10px;

        h2{
            margin-right: 20px;
        }
`
export const CardBottom = styled.div`


`