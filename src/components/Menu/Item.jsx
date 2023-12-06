
const Item = ({children, title}) => {
    return ( 
        <div>
            <img src={children}/> <span>{title}</span>
        </div>
     );
}
 
export default Item;