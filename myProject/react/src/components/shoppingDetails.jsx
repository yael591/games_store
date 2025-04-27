import { useParams } from "react-router-dom"
import { getShoppingDetails } from "../axios/detailShoppingsaxios";
import { useEffect, useState } from "react";

export const ShoppingDetails=()=>{
    const p = useParams();
    const [myList, setMyList] = useState([]);
    const [list, setList] = useState([]);

    const doSomething = async () => {
        
        if (list.length === 0) {
            let y = (await getShoppingDetails()).data;
            setList(y);
        }
    };

    // בעת טעינת הקומפוננטה, נקרא ל-doSomething רק פעם אחת
    useEffect(() => {
        doSomething();
    }, []); // ריק, כלומר רק בעת טעינת הקומפוננטה

    // לאחר שה-`list` עודכן, נבצע את סינון הנתונים
    useEffect(() => {
        if (list.length > 0) {
            const filteredList = list.filter((x) => x.shoppingId == p.id);
            setMyList(filteredList);
        }
    }, [list, p.id]);




    return (
        <div className="overlay">
            {/* הצגת התוכן בתוך modal */}
            <div className="modal-content">
                <h1>פרטי קנייה</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>כמות משחק</th>
                            <th>מספר משחק</th>
                            <th>מספר קנייה</th>
                            <th>ברקוד משחק בקנייה זו</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myList.map((x, i) => (
                            <tr key={i}>
                                <td>{x.quantity}</td>
                                <td>{x.gameId}</td>
                                <td>{x.shoppingId}</td>
                                <td>{x.shoppingDetailId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={() => window.history.back()}>חזרה</button>
            </div>
        </div>
    );
}