import React , {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ModalMenu.scss'
import { hideMenu, enableBuyout, disableBuyout, setBuyoutCost } from '../../redux/actions/modalMenuActions';

const getCSVString = (items)=>{
    let csvContent = "data:text/csv;charset=utf-8,";
    items.forEach(function(item) {
        let row = `${item.text}, ${item.cost}`
        csvContent += row + "\r\n";
    });
    return csvContent
}

const getCSVStringForBalls = (items)=>{
    let csvContent = "data:text/csv;charset=utf-8,";
    items.forEach(function(item) {
        
        for (let i=0; i<item.cost; i++){
            let row = `${item.text}`
            csvContent += row + "\r\n";
        }
        
    });
    return csvContent
}

const handleSwitchInput=(event,dispatch)=>{
    if (event.target.checked){
        dispatch(enableBuyout())
    }else{
        dispatch(disableBuyout())
    }
}

function ModalMenu() {
    const [listSlide,setListSlide]=useState(false)
    const itemsStore = useSelector(state=>state.itemsReducer)
    const modalStore = useSelector(state => state.modalMenuReducer)
    const dispatch = useDispatch()
    if (!modalStore.menuIsVisible&&listSlide){
        setListSlide(false)
    }

    return (
        <div className={`modal ${modalStore.menuIsVisible?'':'modal--disable'}`} onClick={()=>dispatch(hideMenu())}>
            <div className="modal_menu" onClick={(e)=>{e.stopPropagation()}}>
                <div className="modal_menu__item">
                    <button className='modal_menu__button' onClick={()=>{setListSlide(!listSlide)}}>Скачать список</button>
                    <div className={`modal_menu__subitem ${listSlide?'modal_menu__subitem--slide':''}`}>
                        <button className="modal_menu__button"><a className="button__link" download='list.csv' href={encodeURI(getCSVString(itemsStore))}>Обычный</a> </button>
                        <button className="modal_menu__button"><a className="button__link" download='list_balls.csv' href={encodeURI(getCSVStringForBalls(itemsStore))}>Для шаров</a></button>
                    </div>

                </div>
                <div className="modal_menu__item">
                    <label className="switch__title">Выкуп</label>
                    <label class="switch">
                        <input type="checkbox" checked={modalStore.buyoutEnabled} onChange={(e)=>{handleSwitchInput(e,dispatch)}} class="switch__checkbox" />
                        <div class="switch__slider"></div>
                    </label>
                    <div className={`modal_menu__subitem ${modalStore.buyoutEnabled?'modal_menu__subitem--slide':''}`}>
                        <input className="modal_menu__input" type="text" value={modalStore.buyoutCost} onChange={(e)=>{dispatch(setBuyoutCost(e.target.value))}}/>
                    </div>
                </div>
                {/* <div className="modal_menu__item">Размер столбца
                    <div class="slidecontainer">
                        <input type="range" min="1" max="100" />
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default ModalMenu;