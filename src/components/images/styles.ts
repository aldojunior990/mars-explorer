import styled from "styled-components";

interface ImageProps {
    imgUrl: string;
}

export const Container = styled.main`
margin-top: 2rem;
width: 90%;
display: flex;
align-items:  center;
justify-content: center;
flex-direction: column;
p{
    text-align: center;
    color: var(--white);
    font-weight: 400;
    font-size: 0.8rem;
}

ul{
    margin-top: 1rem;
    width: 100%;
    min-height: 15rem;
    list-style: none;
    display:  flex;
    align-items: center;
    overflow: auto;
    scrollbar-color: light;
    li{
        margin: 1rem;
    };
}
`

export const ImageContainer = styled.div<ImageProps>`
       background-image: url("${({ imgUrl }) => imgUrl}");
       background-repeat: no-repeat;
       border-radius: 0.5px  ;
       width: 18rem;
       height: 12rem;
       cursor: pointer;
       transition: 0.5s;
       display: flex;
       align-items: center;
       justify-content: center;
       nav{
        display  : none;
        background-color: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 100%;
       align-items: center;
       justify-content: center;
       }
    
       &:hover{
           border: 1px solid var(--blue);
           nav{
               display: flex ;
               strong{
               text-align: center;
               display: flex;
               color: var(--blue); 
           }
           }
       }

`