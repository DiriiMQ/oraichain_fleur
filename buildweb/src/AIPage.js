import React, { useState } from 'react';

import './AIPage.css';

import DropFileInput from './components/drop-file-input/DropFileInput';
import TextComponent from './components/left_sider/Sider';
import Model from './containers/model/Model';
import SkinAnalysisResultsBox from './components/result/result';

function AIPage() {
    const [data, setData] = useState(null);

    const onFileChange = async (files) => {
        const url = 'https://skin-analysis.p.rapidapi.com/face/effect/skin_analyze';
        const data = new FormData();
        data.append('image', files[0]);
        data.append('max_face_num', '1');
        data.append('face_field', 'color,smooth,acnespotmole,wrinkle,eyesattr,blackheadpore,skinface,skinface,skinquality');
    
        const options = {
            method: 'POST',
            headers: {
                'X-RapidAPI-Key': '6f08292c36msh2c2656aa48a4fe0p1553e9jsnd3916f0ec4c7l',
                'X-RapidAPI-Host': 'skin-analysis.p.rapidapi.com'
            },
            body: data
        };
    
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            let temp3 = result.result.face_list[0];
            let res = {
                color: temp3.skin.color,
                smooth: temp3.skin.smooth,
                acnespotmole: [
                    temp3.acnespotmole.acne_num, 
                    temp3.acnespotmole.speckle_num,
                    temp3.acnespotmole.mole_num,
                ],
                wrinkle: temp3.wrinkle.wrinkle_num,
                eyesattr: [temp3.eyesattr.dark_circle_left[0].length, temp3.eyesattr.dark_circle_right[0].length].toString(),
                blackheadpore: temp3.wrinkle.wrinkle_num,
            }
            console.log(res
                );
            console.log(files[0]);
            setData(res);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="box">
            <h2 className="header">
                Quét ảnh chụp da mặt
            </h2>
            <DropFileInput
                onFileChange={(files) => onFileChange(files)}
            />

            <TextComponent/>
            <Model/>

            {data && <SkinAnalysisResultsBox results={data} />}
        </div>
    );
}

export default AIPage;
