import { NavLink } from 'react-router-dom';
import s from '../Message/Message.module.css';


const DialogItem = (props) => {
    let path = "dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}

let dialogsData = [
    { id: 1, name: 'Kseniya' },
    { id: 2, name: 'Sasha' },
    { id: 3, name: 'Gena' },
    { id: 4, name: 'Rada' },
    { id: 5, name: 'Ira' }
];

let messageData = [
    {id: 1, text: 'Hi!'},
    {id: 2, text: 'afsfa'},
    {id: 3, text: 'Hfasfasf'},
    {id: 4, text: 'asfasfasf'},
    {id: 5, text: 'fdhfgh'},
]


const Message = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>
            <div className={s.messages}>
                <MessageItem text= {messageData[0].text}/>
                <MessageItem text= {messageData[1].text}/>
                <MessageItem text= {messageData[2].text}/>
                <MessageItem text= {messageData[3].text}/>
                <MessageItem text= {messageData[4].text}/>
            </div>
        </div>
    )
}

export default Message;