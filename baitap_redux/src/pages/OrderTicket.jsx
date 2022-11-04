import React, {useState, useEffect} from 'react'
import "../style/BaiTapBookingTicket.css"
import { useSelector, useDispatch } from 'react-redux'
import {renderOrder} from '../redux/reducers/orderSeatReducer';

export default function OrderTicket() {
    const dispatch = useDispatch();
     //Lấy dữ liệu từ state trong store
    const seatNumber = useSelector(state => state.orderSeatReducer.seatNumber)
    const [totalMoney, setTotalMoney] = useState(0);
    const changeColor = (e) => {
        e.currentTarget.style.backgroundColor = 'rgb(109, 238, 109)';
        let tmpSeat = e.currentTarget.innerHTML
        const action = renderOrder(tmpSeat)
        dispatch(action)
    }

    
    useEffect(() => {
        debugger
       if(seatNumber.at(-1) !== '' && seatNumber.at(-1) !== undefined) {
            setTotalMoney(totalMoney + 750000)
       }
    }, [seatNumber]);
    
    console.log(seatNumber)
    return (
        <div className='bgTicket'>
            <div className="bookingMovie" style={{position: 'fixed', width: '100%', height: '100%', backgroundImage: 'url("./img/bookingTicket/bgmovie.jpg")', backgroundSize: '100%'}}>
                    <div style={{position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
                        <div className="container-fluid"><div className="row"><div className="col-8 text-center">
                            <div className="display-4 text-warning">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</div>
                            <div className="mt-3 text-light" style={{fontSize: 25}}>Màn hình</div>
                            <div className="mt-2" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                <div className="screen" />
                                <div>
                                    <div className="text-light text-left ml-5 mt-1" style={{fontSize: 30}}>
                                        <div className="ml-4"> 
                                            <button className="rowNumber">1</button>
                                            <button className="rowNumber">2</button>
                                            <button className="rowNumber">3</button>
                                            <button className="rowNumber">4</button><button className="rowNumber">5</button>
                                            <button className="rowNumber">6</button><button className="rowNumber">7</button>
                                            <button className="rowNumber">8</button><button className="rowNumber">9</button>
                                            <button className="rowNumber">10</button><button className="rowNumber">11</button>
                                            <button className="rowNumber">12</button>
                                        </div>
                                    </div>
                                </div>
                                    <div>
                                        <div className="text-light text-left ml-5 mt-1" style={{fontSize: 30}}>
                                            <div>A 
                                                <button className="ghe  " onClick={changeColor}>A1</button>
                                                <button className="ghe  " onClick={changeColor}>A2</button>
                                                <button className="ghe  " onClick={changeColor}>A3</button>
                                                <button className="ghe  " onClick={changeColor}>A4</button>
                                                <button className="ghe  " onClick={changeColor}>A5</button>
                                                <button className="ghe  " onClick={changeColor}>A6</button>
                                                <button className="ghe  " onClick={changeColor}>A7</button>
                                                <button className="ghe  " onClick={changeColor}>A8</button>
                                                <button className="ghe  " onClick={changeColor}>A9</button>
                                                <button className="ghe  " onClick={changeColor}>A10</button>
                                                <button disabled className="ghe gheDuocChon ">A11</button>
                                                <button disabled className="ghe gheDuocChon ">A12</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-light text-left ml-5 mt-1" style={{fontSize: 30}}>
                                            <div>B 
                                                        <button className="ghe  " onClick={changeColor}>B1</button>
                                                        <button className="ghe  " onClick={changeColor}>B2</button>
                                                        <button className="ghe  " onClick={changeColor}>B3</button>
                                                        <button className="ghe  " onClick={changeColor}>B4</button>
                                                        <button className="ghe  " onClick={changeColor}>B5</button>
                                                        <button className="ghe  " onClick={changeColor}>B6</button>
                                                        <button className="ghe  " onClick={changeColor}>B7</button>
                                                        <button className="ghe  " onClick={changeColor}>B8</button>
                                                        <button className="ghe  " onClick={changeColor}>B9</button>
                                                        <button className="ghe  " onClick={changeColor}>B10</button>
                                                        <button className="ghe  " onClick={changeColor}>B11</button>
                                                        <button className="ghe  " onClick={changeColor}>B12</button>
                                                </div>
                                            </div>
                                    </div>

                                    <div>
                                        <div className="text-light text-left ml-5 mt-1" style={{fontSize: 30}}>
                                            <div>D 
                                                <button className="ghe  " onClick={changeColor}>D1</button>
                                                <button className="ghe  " onClick={changeColor}>D2</button>
                                                <button className="ghe  " onClick={changeColor}>D3</button>
                                                <button className="ghe  " onClick={changeColor}>D4</button>
                                                <button className="ghe  " onClick={changeColor}>D5</button>
                                                <button className="ghe  " onClick={changeColor}>D6</button>
                                                <button className="ghe  " onClick={changeColor}>D7</button>
                                                <button className="ghe  " onClick={changeColor}>D8</button>
                                                <button className="ghe  " onClick={changeColor}>D9</button>
                                                <button className="ghe  " onClick={changeColor}>D10</button>
                                                <button className="ghe  " onClick={changeColor}>D11</button>
                                                <button className="ghe  " onClick={changeColor}>D12</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-4">
                                    <div className="text-light mt-2" style={{fontSize: 35}}>DANH SÁCH GHẾ BẠN CHỌN</div>
                                        <div>
                                            <div className="mt-5">
                                                <button className="gheDuocChon"> </button> 
                                                <span className="text-light" style={{fontSize: 30}}>ghế đã đặt</span><br />
                                                <button className="gheDangChon"> </button> 
                                                <span className="text-light" style={{fontSize: 30}}>ghế đang đặt</span><br />
                                                <button className="ghe" style={{marginLeft: 0}}> </button> <span className="text-light" style={{fontSize: 30}}>ghế chưa đặt</span></div>
                                                <div className="mt-5">
                                                    <table className="table" border={2}>
                                                        <thead>
                                                            <tr className="text-light" style={{fontSize: 25}}>
                                                                <th>Số ghế</th>
                                                                <th>Giá</th>
                                                                <th />
                                                            </tr>
                                                            {
                                                                seatNumber.map((value, index) => {
                                                                    return <tr  className="text-light" style={{fontSize: 20}} key={index}>
                                                                            <td>{value}</td>
                                                                            <td>75,000</td>
                                                                            <td/>
                                                                        </tr>
                                                                })
                                                            }
                                                            
                                                            </thead>
                                                            <tbody className="text-warning" />
                                                            <tfoot>
                                                                <tr className="text-warning">
                                                                    <td />
                                                                    <td>Tổng tiền</td>
                                                                    <td>{totalMoney}</td>
                                                                </tr>
                                                            </tfoot>
                                                    </table>
                                            </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
