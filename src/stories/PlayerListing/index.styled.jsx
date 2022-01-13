import styled from 'styled-components';

export const PlayerListingHeader = styled.h3`
font-size:16px;
margin-bottom: 0;
@media(min-width: 768px) {
    font-size:24px;
   }
`;

export const UnorderedList = styled.ul`
list-style-type:none;
padding-inline-start: 0px;
margin-bottom:70px;

`;

export const ListItem = styled.li`
border-bottom:1px solid #cccccc;
padding:15px;
display: flex;
font-size:14px;
line-height:16px;
position:relative;
transition: all .2s linear;
@media(min-width: 768px) {
    font-size:18px;
    line-height:22px
   }
${props => props.bolded && `
font-weight:800;
background: rgb(239, 239, 239)!important;
`};
${({ rowNum }) => rowNum % 2 == 0 && `
background: #cccccc;
`}
&:nth-child(even){
    background:#cccccc;
}
&:hover{
    background:#F49030;
}
`;

export const Name = styled.div`
width:33%;
`;

export const Number = styled.div`
width:33%;
`;

export const Position = styled.div`
width:33%;
`;

export const EditIcon = styled.div`
position:absolute;
right:15px;
cursor:pointer;
.material-icons{
    font-size:16px;
    color:black;
    @media(min-width: 768px) {
        font-size:22px;
    }
}
`;