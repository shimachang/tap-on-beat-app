import React, { useState } from "react";

export const TapDataContext = React.createContext();
export const TapDataProvider = ({ children }) => {
    const initData = [
        {
            Manufacturer: "瑠璃",
            name: "Ruri",
            cost: 1.5,
            tastingPlace: 500,
            remaining: 10000,
            soldQuantity: 0,
            totalSales: 0,
            description:
                "コエドブルワリーの定番アイテムの中で、もっとも爽やかな味わいのビールが瑠璃-Ruri-だ。現在、世界中で最も飲まれているピルスナーというスタイル（大手メーカーのビールと同様な風味）でつくられています。色合いはゴールド、ノーブルホップのエレガントな香りと、苦みがこのビールのおおきな魅力です。誰もが美味しく感じるスムーズな味わいのビールです。",
        },
        {
            Manufacturer: "ヤッホーブルーイング",
            name: "よなよなエール",
            cost: 2,
            tastingPlace: 600,
            remaining: 20000,
            soldQuantity: 0,
            totalSales: 0,
            description:
                "クラフトビールの王道の味わいを追求した、アメリカンペールエール。アロマホップ「カスケード」の柑橘類を思わせるフレッシュな香りと、やさしいモルトの甘みが特徴です。ビールが喉をとおったあとも、香りが心地よくとどまりつづけるよう醸造しました。",
        },
    ];

    const [tapData, setTapData] = useState(initData);
    const value = {
        tapData,
        setTapData,
    };
    return <TapDataContext.Provider value={value}>{children}</TapDataContext.Provider>;
};
