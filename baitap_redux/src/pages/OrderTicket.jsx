import React from 'react'
import "../style/BaiTapBookingTicket.css"
import { useSelector, useDispatch } from 'react-redux'

export default function OrderTicket() {

    return (
        <div className='bgTicket'>
            <div className="bookingMovie" style={{position: 'fixed', width: '100%', height: '100%', backgroundImage: 'url("./img/bookingTicket/bgmovie.jpg")', backgroundSize: '100%'}}>
                    <div style={{position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
                        <div className="container-fluid"><div className="row"><div className="col-8 text-center">
                            <div className="display-4 text-warning">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</div>
                            <div className="mt-3 text-light" style={{fontSize: 25}}>Màn hình</div>
                            <div className="mt-2" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                <div className="screen" /><div><div className="text-light text-left ml-5 mt-1" style={{fontSize: 30}}>
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
                                                <button className="ghe  ">A1</button>
                                                <button className="ghe  ">A2</button>
                                                <button className="ghe  ">A3</button>
                                                <button className="ghe  ">A4</button>
                                                <button className="ghe  ">A5</button>
                                                <button className="ghe  ">A6</button>
                                                <button className="ghe  ">A7</button>
                                                <button className="ghe  ">A8</button>
                                                <button className="ghe  ">A9</button>
                                                <button className="ghe  ">A10</button>
                                                <button disabled className="ghe gheDuocChon ">A11</button>
                                                <button disabled className="ghe gheDuocChon ">A12</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-light text-left ml-5 mt-1" style={{fontSize: 30}}>
                                            <div>B 
                                                        <button className="ghe  ">B1</button>
                                                        <button className="ghe  ">B2</button>
                                                        <button className="ghe  ">B3</button>
                                                        <button className="ghe  ">B4</button>
                                                        <button className="ghe  ">B5</button>
                                                        <button className="ghe  ">B6</button>
                                                        <button className="ghe  ">B7</button>
                                                        <button className="ghe  ">B8</button>
                                                        <button className="ghe  ">B9</button>
                                                        <button className="ghe  ">B10</button>
                                                        <button className="ghe  ">B11</button><button className="ghe  ">B12</button></div></div></div><div><div className="text-light text-left ml-5 mt-1" style={{fontSize: 30}}><div>C <button className="ghe  ">C1</button><button className="ghe  ">C2</button><button className="ghe  ">C3</button><button className="ghe  ">C4</button><button className="ghe  ">C5</button><button className="ghe  ">C6</button><button className="ghe  ">C7</button><button className="ghe  ">C8</button><button className="ghe  ">C9</button><button className="ghe  ">C10</button><button className="ghe  ">C11</button><button className="ghe  ">C12</button></div></div></div><div><div className="text-light text-left ml-5 mt-1" style={{fontSize: 30}}><div>D <button className="ghe  ">D1</button><button className="ghe  ">D2</button><button className="ghe  ">D3</button><button className="ghe  ">D4</button><button className="ghe  ">D5</button><button className="ghe  ">D6</button><button className="ghe  ">D7</button><button className="ghe  ">D8</button><button className="ghe  ">D9</button><button className="ghe  ">D10</button><button className="ghe  ">D11</button><button className="ghe  ">D12</button></div></div></div><div><div className="text-light text-left ml-5 mt-1" style={{fontSize: 30}}><div>E <button className="ghe  ">E1</button><button className="ghe  ">E2</button><button className="ghe  ">E3</button><button className="ghe  ">E4</button><button className="ghe  ">E5</button><button className="ghe  ">E6</button><button className="ghe  ">E7</button><button className="ghe  ">E8</button><button className="ghe  ">E9</button><button className="ghe  ">E10</button><button className="ghe  ">E11</button><button className="ghe  ">E12</button></div></div></div><div><div className="text-light text-left ml-5 mt-1" style={{fontSize: 30}}><div>F <button className="ghe  ">F1</button><button className="ghe  ">F2</button><button className="ghe  ">F3</button><button className="ghe  ">F4</button><button className="ghe  ">F5</button><button className="ghe  ">F6</button><button className="ghe  ">F7</button><button className="ghe  ">F8</button><button className="ghe  ">F9</button><button className="ghe  ">F10</button><button className="ghe  ">F11</button><button className="ghe  ">F12</button></div></div></div><div><div className="text-light text-left ml-5 mt-1" style={{fontSize: 30}}><div>G <button className="ghe  ">G1</button><button className="ghe  ">G2</button><button className="ghe  ">G3</button><button className="ghe  ">G4</button><button className="ghe  ">G5</button><button className="ghe  ">G6</button><button className="ghe  ">G7</button><button className="ghe  ">G8</button><button className="ghe  ">G9</button><button className="ghe  ">G10</button><button className="ghe  ">G11</button><button className="ghe  ">G12</button></div></div></div><div><div className="text-light text-left ml-5 mt-1" style={{fontSize: 30}}><div>H <button className="ghe  ">H1</button><button className="ghe  ">H2</button><button className="ghe  ">H3</button><button className="ghe  ">H4</button><button className="ghe  ">H5</button><button className="ghe  ">H6</button><button className="ghe  ">H7</button><button className="ghe  ">H8</button><button className="ghe  ">H9</button><button className="ghe  ">H10</button><button className="ghe  ">H11</button><button className="ghe  ">H12</button></div></div></div><div><div className="text-light text-left ml-5 mt-1" style={{fontSize: 30}}><div>I <button className="ghe  ">I1</button><button className="ghe  ">I2</button><button className="ghe  ">I3</button><button className="ghe  ">I4</button><button className="ghe  ">I5</button><button className="ghe  ">I6</button><button className="ghe  ">I7</button><button className="ghe  ">I8</button><button className="ghe  ">I9</button><button className="ghe  ">I10</button><button className="ghe  ">I11</button><button className="ghe  ">I12</button></div></div></div><div><div className="text-light text-left ml-5 mt-1" style={{fontSize: 30}}><div>J <button className="ghe  ">J1</button><button className="ghe  ">J2</button><button className="ghe  ">J3</button><button className="ghe  ">J4</button><button className="ghe  ">J5</button><button className="ghe  ">J6</button><button className="ghe  ">J7</button><button className="ghe  ">J8</button><button className="ghe  ">J9</button><button className="ghe  ">J10</button><button className="ghe  ">J11</button><button className="ghe  ">J12</button></div></div></div></div></div><div className="col-4"><div className="text-light mt-2" style={{fontSize: 35}}>DANH SÁCH GHẾ BẠN CHỌN</div><div><div className="mt-5"><button className="gheDuocChon"> </button> <span className="text-light" style={{fontSize: 30}}>ghế đã đặt</span><br /><button className="gheDangChon"> </button> <span className="text-light" style={{fontSize: 30}}>ghế đang đặt</span><br /><button className="ghe" style={{marginLeft: 0}}> </button> <span className="text-light" style={{fontSize: 30}}>ghế chưa đặt</span></div><div className="mt-5"><table className="table" border={2}><thead><tr className="text-light" style={{fontSize: 25}}><th>Số ghế</th><th>Giá</th><th /></tr></thead><tbody className="text-warning" /><tfoot><tr className="text-warning"><td /><td>Tổng tiền</td><td>0</td></tr></tfoot></table></div></div></div></div></div></div>
                </div>
        </div>
    )
}
