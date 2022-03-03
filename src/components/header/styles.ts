import styled from "styled-components";


export const Container = styled.header`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

img{
    width: 15rem;
}

strong{
    font-size: 1rem;
    color: var(--white);
    font-weight: 600;
    margin-top: 1rem;
    text-align: center;
}

form{
    margin-top: 1rem;
    width: 80%;
    display: flex;
    align-items:  center;
    justify-content:  center;
    flex-direction: column;
    input{
        width: 50%;
        margin: 0.06rem;
        border: none;
        border-radius: 0.2rem;
        height: 2rem;

        @media(max-width: 1024px){
            width: 100%;
        }
    }

    input:first-child{
        padding: 1rem;
    }

    input:last-child{
        background: var(--blue);
        color: var(--white);
        font-weight: 600;
        cursor: pointer;
    }
    
}
`