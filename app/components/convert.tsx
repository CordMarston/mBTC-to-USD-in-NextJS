"use client";
import { useState } from "react";

export default function ConvertPrice() {

    const [bitcoinPrice, setBitcoinPrice] = useState(0);
    const [mbtcPrice, setMbtcPrice] = useState(0);
    const [dollarValue, setDollarValue] = useState(0.00);

    const webSocketConnect = () => {
        var ws = new WebSocket("wss://api.bitfinex.com/ws");
        ws.onopen = function() {
            ws.send(JSON.stringify({
                "event": "subscribe",
                "channel": "ticker",
                "pair": "BTCUSD"
            }));
        };

        ws.onmessage = function(msg) {
            var response = JSON.parse(msg.data);
            if(response[1] !== 'hb') {
                if(response && response[7]) {
                    if(bitcoinPrice !== response[7]) {
                        setBitcoinPrice(response[7]);
                        setMbtcPrice(response[7]/1000);
                    }
                }
            }
        };
    }

    const calculateDollars = (e:any) => {
        let mBtc = parseFloat(e.target.value);
        setDollarValue((mBtc * mbtcPrice));
    }

    webSocketConnect();

    return (
        <div>
            <p className="text-white my-4 text-2xl">A mBTC is one thousandth of a Bitcoin...or ${mbtcPrice.toFixed(2)}</p>
            <div className="grid grid-cols-2 gap-4 bg-gray-200 border rounded border-gray-400 text-left p-4">
                <div className="">
                   <input type="text" className="p-4 w-full" placeholder="mBtc Amount" onChange={calculateDollars}/>
                </div>
                <div className="">
                   <input type="text" className="p-4 w-full" placeholder="$0.00" value={'$'+dollarValue.toFixed(2)} readOnly/>
                </div>
            </div>
            <div className="text-white mt-4">
                Data provided by <a href="https://bitfinex.com" target="_blank" className="text-blue-300">BitFinex</a>
            </div>
        </div>
    
    )
}