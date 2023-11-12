import {Element} from './ContactStyle'
const Contact = ({ item, delContact }) => {
    //console.log(item);
    return (
        <Element>{item.name} {item.number}
        <button onClick={()=>delContact(item.id)} type="submit">Delete</button>
        </Element>
    )
}
export default Contact